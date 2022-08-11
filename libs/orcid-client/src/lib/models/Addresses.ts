/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Address } from './Address';
import type { LastModifiedDate } from './LastModifiedDate';

export type Addresses = {
    'last-modified-date'?: LastModifiedDate;
    address?: Array<Address>;
    path?: string;
};

