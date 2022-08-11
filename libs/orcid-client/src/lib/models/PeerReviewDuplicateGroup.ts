/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExternalIDs } from './ExternalIDs';
import type { LastModifiedDate } from './LastModifiedDate';
import type { PeerReviewSummary } from './PeerReviewSummary';

export type PeerReviewDuplicateGroup = {
    'last-modified-date'?: LastModifiedDate;
    'external-ids'?: ExternalIDs;
    'peer-review-summary'?: Array<PeerReviewSummary>;
};

