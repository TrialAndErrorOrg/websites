/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreatedDate } from './CreatedDate';
import type { LastModifiedDate } from './LastModifiedDate';
import type { Source } from './Source';

export type Keyword = {
    'created-date'?: CreatedDate;
    'last-modified-date'?: LastModifiedDate;
    source?: Source;
    content?: string;
    visibility?: 'limited' | 'registered-only' | 'public';
    path?: string;
    'put-code'?: number;
    'display-index'?: number;
};

