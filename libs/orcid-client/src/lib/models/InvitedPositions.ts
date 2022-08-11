/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AffiliationGroupInvitedPositionSummary } from './AffiliationGroupInvitedPositionSummary';
import type { LastModifiedDate } from './LastModifiedDate';

export type InvitedPositions = {
    'last-modified-date'?: LastModifiedDate;
    'affiliation-group'?: Array<AffiliationGroupInvitedPositionSummary>;
    path?: string;
};

