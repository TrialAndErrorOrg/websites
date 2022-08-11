/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AffiliationSummary } from './AffiliationSummary';
import type { ExternalIDs } from './ExternalIDs';
import type { LastModifiedDate } from './LastModifiedDate';

export type AffiliationGroup = {
    'last-modified-date'?: LastModifiedDate;
    'external-ids'?: ExternalIDs;
    summaries?: Array<AffiliationSummary>;
};

