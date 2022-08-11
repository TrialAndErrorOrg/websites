/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DistinctionSummary } from './DistinctionSummary';
import type { ExternalIDs } from './ExternalIDs';
import type { LastModifiedDate } from './LastModifiedDate';

export type AffiliationGroupDistinctionSummary = {
    'last-modified-date'?: LastModifiedDate;
    'external-ids'?: ExternalIDs;
    summaries?: Array<DistinctionSummary>;
};

