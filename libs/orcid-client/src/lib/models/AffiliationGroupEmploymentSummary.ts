/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EmploymentSummary } from './EmploymentSummary';
import type { ExternalIDs } from './ExternalIDs';
import type { LastModifiedDate } from './LastModifiedDate';

export type AffiliationGroupEmploymentSummary = {
    'last-modified-date'?: LastModifiedDate;
    'external-ids'?: ExternalIDs;
    summaries?: Array<EmploymentSummary>;
};

