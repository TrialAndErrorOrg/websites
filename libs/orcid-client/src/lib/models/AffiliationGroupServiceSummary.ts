/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExternalIDs } from './ExternalIDs';
import type { LastModifiedDate } from './LastModifiedDate';
import type { ServiceSummary } from './ServiceSummary';

export type AffiliationGroupServiceSummary = {
    'last-modified-date'?: LastModifiedDate;
    'external-ids'?: ExternalIDs;
    summaries?: Array<ServiceSummary>;
};

