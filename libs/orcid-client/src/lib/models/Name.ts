/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreatedDate } from './CreatedDate';
import type { CreditName } from './CreditName';
import type { FamilyName } from './FamilyName';
import type { GivenNames } from './GivenNames';
import type { LastModifiedDate } from './LastModifiedDate';
import type { Source } from './Source';

export type Name = {
    'created-date'?: CreatedDate;
    'last-modified-date'?: LastModifiedDate;
    'given-names'?: GivenNames;
    'family-name'?: FamilyName;
    'credit-name'?: CreditName;
    source?: Source;
    visibility?: 'LIMITED' | 'REGISTERED_ONLY' | 'PUBLIC' | 'PRIVATE';
    path?: string;
};

