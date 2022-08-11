/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LastModifiedDate } from './LastModifiedDate';
import type { ResearchResourceGroup } from './ResearchResourceGroup';

export type ResearchResources = {
    'last-modified-date'?: LastModifiedDate;
    group?: Array<ResearchResourceGroup>;
    path?: string;
};

