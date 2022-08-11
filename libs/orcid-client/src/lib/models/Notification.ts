/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Source } from './Source';

export type Notification = {
    source?: Source;
    'put-code'?: number;
    'notification-type': 'CUSTOM' | 'INSTITUTIONAL_CONNECTION' | 'PERMISSION' | 'AMENDED' | 'SERVICE_ANNOUNCEMENT' | 'ADMINISTRATIVE' | 'TIP' | 'FIND_MY_STUFF';
    'created-date'?: string;
    'sent-date'?: string;
    'read-date'?: string;
    'archived-date'?: string;
};

