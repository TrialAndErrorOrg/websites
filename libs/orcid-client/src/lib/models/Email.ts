/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreatedDate } from './CreatedDate';
import type { LastModifiedDate } from './LastModifiedDate';
import type { Source } from './Source';

export type Email = {
    'created-date'?: CreatedDate;
    'last-modified-date'?: LastModifiedDate;
    source?: Source;
    email?: string;
    path?: string;
    visibility?: 'LIMITED' | 'REGISTERED_ONLY' | 'PUBLIC' | 'PRIVATE';
    verified?: boolean;
    primary?: boolean;
    'put-code'?: number;
};

