/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { EducationSummary } from './EducationSummary';
import type { ExternalIDs } from './ExternalIDs';
import type { LastModifiedDate } from './LastModifiedDate';

export type AffiliationGroupEducationSummary = {
    'last-modified-date'?: LastModifiedDate;
    'external-ids'?: ExternalIDs;
    summaries?: Array<EducationSummary>;
};

