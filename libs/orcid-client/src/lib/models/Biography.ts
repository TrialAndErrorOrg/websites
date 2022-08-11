/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreatedDate } from './CreatedDate';
import type { LastModifiedDate } from './LastModifiedDate';

export type Biography = {
    'created-date'?: CreatedDate;
    'last-modified-date'?: LastModifiedDate;
    content?: string;
    visibility?: 'LIMITED' | 'REGISTERED_ONLY' | 'PUBLIC' | 'PRIVATE';
    path?: string;
};

