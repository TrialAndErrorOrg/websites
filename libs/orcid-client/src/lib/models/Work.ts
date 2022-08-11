/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Citation } from './Citation';
import type { Country } from './Country';
import type { CreatedDate } from './CreatedDate';
import type { ExternalIDs } from './ExternalIDs';
import type { LastModifiedDate } from './LastModifiedDate';
import type { PublicationDate } from './PublicationDate';
import type { Source } from './Source';
import type { Title } from './Title';
import type { Url } from './Url';
import type { WorkContributors } from './WorkContributors';
import type { WorkTitle } from './WorkTitle';

export type Work = {
    'created-date'?: CreatedDate;
    'last-modified-date'?: LastModifiedDate;
    source?: Source;
    'put-code'?: number;
    path?: string;
    title?: WorkTitle;
    'journal-title'?: Title;
    'short-description'?: string;
    citation?: Citation;
    type?: 'annotation' | 'artistic-performance' | 'book-chapter' | 'book-review' | 'book' | 'conference-abstract' | 'conference-paper' | 'conference-poster' | 'data-management-plan' | 'data-set' | 'dictionary-entry' | 'disclosure' | 'dissertation-thesis' | 'edited-book' | 'encyclopedia-entry' | 'invention' | 'journal-article' | 'journal-issue' | 'lecture-speech' | 'license' | 'magazine-article' | 'manual' | 'newsletter-article' | 'newspaper-article' | 'online-resource' | 'other' | 'patent' | 'physical-object' | 'preprint' | 'registered-copyright' | 'report' | 'research-technique' | 'research-tool' | 'software' | 'spin-off-company' | 'standards-and-policy' | 'supervised-student-publication' | 'technical-standard' | 'test' | 'trademark' | 'translation' | 'website' | 'working-paper' | 'review' | 'undefined';
    'publication-date'?: PublicationDate;
    'external-ids'?: ExternalIDs;
    url?: Url;
    contributors?: WorkContributors;
    'language-code'?: 'ab' | 'aa' | 'af' | 'ak' | 'sq' | 'am' | 'ar' | 'an' | 'hy' | 'as' | 'av' | 'ae' | 'ay' | 'az' | 'bm' | 'ba' | 'eu' | 'be' | 'bn' | 'bh' | 'bi' | 'bs' | 'br' | 'bg' | 'my' | 'ca' | 'ch' | 'ce' | 'zh_CN' | 'zh_TW' | 'cu' | 'cv' | 'kw' | 'co' | 'cr' | 'hr' | 'cs' | 'da' | 'dv' | 'nl' | 'dz' | 'en' | 'eo' | 'et' | 'ee' | 'fo' | 'fj' | 'fi' | 'fr' | 'fy' | 'ff' | 'gl' | 'lg' | 'ka' | 'de' | 'el' | 'kl' | 'gn' | 'gu' | 'ht' | 'ha' | 'iw' | 'hz' | 'hi' | 'ho' | 'hu' | 'is' | 'io' | 'ig' | 'in' | 'ia' | 'ie' | 'iu' | 'ik' | 'ga' | 'it' | 'ja' | 'jv' | 'kn' | 'kr' | 'ks' | 'kk' | 'km' | 'ki' | 'rw' | 'ky' | 'kv' | 'kg' | 'ko' | 'ku' | 'kj' | 'lo' | 'la' | 'lv' | 'li' | 'ln' | 'lt' | 'lu' | 'lb' | 'mk' | 'mg' | 'ms' | 'ml' | 'mt' | 'gv' | 'mi' | 'mr' | 'mh' | 'mo' | 'mn' | 'na' | 'nv' | 'ng' | 'ne' | 'nd' | 'se' | 'no' | 'nb' | 'nn' | 'ny' | 'oc' | 'oj' | 'or' | 'om' | 'os' | 'pi' | 'pa' | 'fa' | 'pl' | 'pt' | 'ps' | 'qu' | 'rm' | 'ro' | 'rn' | 'ru' | 'sm' | 'sg' | 'sa' | 'sc' | 'gd' | 'sr' | 'sn' | 'ii' | 'sd' | 'si' | 'sk' | 'sl' | 'so' | 'nr' | 'st' | 'es' | 'su' | 'sw' | 'ss' | 'sv' | 'tl' | 'ty' | 'tg' | 'ta' | 'tt' | 'te' | 'th' | 'bo' | 'ti' | 'to' | 'ts' | 'tn' | 'tr' | 'tk' | 'tw' | 'ug' | 'uk' | 'ur' | 'uz' | 've' | 'vi' | 'vo' | 'wa' | 'cy' | 'wo' | 'xh' | 'ji' | 'yo' | 'za' | 'zu';
    country?: Country;
    visibility?: 'limited' | 'registered-only' | 'public';
};

