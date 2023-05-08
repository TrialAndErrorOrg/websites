import {
  Tree,
  formatFiles,
  installPackagesTask,
  names,
  generateFiles,
  joinPathFragments,
  getProjects,
} from '@nx/devkit';
import { componentGenerator } from '@nx/react/src/generators/component/component';
import { Schema } from './schema';

import { componentStoryGenerator } from '@nx/react/src/generators/component-story/component-story';
import { getDirectory } from './getDirectory';
import { join } from 'path';
import { addExportsToBarrel } from './addExportsToBarrel';

interface NormalizedSchema extends Schema {
  projectSourceRoot: string;
  fileName: string;
  className: string;
  styledModule: null | string;
  hasStyles: boolean;
}

export default async function (tree: Tree, schema: Schema) {
  const { className, fileName } = names(schema.name);
  const componentFileName =
    schema.fileName ?? (schema.pascalCaseFiles ? className : fileName);
  // const project = getProjects(tree).get(schema.project);
  const sourceDir = await getDirectory(tree, schema);

  const path = `${join(sourceDir, componentFileName)}.tsx`;

  const project = getProjects(tree).get(schema.project);

  const componentDir = joinPathFragments(project?.sourceRoot || '', sourceDir);

  await componentGenerator(tree, { ...schema, export: false });

  await componentStoryGenerator(tree, {
    project: schema.project,
    componentPath: path,
  });

  generateFiles(tree, join(__dirname, 'files'), componentDir, {
    componentFileName,
  });

  const normalizedSchema = {
    project: schema.project,
    export: !!schema.export,
    projectSourceRoot: project?.sourceRoot || '',
    directory: sourceDir,
  };

  console.log(normalizedSchema);
  addExportsToBarrel(tree, normalizedSchema);

  await formatFiles(tree);

  return () => {
    installPackagesTask(tree);
  };
}
