import { codegen } from 'swagger-axios-codegen'
import swagger from './swagger.json'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

codegen({
  source: swagger,
  methodNameMode: (req) => req.operationId.replace('v3', ''),
  outputDir: __dirname,
  fileName: 'client.ts',
})
