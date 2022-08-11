/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CompletionDate } from './CompletionDate';
import type { DeactivationDate } from './DeactivationDate';
import type { LastModifiedDate } from './LastModifiedDate';
import type { Source } from './Source';
import type { SubmissionDate } from './SubmissionDate';

export type History = {
    'creation-method'?: 'API' | 'DIRECT' | 'MEMBER_REFERRED' | 'WEBSITE' | 'INTEGRATION_TEST';
    'completion-date'?: CompletionDate;
    'submission-date'?: SubmissionDate;
    'last-modified-date'?: LastModifiedDate;
    claimed?: boolean;
    source?: Source;
    'deactivation-date'?: DeactivationDate;
    'verified-email'?: boolean;
    'verified-primary-email'?: boolean;
};

