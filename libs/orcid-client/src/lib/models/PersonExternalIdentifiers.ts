/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { LastModifiedDate } from './LastModifiedDate';
import type { PersonExternalIdentifier } from './PersonExternalIdentifier';

export type PersonExternalIdentifiers = {
    'last-modified-date'?: LastModifiedDate;
    'external-identifier'?: Array<PersonExternalIdentifier>;
    path?: string;
};

