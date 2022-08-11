/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DisambiguatedOrganization } from './DisambiguatedOrganization';
import type { OrganizationAddress } from './OrganizationAddress';

export type Organization = {
    name: string;
    address: OrganizationAddress;
    'disambiguated-organization'?: DisambiguatedOrganization;
};

