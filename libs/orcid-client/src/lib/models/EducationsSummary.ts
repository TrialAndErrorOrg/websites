/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AffiliationGroupEducationSummary } from './AffiliationGroupEducationSummary';
import type { LastModifiedDate } from './LastModifiedDate';

export type EducationsSummary = {
    'last-modified-date'?: LastModifiedDate;
    'affiliation-group'?: Array<AffiliationGroupEducationSummary>;
    path?: string;
};

