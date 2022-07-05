import type { ExecutorContext } from '@nrwl/devkit'

import nextBuildExecutor from '@nrwl/next/src/executors/build/build.impl'
import { FileReplacement } from '@zkp/types'
import { exec } from 'child_process'

import { promisify } from 'util'
import { setup } from '../../../apps/thesis/scripts/setup'

export interface NextGitExecutorOptions {
  remote: string
  git?: boolean
  gitDir?: string
  dir?: string
  root: string
  outputPath: string
  fileReplacements: FileReplacement[]
  assets?: any[]
  nextConfig?: string
  buildLibsFromSource?: boolean
}

export default async function nextGitExecutor(
  options: NextGitExecutorOptions,

  context: ExecutorContext,
): Promise<{ success: boolean }> {
  const { git, gitDir, dir, ...nextOpts } = options

  if (options.git) {
    await setup({ remote: options.remote })
  }
  await nextBuildExecutor(nextOpts, context)

  console.log('done!')

  return { success: true }
}
