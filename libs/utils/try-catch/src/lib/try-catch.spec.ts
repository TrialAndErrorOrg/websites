import { readFile } from 'fs/promises'
import { catchPromise } from './try-catch'

describe('tryCatch', () => {
  it('should work when error is thrown', async () => {
    const [success, error] = await catchPromise(readFile('nonexistent.file'))
    expect(error).toBeDefined()
  })
  it('should work when actual thing is read', async () => {
    const [success, error] = await catchPromise(readFile('workspace.json'))
    expect(success).toBeTruthy()
  })
})
