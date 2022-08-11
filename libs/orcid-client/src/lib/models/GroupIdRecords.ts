/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { GroupIdRecord } from './GroupIdRecord';
import type { LastModifiedDate } from './LastModifiedDate';

export type GroupIdRecords = {
    'last-modified-date'?: LastModifiedDate;
    total: number;
    page: number;
    'page-size': number;
    'group-id-record'?: Array<GroupIdRecord>;
};

