import {
  Tree,
  getProjects,
  joinPathFragments,
  applyChangesToString,
} from '@nx/devkit';
import { addImport } from '@nx/react/src/utils/ast-utils';

import ts from 'typescript';

export function addExportsToBarrel(
  host: Tree,
  options: {
    project: string;
    export: boolean;
    projectSourceRoot: string;
    directory: string;
  }
) {
  const workspace = getProjects(host);
  const isApp = workspace.get(options.project)?.projectType === 'application';

  if (options.export && !isApp) {
    const indexFilePath = joinPathFragments(
      options.projectSourceRoot,
      'index.ts'
    );
    const indexSource = host.read(indexFilePath, 'utf-8');

    if (indexSource !== null) {
      const indexSourceFile = ts.createSourceFile(
        indexFilePath,
        indexSource,
        ts.ScriptTarget.Latest,
        true
      );

      const changes = applyChangesToString(
        indexSource,
        addImport(indexSourceFile, `export * from './${options.directory}';`)
      );

      host.write(indexFilePath, changes);
    }
  }
}
