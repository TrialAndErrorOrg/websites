import readdirp from 'readdirp'
import { NEXT_PUBLIC_NOTE_DIR } from '@zkp/paths'

// POSTS_PATH is useful when you want to get the path to a specific file
// export const POSTS_PATH = path.join(process.cwd(), 'notes')

// postFilePaths is the list of all mdx files inside the POSTS_PATH directory
export const postFilePaths = async () =>
  (await readdirp.promise(NEXT_PUBLIC_NOTE_DIR))
    // Only include md(x) files
    .filter((entry) => /\.mdx?$/.test(entry.path))
    .map((entry) => entry.path)

// export const postFilePaths = async () =>
//   (await readdirp.promise(POSTS_PATH))
//     // Only include md(x) files
//     .filter((path) => /\.mdx?$/.test(path.path))
//     .map((path) => path.path.split('/'))
