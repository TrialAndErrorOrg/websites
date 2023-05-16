import nextBuildExecutor from '@nx/next/src/executors/build/build.impl';
import { setup } from '../../../apps/thesis/scripts/setup';
export default async function nextGitExecutor(options, context) {
  const { git, gitDir, dir, ...nextOpts } = options;
  if (options.git) {
    await setup({ remote: options.remote });
  }
  await nextBuildExecutor(nextOpts, context);
  console.log('done!');
  return { success: true };
}
