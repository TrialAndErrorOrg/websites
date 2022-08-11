/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AffiliationGroupDistinctionSummary } from './AffiliationGroupDistinctionSummary';
import type { LastModifiedDate } from './LastModifiedDate';

export type DistinctionsSummary = {
    'last-modified-date'?: LastModifiedDate;
    'affiliation-group'?: Array<AffiliationGroupDistinctionSummary>;
    path?: string;
};

