import { resolve } from 'path'
import readdirp from 'readdirp'
import { getDataFromFile } from './getDataFromFile.mjs'
import { readOrgFile } from './readOrgFile.mjs'
export const getFilesData = async (by, noteDir) => {
  const files = await readdirp.promise(noteDir, {
    type: 'files',
    fileFilter: ['*.md'],
  })
  const fileData = {}
  for (const entry of files) {
    const { path } = entry
    const file = await readOrgFile(path, noteDir)
    const data = await getDataFromFile(file)
    fileData[data.id] = { ...data, path }
  }
  Object.entries(fileData).forEach((entry) => {
    const [id, obj] = entry
    const links = [...(obj.forwardLinks ?? []), ...(obj.citations ?? [])]
    links.forEach((link) => {
      if (fileData[link]) {
        fileData[link].backLinks = [...(fileData[link].backLinks ?? []), id]
      }
    })
  })
  switch (by) {
    case 'title': {
      return Object.values(fileData).reduce((acc, curr) => {
        acc[curr.title] = curr
        return acc
      }, {})
    }
    case 'cite':
      return Object.values(fileData).reduce((acc, curr) => {
        if (!curr.citation) return acc
        acc[curr.citation] = curr
        return acc
      }, {})
    case 'id':
    default:
      return fileData
  }
}
