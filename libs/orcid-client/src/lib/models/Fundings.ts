/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { FundingGroup } from './FundingGroup';
import type { LastModifiedDate } from './LastModifiedDate';

export type Fundings = {
    'last-modified-date'?: LastModifiedDate;
    group?: Array<FundingGroup>;
    path?: string;
};

