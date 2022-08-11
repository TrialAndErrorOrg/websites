/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Keyword } from './Keyword';
import type { LastModifiedDate } from './LastModifiedDate';

export type Keywords = {
    'last-modified-date'?: LastModifiedDate;
    keyword?: Array<Keyword>;
    path?: string;
};

