/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreatedDate } from './CreatedDate';
import type { LastModifiedDate } from './LastModifiedDate';
import type { ResearchResourceItem } from './ResearchResourceItem';
import type { ResearchResourceProposal } from './ResearchResourceProposal';
import type { Source } from './Source';

export type ResearchResource = {
    'created-date'?: CreatedDate;
    'last-modified-date'?: LastModifiedDate;
    source?: Source;
    proposal?: ResearchResourceProposal;
    'resource-item'?: Array<ResearchResourceItem>;
    'display-index'?: string;
    visibility?: 'limited' | 'registered-only' | 'public';
    'put-code'?: number;
    path?: string;
};

