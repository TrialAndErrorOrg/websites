/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreatedDate } from './CreatedDate';
import type { LastModifiedDate } from './LastModifiedDate';
import type { Source } from './Source';
import type { Url } from './Url';

export type PersonExternalIdentifier = {
    'created-date'?: CreatedDate;
    'last-modified-date'?: LastModifiedDate;
    source?: Source;
    'external-id-type': string;
    'external-id-value': string;
    'external-id-url'?: Url;
    'external-id-relationship'?: 'part-of' | 'self' | 'version-of';
    visibility?: 'limited' | 'registered-only' | 'public';
    path?: string;
    'put-code'?: number;
    'display-index'?: number;
};

