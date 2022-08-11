/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AffiliationGroupMembershipSummary } from './AffiliationGroupMembershipSummary';
import type { LastModifiedDate } from './LastModifiedDate';

export type Memberships = {
    'last-modified-date'?: LastModifiedDate;
    'affiliation-group'?: Array<AffiliationGroupMembershipSummary>;
    path?: string;
};

