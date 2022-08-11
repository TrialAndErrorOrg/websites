/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AffiliationGroupEmploymentSummary } from './AffiliationGroupEmploymentSummary';
import type { LastModifiedDate } from './LastModifiedDate';

export type EmploymentsSummary = {
    'last-modified-date'?: LastModifiedDate;
    'affiliation-group'?: Array<AffiliationGroupEmploymentSummary>;
    path?: string;
};

