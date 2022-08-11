/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExternalIDs } from './ExternalIDs';
import type { LastModifiedDate } from './LastModifiedDate';
import type { WorkSummary } from './WorkSummary';

export type WorkGroup = {
    'last-modified-date'?: LastModifiedDate;
    'external-ids'?: ExternalIDs;
    'work-summary'?: Array<WorkSummary>;
};

