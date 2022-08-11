/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { SourceClientId } from './SourceClientId';
import type { SourceName } from './SourceName';
import type { SourceOrcid } from './SourceOrcid';

export type Source = {
    'source-orcid'?: SourceOrcid;
    'source-client-id'?: SourceClientId;
    'source-name'?: SourceName;
    'assertion-origin-orcid'?: SourceOrcid;
    'assertion-origin-client-id'?: SourceClientId;
    'assertion-origin-name'?: SourceName;
};

