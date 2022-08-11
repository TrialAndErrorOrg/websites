/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DistinctionsSummary } from './DistinctionsSummary';
import type { EducationsSummary } from './EducationsSummary';
import type { EmploymentsSummary } from './EmploymentsSummary';
import type { Fundings } from './Fundings';
import type { InvitedPositions } from './InvitedPositions';
import type { LastModifiedDate } from './LastModifiedDate';
import type { Memberships } from './Memberships';
import type { PeerReviews } from './PeerReviews';
import type { Qualifications } from './Qualifications';
import type { ResearchResources } from './ResearchResources';
import type { Services } from './Services';
import type { WorksSummary } from './WorksSummary';

export type ActivitiesSummary = {
    'last-modified-date'?: LastModifiedDate;
    distinctions?: DistinctionsSummary;
    educations?: EducationsSummary;
    employments?: EmploymentsSummary;
    fundings?: Fundings;
    'invited-positions'?: InvitedPositions;
    memberships?: Memberships;
    'peer-reviews'?: PeerReviews;
    qualifications?: Qualifications;
    'research-resources'?: ResearchResources;
    services?: Services;
    works?: WorksSummary;
    path?: string;
};

