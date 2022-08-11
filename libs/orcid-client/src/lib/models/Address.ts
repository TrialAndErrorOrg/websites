/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Country } from './Country';
import type { CreatedDate } from './CreatedDate';
import type { LastModifiedDate } from './LastModifiedDate';
import type { Source } from './Source';

export type Address = {
    'created-date'?: CreatedDate;
    'last-modified-date'?: LastModifiedDate;
    source?: Source;
    country: Country;
    visibility?: 'limited' | 'registered-only' | 'public';
    path?: string;
    'put-code'?: number;
    'display-index'?: number;
};

