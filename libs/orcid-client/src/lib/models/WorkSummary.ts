/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreatedDate } from './CreatedDate';
import type { ExternalIDs } from './ExternalIDs';
import type { LastModifiedDate } from './LastModifiedDate';
import type { PublicationDate } from './PublicationDate';
import type { Source } from './Source';
import type { Title } from './Title';
import type { Url } from './Url';
import type { WorkTitle } from './WorkTitle';

export type WorkSummary = {
    'put-code'?: number;
    'created-date'?: CreatedDate;
    'last-modified-date'?: LastModifiedDate;
    source?: Source;
    title?: WorkTitle;
    'external-ids'?: ExternalIDs;
    url?: Url;
    type?: 'ANNOTATION' | 'ARTISTIC_PERFORMANCE' | 'BOOK_CHAPTER' | 'BOOK_REVIEW' | 'BOOK' | 'CONFERENCE_ABSTRACT' | 'CONFERENCE_PAPER' | 'CONFERENCE_POSTER' | 'DATA_MANAGEMENT_PLAN' | 'DATA_SET' | 'DICTIONARY_ENTRY' | 'DISCLOSURE' | 'DISSERTATION_THESIS' | 'EDITED_BOOK' | 'ENCYCLOPEDIA_ENTRY' | 'INVENTION' | 'JOURNAL_ARTICLE' | 'JOURNAL_ISSUE' | 'LECTURE_SPEECH' | 'LICENSE' | 'MAGAZINE_ARTICLE' | 'MANUAL' | 'NEWSLETTER_ARTICLE' | 'NEWSPAPER_ARTICLE' | 'ONLINE_RESOURCE' | 'OTHER' | 'PATENT' | 'PHYSICAL_OBJECT' | 'PREPRINT' | 'REGISTERED_COPYRIGHT' | 'REVIEW' | 'REPORT' | 'RESEARCH_TECHNIQUE' | 'RESEARCH_TOOL' | 'SOFTWARE' | 'SPIN_OFF_COMPANY' | 'STANDARDS_AND_POLICY' | 'SUPERVISED_STUDENT_PUBLICATION' | 'TECHNICAL_STANDARD' | 'TEST' | 'TRADEMARK' | 'TRANSLATION' | 'WEBSITE' | 'WORKING_PAPER' | 'UNDEFINED';
    'publication-date'?: PublicationDate;
    'journal-title'?: Title;
    visibility?: 'LIMITED' | 'REGISTERED_ONLY' | 'PUBLIC' | 'PRIVATE';
    path?: string;
    'display-index'?: string;
};

