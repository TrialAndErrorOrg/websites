/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExternalIDs } from './ExternalIDs';
import type { ResearchResourceHosts } from './ResearchResourceHosts';
import type { Url } from './Url';

export type ResearchResourceItem = {
    'resource-name'?: string;
    'resource-type'?: 'infrastructures' | 'collections' | 'equipment' | 'services';
    hosts?: ResearchResourceHosts;
    'external-ids'?: ExternalIDs;
    url?: Url;
};

