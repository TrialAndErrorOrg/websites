/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LastModifiedDate } from './LastModifiedDate';
import type { PeerReviewGroup } from './PeerReviewGroup';

export type PeerReviews = {
    'last-modified-date'?: LastModifiedDate;
    group?: Array<PeerReviewGroup>;
    path?: string;
};

