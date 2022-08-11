/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Biography } from './Biography';
import type { LastModifiedDate } from './LastModifiedDate';
import type { Name } from './Name';
import type { OtherNames } from './OtherNames';

export type PersonalDetails = {
    'last-modified-date'?: LastModifiedDate;
    name?: Name;
    'other-names'?: OtherNames;
    biography?: Biography;
    path?: string;
};

