/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AuthorizationUrl } from './AuthorizationUrl';
import type { Items } from './Items';
import type { Source } from './Source';

export type NotificationPermission = {
    'put-code'?: number;
    'notification-type': 'custom' | 'institutional-connection' | 'permission' | 'amended' | 'service-anouncement' | 'administrative' | 'tip' | 'find-my-stuff';
    'authorization-url': AuthorizationUrl;
    'notification-subject'?: string;
    'notification-intro'?: string;
    items: Items;
    'created-date'?: string;
    'sent-date'?: string;
    'read-date'?: string;
    'actioned-date'?: string;
    'archived-date'?: string;
    source?: Source;
};

