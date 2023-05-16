import { getProjects, names, joinPathFragments, Tree } from '@nx/devkit';
import { Schema } from '@nx/react/src/generators/component/schema';

/**
 * Return the directory of a component
 */
export async function getDirectory(host: Tree, options: Schema) {
  const genNames = names(options.name);

  const fileName =
    options.pascalCaseDirectory === true
      ? genNames.className
      : genNames.fileName;

  const workspace = getProjects(host);
  let baseDir: string;

  if (options.directory) {
    baseDir = options.directory;
  } else {
    baseDir =
      workspace.get(options.project)?.projectType === 'application'
        ? 'app'
        : 'lib';
  }

  return options.flat ? baseDir : joinPathFragments(baseDir, fileName);
}
