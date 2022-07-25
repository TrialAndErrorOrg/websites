import { readFile } from 'fs/promises'
import path from 'path'
export const readOrgFile = async (file, noteDir) => {
  const filepath = path.join(noteDir, file)
  try {
    const text = await readFile(filepath, { encoding: 'utf8' })
    return text
  } catch (e) {
    console.error(e)
    return ''
  }
}
