/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LastModifiedDate } from './LastModifiedDate';
import type { WorkGroup } from './WorkGroup';

export type WorksSummary = {
    'last-modified-date'?: LastModifiedDate;
    group?: Array<WorkGroup>;
    path?: string;
};

