/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContributorEmail } from './ContributorEmail';
import type { ContributorOrcid } from './ContributorOrcid';
import type { CreditName } from './CreditName';
import type { FundingContributorAttributes } from './FundingContributorAttributes';

export type FundingContributor = {
    'contributor-orcid'?: ContributorOrcid;
    'credit-name'?: CreditName;
    'contributor-email'?: ContributorEmail;
    'contributor-attributes'?: FundingContributorAttributes;
};

