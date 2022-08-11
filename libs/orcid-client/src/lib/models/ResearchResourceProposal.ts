/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExternalIDs } from './ExternalIDs';
import type { FuzzyDate } from './FuzzyDate';
import type { ResearchResourceHosts } from './ResearchResourceHosts';
import type { ResearchResourceTitle } from './ResearchResourceTitle';
import type { Url } from './Url';

export type ResearchResourceProposal = {
    title?: ResearchResourceTitle;
    hosts?: ResearchResourceHosts;
    'external-ids'?: ExternalIDs;
    'start-date'?: FuzzyDate;
    'end-date'?: FuzzyDate;
    url?: Url;
};

