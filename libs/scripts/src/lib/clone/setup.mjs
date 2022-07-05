// @ts-check
import { clone } from 'isomorphic-git'
import fs from 'fs'
import { rm, rmdir, unlink } from 'fs/promises'
import { join } from 'path'
import * as http from 'isomorphic-git/http/node/index.js'
import { mdxDataBySlug } from './mdxDataBySlug.mjs'
import { getListOfCommitsWithStats } from './getListOfCommitsWithStats.mjs'
import * as dotenv from 'dotenv'
import { repo, appDir, gitDir, noteDir, dataDir } from './paths.mjs'
import { flattenAndSlugifyNotes } from './flattenAndSlugifyNotes.mjs'

dotenv.config()

const args = process.argv
const setup = async ({
  remote = repo,
  //  appdir = appDir,
  gitdir = gitDir,
  notedir = noteDir,
  datadir = dataDir,
}) => {
  if (!remote) {
    console.error('Please first specify a remote for your notes in the options!')
    return
  }

  try {
    await rm(noteDir, { recursive: true, force: true })
  } catch (e) {
    console.log(e)
    console.log('No need to remove old notes')
  }
  try {
    await rm(dataDir, { recursive: true, force: true })
  } catch (e) {
    console.log('No need to remove old data')
  }
  // const firstCommit = '8a8d96b1a6ae75dd17f7462c31695823189f6f14'
  // const lastCommit = '635c1974031c9ba51e275c308ac38617bd8b5b46'
  await clone({
    fs,
    http,
    url: 'https://github.com/thomasfkjorna/thesis-writing',
    dir: notedir,
    gitdir: gitdir,
    remote: 'notes',
  })

  await getListOfCommitsWithStats('', '', notedir, gitdir, datadir)
  await mdxDataBySlug(datadir, notedir)
  await flattenAndSlugifyNotes({ notedir })
  // const dataById = await getFilesData('id', noteDir)
  // const dataByTitle = await getFilesData('title', noteDir)
  // const dataByCite = await getFilesData('cite', noteDir)
  // await fs.promises.writeFile(join(dataDir, 'dataById.json'), JSON.stringify(dataById))
  // await fs.promises.writeFile(join(dataDir, 'dataByTitle.json'), JSON.stringify(dataByTitle))
  // await fs.promises.writeFile(join(dataDir, 'dataByCite.json'), JSON.stringify(dataByCite))
}
//setup(readArgs)
console.log(process.env.DATA_DIR)
setup({
  remote: args?.[2],
  // appdir: args?.[3],
  gitdir: args?.[4],
  notedir: args?.[5],
  datadir: args?.[6],
})
