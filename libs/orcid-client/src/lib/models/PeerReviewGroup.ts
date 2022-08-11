/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExternalIDs } from './ExternalIDs';
import type { LastModifiedDate } from './LastModifiedDate';
import type { PeerReviewDuplicateGroup } from './PeerReviewDuplicateGroup';

export type PeerReviewGroup = {
    'last-modified-date'?: LastModifiedDate;
    'external-ids'?: ExternalIDs;
    'peer-review-group'?: Array<PeerReviewDuplicateGroup>;
};

