/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExternalIDs } from './ExternalIDs';
import type { InvitedPositionSummary } from './InvitedPositionSummary';
import type { LastModifiedDate } from './LastModifiedDate';

export type AffiliationGroupInvitedPositionSummary = {
    'last-modified-date'?: LastModifiedDate;
    'external-ids'?: ExternalIDs;
    summaries?: Array<InvitedPositionSummary>;
};

