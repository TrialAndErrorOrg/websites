/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ContributorAttributes } from './ContributorAttributes';
import type { ContributorEmail } from './ContributorEmail';
import type { ContributorOrcid } from './ContributorOrcid';
import type { CreditName } from './CreditName';

export type Contributor = {
    'contributor-orcid'?: ContributorOrcid;
    'credit-name'?: CreditName;
    'contributor-email'?: ContributorEmail;
    'contributor-attributes'?: ContributorAttributes;
};

