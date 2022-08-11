/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Email } from './Email';
import type { LastModifiedDate } from './LastModifiedDate';

export type Emails = {
    'last-modified-date'?: LastModifiedDate;
    email?: Array<Email>;
    path?: string;
};

