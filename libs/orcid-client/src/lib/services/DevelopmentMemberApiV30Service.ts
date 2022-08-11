/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivitiesSummary } from '../models/ActivitiesSummary';
import type { Address } from '../models/Address';
import type { Addresses } from '../models/Addresses';
import type { Biography } from '../models/Biography';
import type { Distinction } from '../models/Distinction';
import type { DistinctionsSummary } from '../models/DistinctionsSummary';
import type { DistinctionSummary } from '../models/DistinctionSummary';
import type { Education } from '../models/Education';
import type { EducationsSummary } from '../models/EducationsSummary';
import type { EducationSummary } from '../models/EducationSummary';
import type { Employment } from '../models/Employment';
import type { EmploymentsSummary } from '../models/EmploymentsSummary';
import type { EmploymentSummary } from '../models/EmploymentSummary';
import type { Funding } from '../models/Funding';
import type { Fundings } from '../models/Fundings';
import type { FundingSummary } from '../models/FundingSummary';
import type { GroupIdRecord } from '../models/GroupIdRecord';
import type { GroupIdRecords } from '../models/GroupIdRecords';
import type { InvitedPosition } from '../models/InvitedPosition';
import type { InvitedPositions } from '../models/InvitedPositions';
import type { InvitedPositionSummary } from '../models/InvitedPositionSummary';
import type { Keyword } from '../models/Keyword';
import type { Membership } from '../models/Membership';
import type { Memberships } from '../models/Memberships';
import type { MembershipSummary } from '../models/MembershipSummary';
import type { Notification } from '../models/Notification';
import type { NotificationPermission } from '../models/NotificationPermission';
import type { OtherName } from '../models/OtherName';
import type { PeerReview } from '../models/PeerReview';
import type { PeerReviews } from '../models/PeerReviews';
import type { PeerReviewSummary } from '../models/PeerReviewSummary';
import type { PersonalDetails } from '../models/PersonalDetails';
import type { PersonExternalIdentifier } from '../models/PersonExternalIdentifier';
import type { Qualification } from '../models/Qualification';
import type { Qualifications } from '../models/Qualifications';
import type { QualificationSummary } from '../models/QualificationSummary';
import type { Record } from '../models/Record';
import type { ResearcherUrl } from '../models/ResearcherUrl';
import type { ResearchResource } from '../models/ResearchResource';
import type { ResearchResources } from '../models/ResearchResources';
import type { ResearchResourceSummary } from '../models/ResearchResourceSummary';
import type { Search } from '../models/Search';
import type { Service } from '../models/Service';
import type { Services } from '../models/Services';
import type { ServiceSummary } from '../models/ServiceSummary';
import type { Work } from '../models/Work';
import type { WorkBulk } from '../models/WorkBulk';
import type { WorksSummary } from '../models/WorksSummary';
import type { WorkSummary } from '../models/WorkSummary';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class DevelopmentMemberApiV30Service {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * @returns any successful operation
     * @throws ApiError
     */
    public viewStatusJson(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/apiStatus',
        });
    }

    /**
     * Fetch all activities
     * @returns ActivitiesSummary successful operation
     * @throws ApiError
     */
    public viewActivities({
        orcid,
    }: {
        orcid: string,
    }): CancelablePromise<ActivitiesSummary> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/activities',
            path: {
                'orcid': orcid,
            },
        });
    }

    /**
     * Fetch a Work
     * @returns Work successful operation
     * @throws ApiError
     */
    public viewWork({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<Work> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/work/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
        });
    }

    /**
     * Update a Work
     * @returns any Work updated
     * @throws ApiError
     */
    public updateWork({
        orcid,
        putCode,
        body,
    }: {
        orcid: string,
        putCode: string,
        body?: Work,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v3.0/{orcid}/work/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
            body: body,
        });
    }

    /**
     * Delete a Work
     * @returns void
     * @throws ApiError
     */
    public deleteWork({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v3.0/{orcid}/work/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
        });
    }

    /**
     * Fetch all works
     * @returns WorksSummary successful operation
     * @throws ApiError
     */
    public viewWorks({
        orcid,
    }: {
        orcid: string,
    }): CancelablePromise<WorksSummary> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/works',
            path: {
                'orcid': orcid,
            },
        });
    }

    /**
     * Create a list of Works
     * @returns string successful operation
     * @throws ApiError
     */
    public createWorks({
        orcid,
        body,
    }: {
        orcid: string,
        body?: WorkBulk,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v3.0/{orcid}/works',
            path: {
                'orcid': orcid,
            },
            body: body,
            errors: {
                400: `Invalid Work representation`,
                500: `Invalid Work representation that wasn't trapped (bad fuzzy date or you tried to add a put code)`,
            },
        });
    }

    /**
     * Fetch specified works
     * @returns WorkBulk successful operation
     * @throws ApiError
     */
    public viewSpecifiedWorks({
        orcid,
        putCodes,
    }: {
        orcid: string,
        putCodes: string,
    }): CancelablePromise<WorkBulk> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/works/{putCodes}',
            path: {
                'orcid': orcid,
                'putCodes': putCodes,
            },
        });
    }

    /**
     * Fetch a Work Summary
     * @returns WorkSummary successful operation
     * @throws ApiError
     */
    public viewWorkSummary({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<WorkSummary> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/work/summary/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
        });
    }

    /**
     * Create a Work
     * @returns string successful operation
     * @throws ApiError
     */
    public createWork({
        orcid,
        body,
    }: {
        orcid: string,
        body?: Work,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v3.0/{orcid}/work',
            path: {
                'orcid': orcid,
            },
            body: body,
            errors: {
                400: `Invalid Work representation`,
                500: `Invalid Work representation that wasn't trapped (bad fuzzy date or you tried to add a put code)`,
            },
        });
    }

    /**
     * Fetch a Funding
     * @returns Funding successful operation
     * @throws ApiError
     */
    public viewFunding({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<Funding> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/funding/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
        });
    }

    /**
     * Update a Funding
     * @returns any Funding updated
     * @throws ApiError
     */
    public updateFunding({
        orcid,
        putCode,
        body,
    }: {
        orcid: string,
        putCode: string,
        body?: Funding,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v3.0/{orcid}/funding/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
            body: body,
        });
    }

    /**
     * Delete a Funding
     * @returns void
     * @throws ApiError
     */
    public deleteFunding({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v3.0/{orcid}/funding/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
        });
    }

    /**
     * Fetch all fundings
     * @returns Fundings successful operation
     * @throws ApiError
     */
    public viewFundings({
        orcid,
    }: {
        orcid: string,
    }): CancelablePromise<Fundings> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/fundings',
            path: {
                'orcid': orcid,
            },
        });
    }

    /**
     * Fetch a Funding Summary
     * @returns FundingSummary successful operation
     * @throws ApiError
     */
    public viewFundingSummary({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<FundingSummary> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/funding/summary/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
        });
    }

    /**
     * Create a Funding
     * @returns string successful operation
     * @throws ApiError
     */
    public createFunding({
        orcid,
        body,
    }: {
        orcid: string,
        body?: Funding,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v3.0/{orcid}/funding',
            path: {
                'orcid': orcid,
            },
            body: body,
            errors: {
                400: `Invalid Funding representation`,
                500: `Invalid Funding representation that wasn't trapped (bad fuzzy date or you tried to add a put code)`,
            },
        });
    }

    /**
     * Fetch an Education
     * @returns Education OK
     * @throws ApiError
     */
    public viewEducation({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<Education> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/education/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
            errors: {
                400: `Invalid putCode or ORCID ID`,
                404: `putCode not found`,
            },
        });
    }

    /**
     * Update an Education
     * @returns any Education updated
     * @throws ApiError
     */
    public updateEducation({
        orcid,
        putCode,
        body,
    }: {
        orcid: string,
        putCode: string,
        body?: Education,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v3.0/{orcid}/education/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
            body: body,
        });
    }

    /**
     * Delete an Education
     * @returns void
     * @throws ApiError
     */
    public deleteEducation({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v3.0/{orcid}/education/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
        });
    }

    /**
     * Fetch all educations
     * @returns EducationsSummary successful operation
     * @throws ApiError
     */
    public viewEducations({
        orcid,
    }: {
        orcid: string,
    }): CancelablePromise<EducationsSummary> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/educations',
            path: {
                'orcid': orcid,
            },
        });
    }

    /**
     * Fetch an Education summary
     * @returns EducationSummary successful operation
     * @throws ApiError
     */
    public viewEducationSummary({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<EducationSummary> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/education/summary/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
        });
    }

    /**
     * Create an Education
     * @returns string successful operation
     * @throws ApiError
     */
    public createEducation({
        orcid,
        body,
    }: {
        orcid: string,
        body?: Education,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v3.0/{orcid}/education',
            path: {
                'orcid': orcid,
            },
            body: body,
            errors: {
                400: `Invalid Education representation`,
                500: `Invalid Education representation that wasn't trapped (bad fuzzy date or you tried to add a put code)`,
            },
        });
    }

    /**
     * Fetch an Employment
     * @returns Employment successful operation
     * @throws ApiError
     */
    public viewEmployment({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<Employment> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/employment/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
        });
    }

    /**
     * Update an Employment
     * @returns any Employment updated
     * @throws ApiError
     */
    public updateEmployment({
        orcid,
        putCode,
        body,
    }: {
        orcid: string,
        putCode: string,
        body?: Employment,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v3.0/{orcid}/employment/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
            body: body,
        });
    }

    /**
     * Delete an Employment
     * @returns void
     * @throws ApiError
     */
    public deleteEmployment({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v3.0/{orcid}/employment/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
        });
    }

    /**
     * Fetch all employments
     * @returns EmploymentsSummary successful operation
     * @throws ApiError
     */
    public viewEmployments({
        orcid,
    }: {
        orcid: string,
    }): CancelablePromise<EmploymentsSummary> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/employments',
            path: {
                'orcid': orcid,
            },
        });
    }

    /**
     * Fetch an Employment Summary
     * @returns EmploymentSummary successful operation
     * @throws ApiError
     */
    public viewEmploymentSummary({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<EmploymentSummary> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/employment/summary/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
        });
    }

    /**
     * Create an Employment
     * @returns string successful operation
     * @throws ApiError
     */
    public createEmployment({
        orcid,
        body,
    }: {
        orcid: string,
        body?: Employment,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v3.0/{orcid}/employment',
            path: {
                'orcid': orcid,
            },
            body: body,
            errors: {
                400: `Invalid Employment representation`,
                500: `Invalid Employment representation that wasn't trapped (bad fuzzy date or you tried to add a put code)`,
            },
        });
    }

    /**
     * Fetch a Peer Review
     * @returns PeerReview successful operation
     * @throws ApiError
     */
    public viewPeerReview({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<PeerReview> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/peer-review/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
        });
    }

    /**
     * Update a Peer Review
     * @returns any Peer Review updated
     * @throws ApiError
     */
    public updatePeerReview({
        orcid,
        putCode,
        body,
    }: {
        orcid: string,
        putCode: string,
        body?: PeerReview,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v3.0/{orcid}/peer-review/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
            body: body,
        });
    }

    /**
     * Delete a Peer Review
     * @returns void
     * @throws ApiError
     */
    public deletePeerReview({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v3.0/{orcid}/peer-review/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
        });
    }

    /**
     * Fetch all peer reviews
     * @returns PeerReviews successful operation
     * @throws ApiError
     */
    public viewPeerReviews({
        orcid,
    }: {
        orcid: string,
    }): CancelablePromise<PeerReviews> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/peer-reviews',
            path: {
                'orcid': orcid,
            },
        });
    }

    /**
     * Fetch a Peer Review Summary
     * @returns PeerReviewSummary successful operation
     * @throws ApiError
     */
    public viewPeerReviewSummary({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<PeerReviewSummary> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/peer-review/summary/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
        });
    }

    /**
     * Create a Peer Review
     * @returns string successful operation
     * @throws ApiError
     */
    public createPeerReview({
        orcid,
        body,
    }: {
        orcid: string,
        body?: PeerReview,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v3.0/{orcid}/peer-review',
            path: {
                'orcid': orcid,
            },
            body: body,
            errors: {
                400: `Invalid Peer Review representation`,
                500: `Invalid Peer Review representation that wasn't trapped (bad fuzzy date or you tried to add a put code)`,
            },
        });
    }

    /**
     * Fetch a Group
     * @returns GroupIdRecord successful operation
     * @throws ApiError
     */
    public viewGroupIdRecord({
        putCode,
    }: {
        putCode: string,
    }): CancelablePromise<GroupIdRecord> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/group-id-record/{putCode}',
            path: {
                'putCode': putCode,
            },
        });
    }

    /**
     * Update a Group
     * @returns any Peer Review updated
     * @throws ApiError
     */
    public updateGroupIdRecord({
        putCode,
        body,
    }: {
        putCode: string,
        body?: GroupIdRecord,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v3.0/group-id-record/{putCode}',
            path: {
                'putCode': putCode,
            },
            body: body,
        });
    }

    /**
     * Delete a Group
     * @returns void
     * @throws ApiError
     */
    public deleteGroupIdRecord({
        putCode,
    }: {
        putCode: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v3.0/group-id-record/{putCode}',
            path: {
                'putCode': putCode,
            },
        });
    }

    /**
     * Fetch Groups
     * @returns GroupIdRecords successful operation
     * @throws ApiError
     */
    public viewGroupIdRecords({
        pageSize = '100',
        page = '1',
        name,
        groupId,
    }: {
        pageSize?: string,
        page?: string,
        name?: string,
        groupId?: string,
    }): CancelablePromise<GroupIdRecords> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/group-id-record',
            query: {
                'page-size': pageSize,
                'page': page,
                'name': name,
                'group-id': groupId,
            },
        });
    }

    /**
     * Create a Group
     * @returns string Group created, see HTTP Location header for URI
     * @throws ApiError
     */
    public createGroupIdRecord({
        body,
    }: {
        body?: GroupIdRecord,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v3.0/group-id-record',
            body: body,
            responseHeader: 'Location',
            errors: {
                400: `Invalid Group representation`,
            },
        });
    }

    /**
     * Fetch a notification by id
     * @returns Notification Notification found
     * @throws ApiError
     */
    public viewPermissionNotification({
        orcid,
        id,
    }: {
        orcid: string,
        id: number,
    }): CancelablePromise<Notification> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/notification-permission/{id}',
            path: {
                'orcid': orcid,
                'id': id,
            },
            errors: {
                401: `Access denied, this is not your notification`,
                404: `Notification not found`,
            },
        });
    }

    /**
     * Archive a notification
     * @returns Notification Notification archived
     * @throws ApiError
     */
    public flagAsArchivedPermissionNotification({
        orcid,
        id,
    }: {
        orcid: string,
        id: number,
    }): CancelablePromise<Notification> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v3.0/{orcid}/notification-permission/{id}',
            path: {
                'orcid': orcid,
                'id': id,
            },
            errors: {
                401: `Access denied, this is not your notification`,
                404: `Notification not found`,
            },
        });
    }

    /**
     * Add a notification
     * @returns string successful operation
     * @throws ApiError
     */
    public addPermissionNotification({
        orcid,
        body,
    }: {
        orcid: string,
        body?: NotificationPermission,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v3.0/{orcid}/notification-permission',
            path: {
                'orcid': orcid,
            },
            body: body,
        });
    }

    /**
     * Fetch all researcher urls for an ORCID ID
     * @returns any successful operation
     * @throws ApiError
     */
    public viewResearcherUrls({
        orcid,
    }: {
        orcid: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/researcher-urls',
            path: {
                'orcid': orcid,
            },
        });
    }

    /**
     * Add a new researcher url for an ORCID ID
     * @returns any successful operation
     * @throws ApiError
     */
    public createResearcherUrl({
        orcid,
        body,
    }: {
        orcid: string,
        body?: ResearcherUrl,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v3.0/{orcid}/researcher-urls',
            path: {
                'orcid': orcid,
            },
            body: body,
        });
    }

    /**
     * Fetch one researcher url for an ORCID ID
     * @returns any successful operation
     * @throws ApiError
     */
    public viewResearcherUrl({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/researcher-urls/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
        });
    }

    /**
     * Edits researcher url for an ORCID ID
     * @returns any successful operation
     * @throws ApiError
     */
    public editResearcherUrl({
        orcid,
        putCode,
        body,
    }: {
        orcid: string,
        putCode: string,
        body?: ResearcherUrl,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v3.0/{orcid}/researcher-urls/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
            body: body,
        });
    }

    /**
     * Delete one researcher url from an ORCID ID
     * @returns any successful operation
     * @throws ApiError
     */
    public deleteResearcherUrl({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v3.0/{orcid}/researcher-urls/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
        });
    }

    /**
     * Fetch all emails for an ORCID ID
     * @returns any successful operation
     * @throws ApiError
     */
    public viewEmails({
        orcid,
    }: {
        orcid: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/email',
            path: {
                'orcid': orcid,
            },
        });
    }

    /**
     * Fetch Other name
     * @returns any successful operation
     * @throws ApiError
     */
    public viewOtherName({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/other-names/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
        });
    }

    /**
     * Edit other name
     * @returns any successful operation
     * @throws ApiError
     */
    public editOtherName({
        orcid,
        putCode,
        body,
    }: {
        orcid: string,
        putCode: string,
        body?: OtherName,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v3.0/{orcid}/other-names/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
            body: body,
        });
    }

    /**
     * Delete other name
     * @returns any successful operation
     * @throws ApiError
     */
    public deleteOtherName({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v3.0/{orcid}/other-names/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
        });
    }

    /**
     * Fetch Other names
     * @returns any successful operation
     * @throws ApiError
     */
    public viewOtherNames({
        orcid,
    }: {
        orcid: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/other-names',
            path: {
                'orcid': orcid,
            },
        });
    }

    /**
     * Add other name
     * @returns any successful operation
     * @throws ApiError
     */
    public createOtherName({
        orcid,
        body,
    }: {
        orcid: string,
        body?: OtherName,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v3.0/{orcid}/other-names',
            path: {
                'orcid': orcid,
            },
            body: body,
        });
    }

    /**
     * Fetch personal details for an ORCID ID
     * @returns PersonalDetails successful operation
     * @throws ApiError
     */
    public viewPersonalDetails({
        orcid,
    }: {
        orcid: string,
    }): CancelablePromise<PersonalDetails> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/personal-details',
            path: {
                'orcid': orcid,
            },
        });
    }

    /**
     * Fetch external identifier
     * @returns any successful operation
     * @throws ApiError
     */
    public viewExternalIdentifier({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/external-identifiers/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
        });
    }

    /**
     * Edit external identifier
     * @returns any successful operation
     * @throws ApiError
     */
    public editExternalIdentifier({
        orcid,
        putCode,
        body,
    }: {
        orcid: string,
        putCode: string,
        body?: PersonExternalIdentifier,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v3.0/{orcid}/external-identifiers/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
            body: body,
        });
    }

    /**
     * Delete external identifier
     * @returns any successful operation
     * @throws ApiError
     */
    public deleteExternalIdentifier({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v3.0/{orcid}/external-identifiers/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
        });
    }

    /**
     * Fetch external identifiers
     * @returns any successful operation
     * @throws ApiError
     */
    public viewExternalIdentifiers({
        orcid,
    }: {
        orcid: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/external-identifiers',
            path: {
                'orcid': orcid,
            },
        });
    }

    /**
     * Add external identifier
     * @returns any successful operation
     * @throws ApiError
     */
    public createExternalIdentifier({
        orcid,
        body,
    }: {
        orcid: string,
        body?: PersonExternalIdentifier,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v3.0/{orcid}/external-identifiers',
            path: {
                'orcid': orcid,
            },
            body: body,
        });
    }

    /**
     * Get biography details
     * @returns Biography successful operation
     * @throws ApiError
     */
    public viewBiography({
        orcid,
    }: {
        orcid: string,
    }): CancelablePromise<Biography> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/biography',
            path: {
                'orcid': orcid,
            },
        });
    }

    /**
     * Fetch keyword
     * @returns any successful operation
     * @throws ApiError
     */
    public viewKeyword({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/keywords/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
        });
    }

    /**
     * Edit keyword
     * @returns any successful operation
     * @throws ApiError
     */
    public editKeyword({
        orcid,
        putCode,
        body,
    }: {
        orcid: string,
        putCode: string,
        body?: Keyword,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v3.0/{orcid}/keywords/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
            body: body,
        });
    }

    /**
     * Delete keyword
     * @returns any successful operation
     * @throws ApiError
     */
    public deleteKeyword({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v3.0/{orcid}/keywords/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
        });
    }

    /**
     * Fetch keywords
     * @returns any successful operation
     * @throws ApiError
     */
    public viewKeywords({
        orcid,
    }: {
        orcid: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/keywords',
            path: {
                'orcid': orcid,
            },
        });
    }

    /**
     * Add keyword
     * @returns any successful operation
     * @throws ApiError
     */
    public createKeyword({
        orcid,
        body,
    }: {
        orcid: string,
        body?: Keyword,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v3.0/{orcid}/keywords',
            path: {
                'orcid': orcid,
            },
            body: body,
        });
    }

    /**
     * Fetch an address
     * @returns any successful operation
     * @throws ApiError
     */
    public viewAddress({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/address/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
        });
    }

    /**
     * Edit an address
     * @returns any successful operation
     * @throws ApiError
     */
    public editAddress({
        orcid,
        putCode,
        body,
    }: {
        orcid: string,
        putCode: string,
        body?: Address,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v3.0/{orcid}/address/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
            body: body,
        });
    }

    /**
     * Delete an address
     * @returns any successful operation
     * @throws ApiError
     */
    public deleteAddress({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v3.0/{orcid}/address/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
        });
    }

    /**
     * Fetch all addresses of a profile
     * @returns Addresses successful operation
     * @throws ApiError
     */
    public viewAddresses({
        orcid,
    }: {
        orcid: string,
    }): CancelablePromise<Addresses> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/address',
            path: {
                'orcid': orcid,
            },
        });
    }

    /**
     * Add an address
     * @returns any successful operation
     * @throws ApiError
     */
    public createAddress({
        orcid,
        body,
    }: {
        orcid: string,
        body?: Address,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v3.0/{orcid}/address',
            path: {
                'orcid': orcid,
            },
            body: body,
        });
    }

    /**
     * Fetch person details
     * @returns any successful operation
     * @throws ApiError
     */
    public viewPerson({
        orcid,
    }: {
        orcid: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/person',
            path: {
                'orcid': orcid,
            },
        });
    }

    /**
     * Fetch record details
     * @returns Record successful operation
     * @throws ApiError
     */
    public viewRecord({
        orcid,
    }: {
        orcid: string,
    }): CancelablePromise<Record> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}',
            path: {
                'orcid': orcid,
            },
        });
    }

    /**
     * Search records
     * @returns Search successful operation
     * @throws ApiError
     */
    public searchByQuery({
        q,
    }: {
        q?: string,
    }): CancelablePromise<Search> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/search',
            query: {
                'q': q,
            },
        });
    }

    /**
     * Fetch client details
     * @returns any successful operation
     * @throws ApiError
     */
    public viewClient({
        clientId,
    }: {
        clientId: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/client/{client_id}',
            path: {
                'client_id': clientId,
            },
        });
    }

    /**
     * Fetch an Distinction
     * @returns Distinction OK
     * @throws ApiError
     */
    public viewDistinction({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<Distinction> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/distinction/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
            errors: {
                400: `Invalid putCode or ORCID ID`,
                404: `putCode not found`,
            },
        });
    }

    /**
     * Update an Distinction
     * @returns any Distinction updated
     * @throws ApiError
     */
    public updateDistinction({
        orcid,
        putCode,
        body,
    }: {
        orcid: string,
        putCode: string,
        body?: Distinction,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v3.0/{orcid}/distinction/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
            body: body,
        });
    }

    /**
     * Delete an Distinction
     * @returns void
     * @throws ApiError
     */
    public deleteDistinction({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v3.0/{orcid}/distinction/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
        });
    }

    /**
     * Fetch all distinctions
     * @returns DistinctionsSummary successful operation
     * @throws ApiError
     */
    public viewDistinctions({
        orcid,
    }: {
        orcid: string,
    }): CancelablePromise<DistinctionsSummary> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/distinctions',
            path: {
                'orcid': orcid,
            },
        });
    }

    /**
     * Fetch an Distinction summary
     * @returns DistinctionSummary successful operation
     * @throws ApiError
     */
    public viewDistinctionSummary({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<DistinctionSummary> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/distinction/summary/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
        });
    }

    /**
     * Create an Distinction
     * @returns string successful operation
     * @throws ApiError
     */
    public createDistinction({
        orcid,
        body,
    }: {
        orcid: string,
        body?: Distinction,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v3.0/{orcid}/distinction',
            path: {
                'orcid': orcid,
            },
            body: body,
            errors: {
                400: `Invalid Distinction representation`,
                500: `Invalid Distinction representation that wasn't trapped (bad fuzzy date or you tried to add a put code)`,
            },
        });
    }

    /**
     * Fetch an InvitedPosition
     * @returns InvitedPosition OK
     * @throws ApiError
     */
    public viewInvitedPosition({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<InvitedPosition> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/invited-position/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
            errors: {
                400: `Invalid putCode or ORCID ID`,
                404: `putCode not found`,
            },
        });
    }

    /**
     * Update an InvitedPosition
     * @returns any InvitedPosition updated
     * @throws ApiError
     */
    public updateInvitedPosition({
        orcid,
        putCode,
        body,
    }: {
        orcid: string,
        putCode: string,
        body?: InvitedPosition,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v3.0/{orcid}/invited-position/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
            body: body,
        });
    }

    /**
     * Delete an InvitedPosition
     * @returns void
     * @throws ApiError
     */
    public deleteInvitedPosition({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v3.0/{orcid}/invited-position/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
        });
    }

    /**
     * Fetch all invitedPositions
     * @returns InvitedPositions successful operation
     * @throws ApiError
     */
    public viewInvitedPositions({
        orcid,
    }: {
        orcid: string,
    }): CancelablePromise<InvitedPositions> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/invited-positions',
            path: {
                'orcid': orcid,
            },
        });
    }

    /**
     * Fetch an InvitedPosition summary
     * @returns InvitedPositionSummary successful operation
     * @throws ApiError
     */
    public viewInvitedPositionSummary({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<InvitedPositionSummary> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/invited-position/summary/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
        });
    }

    /**
     * Create an InvitedPosition
     * @returns string successful operation
     * @throws ApiError
     */
    public createInvitedPosition({
        orcid,
        body,
    }: {
        orcid: string,
        body?: InvitedPosition,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v3.0/{orcid}/invited-position',
            path: {
                'orcid': orcid,
            },
            body: body,
            errors: {
                400: `Invalid InvitedPosition representation`,
                500: `Invalid InvitedPosition representation that wasn't trapped (bad fuzzy date or you tried to add a put code)`,
            },
        });
    }

    /**
     * Fetch an Membership
     * @returns Membership OK
     * @throws ApiError
     */
    public viewMembership({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<Membership> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/membership/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
            errors: {
                400: `Invalid putCode or ORCID ID`,
                404: `putCode not found`,
            },
        });
    }

    /**
     * Update an Membership
     * @returns any Membership updated
     * @throws ApiError
     */
    public updateMembership({
        orcid,
        putCode,
        body,
    }: {
        orcid: string,
        putCode: string,
        body?: Membership,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v3.0/{orcid}/membership/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
            body: body,
        });
    }

    /**
     * Delete an Membership
     * @returns void
     * @throws ApiError
     */
    public deleteMembership({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v3.0/{orcid}/membership/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
        });
    }

    /**
     * Fetch all memberships
     * @returns Memberships successful operation
     * @throws ApiError
     */
    public viewMemberships({
        orcid,
    }: {
        orcid: string,
    }): CancelablePromise<Memberships> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/memberships',
            path: {
                'orcid': orcid,
            },
        });
    }

    /**
     * Fetch an Membership summary
     * @returns MembershipSummary successful operation
     * @throws ApiError
     */
    public viewMembershipSummary({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<MembershipSummary> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/membership/summary/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
        });
    }

    /**
     * Create an Membership
     * @returns string successful operation
     * @throws ApiError
     */
    public createMembership({
        orcid,
        body,
    }: {
        orcid: string,
        body?: Membership,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v3.0/{orcid}/membership',
            path: {
                'orcid': orcid,
            },
            body: body,
            errors: {
                400: `Invalid Membership representation`,
                500: `Invalid Membership representation that wasn't trapped (bad fuzzy date or you tried to add a put code)`,
            },
        });
    }

    /**
     * Fetch an Qualification
     * @returns Qualification OK
     * @throws ApiError
     */
    public viewQualification({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<Qualification> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/qualification/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
            errors: {
                400: `Invalid putCode or ORCID ID`,
                404: `putCode not found`,
            },
        });
    }

    /**
     * Update an Qualification
     * @returns any Qualification updated
     * @throws ApiError
     */
    public updateQualification({
        orcid,
        putCode,
        body,
    }: {
        orcid: string,
        putCode: string,
        body?: Qualification,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v3.0/{orcid}/qualification/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
            body: body,
        });
    }

    /**
     * Delete an Qualification
     * @returns void
     * @throws ApiError
     */
    public deleteQualification({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v3.0/{orcid}/qualification/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
        });
    }

    /**
     * Fetch all qualifications
     * @returns Qualifications successful operation
     * @throws ApiError
     */
    public viewQualifications({
        orcid,
    }: {
        orcid: string,
    }): CancelablePromise<Qualifications> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/qualifications',
            path: {
                'orcid': orcid,
            },
        });
    }

    /**
     * Fetch an Qualification summary
     * @returns QualificationSummary successful operation
     * @throws ApiError
     */
    public viewQualificationSummary({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<QualificationSummary> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/qualification/summary/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
        });
    }

    /**
     * Create an Qualification
     * @returns string successful operation
     * @throws ApiError
     */
    public createQualification({
        orcid,
        body,
    }: {
        orcid: string,
        body?: Qualification,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v3.0/{orcid}/qualification',
            path: {
                'orcid': orcid,
            },
            body: body,
            errors: {
                400: `Invalid Qualification representation`,
                500: `Invalid Qualification representation that wasn't trapped (bad fuzzy date or you tried to add a put code)`,
            },
        });
    }

    /**
     * Fetch an Service
     * @returns Service OK
     * @throws ApiError
     */
    public viewService({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<Service> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/service/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
            errors: {
                400: `Invalid putCode or ORCID ID`,
                404: `putCode not found`,
            },
        });
    }

    /**
     * Update an Service
     * @returns any Service updated
     * @throws ApiError
     */
    public updateService({
        orcid,
        putCode,
        body,
    }: {
        orcid: string,
        putCode: string,
        body?: Service,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v3.0/{orcid}/service/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
            body: body,
        });
    }

    /**
     * Delete an Service
     * @returns void
     * @throws ApiError
     */
    public deleteService({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v3.0/{orcid}/service/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
        });
    }

    /**
     * Fetch all services
     * @returns Services successful operation
     * @throws ApiError
     */
    public viewServices({
        orcid,
    }: {
        orcid: string,
    }): CancelablePromise<Services> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/services',
            path: {
                'orcid': orcid,
            },
        });
    }

    /**
     * Fetch an Service summary
     * @returns ServiceSummary successful operation
     * @throws ApiError
     */
    public viewServiceSummary({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<ServiceSummary> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/service/summary/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
        });
    }

    /**
     * Create an Service
     * @returns string successful operation
     * @throws ApiError
     */
    public createService({
        orcid,
        body,
    }: {
        orcid: string,
        body?: Service,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v3.0/{orcid}/service',
            path: {
                'orcid': orcid,
            },
            body: body,
            errors: {
                400: `Invalid Service representation`,
                500: `Invalid Service representation that wasn't trapped (bad fuzzy date or you tried to add a put code)`,
            },
        });
    }

    /**
     * Fetch a Research Resource
     * @returns ResearchResource OK
     * @throws ApiError
     */
    public viewResearchResource({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<ResearchResource> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/research-resource/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
            errors: {
                400: `Invalid putCode or ORCID ID`,
                404: `putCode not found`,
            },
        });
    }

    /**
     * Update a Research Resource
     * @returns any ResearchResource updated
     * @throws ApiError
     */
    public updateResearchResource({
        orcid,
        putCode,
        body,
    }: {
        orcid: string,
        putCode: string,
        body?: ResearchResource,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v3.0/{orcid}/research-resource/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
            body: body,
        });
    }

    /**
     * Delete an Research Resource
     * @returns void
     * @throws ApiError
     */
    public deleteResearchResource({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v3.0/{orcid}/research-resource/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
        });
    }

    /**
     * Fetch all Research Resources
     * @returns ResearchResources successful operation
     * @throws ApiError
     */
    public viewResearchResources({
        orcid,
    }: {
        orcid: string,
    }): CancelablePromise<ResearchResources> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/research-resources',
            path: {
                'orcid': orcid,
            },
        });
    }

    /**
     * Fetch a Research Resource summary
     * @returns ResearchResourceSummary successful operation
     * @throws ApiError
     */
    public viewResearchResourceSummary({
        orcid,
        putCode,
    }: {
        orcid: string,
        putCode: string,
    }): CancelablePromise<ResearchResourceSummary> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/{orcid}/research-resource/summary/{putCode}',
            path: {
                'orcid': orcid,
                'putCode': putCode,
            },
        });
    }

    /**
     * Create a Research Resource
     * @returns string successful operation
     * @throws ApiError
     */
    public createResearchResource({
        orcid,
        body,
    }: {
        orcid: string,
        body?: ResearchResource,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v3.0/{orcid}/research-resource',
            path: {
                'orcid': orcid,
            },
            body: body,
            errors: {
                400: `Invalid ResearchResource representation`,
                500: `Invalid ResearchResource representation that wasn't trapped (bad fuzzy date or you tried to add a put code)`,
            },
        });
    }

    /**
     * Search records
     * @returns any successful operation
     * @throws ApiError
     */
    public searchByQuery1({
        q,
    }: {
        q?: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/csv-search',
            query: {
                'q': q,
            },
        });
    }

    /**
     * Search records
     * @returns any successful operation
     * @throws ApiError
     */
    public searchByQuery2({
        q,
    }: {
        q?: string,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v3.0/expanded-search',
            query: {
                'q': q,
            },
        });
    }

}
