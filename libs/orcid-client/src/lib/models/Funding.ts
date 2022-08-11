/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Amount } from './Amount';
import type { CreatedDate } from './CreatedDate';
import type { ExternalIDs } from './ExternalIDs';
import type { FundingContributors } from './FundingContributors';
import type { FundingTitle } from './FundingTitle';
import type { FuzzyDate } from './FuzzyDate';
import type { LastModifiedDate } from './LastModifiedDate';
import type { Organization } from './Organization';
import type { OrganizationDefinedFundingSubType } from './OrganizationDefinedFundingSubType';
import type { Source } from './Source';
import type { Url } from './Url';

export type Funding = {
    'created-date'?: CreatedDate;
    'last-modified-date'?: LastModifiedDate;
    source?: Source;
    'put-code'?: number;
    path?: string;
    type: 'grant' | 'contract' | 'award' | 'salary-award';
    'organization-defined-type'?: OrganizationDefinedFundingSubType;
    title: FundingTitle;
    'short-description'?: string;
    amount?: Amount;
    url?: Url;
    'start-date'?: FuzzyDate;
    'end-date'?: FuzzyDate;
    'external-ids'?: ExternalIDs;
    contributors?: FundingContributors;
    organization: Organization;
    visibility?: 'limited' | 'registered-only' | 'public';
};

