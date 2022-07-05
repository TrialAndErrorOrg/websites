import { log } from 'isomorphic-git'
import fs from 'fs'
import { join, resolve } from 'path'
import { getCommitDiff } from './getCommitDiff.mjs'

export const consolidateCommitsPerDay = (data) =>
  data.reduce((acc, curr) => {
    const commitDate = new Date(curr.date * 1000).toISOString().slice(0, 10)
    return {
      ...acc,
      [commitDate]: {
        totalAdditions: (acc?.[commitDate]?.additions || 0) + curr.additions,
        totalDeletions: (acc?.[commitDate]?.deletions || 0) + curr.deletions,
        totalDate: curr.date,
        lastMessage: curr.message,
        lastOid: curr.oid,
        commits: [...(acc?.[commitDate]?.commits || []), curr],
      },
    }
  }, {})

export const tryReadJSON = async (path, fallback) => {
  const cwdPath = resolve(process.cwd(), path)
  try {
    return JSON.parse(await fs.promises.readFile(cwdPath, { encoding: 'utf8' }))
  } catch (e) {
    console.log(e)
    console.log('Using new obj')
    return fallback || []
  }
}
export const getCommits = async (dir = 'notes', gitdir = 'notes/git') => {
  const commitList = (await log({ fs, dir, gitdir })).reverse()
  return commitList
}
export const getListOfCommitsWithStats = async (
  commit1,
  commit2,
  dir = 'notes',
  gitdir = 'notes/git',
  datadir = 'data',
) => {
  const cwd = process.cwd()
  if (!fs.existsSync(datadir)) await fs.promises.mkdir(datadir)
  const gitJS = join(datadir, 'git.json')
  const gitSlimJS = join(datadir, 'gitSlim.json')
  const gitPerDateJS = join(datadir, 'gitPerDate.json')
  const gitObj = await tryReadJSON(gitJS)
  const gitSlimObj = await tryReadJSON(gitSlimJS)
  const lastWrittenCommit = gitObj?.[gitObj.length - 1]?.oid || ''
  const commitList = await getCommits(dir, gitdir)
  const commitIndexList = commitList.map((commit) => commit.oid)
  const commitIndex = commitIndexList.indexOf(lastWrittenCommit) + 1
  if (gitObj.length && commitIndex === gitObj.length) {
    const gitPerDateTest = await tryReadJSON(gitPerDateJS)
    const gitPerDateObj = gitPerDateTest.length
      ? gitPerDateTest
      : consolidateCommitsPerDay(gitSlimObj)
    console.log('No new changes since last build.')
    return {
      data: gitObj,
      dataWithoutDiffs: gitSlimObj,
      dataPerDate: gitPerDateObj,
    }
  }
  const data = gitObj
  const dataWithoutDiffs = gitSlimObj
  // eslint-disable-next-line no-plusplus
  for (let i = commitIndex + 1; i < commitList.length - 1; i++) {
    const curCommit = commitList[i]
    const nextCommit = commitList[i + 1]
    // eslint-disable-next-line no-await-in-loop
    const files = await getCommitDiff(curCommit.oid, nextCommit.oid, dir, gitdir)
    const { additions, deletions } = files.reduce(
      (acc, curr) => {
        if (!curr) return acc
        acc.additions += curr?.additions ?? 0
        acc.deletions += curr?.deletions ?? 0
        return acc
      },
      { additions: 0, deletions: 0 },
    )
    const fullData = {
      oid: nextCommit.oid,
      message: nextCommit.commit.message,
      date: nextCommit.commit.author.timestamp,
      files,
      additions,
      deletions,
    }
    const slimData = {
      oid: fullData.oid,
      message: fullData.message,
      date: fullData.date,
      additions,
      deletions,
      files: files.map((f) => f.filepath),
    }
    data.push(fullData)
    dataWithoutDiffs.push(slimData)
  }
  const gitPerDate = consolidateCommitsPerDay(dataWithoutDiffs)
  await fs.promises.writeFile(gitJS, JSON.stringify(data))
  await fs.promises.writeFile(gitSlimJS, JSON.stringify(dataWithoutDiffs))
  await fs.promises.writeFile(gitPerDateJS, JSON.stringify(gitPerDate))
  return { data, dataWithoutDiffs, dataPerDate: gitPerDate }
}
