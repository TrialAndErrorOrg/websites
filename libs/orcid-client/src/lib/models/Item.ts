/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExternalID } from './ExternalID';

export type Item = {
    'put-code'?: string;
    'item-type': 'bio' | 'distinction' | 'education' | 'employment' | 'external-identifier' | 'invited-position' | 'funding' | 'membership' | 'peer-review' | 'qualification' | 'service' | 'work' | 'research-resource';
    'item-name': string;
    'external-id': ExternalID;
};

