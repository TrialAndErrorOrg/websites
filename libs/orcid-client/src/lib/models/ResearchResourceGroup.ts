/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExternalIDs } from './ExternalIDs';
import type { LastModifiedDate } from './LastModifiedDate';
import type { ResearchResourceSummary } from './ResearchResourceSummary';

export type ResearchResourceGroup = {
    'last-modified-date'?: LastModifiedDate;
    'external-ids'?: ExternalIDs;
    'research-resource-summary'?: Array<ResearchResourceSummary>;
};

