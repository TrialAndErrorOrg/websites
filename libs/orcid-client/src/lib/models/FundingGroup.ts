/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExternalIDs } from './ExternalIDs';
import type { FundingSummary } from './FundingSummary';
import type { LastModifiedDate } from './LastModifiedDate';

export type FundingGroup = {
    'last-modified-date'?: LastModifiedDate;
    'external-ids'?: ExternalIDs;
    'funding-summary'?: Array<FundingSummary>;
};

