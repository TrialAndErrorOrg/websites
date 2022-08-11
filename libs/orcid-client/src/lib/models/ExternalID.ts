/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { TransientError } from './TransientError';
import type { TransientNonEmptyString } from './TransientNonEmptyString';
import type { Url } from './Url';

export type ExternalID = {
    'external-id-type': string;
    'external-id-value': string;
    'external-id-normalized'?: TransientNonEmptyString;
    'external-id-normalized-error'?: TransientError;
    'external-id-url'?: Url;
    'external-id-relationship'?: 'part-of' | 'self' | 'version-of';
};

