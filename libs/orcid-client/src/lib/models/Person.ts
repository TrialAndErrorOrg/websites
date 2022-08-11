/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Addresses } from './Addresses';
import type { Biography } from './Biography';
import type { Emails } from './Emails';
import type { Keywords } from './Keywords';
import type { LastModifiedDate } from './LastModifiedDate';
import type { Name } from './Name';
import type { OtherNames } from './OtherNames';
import type { PersonExternalIdentifiers } from './PersonExternalIdentifiers';
import type { ResearcherUrls } from './ResearcherUrls';

export type Person = {
    'last-modified-date'?: LastModifiedDate;
    name?: Name;
    'other-names'?: OtherNames;
    biography?: Biography;
    'researcher-urls'?: ResearcherUrls;
    emails?: Emails;
    addresses?: Addresses;
    keywords?: Keywords;
    'external-identifiers'?: PersonExternalIdentifiers;
    path?: string;
};

