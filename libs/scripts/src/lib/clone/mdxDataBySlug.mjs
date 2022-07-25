// @ts-check
import { readFile, writeFile } from 'fs/promises'
import { join } from 'path'
import readdirp from 'readdirp'
import { slugify } from './slug.mjs'

export const getFreshDataBySlug = async (noteDir) => {
  const rawDir = await readdirp.promise(noteDir, { alwaysStat: true })
  // Only include md(x) files
  return rawDir
    .filter((entry) => /\.mdx?$/.test(entry.path))
    .reduce((acc, curr) => {
      const name = curr.basename.replace(/\.mdx?$/, '')
      const slug = slugify(name)
      const { atime, mtime, ctime, birthtime, ...stats } = { ...curr.stats }
      acc[slug] = {
        stats,
        fullPath: curr.fullPath,
        path: curr.path,
        name,
        slug,
        folders:
          curr.path
            .replace(curr.basename, '')
            .split('/')
            .filter((entry) => entry) ?? [],
        basename: curr.basename,
      }
      return acc
    }, {})
}

// TODO: Make the dataBy... files inherit from the same function
export const mdxDataBySlug = async (dataDir, noteDir) => {
  // if (process.env.ALWAYS_FRESH !== 'true' && process.env.NODE_ENV !== 'production') {
  //   const data = await getFreshDataBySlug(noteDir)
  //   return data
  // }
  const datapath = join(dataDir, 'dataBySlug.json')
  try {
    const data = JSON.parse(await readFile(datapath, 'utf8'))
    return data
  } catch (e) {
    console.log('No data found, writing new')
    const data = await getFreshDataBySlug(noteDir)
    await writeFile(datapath, JSON.stringify(data))
    return data
  }
}
