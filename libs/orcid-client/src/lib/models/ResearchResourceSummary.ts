/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreatedDate } from './CreatedDate';
import type { LastModifiedDate } from './LastModifiedDate';
import type { ResearchResourceProposal } from './ResearchResourceProposal';
import type { Source } from './Source';

export type ResearchResourceSummary = {
    'created-date'?: CreatedDate;
    'last-modified-date'?: LastModifiedDate;
    source?: Source;
    proposal?: ResearchResourceProposal;
    visibility?: 'LIMITED' | 'REGISTERED_ONLY' | 'PUBLIC' | 'PRIVATE';
    'put-code'?: number;
    path?: string;
    'display-index'?: string;
};

