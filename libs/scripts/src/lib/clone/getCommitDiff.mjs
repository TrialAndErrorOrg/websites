/* eslint-disable consistent-return */
import { TREE, walk } from 'isomorphic-git'
import fs from 'fs'
import * as Diff from 'diff'
import { extname } from 'path'
const bufferToString = async (tree) => {
  const content = (await tree?.content()) || []
  return content.length ? Buffer.from(content).toString('utf8') : ''
}
const diffMap = async (props) => {
  const { filepath, trees, type, justStats } = props
  const [tree1, tree2] = trees
  if (type === 'equal') {
    return
  }
  // ignore dirs
  if (filepath === '.') {
    return
  }
  // just show .org diffs
  // TODO make this an env var
  if (!['.org', '.md', '.mdx'].includes(extname(filepath))) {
    return
  }
  if ((await tree1?.type()) === 'tree' || (await tree2?.type()) === 'tree') {
    return
  }
  // ignore unmodified files
  if ((await tree1?.oid()) === (await tree2?.oid())) return
  if (!tree1 || !tree2) {
    // TODO count the words
    const added = tree2 ? true : undefined
    const impTree = tree2 || tree1
    const string = await bufferToString(impTree)
    const count = string.split(' ').length
    return {
      filepath,
      oid: (await tree1?.oid()) || (await tree2?.oid()) || '',
      diff: justStats
        ? []
        : [
            {
              count,
              value: string,
              added,
              removed: !added,
            },
          ],
      additions: added ? count : 0,
      deletions: !added ? count : 0,
    }
  }
  // We don't want to do all the expensive diffing
  // if the files are just added or removed.
  const treeStrings = []
  // eslint-disable-next-line no-restricted-syntax
  for (const tree of trees) {
    // eslint-disable-next-line no-await-in-loop
    const string = await bufferToString(tree)
    treeStrings.push(string)
  }
  const [t1String, t2String] = treeStrings
  //  console.log(t1String)
  const diff = Diff.diffWordsWithSpace(t1String, t2String)
  // get total additions for filecommit
  const { additions, deletions } = diff.reduce(
    (acc, curr) => {
      if (curr.added) {
        acc.additions += curr.value.split(' ').length
      }
      if (curr.removed) {
        acc.deletions += curr.value.split(' ').length
      }
      return acc
    },
    { additions: 0, deletions: 0 },
  )
  // and get rid of undefined props as Next doesnit like it
  // TODO maybe optimize this to one loop, but prolly not a big deal
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const cleanDiff = diff.map((curr) => {
    if (curr.removed === undefined) {
      return { ...curr, removed: false }
    }
    if (curr.added === undefined) {
      return { ...curr, added: false }
    }
    return curr
  })
  return {
    filepath,
    oid: (await tree1?.oid()) || (await tree2?.oid()) || '',
    diff: justStats ? [] : diff,
    additions,
    deletions,
  }
}
export const getCommitDiff = async (
  commitHash1,
  commitHash2,
  dir = 'notes',
  gitdir = `${dir}/git`,
  justStats,
) =>
  walk({
    fs,
    dir,
    gitdir,
    trees: [TREE({ ref: commitHash1 }), TREE({ ref: commitHash2 })],
    map: (filename, trees) => diffMap({ filepath: filename, trees, justStats }),
  })
export const getCommitDiffForSingleFile = async (
  commitHash1,
  commitHash2,
  dir = 'notes',
  gitdir = `${dir}/git`,
  file,
  justStats,
) =>
  walk({
    fs,
    dir,
    gitdir,
    trees: [TREE({ ref: commitHash1 }), TREE({ ref: commitHash2 })],
    map: (filename, trees) => {
      if (file && filename !== file)
        return new Promise((resolve) => {
          resolve(undefined)
        })
      return diffMap({ filepath: filename, trees, justStats })
    },
  })
// export async function getModifiedCommitDiff(
//   commitHash1: string,
//   commitHash2: string,
//   dir: string = 'notes',
//   gitdir: string = `${dir}/git`,
// ): Promise<FileDiff> {
//   return await doSomethingAtFileStateChange(commitHash1, commitHash2, dir, gitdir, diffMap)
// }
