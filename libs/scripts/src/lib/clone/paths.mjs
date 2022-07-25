// @ts-check
import * as dotenv from 'dotenv'
import { join } from 'path'
dotenv.config()

const appdir = process.env.APP_BUILD_DIR ?? 'apps/thesis'
const gitdir = process.env.GIT_DIR ?? 'git'
const notedir = process.env.NEXT_PUBLIC_NOTE_DIR ?? 'public/notes'
const datadir = process.env.DATA_DIR ?? 'public/data'

const cwd = process.cwd()
console.log('Current dir = ' + cwd)
export const appDir = join(cwd, appdir)
console.log('Current appdir = ' + appDir)
export const noteDir = join(appDir, notedir)
console.log('Current noteDir= ' + noteDir)
export const gitDir = join(noteDir, gitdir)
console.log('Current gitDir= ' + gitDir)
export const dataDir = join(appDir, datadir)
console.log('Current dataDir= ' + dataDir)

export const repo = process.env.REPO_URL
