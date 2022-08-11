/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreatedDate } from './CreatedDate';
import type { ExternalIDs } from './ExternalIDs';
import type { FundingTitle } from './FundingTitle';
import type { FuzzyDate } from './FuzzyDate';
import type { LastModifiedDate } from './LastModifiedDate';
import type { Organization } from './Organization';
import type { Source } from './Source';
import type { Url } from './Url';

export type FundingSummary = {
    'created-date'?: CreatedDate;
    'last-modified-date'?: LastModifiedDate;
    source?: Source;
    title: FundingTitle;
    'external-ids'?: ExternalIDs;
    url?: Url;
    type: 'GRANT' | 'CONTRACT' | 'AWARD' | 'SALARY_AWARD';
    'start-date'?: FuzzyDate;
    'end-date'?: FuzzyDate;
    organization: Organization;
    visibility?: 'LIMITED' | 'REGISTERED_ONLY' | 'PUBLIC' | 'PRIVATE';
    'put-code'?: number;
    path?: string;
    'display-index'?: string;
};

