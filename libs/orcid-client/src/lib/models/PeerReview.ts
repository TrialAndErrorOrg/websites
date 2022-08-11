/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CreatedDate } from './CreatedDate';
import type { ExternalID } from './ExternalID';
import type { ExternalIDs } from './ExternalIDs';
import type { FuzzyDate } from './FuzzyDate';
import type { LastModifiedDate } from './LastModifiedDate';
import type { Organization } from './Organization';
import type { Source } from './Source';
import type { SubjectName } from './SubjectName';
import type { Title } from './Title';
import type { Url } from './Url';

export type PeerReview = {
    'created-date'?: CreatedDate;
    'last-modified-date'?: LastModifiedDate;
    source?: Source;
    'reviewer-role'?: 'reviewer' | 'editor' | 'member' | 'chair' | 'organizer';
    'review-identifiers'?: ExternalIDs;
    'review-url'?: Url;
    'review-type'?: 'review' | 'evaluation';
    'review-completion-date'?: FuzzyDate;
    'review-group-id': string;
    'subject-external-identifier'?: ExternalID;
    'subject-container-name'?: Title;
    'subject-type'?: 'artistic-performance' | 'book-chapter' | 'book-review' | 'book' | 'conference-abstract' | 'conference-paper' | 'conference-poster' | 'data-set' | 'dictionary-entry' | 'disclosure' | 'dissertation-thesis' | 'edited-book' | 'encyclopedia-entry' | 'invention' | 'journal-article' | 'journal-issue' | 'lecture-speech' | 'license' | 'magazine-article' | 'manual' | 'newsletter-article' | 'newspaper-article' | 'online-resource' | 'other' | 'patent' | 'registered-copyright' | 'report' | 'research-technique' | 'research-tool' | 'software' | 'spin-off-company' | 'standards-and-policy' | 'supervised-student-publication' | 'technical-standard' | 'test' | 'trademark' | 'translation' | 'website' | 'working-paper' | 'grant' | 'contract' | 'award' | 'salary-award' | 'research-resource-proposal' | 'undefined';
    'subject-name'?: SubjectName;
    'subject-url'?: Url;
    'convening-organization'?: Organization;
    visibility?: 'limited' | 'registered-only' | 'public';
    'put-code'?: number;
    path?: string;
};

