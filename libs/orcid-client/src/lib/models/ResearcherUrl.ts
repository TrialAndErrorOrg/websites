/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreatedDate } from './CreatedDate';
import type { LastModifiedDate } from './LastModifiedDate';
import type { Source } from './Source';
import type { Url } from './Url';

export type ResearcherUrl = {
    'created-date'?: CreatedDate;
    'last-modified-date'?: LastModifiedDate;
    source?: Source;
    'url-name'?: string;
    url?: Url;
    visibility?: 'limited' | 'registered-only' | 'public';
    path?: string;
    'put-code'?: number;
    'display-index'?: number;
};

