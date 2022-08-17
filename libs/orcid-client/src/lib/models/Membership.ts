/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreatedDate } from './CreatedDate';
import type { ExternalIDs } from './ExternalIDs';
import type { FuzzyDate } from './FuzzyDate';
import type { LastModifiedDate } from './LastModifiedDate';
import type { Organization } from './Organization';
import type { Source } from './Source';
import type { Url } from './Url';

export type Membership = {
    'created-date'?: CreatedDate;
    'last-modified-date'?: LastModifiedDate;
    source?: Source;
    'put-code'?: number;
    path?: string;
    'department-name'?: string;
    'role-title'?: string;
    'start-date': FuzzyDate;
    'end-date'?: FuzzyDate;
    organization: Organization;
    url?: Url;
    'external-ids'?: ExternalIDs;
    'display-index'?: string;
    visibility?: 'limited' | 'registered-only' | 'public';
};
