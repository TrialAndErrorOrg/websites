import { Stats } from 'fs'
import { readFile, writeFile } from 'fs/promises'
import { join } from 'path'
import readdirp from 'readdirp'
import { DATA_DIR, NEXT_PUBLIC_NOTE_DIR } from '@zkp/paths'
import { slugify } from '@zkp/slugify'

// TODO: Make the dataBy... files inherit from the same function
export const mdxDataByName = async () => {
  const datapath = join(DATA_DIR, 'dataByName.json')
  try {
    const data = JSON.parse(await readFile(datapath, 'utf8'))
    return data
  } catch (e) {
    const data = (await readdirp.promise(NEXT_PUBLIC_NOTE_DIR, { alwaysStat: true }))
      // Only include md(x) files
      .filter((entry) => /\.mdx?$/.test(entry.path))
      .reduce(
        (acc, curr) => {
          const name = curr.basename.replace(/\.mdx?$/, '').toLowerCase()
          acc[name] = {
            stats: curr.stats!,
            fullPath: curr.fullPath,
            path: curr.path,
            name,
            slug: slugify(name),
            folders: curr.basename.split('/') ?? [],
            basename: curr.basename,
          }
          return acc
        },
        {} as {
          [name: string]: {
            basename: string
            stats: Stats
            fullPath: string
            name: string
            folders: string[]
            path: string
            slug: string
          }
        },
      )

    await writeFile(datapath, JSON.stringify(data))
    return data
  }
}
