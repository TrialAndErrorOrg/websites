/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreatedDate } from './CreatedDate';
import type { ExternalIDs } from './ExternalIDs';
import type { FuzzyDate } from './FuzzyDate';
import type { LastModifiedDate } from './LastModifiedDate';
import type { Organization } from './Organization';
import type { Source } from './Source';
import type { Url } from './Url';

export type PeerReviewSummary = {
    'created-date'?: CreatedDate;
    'last-modified-date'?: LastModifiedDate;
    source?: Source;
    'reviewer-role'?: 'REVIEWER' | 'EDITOR' | 'MEMBER' | 'CHAIR' | 'ORGANIZER';
    'external-ids'?: ExternalIDs;
    'review-url'?: Url;
    'review-type'?: 'REVIEW' | 'EVALUATION';
    'completion-date'?: FuzzyDate;
    'review-group-id': string;
    'convening-organization'?: Organization;
    visibility?: 'LIMITED' | 'REGISTERED_ONLY' | 'PUBLIC' | 'PRIVATE';
    'put-code'?: number;
    path?: string;
    'display-index'?: string;
};

