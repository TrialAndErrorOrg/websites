/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Subtitle } from './Subtitle';
import type { Title } from './Title';
import type { TranslatedTitle } from './TranslatedTitle';

export type WorkTitle = {
    title?: Title;
    subtitle?: Subtitle;
    'translated-title'?: TranslatedTitle;
};

