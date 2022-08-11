/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AffiliationGroupQualificationSummary } from './AffiliationGroupQualificationSummary';
import type { LastModifiedDate } from './LastModifiedDate';

export type Qualifications = {
    'last-modified-date'?: LastModifiedDate;
    'affiliation-group'?: Array<AffiliationGroupQualificationSummary>;
    path?: string;
};

