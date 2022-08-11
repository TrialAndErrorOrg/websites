import { writeFileSync } from 'fs'
import swagger from './swagger.json'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const { paths, definitions } = swagger

const clean = (entries: [string, any][]) =>
  Object.fromEntries(entries.filter(([key, value]) => !/(v2|rc(1|2))/i.test(key)))

const cleanPaths = clean(Object.entries(paths))
const cleanDefinitions = clean(Object.entries(definitions))

const cleanSwagger = JSON.stringify(
  { ...swagger, paths: cleanPaths, definitions: cleanDefinitions },
  null,
  2,
)
  .replace(/_rc\d/g, '')
  .replace(/V3_0|(?<=\w)v3/gi, '')
writeFileSync(join(__dirname, 'cleanSwagger.json'), cleanSwagger)
