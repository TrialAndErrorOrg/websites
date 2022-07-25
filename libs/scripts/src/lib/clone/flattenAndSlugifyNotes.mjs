// @ts-check
import { readFile, writeFile, rename } from 'fs/promises'
import { extname, join } from 'path'
import readdirp from 'readdirp'
import { noteDir } from './paths.mjs'
import { slugify } from './slug.mjs'

export const flattenAndSlugifyNotes = async ({ notedir = noteDir }) => {
  const files = await readdirp.promise(notedir, {
    fileFilter: ['*.md', '*.mdx', '*.png', '*.jpg', '*.svg'],
  })

  console.dir(files, { depth: null })
  const renamedFiles = []

  for (const file of files) {
    const ending = file.basename.replace(/(\.md|\.org|\.mdx)/, '')
    const sluggedEnding = slugify(ending)
    const newpath = join(notedir, sluggedEnding)
    renamedFiles.push(rename(file.fullPath, newpath))
  }

  await Promise.all(renamedFiles)
  console.log('Done!')
}
