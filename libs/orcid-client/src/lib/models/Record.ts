/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ActivitiesSummary } from './ActivitiesSummary';
import type { History } from './History';
import type { OrcidIdentifier } from './OrcidIdentifier';
import type { Person } from './Person';
import type { Preferences } from './Preferences';

export type Record = {
    'orcid-identifier'?: OrcidIdentifier;
    preferences?: Preferences;
    history?: History;
    person?: Person;
    'activities-summary'?: ActivitiesSummary;
    path?: string;
};

