/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Day } from './Day';
import type { Month } from './Month';
import type { Year } from './Year';

export type PublicationDate = {
    year: Year;
    month?: Month;
    day?: Day;
};

