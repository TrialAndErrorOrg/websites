/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AffiliationGroupServiceSummary } from './AffiliationGroupServiceSummary';
import type { LastModifiedDate } from './LastModifiedDate';

export type Services = {
    'last-modified-date'?: LastModifiedDate;
    'affiliation-group'?: Array<AffiliationGroupServiceSummary>;
    path?: string;
};

