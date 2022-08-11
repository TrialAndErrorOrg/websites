/** Generate by swagger-axios-codegen */
// @ts-nocheck
/* eslint-disable */

/** Generate by swagger-axios-codegen */
/* eslint-disable */
// @ts-nocheck
import axiosStatic, { AxiosInstance, AxiosRequestConfig } from 'axios';

export interface IRequestOptions extends AxiosRequestConfig {}

export interface IRequestConfig {
  method?: any;
  headers?: any;
  url?: any;
  data?: any;
  params?: any;
}

// Add options interface
export interface ServiceOptions {
  axios?: AxiosInstance;
}

// Add default options
export const serviceOptions: ServiceOptions = {};

// Instance selector
export function axios(configs: IRequestConfig, resolve: (p: any) => void, reject: (p: any) => void): Promise<any> {
  if (serviceOptions.axios) {
    return serviceOptions.axios
      .request(configs)
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err);
      });
  } else {
    throw new Error('please inject yourself instance like axios  ');
  }
}

export function getConfigs(method: string, contentType: string, url: string, options: any): IRequestConfig {
  const configs: IRequestConfig = { ...options, method, url };
  configs.headers = {
    ...options.headers,
    'Content-Type': contentType
  };
  return configs;
}

export const basePath = '';

export interface IList<T> extends Array<T> {}
export interface List<T> extends Array<T> {}
export interface IDictionary<TValue> {
  [key: string]: TValue;
}
export interface Dictionary<TValue> extends IDictionary<TValue> {}

export interface IListResult<T> {
  items?: T[];
}

export class ListResultDto<T> implements IListResult<T> {
  items?: T[];
}

export interface IPagedResult<T> extends IListResult<T> {
  totalCount?: number;
  items?: T[];
}

export class PagedResultDto<T = any> implements IPagedResult<T> {
  totalCount?: number;
  items?: T[];
}

// customer definition
// empty

export class MemberApiV20Service {
  /**
   * Fetch all activities
   */
  static viewActivities(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ActivitiesSummaryV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/activities';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Work
   */
  static viewWork(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<WorkV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/work/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update a Work
   */
  static updateWork(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: WorkV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/work/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete a Work
   */
  static deleteWork(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/work/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all works
   */
  static viewWorks(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<WorksSummaryV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/works';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a list of Work
   */
  static createWorks(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: WorkBulkV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/works';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch specified works
   */
  static viewSpecifiedWorks(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCodes: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<WorkBulkV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/works/{putCodes}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCodes}', params['putCodes'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Work Summary
   */
  static viewWorkSummary(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<WorkSummaryV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/work/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a Work
   */
  static createWork(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: WorkV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/work';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Funding
   */
  static viewFunding(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<FundingV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/funding/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update a Funding
   */
  static updateFunding(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: FundingV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/funding/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete a Funding
   */
  static deleteFunding(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/funding/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all fundings
   */
  static viewFundings(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<FundingsV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/fundings';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Funding Summary
   */
  static viewFundingSummary(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<FundingSummaryV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/funding/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a Funding
   */
  static createFunding(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: FundingV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/funding';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Education
   */
  static viewEducation(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<EducationV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/education/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update an Education
   */
  static updateEducation(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: EducationV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/education/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete an Education
   */
  static deleteEducation(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/education/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all educations
   */
  static viewEducations(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<EducationsSummaryV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/educations';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Education summary
   */
  static viewEducationSummary(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<EducationSummaryV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/education/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create an Education
   */
  static createEducation(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: EducationV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/education';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Employment
   */
  static viewEmployment(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<EmploymentV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/employment/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update an Employment
   */
  static updateEmployment(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: EmploymentV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/employment/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete an Employment
   */
  static deleteEmployment(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/employment/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all employments
   */
  static viewEmployments(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<EmploymentsSummaryV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/employments';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Employment Summary
   */
  static viewEmploymentSummary(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<EmploymentSummaryV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/employment/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create an Employment
   */
  static createEmployment(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: EmploymentV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/employment';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Peer Review
   */
  static viewPeerReview(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PeerReviewV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/peer-review/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update a Peer Review
   */
  static updatePeerReview(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: PeerReviewV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/peer-review/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete a Peer Review
   */
  static deletePeerReview(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/peer-review/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all peer reviews
   */
  static viewPeerReviews(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PeerReviewsV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/peer-reviews';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Peer Review Summary
   */
  static viewPeerReviewSummary(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PeerReviewSummaryV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/peer-review/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a Peer Review
   */
  static createPeerReview(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: PeerReviewV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/peer-review';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Group
   */
  static viewGroupIdRecord(
    params: {
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GroupIdRecord> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/group-id-record/{putCode}';
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update a Group
   */
  static updateGroupIdRecord(
    params: {
      /**  */
      putCode: string;
      /**  */
      body?: GroupIdRecord;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/group-id-record/{putCode}';
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete a Group
   */
  static deleteGroupIdRecord(
    params: {
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/group-id-record/{putCode}';
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch Groups
   */
  static viewGroupIdRecords(
    params: {
      /**  */
      pageSize?: string;
      /**  */
      page?: string;
      /**  */
      name?: string;
      /**  */
      groupId?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GroupIdRecords> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/group-id-record';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        'page-size': params['pageSize'],
        page: params['page'],
        name: params['name'],
        'group-id': params['groupId']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a Group
   */
  static createGroupIdRecord(
    params: {
      /**  */
      body?: GroupIdRecord;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/group-id-record';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a notification by id
   */
  static viewPermissionNotification(
    params: {
      /**  */
      orcid: string;
      /**  */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Notification> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/notification-permission/{id}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Archive a notification
   */
  static flagAsArchivedPermissionNotification(
    params: {
      /**  */
      orcid: string;
      /**  */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Notification> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/notification-permission/{id}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Add a notification
   */
  static addPermissionNotification(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: NotificationPermissionV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/notification-permission';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all researcher urls for an ORCID ID
   */
  static viewResearcherUrls(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ResearcherUrlsV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/researcher-urls';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Add a new researcher url for an ORCID ID
   */
  static createResearcherUrl(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: ResearcherUrlV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/researcher-urls';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch one researcher url for an ORCID ID
   */
  static viewResearcherUrl(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ResearcherUrlsV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/researcher-urls/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Edits researcher url for an ORCID ID
   */
  static editResearcherUrl(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: ResearcherUrlV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/researcher-urls/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete one researcher url from an ORCID ID
   */
  static deleteResearcherUrl(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/researcher-urls/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all emails for an ORCID ID
   */
  static viewEmails(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<EmailsV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/email';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch Other name
   */
  static viewOtherName(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<OtherNameV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/other-names/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Edit other name
   */
  static editOtherName(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: OtherNameV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/other-names/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete other name
   */
  static deleteOtherName(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/other-names/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch Other names
   */
  static viewOtherNames(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<OtherNamesV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/other-names';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Add other name
   */
  static createOtherName(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: OtherNameV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/other-names';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch personal details for an ORCID ID
   */
  static viewPersonalDetails(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PersonalDetailsV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/personal-details';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch external identifier
   */
  static viewExternalIdentifier(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PersonExternalIdentifierV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/external-identifiers/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Edit external identifier
   */
  static editExternalIdentifier(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: PersonExternalIdentifierV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/external-identifiers/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete external identifier
   */
  static deleteExternalIdentifier(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/external-identifiers/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch external identifiers
   */
  static viewExternalIdentifiers(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PersonExternalIdentifiersV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/external-identifiers';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Add external identifier
   */
  static createExternalIdentifier(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: PersonExternalIdentifierV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/external-identifiers';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Get biography details
   */
  static viewBiography(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<BiographyV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/biography';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch keyword
   */
  static viewKeyword(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<KeywordV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/keywords/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Edit keyword
   */
  static editKeyword(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: KeywordV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/keywords/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete keyword
   */
  static deleteKeyword(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/keywords/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch keywords
   */
  static viewKeywords(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<KeywordsV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/keywords';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Add keyword
   */
  static createKeyword(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: KeywordV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/keywords';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an address
   */
  static viewAddress(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<AddressV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/address/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Edit an address
   */
  static editAddress(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: AddressV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/address/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete an address
   */
  static deleteAddress(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/address/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all addresses of a profile
   */
  static viewAddresses(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<AddressesV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/address';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Add an address
   */
  static createAddress(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: AddressV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/address';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch person details
   */
  static viewPerson(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PersonV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}/person';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch record details
   */
  static viewRecord(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<RecordV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/{orcid}';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Search records
   */
  static searchByQuery(
    params: {
      /**  */
      q?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<SearchV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/search';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { q: params['q'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch client details
   */
  static viewClient(
    params: {
      /**  */
      clientId: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ClientSummary> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.0/client/{client_id}';
      url = url.replace('{client_id}', params['clientId'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class MemberApiV21Service {
  /**
   * Fetch all activities
   */
  static viewActivitiesV21(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ActivitiesSummaryV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/activities';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Work
   */
  static viewWorkV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<WorkV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/work/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update a Work
   */
  static updateWorkV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: WorkV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/work/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete a Work
   */
  static deleteWorkV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/work/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all works
   */
  static viewWorksV21(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<WorksSummaryV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/works';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a list of Work
   */
  static createWorksV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: WorkBulkV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/works';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch specified works
   */
  static viewSpecifiedWorksV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCodes: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<WorkBulkV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/works/{putCodes}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCodes}', params['putCodes'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Work Summary
   */
  static viewWorkSummaryV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<WorkSummaryV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/work/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a Work
   */
  static createWorkV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: WorkV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/work';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Funding
   */
  static viewFundingV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<FundingV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/funding/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update a Funding
   */
  static updateFundingV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: FundingV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/funding/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete a Funding
   */
  static deleteFundingV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/funding/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all fundings
   */
  static viewFundingsV21(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<FundingsV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/fundings';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Funding Summary
   */
  static viewFundingSummaryV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<FundingSummaryV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/funding/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a Funding
   */
  static createFundingV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: FundingV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/funding';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Education
   */
  static viewEducationV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<EducationV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/education/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update an Education
   */
  static updateEducationV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: EducationV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/education/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete an Education
   */
  static deleteEducationV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/education/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all educations
   */
  static viewEducationsV21(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<EducationsSummaryV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/educations';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Education summary
   */
  static viewEducationSummaryV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<EducationSummaryV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/education/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create an Education
   */
  static createEducationV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: EducationV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/education';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Employment
   */
  static viewEmploymentV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<EmploymentV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/employment/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update an Employment
   */
  static updateEmploymentV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: EmploymentV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/employment/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete an Employment
   */
  static deleteEmploymentV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/employment/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all employments
   */
  static viewEmploymentsV21(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<EmploymentsSummaryV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/employments';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Employment Summary
   */
  static viewEmploymentSummaryV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<EmploymentSummaryV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/employment/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create an Employment
   */
  static createEmploymentV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: EmploymentV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/employment';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Peer Review
   */
  static viewPeerReviewV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PeerReviewV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/peer-review/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update a Peer Review
   */
  static updatePeerReviewV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: PeerReviewV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/peer-review/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete a Peer Review
   */
  static deletePeerReviewV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/peer-review/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all peer reviews
   */
  static viewPeerReviewsV21(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PeerReviewsV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/peer-reviews';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Peer Review Summary
   */
  static viewPeerReviewSummaryV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PeerReviewSummaryV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/peer-review/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a Peer Review
   */
  static createPeerReviewV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: PeerReviewV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/peer-review';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Group
   */
  static viewGroupIdRecordV21(
    params: {
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GroupIdRecord> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/group-id-record/{putCode}';
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update a Group
   */
  static updateGroupIdRecordV21(
    params: {
      /**  */
      putCode: string;
      /**  */
      body?: GroupIdRecord;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/group-id-record/{putCode}';
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete a Group
   */
  static deleteGroupIdRecordV21(
    params: {
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/group-id-record/{putCode}';
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch Groups
   */
  static viewGroupIdRecordsV21(
    params: {
      /**  */
      pageSize?: string;
      /**  */
      page?: string;
      /**  */
      name?: string;
      /**  */
      groupId?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GroupIdRecords> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/group-id-record';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        'page-size': params['pageSize'],
        page: params['page'],
        name: params['name'],
        'group-id': params['groupId']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a Group
   */
  static createGroupIdRecordV21(
    params: {
      /**  */
      body?: GroupIdRecord;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/group-id-record';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a notification by id
   */
  static viewPermissionNotificationV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Notification> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/notification-permission/{id}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Archive a notification
   */
  static flagAsArchivedPermissionNotificationV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Notification> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/notification-permission/{id}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Add a notification
   */
  static addPermissionNotificationV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: NotificationPermissionV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/notification-permission';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all researcher urls for an ORCID ID
   */
  static viewResearcherUrlsV21(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ResearcherUrlsV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/researcher-urls';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Add a new researcher url for an ORCID ID
   */
  static createResearcherUrlV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: ResearcherUrlV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/researcher-urls';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch one researcher url for an ORCID ID
   */
  static viewResearcherUrlV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ResearcherUrlV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/researcher-urls/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Edits researcher url for an ORCID ID
   */
  static editResearcherUrlV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: ResearcherUrlV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/researcher-urls/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete one researcher url from an ORCID ID
   */
  static deleteResearcherUrlV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/researcher-urls/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all emails for an ORCID ID
   */
  static viewEmailsV21(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<EmailsV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/email';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch Other name
   */
  static viewOtherNameV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<OtherNameV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/other-names/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Edit other name
   */
  static editOtherNameV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: OtherNameV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/other-names/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete other name
   */
  static deleteOtherNameV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/other-names/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch Other names
   */
  static viewOtherNamesV21(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<OtherNameV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/other-names';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Add other name
   */
  static createOtherNameV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: OtherNameV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/other-names';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch personal details for an ORCID ID
   */
  static viewPersonalDetailsV21(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PersonalDetailsV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/personal-details';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch external identifier
   */
  static viewExternalIdentifierV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PersonExternalIdentifierV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/external-identifiers/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Edit external identifier
   */
  static editExternalIdentifierV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: PersonExternalIdentifierV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/external-identifiers/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete external identifier
   */
  static deleteExternalIdentifierV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/external-identifiers/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch external identifiers
   */
  static viewExternalIdentifiersV21(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PersonExternalIdentifiersV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/external-identifiers';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Add external identifier
   */
  static createExternalIdentifierV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: PersonExternalIdentifierV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/external-identifiers';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Get biography details
   */
  static viewBiographyV21(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/biography';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch keyword
   */
  static viewKeywordV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<KeywordV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/keywords/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Edit keyword
   */
  static editKeywordV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: KeywordV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/keywords/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete keyword
   */
  static deleteKeywordV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/keywords/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch keywords
   */
  static viewKeywordsV21(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<KeywordsV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/keywords';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Add keyword
   */
  static createKeywordV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: KeywordV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/keywords';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an address
   */
  static viewAddressV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<AddressV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/address/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Edit an address
   */
  static editAddressV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: AddressV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/address/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete an address
   */
  static deleteAddressV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/address/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all addresses of a profile
   */
  static viewAddressesV21(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<AddressesV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/address';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Add an address
   */
  static createAddressV21(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: AddressV2_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/address';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch person details
   */
  static viewPersonV21(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PersonV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}/person';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch record details
   */
  static viewRecordV21(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<RecordV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/{orcid}';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Search records
   */
  static searchByQueryV21(
    params: {
      /**  */
      q?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<SearchV2_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/search';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { q: params['q'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch client details
   */
  static viewClientV21(
    params: {
      /**  */
      clientId: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ClientSummary> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v2.1/client/{client_id}';
      url = url.replace('{client_id}', params['clientId'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class DevelopmentMemberApiV30Service {
  /**
   *
   */
  static viewStatusJson(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/apiStatus';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all activities
   */
  static viewActivitiesv3(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ActivitiesSummaryV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/activities';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Work
   */
  static viewWorkv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<WorkV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/work/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update a Work
   */
  static updateWorkv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: WorkV3_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/work/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete a Work
   */
  static deleteWorkv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/work/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all works
   */
  static viewWorksv3(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<WorksSummaryV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/works';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a list of Works
   */
  static createWorksv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: WorkBulkV3_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/works';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch specified works
   */
  static viewSpecifiedWorksv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCodes: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<WorkBulkV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/works/{putCodes}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCodes}', params['putCodes'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Work Summary
   */
  static viewWorkSummaryv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<WorkSummaryV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/work/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a Work
   */
  static createWorkv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: WorkV3_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/work';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Funding
   */
  static viewFundingv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<FundingV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/funding/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update a Funding
   */
  static updateFundingv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: FundingV3_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/funding/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete a Funding
   */
  static deleteFundingv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/funding/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all fundings
   */
  static viewFundingsv3(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<FundingsV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/fundings';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Funding Summary
   */
  static viewFundingSummaryv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<FundingSummaryV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/funding/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a Funding
   */
  static createFundingv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: FundingV3_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/funding';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Education
   */
  static viewEducationv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<EducationV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/education/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update an Education
   */
  static updateEducationv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: EducationV3_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/education/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete an Education
   */
  static deleteEducationv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/education/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all educations
   */
  static viewEducationsv3(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<EducationsSummaryV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/educations';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Education summary
   */
  static viewEducationSummaryv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<EducationSummaryV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/education/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create an Education
   */
  static createEducationv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: EducationV3_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/education';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Employment
   */
  static viewEmploymentv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<EmploymentV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/employment/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update an Employment
   */
  static updateEmploymentv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: EmploymentV3_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/employment/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete an Employment
   */
  static deleteEmploymentv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/employment/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all employments
   */
  static viewEmploymentsv3(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<EmploymentsSummaryV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/employments';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Employment Summary
   */
  static viewEmploymentSummaryv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<EmploymentSummaryV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/employment/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create an Employment
   */
  static createEmploymentv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: EmploymentV3_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/employment';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Peer Review
   */
  static viewPeerReviewv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PeerReviewV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/peer-review/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update a Peer Review
   */
  static updatePeerReviewv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: PeerReviewV3_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/peer-review/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete a Peer Review
   */
  static deletePeerReviewv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/peer-review/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all peer reviews
   */
  static viewPeerReviewsv3(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PeerReviewsV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/peer-reviews';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Peer Review Summary
   */
  static viewPeerReviewSummaryv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PeerReviewSummaryV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/peer-review/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a Peer Review
   */
  static createPeerReviewv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: PeerReviewV3_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/peer-review';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Group
   */
  static viewGroupIdRecordv3(
    params: {
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GroupIdRecord> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/group-id-record/{putCode}';
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update a Group
   */
  static updateGroupIdRecordv3(
    params: {
      /**  */
      putCode: string;
      /**  */
      body?: GroupIdRecord;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/group-id-record/{putCode}';
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete a Group
   */
  static deleteGroupIdRecordv3(
    params: {
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/group-id-record/{putCode}';
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch Groups
   */
  static viewGroupIdRecordsv3(
    params: {
      /**  */
      pageSize?: string;
      /**  */
      page?: string;
      /**  */
      name?: string;
      /**  */
      groupId?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GroupIdRecords> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/group-id-record';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        'page-size': params['pageSize'],
        page: params['page'],
        name: params['name'],
        'group-id': params['groupId']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a Group
   */
  static createGroupIdRecordv3(
    params: {
      /**  */
      body?: GroupIdRecord;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/group-id-record';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a notification by id
   */
  static viewPermissionNotificationv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Notification> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/notification-permission/{id}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Archive a notification
   */
  static flagAsArchivedPermissionNotificationv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Notification> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/notification-permission/{id}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Add a notification
   */
  static addPermissionNotificationv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: NotificationPermissionV3_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/notification-permission';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all researcher urls for an ORCID ID
   */
  static viewResearcherUrlsv3(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/researcher-urls';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Add a new researcher url for an ORCID ID
   */
  static createResearcherUrlv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: ResearcherUrlV3_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/researcher-urls';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch one researcher url for an ORCID ID
   */
  static viewResearcherUrlv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/researcher-urls/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Edits researcher url for an ORCID ID
   */
  static editResearcherUrlv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: ResearcherUrlV3_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/researcher-urls/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete one researcher url from an ORCID ID
   */
  static deleteResearcherUrlv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/researcher-urls/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all emails for an ORCID ID
   */
  static viewEmailsv3(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/email';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch Other name
   */
  static viewOtherNamev3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/other-names/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Edit other name
   */
  static editOtherNamev3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: OtherNameV3_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/other-names/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete other name
   */
  static deleteOtherNamev3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/other-names/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch Other names
   */
  static viewOtherNamesv3(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/other-names';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Add other name
   */
  static createOtherNamev3(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: OtherNameV3_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/other-names';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch personal details for an ORCID ID
   */
  static viewPersonalDetailsv3(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PersonalDetailsV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/personal-details';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch external identifier
   */
  static viewExternalIdentifierv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/external-identifiers/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Edit external identifier
   */
  static editExternalIdentifierv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: PersonExternalIdentifierV3_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/external-identifiers/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete external identifier
   */
  static deleteExternalIdentifierv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/external-identifiers/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch external identifiers
   */
  static viewExternalIdentifiersv3(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/external-identifiers';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Add external identifier
   */
  static createExternalIdentifierv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: PersonExternalIdentifierV3_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/external-identifiers';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Get biography details
   */
  static viewBiographyv3(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<BiographyV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/biography';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch keyword
   */
  static viewKeywordv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/keywords/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Edit keyword
   */
  static editKeywordv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: KeywordV3_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/keywords/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete keyword
   */
  static deleteKeywordv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/keywords/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch keywords
   */
  static viewKeywordsv3(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/keywords';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Add keyword
   */
  static createKeywordv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: KeywordV3_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/keywords';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an address
   */
  static viewAddressv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/address/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Edit an address
   */
  static editAddressv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: AddressV3_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/address/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete an address
   */
  static deleteAddressv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/address/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all addresses of a profile
   */
  static viewAddressesv3(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<AddressesV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/address';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Add an address
   */
  static createAddressv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: AddressV3_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/address';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch person details
   */
  static viewPersonv3(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/person';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch record details
   */
  static viewRecordv3(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<RecordV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Search records
   */
  static searchByQueryv3(
    params: {
      /**  */
      q?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<SearchV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/search';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { q: params['q'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch client details
   */
  static viewClientv3(
    params: {
      /**  */
      clientId: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/client/{client_id}';
      url = url.replace('{client_id}', params['clientId'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Distinction
   */
  static viewDistinctionv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<DistinctionV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/distinction/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update an Distinction
   */
  static updateDistinctionv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: DistinctionV3_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/distinction/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete an Distinction
   */
  static deleteDistinctionv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/distinction/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all distinctions
   */
  static viewDistinctionsv3(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<DistinctionsSummaryV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/distinctions';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Distinction summary
   */
  static viewDistinctionSummaryv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<DistinctionSummaryV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/distinction/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create an Distinction
   */
  static createDistinctionv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: DistinctionV3_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/distinction';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an InvitedPosition
   */
  static viewInvitedPositionv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<InvitedPositionV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/invited-position/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update an InvitedPosition
   */
  static updateInvitedPositionv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: InvitedPositionV3_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/invited-position/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete an InvitedPosition
   */
  static deleteInvitedPositionv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/invited-position/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all invitedPositions
   */
  static viewInvitedPositionsv3(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<InvitedPositionsV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/invited-positions';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an InvitedPosition summary
   */
  static viewInvitedPositionSummaryv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<InvitedPositionSummaryV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/invited-position/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create an InvitedPosition
   */
  static createInvitedPositionv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: InvitedPositionV3_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/invited-position';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Membership
   */
  static viewMembershipv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<MembershipV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/membership/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update an Membership
   */
  static updateMembershipv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: MembershipV3_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/membership/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete an Membership
   */
  static deleteMembershipv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/membership/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all memberships
   */
  static viewMembershipsv3(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<MembershipsV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/memberships';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Membership summary
   */
  static viewMembershipSummaryv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<MembershipSummaryV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/membership/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create an Membership
   */
  static createMembershipv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: MembershipV3_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/membership';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Qualification
   */
  static viewQualificationv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<QualificationV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/qualification/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update an Qualification
   */
  static updateQualificationv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: QualificationV3_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/qualification/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete an Qualification
   */
  static deleteQualificationv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/qualification/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all qualifications
   */
  static viewQualificationsv3(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<QualificationsV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/qualifications';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Qualification summary
   */
  static viewQualificationSummaryv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<QualificationSummaryV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/qualification/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create an Qualification
   */
  static createQualificationv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: QualificationV3_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/qualification';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Service
   */
  static viewServicev3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ServiceV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/service/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update an Service
   */
  static updateServicev3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: ServiceV3_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/service/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete an Service
   */
  static deleteServicev3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/service/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all services
   */
  static viewServicesv3(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ServicesV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/services';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Service summary
   */
  static viewServiceSummaryv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ServiceSummaryV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/service/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create an Service
   */
  static createServicev3(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: ServiceV3_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/service';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Research Resource
   */
  static viewResearchResourcev3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ResearchResourceV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/research-resource/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update a Research Resource
   */
  static updateResearchResourcev3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: ResearchResourceV3_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/research-resource/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete an Research Resource
   */
  static deleteResearchResourcev3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/research-resource/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all Research Resources
   */
  static viewResearchResourcesv3(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ResearchResourcesV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/research-resources';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Research Resource summary
   */
  static viewResearchResourceSummaryv3(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ResearchResourceSummaryV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/research-resource/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a Research Resource
   */
  static createResearchResourcev3(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: ResearchResourceV3_0;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/research-resource';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Search records
   */
  static searchByQueryv31(
    params: {
      /**  */
      q?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/csv-search';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { q: params['q'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Search records
   */
  static searchByQueryv32(
    params: {
      /**  */
      q?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/expanded-search';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { q: params['q'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
}

export class DevelopmentMemberApiV30Rc1Service {
  /**
   *
   */
  static viewStatusJson(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/apiStatus';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all activities
   */
  static viewActivitiesV3Rc1(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ActivitiesSummaryV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/activities';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Work
   */
  static viewWorkV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<WorkV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/work/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update a Work
   */
  static updateWorkV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: WorkV3_0_rc1;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/work/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete a Work
   */
  static deleteWorkV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/work/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all works
   */
  static viewWorksV3Rc1(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<WorksSummaryV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/works';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a list of Works
   */
  static createWorksV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: WorkBulkV3_0_rc1;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<WorkBulkV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/works';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch specified works
   */
  static viewSpecifiedWorksV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCodes: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<WorkBulkV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/works/{putCodes}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCodes}', params['putCodes'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Work Summary
   */
  static viewWorkSummaryV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<WorkSummaryV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/work/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a Work
   */
  static createWorkV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: WorkV3_0_rc1;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/work';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Funding
   */
  static viewFundingV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<FundingV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/funding/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update a Funding
   */
  static updateFundingV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: FundingV3_0_rc1;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/funding/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete a Funding
   */
  static deleteFundingV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/funding/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all fundings
   */
  static viewFundingsV3Rc1(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<FundingsV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/fundings';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Funding Summary
   */
  static viewFundingSummaryV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<FundingSummaryV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/funding/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a Funding
   */
  static createFundingV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: FundingV3_0_rc1;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/funding';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Education
   */
  static viewEducationV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<EducationV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/education/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update an Education
   */
  static updateEducationV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: EducationV3_0_rc1;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/education/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete an Education
   */
  static deleteEducationV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/education/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all educations
   */
  static viewEducationsV3Rc1(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<EducationsSummaryV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/educations';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Education summary
   */
  static viewEducationSummaryV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<EducationSummaryV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/education/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create an Education
   */
  static createEducationV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: EducationV3_0_rc1;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/education';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Employment
   */
  static viewEmploymentV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<EmploymentV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/employment/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update an Employment
   */
  static updateEmploymentV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: EmploymentV3_0_rc1;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/employment/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete an Employment
   */
  static deleteEmploymentV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/employment/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all employments
   */
  static viewEmploymentsV3Rc1(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<EmploymentsSummaryV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/employments';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Employment Summary
   */
  static viewEmploymentSummaryV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<EmploymentSummaryV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/employment/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create an Employment
   */
  static createEmploymentV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: EmploymentV3_0_rc1;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/employment';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Peer Review
   */
  static viewPeerReviewV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PeerReviewV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/peer-review/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update a Peer Review
   */
  static updatePeerReviewV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: PeerReviewV3_0_rc1;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/peer-review/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete a Peer Review
   */
  static deletePeerReviewV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/peer-review/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all peer reviews
   */
  static viewPeerReviewsV3Rc1(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PeerReviewsV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/peer-reviews';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Peer Review Summary
   */
  static viewPeerReviewSummaryV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PeerReviewSummaryV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/peer-review/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a Peer Review
   */
  static createPeerReviewV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: PeerReviewV3_0_rc1;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/peer-review';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Group
   */
  static viewGroupIdRecordV3Rc1(
    params: {
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GroupIdRecord> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/group-id-record/{putCode}';
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update a Group
   */
  static updateGroupIdRecordV3Rc1(
    params: {
      /**  */
      putCode: string;
      /**  */
      body?: GroupIdRecord;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/group-id-record/{putCode}';
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete a Group
   */
  static deleteGroupIdRecordV3Rc1(
    params: {
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/group-id-record/{putCode}';
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch Groups
   */
  static viewGroupIdRecordsV3Rc1(
    params: {
      /**  */
      pageSize?: string;
      /**  */
      page?: string;
      /**  */
      name?: string;
      /**  */
      groupId?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GroupIdRecords> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/group-id-record';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        'page-size': params['pageSize'],
        page: params['page'],
        name: params['name'],
        'group-id': params['groupId']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a Group
   */
  static createGroupIdRecordV3Rc1(
    params: {
      /**  */
      body?: GroupIdRecord;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/group-id-record';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a notification by id
   */
  static viewPermissionNotificationV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Notification> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/notification-permission/{id}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Archive a notification
   */
  static flagAsArchivedPermissionNotificationV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Notification> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/notification-permission/{id}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Add a notification
   */
  static addPermissionNotificationV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: NotificationPermissionV3_0_rc1;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/notification-permission';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all researcher urls for an ORCID ID
   */
  static viewResearcherUrlsV3Rc1(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/researcher-urls';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Add a new researcher url for an ORCID ID
   */
  static createResearcherUrlV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: ResearcherUrlV3_0_rc1;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/researcher-urls';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch one researcher url for an ORCID ID
   */
  static viewResearcherUrlV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/researcher-urls/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Edits researcher url for an ORCID ID
   */
  static editResearcherUrlV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: ResearcherUrlV3_0_rc1;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/researcher-urls/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete one researcher url from an ORCID ID
   */
  static deleteResearcherUrlV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/researcher-urls/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all emails for an ORCID ID
   */
  static viewEmailsV3Rc1(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/email';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch Other name
   */
  static viewOtherNameV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/other-names/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Edit other name
   */
  static editOtherNameV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: OtherNameV3_0_rc1;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/other-names/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete other name
   */
  static deleteOtherNameV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/other-names/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch Other names
   */
  static viewOtherNamesV3Rc1(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/other-names';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Add other name
   */
  static createOtherNameV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: OtherNameV3_0_rc1;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/other-names';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch personal details for an ORCID ID
   */
  static viewPersonalDetailsV3Rc1(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PersonalDetailsV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/personal-details';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch external identifier
   */
  static viewExternalIdentifierV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/external-identifiers/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Edit external identifier
   */
  static editExternalIdentifierV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: PersonExternalIdentifierV3_0_rc1;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/external-identifiers/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete external identifier
   */
  static deleteExternalIdentifierV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/external-identifiers/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch external identifiers
   */
  static viewExternalIdentifiersV3Rc1(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/external-identifiers';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Add external identifier
   */
  static createExternalIdentifierV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: PersonExternalIdentifierV3_0_rc1;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/external-identifiers';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Get biography details
   */
  static viewBiographyV3Rc1(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<BiographyV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/biography';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch keyword
   */
  static viewKeywordV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/keywords/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Edit keyword
   */
  static editKeywordV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: KeywordV3_0_rc1;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/keywords/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete keyword
   */
  static deleteKeywordV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/keywords/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch keywords
   */
  static viewKeywordsV3Rc1(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/keywords';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Add keyword
   */
  static createKeywordV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: KeywordV3_0_rc1;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/keywords';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an address
   */
  static viewAddressV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/address/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Edit an address
   */
  static editAddressV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: AddressV3_0_rc1;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/address/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete an address
   */
  static deleteAddressV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/address/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all addresses of a profile
   */
  static viewAddressesV3Rc1(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<AddressesV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/address';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Add an address
   */
  static createAddressV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: AddressV3_0_rc1;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/address';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch person details
   */
  static viewPersonV3Rc1(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/person';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch record details
   */
  static viewRecordV3Rc1(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<RecordV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Search records
   */
  static searchByQueryV3Rc1(
    params: {
      /**  */
      q?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<SearchV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/search';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { q: params['q'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch client details
   */
  static viewClientV3Rc1(
    params: {
      /**  */
      clientId: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/client/{client_id}';
      url = url.replace('{client_id}', params['clientId'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Distinction
   */
  static viewDistinctionV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<DistinctionV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/distinction/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update an Distinction
   */
  static updateDistinctionV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: DistinctionV3_0_rc1;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/distinction/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete an Distinction
   */
  static deleteDistinctionV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/distinction/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all distinctions
   */
  static viewDistinctionsV3Rc1(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<DistinctionsV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/distinctions';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Distinction summary
   */
  static viewDistinctionSummaryV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<DistinctionSummaryV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/distinction/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create an Distinction
   */
  static createDistinctionV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: DistinctionV3_0_rc1;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/distinction';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an InvitedPosition
   */
  static viewInvitedPositionV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<InvitedPositionV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/invited-position/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update an InvitedPosition
   */
  static updateInvitedPositionV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: InvitedPositionV3_0_rc1;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/invited-position/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete an InvitedPosition
   */
  static deleteInvitedPositionV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/invited-position/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all invitedPositions
   */
  static viewInvitedPositionsV3Rc1(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<InvitedPositionsV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/invited-positions';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an InvitedPosition summary
   */
  static viewInvitedPositionSummaryV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<InvitedPositionSummaryV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/invited-position/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create an InvitedPosition
   */
  static createInvitedPositionV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: InvitedPositionV3_0_rc1;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/invited-position';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Membership
   */
  static viewMembershipV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<MembershipV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/membership/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update an Membership
   */
  static updateMembershipV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: MembershipV3_0_rc1;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/membership/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete an Membership
   */
  static deleteMembershipV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/membership/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all memberships
   */
  static viewMembershipsV3Rc1(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<MembershipsV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/memberships';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Membership summary
   */
  static viewMembershipSummaryV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<MembershipSummaryV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/membership/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create an Membership
   */
  static createMembershipV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: MembershipV3_0_rc1;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/membership';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Qualification
   */
  static viewQualificationV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<QualificationV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/qualification/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update an Qualification
   */
  static updateQualificationV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: QualificationV3_0_rc1;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/qualification/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete an Qualification
   */
  static deleteQualificationV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/qualification/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all qualifications
   */
  static viewQualificationsV3Rc1(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<QualificationsV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/qualifications';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Qualification summary
   */
  static viewQualificationSummaryV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<QualificationSummaryV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/qualification/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create an Qualification
   */
  static createQualificationV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: QualificationV3_0_rc1;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/qualification';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Service
   */
  static viewServiceV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ServiceV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/service/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update an Service
   */
  static updateServiceV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: ServiceV3_0_rc1;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/service/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete an Service
   */
  static deleteServiceV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/service/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all services
   */
  static viewServicesV3Rc1(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ServicesV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/services';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Service summary
   */
  static viewServiceSummaryV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ServiceSummaryV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/service/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create an Service
   */
  static createServiceV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: ServiceV3_0_rc1;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/service';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Research Resource
   */
  static viewResearchResourceV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ResearchResourceV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/research-resource/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update a Research Resource
   */
  static updateResearchResourceV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: ResearchResourceV3_0_rc1;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/research-resource/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete an Research Resource
   */
  static deleteResearchResourceV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/research-resource/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all Research Resources
   */
  static viewResearchResourcesV3Rc1(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ResearchResourcesV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/research-resources';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Research Resource summary
   */
  static viewResearchResourceSummaryV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ResearchResourceSummaryV3_0_rc1> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/research-resource/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a Research Resource
   */
  static createResearchResourceV3Rc1(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: ResearchResourceV3_0_rc1;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc1/{orcid}/research-resource';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export class DevelopmentMemberApiV30Rc2Service {
  /**
   *
   */
  static viewStatusJson(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/apiStatus';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all activities
   */
  static viewActivitiesv3Rc2(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ActivitiesSummaryV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/activities';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Work
   */
  static viewWorkv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<WorkV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/work/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update a Work
   */
  static updateWorkv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: WorkV3_0_rc2;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/work/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete a Work
   */
  static deleteWorkv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/work/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all works
   */
  static viewWorksv3Rc2(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<WorksSummaryV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/works';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a list of Works
   */
  static createWorksv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: WorkBulkV3_0_rc2;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/works';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch specified works
   */
  static viewSpecifiedWorksv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCodes: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<WorkBulkV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/works/{putCodes}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCodes}', params['putCodes'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Work Summary
   */
  static viewWorkSummaryv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<WorkSummaryV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/work/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a Work
   */
  static createWorkv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: WorkV3_0_rc2;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/work';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Funding
   */
  static viewFundingv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<FundingV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/funding/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update a Funding
   */
  static updateFundingv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: FundingV3_0_rc2;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/funding/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete a Funding
   */
  static deleteFundingv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/funding/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all fundings
   */
  static viewFundingsv3Rc2(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<FundingsV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/fundings';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Funding Summary
   */
  static viewFundingSummaryv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<FundingSummaryV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/funding/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a Funding
   */
  static createFundingv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: FundingV3_0_rc2;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/funding';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Education
   */
  static viewEducationv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<EducationV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/education/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update an Education
   */
  static updateEducationv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: EducationV3_0_rc2;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/education/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete an Education
   */
  static deleteEducationv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/education/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all educations
   */
  static viewEducationsv3Rc2(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<EducationsSummaryV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/educations';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Education summary
   */
  static viewEducationSummaryv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<EducationSummaryV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/education/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create an Education
   */
  static createEducationv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: EducationV3_0_rc2;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/education';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Employment
   */
  static viewEmploymentv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<EmploymentV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/employment/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update an Employment
   */
  static updateEmploymentv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: EmploymentV3_0_rc2;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/employment/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete an Employment
   */
  static deleteEmploymentv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/employment/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all employments
   */
  static viewEmploymentsv3Rc2(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<EmploymentsSummaryV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/employments';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Employment Summary
   */
  static viewEmploymentSummaryv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<EmploymentSummaryV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/employment/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create an Employment
   */
  static createEmploymentv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: EmploymentV3_0_rc2;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/employment';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Peer Review
   */
  static viewPeerReviewv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PeerReviewV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/peer-review/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update a Peer Review
   */
  static updatePeerReviewv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: PeerReviewV3_0_rc2;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/peer-review/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete a Peer Review
   */
  static deletePeerReviewv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/peer-review/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all peer reviews
   */
  static viewPeerReviewsv3Rc2(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PeerReviewsV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/peer-reviews';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Peer Review Summary
   */
  static viewPeerReviewSummaryv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PeerReviewSummaryV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/peer-review/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a Peer Review
   */
  static createPeerReviewv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: PeerReviewV3_0_rc2;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/peer-review';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Group
   */
  static viewGroupIdRecordv3Rc2(
    params: {
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GroupIdRecord> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/group-id-record/{putCode}';
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update a Group
   */
  static updateGroupIdRecordv3Rc2(
    params: {
      /**  */
      putCode: string;
      /**  */
      body?: GroupIdRecord;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/group-id-record/{putCode}';
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete a Group
   */
  static deleteGroupIdRecordv3Rc2(
    params: {
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/group-id-record/{putCode}';
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch Groups
   */
  static viewGroupIdRecordsv3Rc2(
    params: {
      /**  */
      pageSize?: string;
      /**  */
      page?: string;
      /**  */
      name?: string;
      /**  */
      groupId?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<GroupIdRecords> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/group-id-record';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = {
        'page-size': params['pageSize'],
        page: params['page'],
        name: params['name'],
        'group-id': params['groupId']
      };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a Group
   */
  static createGroupIdRecordv3Rc2(
    params: {
      /**  */
      body?: GroupIdRecord;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/group-id-record';

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a notification by id
   */
  static viewPermissionNotificationv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Notification> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/notification-permission/{id}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Archive a notification
   */
  static flagAsArchivedPermissionNotificationv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      id: number;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<Notification> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/notification-permission/{id}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{id}', params['id'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Add a notification
   */
  static addPermissionNotificationv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: NotificationPermissionV3_0_rc2;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/notification-permission';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all researcher urls for an ORCID ID
   */
  static viewResearcherUrlsv3Rc2(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/researcher-urls';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Add a new researcher url for an ORCID ID
   */
  static createResearcherUrlv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: ResearcherUrlV3_0_rc2;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/researcher-urls';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch one researcher url for an ORCID ID
   */
  static viewResearcherUrlv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/researcher-urls/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Edits researcher url for an ORCID ID
   */
  static editResearcherUrlv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: ResearcherUrlV3_0_rc2;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/researcher-urls/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete one researcher url from an ORCID ID
   */
  static deleteResearcherUrlv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/researcher-urls/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all emails for an ORCID ID
   */
  static viewEmailsv3Rc2(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/email';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch Other name
   */
  static viewOtherNamev3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/other-names/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Edit other name
   */
  static editOtherNamev3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: OtherNameV3_0_rc2;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/other-names/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete other name
   */
  static deleteOtherNamev3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/other-names/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch Other names
   */
  static viewOtherNamesv3Rc2(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/other-names';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Add other name
   */
  static createOtherNamev3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: OtherNameV3_0_rc2;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/other-names';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch personal details for an ORCID ID
   */
  static viewPersonalDetailsv3Rc2(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<PersonalDetailsV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/personal-details';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch external identifier
   */
  static viewExternalIdentifierv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/external-identifiers/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Edit external identifier
   */
  static editExternalIdentifierv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: PersonExternalIdentifierV3_0_rc2;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/external-identifiers/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete external identifier
   */
  static deleteExternalIdentifierv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/external-identifiers/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch external identifiers
   */
  static viewExternalIdentifiersv3Rc2(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/external-identifiers';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Add external identifier
   */
  static createExternalIdentifierv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: PersonExternalIdentifierV3_0_rc2;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/external-identifiers';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Get biography details
   */
  static viewBiographyv3Rc2(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<BiographyV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/biography';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch keyword
   */
  static viewKeywordv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/keywords/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Edit keyword
   */
  static editKeywordv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: KeywordV3_0_rc2;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/keywords/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete keyword
   */
  static deleteKeywordv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/keywords/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch keywords
   */
  static viewKeywordsv3Rc2(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/keywords';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Add keyword
   */
  static createKeywordv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: KeywordV3_0_rc2;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/keywords';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an address
   */
  static viewAddressv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/address/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Edit an address
   */
  static editAddressv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: AddressV3_0_rc2;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/address/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete an address
   */
  static deleteAddressv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/address/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all addresses of a profile
   */
  static viewAddressesv3Rc2(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<AddressesV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/address';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Add an address
   */
  static createAddressv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: AddressV3_0_rc2;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/address';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch person details
   */
  static viewPersonv3Rc2(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/person';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch record details
   */
  static viewRecordv3Rc2(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<RecordV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Search records
   */
  static searchByQueryv3Rc2(
    params: {
      /**  */
      q?: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<SearchV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/search';

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);
      configs.params = { q: params['q'] };

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch client details
   */
  static viewClientv3Rc2(
    params: {
      /**  */
      clientId: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/client/{client_id}';
      url = url.replace('{client_id}', params['clientId'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Distinction
   */
  static viewDistinctionv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<DistinctionV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/distinction/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update an Distinction
   */
  static updateDistinctionv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: DistinctionV3_0_rc2;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/distinction/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete an Distinction
   */
  static deleteDistinctionv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/distinction/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all distinctions
   */
  static viewDistinctionsv3Rc2(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<DistinctionsSummaryV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/distinctions';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Distinction summary
   */
  static viewDistinctionSummaryv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<DistinctionSummaryV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/distinction/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create an Distinction
   */
  static createDistinctionv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: DistinctionV3_0_rc2;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/distinction';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an InvitedPosition
   */
  static viewInvitedPositionv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<InvitedPositionV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/invited-position/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update an InvitedPosition
   */
  static updateInvitedPositionv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: InvitedPositionV3_0_rc2;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/invited-position/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete an InvitedPosition
   */
  static deleteInvitedPositionv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/invited-position/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all invitedPositions
   */
  static viewInvitedPositionsv3Rc2(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<InvitedPositionsV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/invited-positions';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an InvitedPosition summary
   */
  static viewInvitedPositionSummaryv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<InvitedPositionSummaryV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/invited-position/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create an InvitedPosition
   */
  static createInvitedPositionv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: InvitedPositionV3_0_rc2;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/invited-position';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Membership
   */
  static viewMembershipv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<MembershipV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/membership/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update an Membership
   */
  static updateMembershipv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: MembershipV3_0_rc2;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/membership/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete an Membership
   */
  static deleteMembershipv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/membership/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all memberships
   */
  static viewMembershipsv3Rc2(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<MembershipsV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/memberships';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Membership summary
   */
  static viewMembershipSummaryv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<MembershipSummaryV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/membership/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create an Membership
   */
  static createMembershipv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: MembershipV3_0_rc2;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/membership';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Qualification
   */
  static viewQualificationv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<QualificationV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/qualification/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update an Qualification
   */
  static updateQualificationv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: QualificationV3_0_rc2;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/qualification/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete an Qualification
   */
  static deleteQualificationv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/qualification/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all qualifications
   */
  static viewQualificationsv3Rc2(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<QualificationsV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/qualifications';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Qualification summary
   */
  static viewQualificationSummaryv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<QualificationSummaryV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/qualification/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create an Qualification
   */
  static createQualificationv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: QualificationV3_0_rc2;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/qualification';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Service
   */
  static viewServicev3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ServiceV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/service/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update an Service
   */
  static updateServicev3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: ServiceV3_0_rc2;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/service/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete an Service
   */
  static deleteServicev3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/service/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all services
   */
  static viewServicesv3Rc2(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ServicesV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/services';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch an Service summary
   */
  static viewServiceSummaryv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ServiceSummaryV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/service/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create an Service
   */
  static createServicev3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: ServiceV3_0_rc2;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/service';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Research Resource
   */
  static viewResearchResourcev3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ResearchResourceV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/research-resource/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Update a Research Resource
   */
  static updateResearchResourcev3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
      /**  */
      body?: ResearchResourceV3_0_rc2;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/research-resource/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Delete an Research Resource
   */
  static deleteResearchResourcev3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/research-resource/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options);

      let data = null;

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch all Research Resources
   */
  static viewResearchResourcesv3Rc2(
    params: {
      /**  */
      orcid: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ResearchResourcesV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/research-resources';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Fetch a Research Resource summary
   */
  static viewResearchResourceSummaryv3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      putCode: string;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<ResearchResourceSummaryV3_0_rc2> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/research-resource/summary/{putCode}';
      url = url.replace('{orcid}', params['orcid'] + '');
      url = url.replace('{putCode}', params['putCode'] + '');

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options);

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject);
    });
  }
  /**
   * Create a Research Resource
   */
  static createResearchResourcev3Rc2(
    params: {
      /**  */
      orcid: string;
      /**  */
      body?: ResearchResourceV3_0_rc2;
    } = {} as any,
    options: IRequestOptions = {}
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0_rc2/{orcid}/research-resource';
      url = url.replace('{orcid}', params['orcid'] + '');

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options);

      let data = params['body'];

      configs.data = data;

      axios(configs, resolve, reject);
    });
  }
}

export interface ActivitiesSummaryV2_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV2_0;

  /**  */
  educations?: EducationsSummaryV2_0;

  /**  */
  employments?: EmploymentsSummaryV2_0;

  /**  */
  fundings?: FundingsV2_0;

  /**  */
  'peer-reviews'?: PeerReviewsV2_0;

  /**  */
  works?: WorksSummaryV2_0;

  /**  */
  path?: string;
}

export interface CreatedDateV2_0 {
  /**  */
  value?: Date;
}

export interface DayV2_0 {
  /**  */
  value?: string;
}

export interface DisambiguatedOrganizationV2_0 {
  /**  */
  'disambiguated-organization-identifier': string;

  /**  */
  'disambiguation-source': string;
}

export interface EducationSummaryV2_0 {
  /**  */
  'created-date'?: CreatedDateV2_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV2_0;

  /**  */
  source?: SourceV2_0;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date'?: FuzzyDateV2_0;

  /**  */
  'end-date'?: FuzzyDateV2_0;

  /**  */
  organization?: OrganizationV2_0;

  /**  */
  visibility?: EnumEducationSummaryV2_0Visibility;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;
}

export interface EducationsSummaryV2_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV2_0;

  /**  */
  'education-summary'?: EducationSummaryV2_0[];

  /**  */
  path?: string;
}

export interface EmploymentSummaryV2_0 {
  /**  */
  'created-date'?: CreatedDateV2_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV2_0;

  /**  */
  source?: SourceV2_0;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date'?: FuzzyDateV2_0;

  /**  */
  'end-date'?: FuzzyDateV2_0;

  /**  */
  organization?: OrganizationV2_0;

  /**  */
  visibility?: EnumEmploymentSummaryV2_0Visibility;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;
}

export interface EmploymentsSummaryV2_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV2_0;

  /**  */
  'employment-summary'?: EmploymentSummaryV2_0[];

  /**  */
  path?: string;
}

export interface ExternalIDV2_0 {
  /**  */
  'external-id-type': string;

  /**  */
  'external-id-value': string;

  /**  */
  'external-id-url'?: UrlV2_0;

  /**  */
  'external-id-relationship'?: EnumExternalIDV2_0ExternalIdRelationship;
}

export interface ExternalIDsV2_0 {
  /**  */
  'external-id'?: ExternalIDV2_0[];
}

export interface FundingGroupV2_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV2_0;

  /**  */
  'external-ids'?: ExternalIDsV2_0;

  /**  */
  'funding-summary'?: FundingSummaryV2_0[];
}

export interface FundingSummaryV2_0 {
  /**  */
  'created-date'?: CreatedDateV2_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV2_0;

  /**  */
  source?: SourceV2_0;

  /**  */
  title: FundingTitleV2_0;

  /**  */
  'external-ids'?: ExternalIDsV2_0;

  /**  */
  type: EnumFundingSummaryV2_0Type;

  /**  */
  'start-date'?: FuzzyDateV2_0;

  /**  */
  'end-date'?: FuzzyDateV2_0;

  /**  */
  organization: OrganizationV2_0;

  /**  */
  visibility?: EnumFundingSummaryV2_0Visibility;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  'display-index'?: string;
}

export interface FundingTitleV2_0 {
  /**  */
  title?: TitleV2_0;

  /**  */
  'translated-title'?: TranslatedTitleV2_0;
}

export interface FundingsV2_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV2_0;

  /**  */
  group?: FundingGroupV2_0[];

  /**  */
  path?: string;
}

export interface FuzzyDateV2_0 {
  /**  */
  year: YearV2_0;

  /**  */
  month?: MonthV2_0;

  /**  */
  day?: DayV2_0;
}

export interface LastModifiedDateV2_0 {
  /**  */
  value?: Date;
}

export interface MonthV2_0 {
  /**  */
  value?: string;
}

export interface OrganizationAddressV2_0 {
  /**  */
  city: string;

  /**  */
  region?: string;

  /**  */
  country: EnumOrganizationAddressV2_0Country;
}

export interface OrganizationV2_0 {
  /**  */
  name: string;

  /**  */
  address: OrganizationAddressV2_0;

  /**  */
  'disambiguated-organization'?: DisambiguatedOrganizationV2_0;
}

export interface PeerReviewGroupV2_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV2_0;

  /**  */
  'external-ids'?: ExternalIDsV2_0;

  /**  */
  'peer-review-summary'?: PeerReviewSummaryV2_0[];
}

export interface PeerReviewSummaryV2_0 {
  /**  */
  'created-date'?: CreatedDateV2_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV2_0;

  /**  */
  source?: SourceV2_0;

  /**  */
  'external-ids'?: ExternalIDsV2_0;

  /**  */
  'completion-date'?: FuzzyDateV2_0;

  /**  */
  'review-group-id': string;

  /**  */
  'convening-organization': OrganizationV2_0;

  /**  */
  visibility?: EnumPeerReviewSummaryV2_0Visibility;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  'display-index'?: string;
}

export interface PeerReviewsV2_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV2_0;

  /**  */
  group?: PeerReviewGroupV2_0[];

  /**  */
  path?: string;
}

export interface PublicationDateV2_0 {
  /**  */
  year: YearV2_0;

  /**  */
  month?: MonthV2_0;

  /**  */
  day?: DayV2_0;

  /**  */
  'media-type'?: EnumPublicationDateV2_0MediaType;
}

export interface SourceClientIdV2_0 {
  /**  */
  uri?: string;

  /**  */
  path?: string;

  /**  */
  host?: string;
}

export interface SourceNameV2_0 {
  /**  */
  value?: string;
}

export interface SourceOrcidV2_0 {
  /**  */
  uri?: string;

  /**  */
  path?: string;

  /**  */
  host?: string;
}

export interface SourceV2_0 {
  /**  */
  'source-orcid'?: SourceOrcidV2_0;

  /**  */
  'source-client-id'?: SourceClientIdV2_0;

  /**  */
  'source-name'?: SourceNameV2_0;
}

export interface SubtitleV2_0 {
  /**  */
  value?: string;
}

export interface TitleV2_0 {
  /**  */
  value?: string;
}

export interface TranslatedTitleV2_0 {
  /**  */
  value?: string;

  /**  */
  'language-code': string;
}

export interface UrlV2_0 {
  /**  */
  value?: string;
}

export interface WorkGroupV2_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV2_0;

  /**  */
  'external-ids'?: ExternalIDsV2_0;

  /**  */
  'work-summary'?: WorkSummaryV2_0[];
}

export interface WorkSummaryV2_0 {
  /**  */
  'put-code'?: number;

  /**  */
  'created-date'?: CreatedDateV2_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV2_0;

  /**  */
  source?: SourceV2_0;

  /**  */
  title?: WorkTitleV2_0;

  /**  */
  'external-ids'?: ExternalIDsV2_0;

  /**  */
  type?: EnumWorkSummaryV2_0Type;

  /**  */
  'publication-date'?: PublicationDateV2_0;

  /**  */
  visibility?: EnumWorkSummaryV2_0Visibility;

  /**  */
  path?: string;

  /**  */
  'display-index'?: string;
}

export interface WorkTitleV2_0 {
  /**  */
  title?: TitleV2_0;

  /**  */
  subtitle?: SubtitleV2_0;

  /**  */
  'translated-title'?: TranslatedTitleV2_0;
}

export interface WorksSummaryV2_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV2_0;

  /**  */
  group?: WorkGroupV2_0[];

  /**  */
  path?: string;
}

export interface YearV2_0 {
  /**  */
  value?: string;
}

export interface Citation {
  /**  */
  'citation-type': EnumCitationCitationType;

  /**  */
  'citation-value': string;
}

export interface ContributorEmailV2_0 {
  /**  */
  value?: string;
}

export interface ContributorOrcidV2_0 {
  /**  */
  uri?: string;

  /**  */
  path?: string;

  /**  */
  host?: string;
}

export interface ContributorV2_0 {
  /**  */
  'contributor-orcid'?: ContributorOrcidV2_0;

  /**  */
  'credit-name'?: CreditNameV2_0;

  /**  */
  'contributor-email'?: ContributorEmailV2_0;

  /**  */
  'contributor-attributes'?: ContributorV2_0;
}

export interface CountryV2_0 {
  /**  */
  value?: EnumCountryV2_0Value;
}

export interface CreditNameV2_0 {
  /**  */
  value?: string;
}

export interface WorkContributorsV2_0 {
  /**  */
  contributor?: ContributorV2_0[];
}

export interface WorkV2_0 {
  /**  */
  'created-date'?: CreatedDateV2_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV2_0;

  /**  */
  source?: SourceV2_0;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  title?: WorkTitleV2_0;

  /**  */
  'journal-title'?: TitleV2_0;

  /**  */
  'short-description'?: string;

  /**  */
  citation?: Citation;

  /**  */
  type?: EnumWorkV2_0Type;

  /**  */
  'publication-date'?: PublicationDateV2_0;

  /**  */
  'external-ids'?: ExternalIDsV2_0;

  /**  */
  url?: UrlV2_0;

  /**  */
  contributors?: WorkContributorsV2_0;

  /**  */
  'language-code'?: string;

  /**  */
  country?: CountryV2_0;

  /**  */
  visibility?: EnumWorkV2_0Visibility;
}

export interface BulkElement {}

export interface WorkBulkV2_0 {
  /**  */
  bulk?: BulkElement[];
}

export interface AmountV2_0 {
  /**  */
  value?: string;

  /**  */
  'currency-code': string;
}

export interface FundingContributorAttributesV2_0 {
  /**  */
  'contributor-role': EnumFundingContributorAttributesV2_0ContributorRole;
}

export interface FundingContributorV2_0 {
  /**  */
  'contributor-orcid'?: ContributorOrcidV2_0;

  /**  */
  'credit-name'?: CreditNameV2_0;

  /**  */
  'contributor-email'?: ContributorEmailV2_0;

  /**  */
  'contributor-attributes'?: FundingContributorAttributesV2_0;
}

export interface FundingContributorsV2_0 {
  /**  */
  contributor?: FundingContributorV2_0[];
}

export interface FundingV2_0 {
  /**  */
  'created-date'?: CreatedDateV2_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV2_0;

  /**  */
  source?: SourceV2_0;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  type: EnumFundingV2_0Type;

  /**  */
  'organization-defined-type'?: OrganizationDefinedFundingSubTypeV2_0;

  /**  */
  title: FundingTitleV2_0;

  /**  */
  'short-description'?: string;

  /**  */
  amount?: AmountV2_0;

  /**  */
  url?: UrlV2_0;

  /**  */
  'start-date'?: FuzzyDateV2_0;

  /**  */
  'end-date'?: FuzzyDateV2_0;

  /**  */
  'external-ids'?: ExternalIDsV2_0;

  /**  */
  contributors?: FundingContributorsV2_0;

  /**  */
  organization: OrganizationV2_0;

  /**  */
  visibility?: EnumFundingV2_0Visibility;
}

export interface OrganizationDefinedFundingSubTypeV2_0 {
  /**  */
  value?: string;
}

export interface EducationV2_0 {
  /**  */
  'created-date'?: CreatedDateV2_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV2_0;

  /**  */
  source?: SourceV2_0;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date'?: FuzzyDateV2_0;

  /**  */
  'end-date'?: FuzzyDateV2_0;

  /**  */
  organization: OrganizationV2_0;

  /**  */
  visibility?: EnumEducationV2_0Visibility;
}

export interface EmploymentV2_0 {
  /**  */
  'created-date'?: CreatedDateV2_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV2_0;

  /**  */
  source?: SourceV2_0;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date'?: FuzzyDateV2_0;

  /**  */
  'end-date'?: FuzzyDateV2_0;

  /**  */
  organization: OrganizationV2_0;

  /**  */
  visibility?: EnumEmploymentV2_0Visibility;
}

export interface PeerReviewV2_0 {
  /**  */
  'created-date'?: CreatedDateV2_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV2_0;

  /**  */
  source?: SourceV2_0;

  /**  */
  'reviewer-role'?: EnumPeerReviewV2_0ReviewerRole;

  /**  */
  'review-identifiers'?: ExternalIDsV2_0;

  /**  */
  'review-url'?: UrlV2_0;

  /**  */
  'review-type'?: EnumPeerReviewV2_0ReviewType;

  /**  */
  'review-completion-date'?: FuzzyDateV2_0;

  /**  */
  'review-group-id': string;

  /**  */
  'subject-external-identifier'?: ExternalIDV2_0;

  /**  */
  'subject-container-name'?: TitleV2_0;

  /**  */
  'subject-type'?: EnumPeerReviewV2_0SubjectType;

  /**  */
  'subject-name'?: WorkTitleV2_0;

  /**  */
  'subject-url'?: UrlV2_0;

  /**  */
  'convening-organization': OrganizationV2_0;

  /**  */
  visibility?: EnumPeerReviewV2_0Visibility;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;
}

export interface GroupIdRecord {
  /**  */
  name: string;

  /**  */
  'group-id': string;

  /**  */
  description: string;

  /**  */
  type: string;

  /**  */
  'put-code'?: number;
}

export interface GroupIdRecords {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  total: number;

  /**  */
  page: number;

  /**  */
  'page-size': number;

  /**  */
  'group-id-record'?: GroupIdRecord[];
}

export interface Notification {
  /**  */
  source?: SourceV3_0_rc2;

  /**  */
  'put-code'?: number;

  /**  */
  'notification-type': EnumNotificationNotificationType;

  /**  */
  'created-date'?: Date;

  /**  */
  'sent-date'?: Date;

  /**  */
  'read-date'?: Date;

  /**  */
  'archived-date'?: Date;
}

export interface AuthorizationUrlV2_0 {
  /**  */
  uri: string;

  /**  */
  path: string;

  /**  */
  host: string;
}

export interface ItemV2_0 {
  /**  */
  'put-code'?: string;

  /**  */
  'item-type': EnumItemV2_0ItemType;

  /**  */
  'item-name': string;

  /**  */
  'external-id': ExternalIDV2_0;
}

export interface ItemsV2_0 {
  /**  */
  item: ItemV2_0[];
}

export interface NotificationPermissionV2_0 {
  /**  */
  'put-code'?: number;

  /**  */
  'notification-type': EnumNotificationPermissionV2_0NotificationType;

  /**  */
  'authorization-url': AuthorizationUrlV2_0;

  /**  */
  'notification-subject'?: string;

  /**  */
  'notification-intro'?: string;

  /**  */
  items: ItemsV2_0;

  /**  */
  'created-date'?: Date;

  /**  */
  'sent-date'?: Date;

  /**  */
  'read-date'?: Date;

  /**  */
  'actioned-date'?: Date;

  /**  */
  'archived-date'?: Date;

  /**  */
  source?: SourceV2_0;
}

export interface ResearcherUrlV2_0 {
  /**  */
  'created-date'?: CreatedDateV2_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV2_0;

  /**  */
  source?: SourceV2_0;

  /**  */
  'url-name'?: string;

  /**  */
  url?: UrlV2_0;

  /**  */
  visibility?: EnumResearcherUrlV2_0Visibility;

  /**  */
  path?: string;

  /**  */
  'put-code'?: number;

  /**  */
  'display-index'?: number;
}

export interface ResearcherUrlsV2_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV2_0;

  /**  */
  'researcher-url'?: ResearcherUrlV2_0[];

  /**  */
  path?: string;
}

export interface EmailV2_0 {
  /**  */
  'created-date'?: CreatedDateV2_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV2_0;

  /**  */
  source?: SourceV2_0;

  /**  */
  email?: string;

  /**  */
  path?: string;

  /**  */
  visibility?: EnumEmailV2_0Visibility;

  /**  */
  verified?: boolean;

  /**  */
  primary?: boolean;

  /**  */
  'put-code'?: number;
}

export interface EmailsV2_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV2_0;

  /**  */
  email?: EmailV2_0[];

  /**  */
  path?: string;
}

export interface OtherNameV2_0 {
  /**  */
  'created-date'?: CreatedDateV2_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV2_0;

  /**  */
  source?: SourceV2_0;

  /**  */
  content?: string;

  /**  */
  visibility?: EnumOtherNameV2_0Visibility;

  /**  */
  path?: string;

  /**  */
  'put-code'?: number;

  /**  */
  'display-index'?: number;
}

export interface OtherNamesV2_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV2_0;

  /**  */
  'other-name'?: OtherNameV2_0[];

  /**  */
  path?: string;
}

export interface BiographyV2_0 {
  /**  */
  'created-date'?: CreatedDateV2_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV2_0;

  /**  */
  content?: string;

  /**  */
  visibility?: EnumBiographyV2_0Visibility;

  /**  */
  path?: string;
}

export interface FamilyNameV2_0 {
  /**  */
  value?: string;
}

export interface GivenNamesV2_0 {
  /**  */
  value?: string;
}

export interface NameV2_0 {
  /**  */
  'created-date'?: CreatedDateV2_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV2_0;

  /**  */
  'given-names'?: GivenNamesV2_0;

  /**  */
  'family-name'?: FamilyNameV2_0;

  /**  */
  'credit-name'?: CreditNameV2_0;

  /**  */
  source?: SourceV2_0;

  /**  */
  visibility?: EnumNameV2_0Visibility;

  /**  */
  path?: string;
}

export interface PersonalDetailsV2_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV2_0;

  /**  */
  name?: NameV2_0;

  /**  */
  'other-names'?: OtherNamesV2_0;

  /**  */
  biography?: BiographyV2_0;

  /**  */
  path?: string;
}

export interface PersonExternalIdentifierV2_0 {
  /**  */
  'created-date'?: CreatedDateV2_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV2_0;

  /**  */
  source?: SourceV2_0;

  /**  */
  'external-id-type': string;

  /**  */
  'external-id-value': string;

  /**  */
  'external-id-url'?: UrlV2_0;

  /**  */
  'external-id-relationship'?: EnumPersonExternalIdentifierV2_0ExternalIdRelationship;

  /**  */
  visibility?: EnumPersonExternalIdentifierV2_0Visibility;

  /**  */
  path?: string;

  /**  */
  'put-code'?: number;

  /**  */
  'display-index'?: number;
}

export interface PersonExternalIdentifiersV2_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV2_0;

  /**  */
  'external-identifier'?: PersonExternalIdentifierV2_0[];

  /**  */
  path?: string;
}

export interface KeywordV2_0 {
  /**  */
  'created-date'?: CreatedDateV2_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV2_0;

  /**  */
  source?: SourceV2_0;

  /**  */
  content?: string;

  /**  */
  visibility?: EnumKeywordV2_0Visibility;

  /**  */
  path?: string;

  /**  */
  'put-code'?: number;

  /**  */
  'display-index'?: number;
}

export interface KeywordsV2_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV2_0;

  /**  */
  keyword?: KeywordV2_0[];

  /**  */
  path?: string;
}

export interface AddressV2_0 {
  /**  */
  'created-date'?: CreatedDateV2_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV2_0;

  /**  */
  source?: SourceV2_0;

  /**  */
  country: CountryV2_0;

  /**  */
  visibility?: EnumAddressV2_0Visibility;

  /**  */
  path?: string;

  /**  */
  'put-code'?: number;

  /**  */
  'display-index'?: number;
}

export interface AddressesV2_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV2_0;

  /**  */
  address?: AddressV2_0[];

  /**  */
  path?: string;
}

export interface PersonV2_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV2_0;

  /**  */
  name?: NameV2_0;

  /**  */
  'other-names'?: OtherNamesV2_0;

  /**  */
  biography?: BiographyV2_0;

  /**  */
  'researcher-urls'?: ResearcherUrlsV2_0;

  /**  */
  emails?: EmailsV2_0;

  /**  */
  addresses?: AddressesV2_0;

  /**  */
  keywords?: KeywordsV2_0;

  /**  */
  'external-identifiers'?: PersonExternalIdentifiersV2_0;

  /**  */
  path?: string;
}

export interface CompletionDateV2_0 {
  /**  */
  value?: Date;
}

export interface DeactivationDateV2_0 {
  /**  */
  value?: Date;
}

export interface HistoryV2_0 {
  /**  */
  'creation-method'?: EnumHistoryV2_0CreationMethod;

  /**  */
  'completion-date'?: CompletionDateV2_0;

  /**  */
  'submission-date'?: SubmissionDateV2_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV2_0;

  /**  */
  claimed?: boolean;

  /**  */
  source?: SourceV2_0;

  /**  */
  'deactivation-date'?: DeactivationDateV2_0;

  /**  */
  'verified-email'?: boolean;

  /**  */
  'verified-primary-email'?: boolean;
}

export interface OrcidIdentifierV2_0 {
  /**  */
  uri?: string;

  /**  */
  path?: string;

  /**  */
  host?: string;
}

export interface PreferencesV2_0 {
  /**  */
  locale?: EnumPreferencesV2_0Locale;
}

export interface RecordV2_0 {
  /**  */
  'orcid-identifier'?: OrcidIdentifierV2_0;

  /**  */
  preferences?: PreferencesV2_0;

  /**  */
  history?: HistoryV2_0;

  /**  */
  person?: PersonV2_0;

  /**  */
  'activities-summary'?: ActivitiesSummaryV2_0;

  /**  */
  path?: string;
}

export interface SubmissionDateV2_0 {
  /**  */
  value?: Date;
}

export interface ResultV2_0 {
  /**  */
  'orcid-identifier'?: OrcidIdentifierV2_0;
}

export interface SearchV2_0 {
  /**  */
  result?: ResultV2_0[];

  /**  */
  'num-found'?: number;
}

export interface ClientSummary {
  /**  */
  name?: string;

  /**  */
  description?: string;
}

export interface ActivitiesSummaryV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  distinctions?: DistinctionsSummaryV3_0;

  /**  */
  educations?: EducationsSummaryV3_0;

  /**  */
  employments?: EmploymentsSummaryV3_0;

  /**  */
  fundings?: FundingsV3_0;

  /**  */
  'invited-positions'?: InvitedPositionsV3_0;

  /**  */
  memberships?: MembershipsV3_0;

  /**  */
  'peer-reviews'?: PeerReviewsV3_0;

  /**  */
  qualifications?: QualificationsV3_0;

  /**  */
  'research-resources'?: ResearchResourcesV3_0;

  /**  */
  services?: ServicesV3_0;

  /**  */
  works?: WorksSummaryV3_0;

  /**  */
  path?: string;
}

export interface AffiliationGroupV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  'external-ids'?: ExternalIDsV3_0;

  /**  */
  summaries?: AffiliationSummaryV3_0[];
}

export interface AffiliationGroupV3_0DistinctionSummaryV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  'external-ids'?: ExternalIDsV3_0;

  /**  */
  summaries?: DistinctionSummaryV3_0[];
}

export interface AffiliationGroupV3_0EducationSummaryV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  'external-ids'?: ExternalIDsV3_0;

  /**  */
  summaries?: EducationSummaryV3_0[];
}

export interface AffiliationGroupV3_0EmploymentSummaryV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  'external-ids'?: ExternalIDsV3_0;

  /**  */
  summaries?: EmploymentSummaryV3_0[];
}

export interface AffiliationGroupV3_0InvitedPositionSummaryV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  'external-ids'?: ExternalIDsV3_0;

  /**  */
  summaries?: InvitedPositionSummaryV3_0[];
}

export interface AffiliationGroupV3_0MembershipSummaryV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  'external-ids'?: ExternalIDsV3_0;

  /**  */
  summaries?: MembershipSummaryV3_0[];
}

export interface AffiliationGroupV3_0QualificationSummaryV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  'external-ids'?: ExternalIDsV3_0;

  /**  */
  summaries?: QualificationSummaryV3_0[];
}

export interface AffiliationGroupV3_0ServiceSummaryV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  'external-ids'?: ExternalIDsV3_0;

  /**  */
  summaries?: ServiceSummaryV3_0[];
}

export interface AffiliationSummaryV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  source?: SourceV3_0;

  /**  */
  'put-code'?: number;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date'?: FuzzyDateV3_0;

  /**  */
  'end-date'?: FuzzyDateV3_0;

  /**  */
  organization?: OrganizationV3_0;

  /**  */
  url?: UrlV3_0;

  /**  */
  'external-ids'?: ExternalIDsV3_0;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumAffiliationSummaryV3_0Visibility;

  /**  */
  path?: string;
}

export interface CreatedDateV3_0 {
  /**  */
  value?: Date;
}

export interface DayV3_0 {
  /**  */
  value?: string;
}

export interface DisambiguatedOrganizationV3_0 {
  /**  */
  'disambiguated-organization-identifier': string;

  /**  */
  'disambiguation-source': string;
}

export interface DistinctionSummaryV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  source?: SourceV3_0;

  /**  */
  'put-code'?: number;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date'?: FuzzyDateV3_0;

  /**  */
  'end-date'?: FuzzyDateV3_0;

  /**  */
  organization?: OrganizationV3_0;

  /**  */
  url?: UrlV3_0;

  /**  */
  'external-ids'?: ExternalIDsV3_0;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumDistinctionSummaryV3_0Visibility;

  /**  */
  path?: string;
}

export interface DistinctionsSummaryV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  'affiliation-group'?: AffiliationGroupV3_0DistinctionSummaryV3_0[];

  /**  */
  path?: string;
}

export interface EducationSummaryV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  source?: SourceV3_0;

  /**  */
  'put-code'?: number;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date'?: FuzzyDateV3_0;

  /**  */
  'end-date'?: FuzzyDateV3_0;

  /**  */
  organization?: OrganizationV3_0;

  /**  */
  url?: UrlV3_0;

  /**  */
  'external-ids'?: ExternalIDsV3_0;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumEducationSummaryV3_0Visibility;

  /**  */
  path?: string;
}

export interface EducationsSummaryV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  'affiliation-group'?: AffiliationGroupV3_0EducationSummaryV3_0[];

  /**  */
  path?: string;
}

export interface EmploymentSummaryV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  source?: SourceV3_0;

  /**  */
  'put-code'?: number;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date'?: FuzzyDateV3_0;

  /**  */
  'end-date'?: FuzzyDateV3_0;

  /**  */
  organization?: OrganizationV3_0;

  /**  */
  url?: UrlV3_0;

  /**  */
  'external-ids'?: ExternalIDsV3_0;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumEmploymentSummaryV3_0Visibility;

  /**  */
  path?: string;
}

export interface EmploymentsSummaryV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  'affiliation-group'?: AffiliationGroupV3_0EmploymentSummaryV3_0[];

  /**  */
  path?: string;
}

export interface ExternalIDV3_0 {
  /**  */
  'external-id-type': string;

  /**  */
  'external-id-value': string;

  /**  */
  'external-id-normalized'?: TransientNonEmptyString;

  /**  */
  'external-id-normalized-error'?: TransientError;

  /**  */
  'external-id-url'?: UrlV3_0;

  /**  */
  'external-id-relationship'?: EnumExternalIDV3_0ExternalIdRelationship;
}

export interface ExternalIDsV3_0 {
  /**  */
  'external-id'?: ExternalIDV3_0[];
}

export interface FundingGroupV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  'external-ids'?: ExternalIDsV3_0;

  /**  */
  'funding-summary'?: FundingSummaryV3_0[];
}

export interface FundingSummaryV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  source?: SourceV3_0;

  /**  */
  title: FundingTitleV3_0;

  /**  */
  'external-ids'?: ExternalIDsV3_0;

  /**  */
  url?: UrlV3_0;

  /**  */
  type: EnumFundingSummaryV3_0Type;

  /**  */
  'start-date'?: FuzzyDateV3_0;

  /**  */
  'end-date'?: FuzzyDateV3_0;

  /**  */
  organization: OrganizationV3_0;

  /**  */
  visibility?: EnumFundingSummaryV3_0Visibility;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  'display-index'?: string;
}

export interface FundingTitleV3_0 {
  /**  */
  title?: TitleV3_0;

  /**  */
  'translated-title'?: TranslatedTitleV3_0;
}

export interface FundingsV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  group?: FundingGroupV3_0[];

  /**  */
  path?: string;
}

export interface FuzzyDateV3_0 {
  /**  */
  year: YearV3_0;

  /**  */
  month?: MonthV3_0;

  /**  */
  day?: DayV3_0;
}

export interface InvitedPositionSummaryV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  source?: SourceV3_0;

  /**  */
  'put-code'?: number;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date'?: FuzzyDateV3_0;

  /**  */
  'end-date'?: FuzzyDateV3_0;

  /**  */
  organization?: OrganizationV3_0;

  /**  */
  url?: UrlV3_0;

  /**  */
  'external-ids'?: ExternalIDsV3_0;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumInvitedPositionSummaryV3_0Visibility;

  /**  */
  path?: string;
}

export interface InvitedPositionsV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  'affiliation-group'?: AffiliationGroupV3_0InvitedPositionSummaryV3_0[];

  /**  */
  path?: string;
}

export interface LastModifiedDateV3_0 {
  /**  */
  value?: Date;
}

export interface MembershipSummaryV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  source?: SourceV3_0;

  /**  */
  'put-code'?: number;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date'?: FuzzyDateV3_0;

  /**  */
  'end-date'?: FuzzyDateV3_0;

  /**  */
  organization?: OrganizationV3_0;

  /**  */
  url?: UrlV3_0;

  /**  */
  'external-ids'?: ExternalIDsV3_0;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumMembershipSummaryV3_0Visibility;

  /**  */
  path?: string;
}

export interface MembershipsV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  'affiliation-group'?: AffiliationGroupV3_0MembershipSummaryV3_0[];

  /**  */
  path?: string;
}

export interface MonthV3_0 {
  /**  */
  value?: string;
}

export interface OrganizationAddressV3_0 {
  /**  */
  city: string;

  /**  */
  region?: string;

  /**  */
  country: EnumOrganizationAddressV3_0Country;
}

export interface OrganizationV3_0 {
  /**  */
  name: string;

  /**  */
  address: OrganizationAddressV3_0;

  /**  */
  'disambiguated-organization'?: DisambiguatedOrganizationV3_0;
}

export interface PeerReviewDuplicateGroupV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  'external-ids'?: ExternalIDsV3_0;

  /**  */
  'peer-review-summary'?: PeerReviewSummaryV3_0[];
}

export interface PeerReviewGroupV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  'external-ids'?: ExternalIDsV3_0;

  /**  */
  'peer-review-group'?: PeerReviewDuplicateGroupV3_0[];
}

export interface PeerReviewSummaryV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  source?: SourceV3_0;

  /**  */
  'reviewer-role'?: EnumPeerReviewSummaryV3_0ReviewerRole;

  /**  */
  'external-ids'?: ExternalIDsV3_0;

  /**  */
  'review-url'?: UrlV3_0;

  /**  */
  'review-type'?: EnumPeerReviewSummaryV3_0ReviewType;

  /**  */
  'completion-date'?: FuzzyDateV3_0;

  /**  */
  'review-group-id': string;

  /**  */
  'convening-organization'?: OrganizationV3_0;

  /**  */
  visibility?: EnumPeerReviewSummaryV3_0Visibility;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  'display-index'?: string;
}

export interface PeerReviewsV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  group?: PeerReviewGroupV3_0[];

  /**  */
  path?: string;
}

export interface PublicationDateV3_0 {
  /**  */
  year: YearV3_0;

  /**  */
  month?: MonthV3_0;

  /**  */
  day?: DayV3_0;
}

export interface QualificationSummaryV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  source?: SourceV3_0;

  /**  */
  'put-code'?: number;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date'?: FuzzyDateV3_0;

  /**  */
  'end-date'?: FuzzyDateV3_0;

  /**  */
  organization?: OrganizationV3_0;

  /**  */
  url?: UrlV3_0;

  /**  */
  'external-ids'?: ExternalIDsV3_0;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumQualificationSummaryV3_0Visibility;

  /**  */
  path?: string;
}

export interface QualificationsV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  'affiliation-group'?: AffiliationGroupV3_0QualificationSummaryV3_0[];

  /**  */
  path?: string;
}

export interface ResearchResourceGroupV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  'external-ids'?: ExternalIDsV3_0;

  /**  */
  'research-resource-summary'?: ResearchResourceSummaryV3_0[];
}

export interface ResearchResourceHostsV3_0 {
  /**  */
  organization?: OrganizationV3_0[];
}

export interface ResearchResourceProposalV3_0 {
  /**  */
  title?: ResearchResourceTitleV3_0;

  /**  */
  hosts?: ResearchResourceHostsV3_0;

  /**  */
  'external-ids'?: ExternalIDsV3_0;

  /**  */
  'start-date'?: FuzzyDateV3_0;

  /**  */
  'end-date'?: FuzzyDateV3_0;

  /**  */
  url?: UrlV3_0;
}

export interface ResearchResourceSummaryV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  source?: SourceV3_0;

  /**  */
  proposal?: ResearchResourceProposalV3_0;

  /**  */
  visibility?: EnumResearchResourceSummaryV3_0Visibility;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  'display-index'?: string;
}

export interface ResearchResourceTitleV3_0 {
  /**  */
  title?: TitleV3_0;

  /**  */
  'translated-title'?: TranslatedTitleV3_0;
}

export interface ResearchResourcesV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  group?: ResearchResourceGroupV3_0[];

  /**  */
  path?: string;
}

export interface ServiceSummaryV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  source?: SourceV3_0;

  /**  */
  'put-code'?: number;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date'?: FuzzyDateV3_0;

  /**  */
  'end-date'?: FuzzyDateV3_0;

  /**  */
  organization?: OrganizationV3_0;

  /**  */
  url?: UrlV3_0;

  /**  */
  'external-ids'?: ExternalIDsV3_0;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumServiceSummaryV3_0Visibility;

  /**  */
  path?: string;
}

export interface ServicesV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  'affiliation-group'?: AffiliationGroupV3_0ServiceSummaryV3_0[];

  /**  */
  path?: string;
}

export interface SourceClientIdV3_0 {
  /**  */
  uri?: string;

  /**  */
  path?: string;

  /**  */
  host?: string;
}

export interface SourceNameV3_0 {
  /**  */
  value?: string;
}

export interface SourceOrcidV3_0 {
  /**  */
  uri?: string;

  /**  */
  path?: string;

  /**  */
  host?: string;
}

export interface SourceV3_0 {
  /**  */
  'source-orcid'?: SourceOrcidV3_0;

  /**  */
  'source-client-id'?: SourceClientIdV3_0;

  /**  */
  'source-name'?: SourceNameV3_0;

  /**  */
  'assertion-origin-orcid'?: SourceOrcidV3_0;

  /**  */
  'assertion-origin-client-id'?: SourceClientIdV3_0;

  /**  */
  'assertion-origin-name'?: SourceNameV3_0;
}

export interface SubtitleV3_0 {
  /**  */
  value?: string;
}

export interface TitleV3_0 {
  /**  */
  value?: string;
}

export interface TransientError {
  /**  */
  'error-code': string;

  /**  */
  'error-message': string;

  /**  */
  transient: boolean;
}

export interface TransientNonEmptyString {
  /**  */
  value?: string;

  /**  */
  transient?: boolean;
}

export interface TranslatedTitleV3_0 {
  /**  */
  value?: string;

  /**  */
  'language-code': EnumTranslatedTitleV3_0LanguageCode;
}

export interface UrlV3_0 {
  /**  */
  value?: string;
}

export interface WorkGroupV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  'external-ids'?: ExternalIDsV3_0;

  /**  */
  'work-summary'?: WorkSummaryV3_0[];
}

export interface WorkSummaryV3_0 {
  /**  */
  'put-code'?: number;

  /**  */
  'created-date'?: CreatedDateV3_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  source?: SourceV3_0;

  /**  */
  title?: WorkTitleV3_0;

  /**  */
  'external-ids'?: ExternalIDsV3_0;

  /**  */
  url?: UrlV3_0;

  /**  */
  type?: EnumWorkSummaryV3_0Type;

  /**  */
  'publication-date'?: PublicationDateV3_0;

  /**  */
  'journal-title'?: TitleV3_0;

  /**  */
  visibility?: EnumWorkSummaryV3_0Visibility;

  /**  */
  path?: string;

  /**  */
  'display-index'?: string;
}

export interface WorkTitleV3_0 {
  /**  */
  title?: TitleV3_0;

  /**  */
  subtitle?: SubtitleV3_0;

  /**  */
  'translated-title'?: TranslatedTitleV3_0;
}

export interface WorksSummaryV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  group?: WorkGroupV3_0[];

  /**  */
  path?: string;
}

export interface YearV3_0 {
  /**  */
  value?: string;
}

export interface ContributorAttributesV3_0 {
  /**  */
  'contributor-sequence': EnumContributorAttributesV3_0ContributorSequence;

  /**  */
  'contributor-role': EnumContributorAttributesV3_0ContributorRole;
}

export interface ContributorEmailV3_0 {
  /**  */
  value?: string;
}

export interface ContributorOrcidV3_0 {
  /**  */
  uri?: string;

  /**  */
  path?: string;

  /**  */
  host?: string;
}

export interface ContributorV3_0 {
  /**  */
  'contributor-orcid'?: ContributorOrcidV3_0;

  /**  */
  'credit-name'?: CreditNameV3_0;

  /**  */
  'contributor-email'?: ContributorEmailV3_0;

  /**  */
  'contributor-attributes'?: ContributorAttributesV3_0;
}

export interface CountryV3_0 {
  /**  */
  value?: EnumCountryV3_0Value;
}

export interface CreditNameV3_0 {
  /**  */
  value?: string;
}

export interface WorkContributorsV3_0 {
  /**  */
  contributor?: ContributorV3_0[];
}

export interface WorkV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  source?: SourceV3_0;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  title?: WorkTitleV3_0;

  /**  */
  'journal-title'?: TitleV3_0;

  /**  */
  'short-description'?: string;

  /**  */
  citation?: Citation;

  /**  */
  type?: EnumWorkV3_0Type;

  /**  */
  'publication-date'?: PublicationDateV3_0;

  /**  */
  'external-ids'?: ExternalIDsV3_0;

  /**  */
  url?: UrlV3_0;

  /**  */
  contributors?: WorkContributorsV3_0;

  /**  */
  'language-code'?: EnumWorkV3_0LanguageCode;

  /**  */
  country?: CountryV3_0;

  /**  */
  visibility?: EnumWorkV3_0Visibility;
}

export interface WorkBulkV3_0 {
  /**  */
  bulk?: BulkElement[];
}

export interface AmountV3_0 {
  /**  */
  value?: string;

  /**  */
  'currency-code': Currency;
}

export interface Currency {
  /**  */
  currencyCode?: string;

  /**  */
  defaultFractionDigits?: number;

  /**  */
  numericCode?: number;

  /**  */
  numericCodeAsString?: string;

  /**  */
  displayName?: string;

  /**  */
  symbol?: string;
}

export interface FundingContributorAttributesV3_0 {
  /**  */
  'contributor-role': EnumFundingContributorAttributesV3_0ContributorRole;
}

export interface FundingContributorV3_0 {
  /**  */
  'contributor-orcid'?: ContributorOrcidV3_0;

  /**  */
  'credit-name'?: CreditNameV3_0;

  /**  */
  'contributor-email'?: ContributorEmailV3_0;

  /**  */
  'contributor-attributes'?: FundingContributorAttributesV3_0;
}

export interface FundingContributorsV3_0 {
  /**  */
  contributor?: FundingContributorV3_0[];
}

export interface FundingV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  source?: SourceV3_0;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  type: EnumFundingV3_0Type;

  /**  */
  'organization-defined-type'?: OrganizationDefinedFundingSubTypeV3_0;

  /**  */
  title: FundingTitleV3_0;

  /**  */
  'short-description'?: string;

  /**  */
  amount?: AmountV3_0;

  /**  */
  url?: UrlV3_0;

  /**  */
  'start-date'?: FuzzyDateV3_0;

  /**  */
  'end-date'?: FuzzyDateV3_0;

  /**  */
  'external-ids'?: ExternalIDsV3_0;

  /**  */
  contributors?: FundingContributorsV3_0;

  /**  */
  organization: OrganizationV3_0;

  /**  */
  visibility?: EnumFundingV3_0Visibility;
}

export interface OrganizationDefinedFundingSubTypeV3_0 {
  /**  */
  value?: string;
}

export interface EducationV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  source?: SourceV3_0;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date': FuzzyDateV3_0;

  /**  */
  'end-date'?: FuzzyDateV3_0;

  /**  */
  organization: OrganizationV3_0;

  /**  */
  url?: UrlV3_0;

  /**  */
  'external-ids'?: ExternalIDsV3_0;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumEducationV3_0Visibility;
}

export interface EmploymentV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  source?: SourceV3_0;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date': FuzzyDateV3_0;

  /**  */
  'end-date'?: FuzzyDateV3_0;

  /**  */
  organization: OrganizationV3_0;

  /**  */
  url?: UrlV3_0;

  /**  */
  'external-ids'?: ExternalIDsV3_0;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumEmploymentV3_0Visibility;
}

export interface PeerReviewV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  source?: SourceV3_0;

  /**  */
  'reviewer-role'?: EnumPeerReviewV3_0ReviewerRole;

  /**  */
  'review-identifiers'?: ExternalIDsV3_0;

  /**  */
  'review-url'?: UrlV3_0;

  /**  */
  'review-type'?: EnumPeerReviewV3_0ReviewType;

  /**  */
  'review-completion-date'?: FuzzyDateV3_0;

  /**  */
  'review-group-id': string;

  /**  */
  'subject-external-identifier'?: ExternalIDV3_0;

  /**  */
  'subject-container-name'?: TitleV3_0;

  /**  */
  'subject-type'?: EnumPeerReviewV3_0SubjectType;

  /**  */
  'subject-name'?: SubjectNameV3_0;

  /**  */
  'subject-url'?: UrlV3_0;

  /**  */
  'convening-organization'?: OrganizationV3_0;

  /**  */
  visibility?: EnumPeerReviewV3_0Visibility;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;
}

export interface SubjectNameV3_0 {
  /**  */
  title?: TitleV3_0;

  /**  */
  subtitle?: SubtitleV3_0;

  /**  */
  'translated-title'?: TranslatedTitleV3_0;
}

export interface AuthorizationUrlV3_0 {
  /**  */
  uri: string;

  /**  */
  path: string;

  /**  */
  host: string;
}

export interface ItemV3_0 {
  /**  */
  'put-code'?: string;

  /**  */
  'item-type': EnumItemV3_0ItemType;

  /**  */
  'item-name': string;

  /**  */
  'external-id': ExternalIDV3_0;
}

export interface ItemsV3_0 {
  /**  */
  item: ItemV3_0[];
}

export interface NotificationPermissionV3_0 {
  /**  */
  'put-code'?: number;

  /**  */
  'notification-type': EnumNotificationPermissionV3_0NotificationType;

  /**  */
  'authorization-url': AuthorizationUrlV3_0;

  /**  */
  'notification-subject'?: string;

  /**  */
  'notification-intro'?: string;

  /**  */
  items: ItemsV3_0;

  /**  */
  'created-date'?: Date;

  /**  */
  'sent-date'?: Date;

  /**  */
  'read-date'?: Date;

  /**  */
  'actioned-date'?: Date;

  /**  */
  'archived-date'?: Date;

  /**  */
  source?: SourceV3_0;
}

export interface ResearcherUrlV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  source?: SourceV3_0;

  /**  */
  'url-name'?: string;

  /**  */
  url?: UrlV3_0;

  /**  */
  visibility?: EnumResearcherUrlV3_0Visibility;

  /**  */
  path?: string;

  /**  */
  'put-code'?: number;

  /**  */
  'display-index'?: number;
}

export interface OtherNameV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  source?: SourceV3_0;

  /**  */
  content?: string;

  /**  */
  visibility?: EnumOtherNameV3_0Visibility;

  /**  */
  path?: string;

  /**  */
  'put-code'?: number;

  /**  */
  'display-index'?: number;
}

export interface BiographyV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  content?: string;

  /**  */
  visibility?: EnumBiographyV3_0Visibility;

  /**  */
  path?: string;
}

export interface FamilyNameV3_0 {
  /**  */
  value?: string;
}

export interface GivenNamesV3_0 {
  /**  */
  value?: string;
}

export interface NameV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  'given-names'?: GivenNamesV3_0;

  /**  */
  'family-name'?: FamilyNameV3_0;

  /**  */
  'credit-name'?: CreditNameV3_0;

  /**  */
  source?: SourceV3_0;

  /**  */
  visibility?: EnumNameV3_0Visibility;

  /**  */
  path?: string;
}

export interface OtherNamesV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  'other-name'?: OtherNameV3_0[];

  /**  */
  path?: string;
}

export interface PersonalDetailsV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  name?: NameV3_0;

  /**  */
  'other-names'?: OtherNamesV3_0;

  /**  */
  biography?: BiographyV3_0;

  /**  */
  path?: string;
}

export interface PersonExternalIdentifierV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  source?: SourceV3_0;

  /**  */
  'external-id-type': string;

  /**  */
  'external-id-value': string;

  /**  */
  'external-id-url'?: UrlV3_0;

  /**  */
  'external-id-relationship'?: EnumPersonExternalIdentifierV3_0ExternalIdRelationship;

  /**  */
  visibility?: EnumPersonExternalIdentifierV3_0Visibility;

  /**  */
  path?: string;

  /**  */
  'put-code'?: number;

  /**  */
  'display-index'?: number;
}

export interface KeywordV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  source?: SourceV3_0;

  /**  */
  content?: string;

  /**  */
  visibility?: EnumKeywordV3_0Visibility;

  /**  */
  path?: string;

  /**  */
  'put-code'?: number;

  /**  */
  'display-index'?: number;
}

export interface AddressV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  source?: SourceV3_0;

  /**  */
  country: CountryV3_0;

  /**  */
  visibility?: EnumAddressV3_0Visibility;

  /**  */
  path?: string;

  /**  */
  'put-code'?: number;

  /**  */
  'display-index'?: number;
}

export interface AddressesV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  address?: AddressV3_0[];

  /**  */
  path?: string;
}

export interface CompletionDateV3_0 {
  /**  */
  value?: Date;
}

export interface DeactivationDateV3_0 {
  /**  */
  value?: Date;
}

export interface EmailV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  source?: SourceV3_0;

  /**  */
  email?: string;

  /**  */
  path?: string;

  /**  */
  visibility?: EnumEmailV3_0Visibility;

  /**  */
  verified?: boolean;

  /**  */
  primary?: boolean;

  /**  */
  'put-code'?: number;
}

export interface EmailsV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  email?: EmailV3_0[];

  /**  */
  path?: string;
}

export interface HistoryV3_0 {
  /**  */
  'creation-method'?: EnumHistoryV3_0CreationMethod;

  /**  */
  'completion-date'?: CompletionDateV3_0;

  /**  */
  'submission-date'?: SubmissionDateV3_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  claimed?: boolean;

  /**  */
  source?: SourceV3_0;

  /**  */
  'deactivation-date'?: DeactivationDateV3_0;

  /**  */
  'verified-email'?: boolean;

  /**  */
  'verified-primary-email'?: boolean;
}

export interface KeywordsV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  keyword?: KeywordV3_0[];

  /**  */
  path?: string;
}

export interface OrcidIdentifierV3_0 {
  /**  */
  uri?: string;

  /**  */
  path?: string;

  /**  */
  host?: string;
}

export interface PersonExternalIdentifiersV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  'external-identifier'?: PersonExternalIdentifierV3_0[];

  /**  */
  path?: string;
}

export interface PersonV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  name?: NameV3_0;

  /**  */
  'other-names'?: OtherNamesV3_0;

  /**  */
  biography?: BiographyV3_0;

  /**  */
  'researcher-urls'?: ResearcherUrlsV3_0;

  /**  */
  emails?: EmailsV3_0;

  /**  */
  addresses?: AddressesV3_0;

  /**  */
  keywords?: KeywordsV3_0;

  /**  */
  'external-identifiers'?: PersonExternalIdentifiersV3_0;

  /**  */
  path?: string;
}

export interface PreferencesV3_0 {
  /**  */
  locale?: EnumPreferencesV3_0Locale;
}

export interface RecordV3_0 {
  /**  */
  'orcid-identifier'?: OrcidIdentifierV3_0;

  /**  */
  preferences?: PreferencesV3_0;

  /**  */
  history?: HistoryV3_0;

  /**  */
  person?: PersonV3_0;

  /**  */
  'activities-summary'?: ActivitiesSummaryV3_0;

  /**  */
  path?: string;
}

export interface ResearcherUrlsV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  'researcher-url'?: ResearcherUrlV3_0[];

  /**  */
  path?: string;
}

export interface SubmissionDateV3_0 {
  /**  */
  value?: Date;
}

export interface ResultV3_0 {
  /**  */
  'orcid-identifier'?: OrcidIdentifierV3_0;
}

export interface SearchV3_0 {
  /**  */
  result?: ResultV3_0[];

  /**  */
  'num-found'?: number;
}

export interface DistinctionV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  source?: SourceV3_0;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date': FuzzyDateV3_0;

  /**  */
  'end-date'?: FuzzyDateV3_0;

  /**  */
  organization: OrganizationV3_0;

  /**  */
  url?: UrlV3_0;

  /**  */
  'external-ids'?: ExternalIDsV3_0;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumDistinctionV3_0Visibility;
}

export interface InvitedPositionV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  source?: SourceV3_0;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date': FuzzyDateV3_0;

  /**  */
  'end-date'?: FuzzyDateV3_0;

  /**  */
  organization: OrganizationV3_0;

  /**  */
  url?: UrlV3_0;

  /**  */
  'external-ids'?: ExternalIDsV3_0;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumInvitedPositionV3_0Visibility;
}

export interface MembershipV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  source?: SourceV3_0;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date': FuzzyDateV3_0;

  /**  */
  'end-date'?: FuzzyDateV3_0;

  /**  */
  organization: OrganizationV3_0;

  /**  */
  url?: UrlV3_0;

  /**  */
  'external-ids'?: ExternalIDsV3_0;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumMembershipV3_0Visibility;
}

export interface QualificationV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  source?: SourceV3_0;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date': FuzzyDateV3_0;

  /**  */
  'end-date'?: FuzzyDateV3_0;

  /**  */
  organization: OrganizationV3_0;

  /**  */
  url?: UrlV3_0;

  /**  */
  'external-ids'?: ExternalIDsV3_0;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumQualificationV3_0Visibility;
}

export interface ServiceV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  source?: SourceV3_0;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date': FuzzyDateV3_0;

  /**  */
  'end-date'?: FuzzyDateV3_0;

  /**  */
  organization: OrganizationV3_0;

  /**  */
  url?: UrlV3_0;

  /**  */
  'external-ids'?: ExternalIDsV3_0;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumServiceV3_0Visibility;
}

export interface ResearchResourceItemV3_0 {
  /**  */
  'resource-name'?: string;

  /**  */
  'resource-type'?: EnumResearchResourceItemV3_0ResourceType;

  /**  */
  hosts?: ResearchResourceHostsV3_0;

  /**  */
  'external-ids'?: ExternalIDsV3_0;

  /**  */
  url?: UrlV3_0;
}

export interface ResearchResourceV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0;

  /**  */
  source?: SourceV3_0;

  /**  */
  proposal?: ResearchResourceProposalV3_0;

  /**  */
  'resource-item'?: ResearchResourceItemV3_0[];

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumResearchResourceV3_0Visibility;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;
}

export interface ActivitiesSummaryV3_0_rc1 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  distinctions?: DistinctionsV3_0_rc1;

  /**  */
  educations?: EducationsSummaryV3_0_rc1;

  /**  */
  employments?: EmploymentsSummaryV3_0_rc1;

  /**  */
  fundings?: FundingsV3_0_rc1;

  /**  */
  'invited-positions'?: InvitedPositionsV3_0_rc1;

  /**  */
  memberships?: MembershipsV3_0_rc1;

  /**  */
  'peer-reviews'?: PeerReviewsV3_0_rc1;

  /**  */
  qualifications?: QualificationsV3_0_rc1;

  /**  */
  'research-resources'?: ResearchResourcesV3_0_rc1;

  /**  */
  services?: ServicesV3_0_rc1;

  /**  */
  works?: WorksSummaryV3_0_rc1;

  /**  */
  path?: string;
}

export interface AffiliationGroupV3_0_rc1 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc1;

  /**  */
  summaries?: AffiliationSummaryV3_0_rc1[];
}

export interface AffiliationGroupV3_0_rc1DistinctionSummaryV3_0_rc1 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc1;

  /**  */
  summaries?: DistinctionSummaryV3_0_rc1[];
}

export interface AffiliationGroupV3_0_rc1EducationSummaryV3_0_rc1 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc1;

  /**  */
  summaries?: EducationSummaryV3_0_rc1[];
}

export interface AffiliationGroupV3_0_rc1EmploymentSummaryV3_0_rc1 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc1;

  /**  */
  summaries?: EmploymentSummaryV3_0_rc1[];
}

export interface AffiliationGroupV3_0_rc1InvitedPositionSummaryV3_0_rc1 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc1;

  /**  */
  summaries?: InvitedPositionSummaryV3_0_rc1[];
}

export interface AffiliationGroupV3_0_rc1MembershipSummaryV3_0_rc1 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc1;

  /**  */
  summaries?: MembershipSummaryV3_0_rc1[];
}

export interface AffiliationGroupV3_0_rc1QualificationSummaryV3_0_rc1 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc1;

  /**  */
  summaries?: QualificationSummaryV3_0_rc1[];
}

export interface AffiliationGroupV3_0_rc1ServiceSummaryV3_0_rc1 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc1;

  /**  */
  summaries?: ServiceSummaryV3_0_rc1[];
}

export interface AffiliationSummaryV3_0_rc1 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc1;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  source?: SourceV3_0_rc1;

  /**  */
  'put-code'?: number;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date'?: FuzzyDateV3_0_rc1;

  /**  */
  'end-date'?: FuzzyDateV3_0_rc1;

  /**  */
  organization?: OrganizationV3_0_rc1;

  /**  */
  url?: UrlV3_0_rc1;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc1;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumAffiliationSummaryV3_0_rc1Visibility;

  /**  */
  path?: string;
}

export interface CreatedDateV3_0_rc1 {
  /**  */
  value?: Date;
}

export interface DayV3_0_rc1 {
  /**  */
  value?: string;
}

export interface DisambiguatedOrganizationV3_0_rc1 {
  /**  */
  'disambiguated-organization-identifier': string;

  /**  */
  'disambiguation-source': string;
}

export interface DistinctionSummaryV3_0_rc1 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc1;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  source?: SourceV3_0_rc1;

  /**  */
  'put-code'?: number;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date'?: FuzzyDateV3_0_rc1;

  /**  */
  'end-date'?: FuzzyDateV3_0_rc1;

  /**  */
  organization?: OrganizationV3_0_rc1;

  /**  */
  url?: UrlV3_0_rc1;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc1;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumDistinctionSummaryV3_0_rc1Visibility;

  /**  */
  path?: string;
}

export interface DistinctionsV3_0_rc1 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  'affiliation-group'?: AffiliationGroupV3_0_rc1DistinctionSummaryV3_0_rc1[];

  /**  */
  path?: string;
}

export interface EducationSummaryV3_0_rc1 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc1;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  source?: SourceV3_0_rc1;

  /**  */
  'put-code'?: number;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date'?: FuzzyDateV3_0_rc1;

  /**  */
  'end-date'?: FuzzyDateV3_0_rc1;

  /**  */
  organization?: OrganizationV3_0_rc1;

  /**  */
  url?: UrlV3_0_rc1;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc1;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumEducationSummaryV3_0_rc1Visibility;

  /**  */
  path?: string;
}

export interface EducationsSummaryV3_0_rc1 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  'affiliation-group'?: AffiliationGroupV3_0_rc1EducationSummaryV3_0_rc1[];

  /**  */
  path?: string;
}

export interface EmploymentSummaryV3_0_rc1 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc1;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  source?: SourceV3_0_rc1;

  /**  */
  'put-code'?: number;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date'?: FuzzyDateV3_0_rc1;

  /**  */
  'end-date'?: FuzzyDateV3_0_rc1;

  /**  */
  organization?: OrganizationV3_0_rc1;

  /**  */
  url?: UrlV3_0_rc1;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc1;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumEmploymentSummaryV3_0_rc1Visibility;

  /**  */
  path?: string;
}

export interface EmploymentsSummaryV3_0_rc1 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  'affiliation-group'?: AffiliationGroupV3_0_rc1EmploymentSummaryV3_0_rc1[];

  /**  */
  path?: string;
}

export interface ExternalIDV3_0_rc1 {
  /**  */
  'external-id-type': string;

  /**  */
  'external-id-value': string;

  /**  */
  'external-id-normalized'?: TransientNonEmptyString;

  /**  */
  'external-id-normalized-error'?: TransientError;

  /**  */
  'external-id-url'?: UrlV3_0_rc1;

  /**  */
  'external-id-relationship'?: EnumExternalIDV3_0_rc1ExternalIdRelationship;
}

export interface ExternalIDsV3_0_rc1 {
  /**  */
  'external-id'?: ExternalIDV3_0_rc1[];
}

export interface FundingGroupV3_0_rc1 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc1;

  /**  */
  'funding-summary'?: FundingSummaryV3_0_rc1[];
}

export interface FundingSummaryV3_0_rc1 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc1;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  source?: SourceV3_0_rc1;

  /**  */
  title: FundingTitleV3_0_rc1;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc1;

  /**  */
  url?: UrlV3_0_rc1;

  /**  */
  type: EnumFundingSummaryV3_0_rc1Type;

  /**  */
  'start-date'?: FuzzyDateV3_0_rc1;

  /**  */
  'end-date'?: FuzzyDateV3_0_rc1;

  /**  */
  organization: OrganizationV3_0_rc1;

  /**  */
  visibility?: EnumFundingSummaryV3_0_rc1Visibility;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  'display-index'?: string;
}

export interface FundingTitleV3_0_rc1 {
  /**  */
  title?: TitleV3_0_rc1;

  /**  */
  'translated-title'?: TranslatedTitleV3_0_rc1;
}

export interface FundingsV3_0_rc1 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  group?: FundingGroupV3_0_rc1[];

  /**  */
  path?: string;
}

export interface FuzzyDateV3_0_rc1 {
  /**  */
  year: YearV3_0_rc1;

  /**  */
  month?: MonthV3_0_rc1;

  /**  */
  day?: DayV3_0_rc1;
}

export interface InvitedPositionSummaryV3_0_rc1 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc1;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  source?: SourceV3_0_rc1;

  /**  */
  'put-code'?: number;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date'?: FuzzyDateV3_0_rc1;

  /**  */
  'end-date'?: FuzzyDateV3_0_rc1;

  /**  */
  organization?: OrganizationV3_0_rc1;

  /**  */
  url?: UrlV3_0_rc1;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc1;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumInvitedPositionSummaryV3_0_rc1Visibility;

  /**  */
  path?: string;
}

export interface InvitedPositionsV3_0_rc1 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  'affiliation-group'?: AffiliationGroupV3_0_rc1InvitedPositionSummaryV3_0_rc1[];

  /**  */
  path?: string;
}

export interface LastModifiedDateV3_0_rc1 {
  /**  */
  value?: Date;
}

export interface MembershipSummaryV3_0_rc1 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc1;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  source?: SourceV3_0_rc1;

  /**  */
  'put-code'?: number;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date'?: FuzzyDateV3_0_rc1;

  /**  */
  'end-date'?: FuzzyDateV3_0_rc1;

  /**  */
  organization?: OrganizationV3_0_rc1;

  /**  */
  url?: UrlV3_0_rc1;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc1;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumMembershipSummaryV3_0_rc1Visibility;

  /**  */
  path?: string;
}

export interface MembershipsV3_0_rc1 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  'affiliation-group'?: AffiliationGroupV3_0_rc1MembershipSummaryV3_0_rc1[];

  /**  */
  path?: string;
}

export interface MonthV3_0_rc1 {
  /**  */
  value?: string;
}

export interface OrganizationAddressV3_0_rc1 {
  /**  */
  city: string;

  /**  */
  region?: string;

  /**  */
  country: EnumOrganizationAddressV3_0_rc1Country;
}

export interface OrganizationV3_0_rc1 {
  /**  */
  name: string;

  /**  */
  address: OrganizationAddressV3_0_rc1;

  /**  */
  'disambiguated-organization'?: DisambiguatedOrganizationV3_0_rc1;
}

export interface PeerReviewDuplicateGroupV3_0_rc1 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc1;

  /**  */
  'peer-review-summary'?: PeerReviewSummaryV3_0_rc1[];
}

export interface PeerReviewGroupV3_0_rc1 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc1;

  /**  */
  'peer-review-group'?: PeerReviewDuplicateGroupV3_0_rc1[];
}

export interface PeerReviewSummaryV3_0_rc1 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc1;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  source?: SourceV3_0_rc1;

  /**  */
  'reviewer-role'?: EnumPeerReviewSummaryV3_0_rc1ReviewerRole;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc1;

  /**  */
  'review-url'?: UrlV3_0_rc1;

  /**  */
  'review-type'?: EnumPeerReviewSummaryV3_0_rc1ReviewType;

  /**  */
  'completion-date'?: FuzzyDateV3_0_rc1;

  /**  */
  'review-group-id': string;

  /**  */
  'convening-organization': OrganizationV3_0_rc1;

  /**  */
  visibility?: EnumPeerReviewSummaryV3_0_rc1Visibility;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  'display-index'?: string;
}

export interface PeerReviewsV3_0_rc1 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  group?: PeerReviewGroupV3_0_rc1[];

  /**  */
  path?: string;
}

export interface PublicationDateV3_0_rc1 {
  /**  */
  year: YearV3_0_rc1;

  /**  */
  month?: MonthV3_0_rc1;

  /**  */
  day?: DayV3_0_rc1;

  /**  */
  'media-type'?: EnumPublicationDateV3_0_rc1MediaType;
}

export interface QualificationSummaryV3_0_rc1 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc1;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  source?: SourceV3_0_rc1;

  /**  */
  'put-code'?: number;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date'?: FuzzyDateV3_0_rc1;

  /**  */
  'end-date'?: FuzzyDateV3_0_rc1;

  /**  */
  organization?: OrganizationV3_0_rc1;

  /**  */
  url?: UrlV3_0_rc1;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc1;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumQualificationSummaryV3_0_rc1Visibility;

  /**  */
  path?: string;
}

export interface QualificationsV3_0_rc1 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  'affiliation-group'?: AffiliationGroupV3_0_rc1QualificationSummaryV3_0_rc1[];

  /**  */
  path?: string;
}

export interface ResearchResourceGroupV3_0_rc1 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc1;

  /**  */
  'research-resource-summary'?: ResearchResourceSummaryV3_0_rc1[];
}

export interface ResearchResourceHostsV3_0_rc1 {
  /**  */
  organization?: OrganizationV3_0_rc1[];
}

export interface ResearchResourceProposalV3_0_rc1 {
  /**  */
  title?: ResearchResourceTitleV3_0_rc1;

  /**  */
  hosts?: ResearchResourceHostsV3_0_rc1;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc1;

  /**  */
  'start-date'?: FuzzyDateV3_0_rc1;

  /**  */
  'end-date'?: FuzzyDateV3_0_rc1;

  /**  */
  url?: UrlV3_0_rc1;
}

export interface ResearchResourceSummaryV3_0_rc1 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc1;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  source?: SourceV3_0_rc1;

  /**  */
  proposal?: ResearchResourceProposalV3_0_rc1;

  /**  */
  visibility?: EnumResearchResourceSummaryV3_0_rc1Visibility;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  'display-index'?: string;
}

export interface ResearchResourceTitleV3_0_rc1 {
  /**  */
  title?: TitleV3_0_rc1;

  /**  */
  'translated-title'?: TranslatedTitleV3_0_rc1;
}

export interface ResearchResourcesV3_0_rc1 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  group?: ResearchResourceGroupV3_0_rc1[];

  /**  */
  path?: string;
}

export interface ServiceSummaryV3_0_rc1 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc1;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  source?: SourceV3_0_rc1;

  /**  */
  'put-code'?: number;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date'?: FuzzyDateV3_0_rc1;

  /**  */
  'end-date'?: FuzzyDateV3_0_rc1;

  /**  */
  organization?: OrganizationV3_0_rc1;

  /**  */
  url?: UrlV3_0_rc1;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc1;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumServiceSummaryV3_0_rc1Visibility;

  /**  */
  path?: string;
}

export interface ServicesV3_0_rc1 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  'affiliation-group'?: AffiliationGroupV3_0_rc1ServiceSummaryV3_0_rc1[];

  /**  */
  path?: string;
}

export interface SourceClientIdV3_0_rc1 {
  /**  */
  uri?: string;

  /**  */
  path?: string;

  /**  */
  host?: string;
}

export interface SourceNameV3_0_rc1 {
  /**  */
  value?: string;
}

export interface SourceOrcidV3_0_rc1 {
  /**  */
  uri?: string;

  /**  */
  path?: string;

  /**  */
  host?: string;
}

export interface SourceV3_0_rc1 {
  /**  */
  'source-orcid'?: SourceOrcidV3_0_rc1;

  /**  */
  'source-client-id'?: SourceClientIdV3_0_rc1;

  /**  */
  'source-name'?: SourceNameV3_0_rc1;
}

export interface SubtitleV3_0_rc1 {
  /**  */
  value?: string;
}

export interface TitleV3_0_rc1 {
  /**  */
  value?: string;
}

export interface TranslatedTitleV3_0_rc1 {
  /**  */
  value?: string;

  /**  */
  'language-code': string;
}

export interface UrlV3_0_rc1 {
  /**  */
  value?: string;
}

export interface WorkGroupV3_0_rc1 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc1;

  /**  */
  'work-summary'?: WorkSummaryV3_0_rc1[];
}

export interface WorkSummaryV3_0_rc1 {
  /**  */
  'put-code'?: number;

  /**  */
  'created-date'?: CreatedDateV3_0_rc1;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  source?: SourceV3_0_rc1;

  /**  */
  title?: WorkTitleV3_0_rc1;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc1;

  /**  */
  url?: UrlV3_0_rc1;

  /**  */
  type?: EnumWorkSummaryV3_0_rc1Type;

  /**  */
  'publication-date'?: PublicationDateV3_0_rc1;

  /**  */
  'journal-title'?: TitleV3_0_rc1;

  /**  */
  visibility?: EnumWorkSummaryV3_0_rc1Visibility;

  /**  */
  path?: string;

  /**  */
  'display-index'?: string;
}

export interface WorkTitleV3_0_rc1 {
  /**  */
  title?: TitleV3_0_rc1;

  /**  */
  subtitle?: SubtitleV3_0_rc1;

  /**  */
  'translated-title'?: TranslatedTitleV3_0_rc1;
}

export interface WorksSummaryV3_0_rc1 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  group?: WorkGroupV3_0_rc1[];

  /**  */
  path?: string;
}

export interface YearV3_0_rc1 {
  /**  */
  value?: string;
}

export interface ContributorAttributesV3_0_rc1 {
  /**  */
  'contributor-sequence': EnumContributorAttributesV3_0_rc1ContributorSequence;

  /**  */
  'contributor-role': EnumContributorAttributesV3_0_rc1ContributorRole;
}

export interface ContributorEmailV3_0_rc1 {
  /**  */
  value?: string;
}

export interface ContributorOrcidV3_0_rc1 {
  /**  */
  uri?: string;

  /**  */
  path?: string;

  /**  */
  host?: string;
}

export interface ContributorV3_0_rc1 {
  /**  */
  'contributor-orcid'?: ContributorOrcidV3_0_rc1;

  /**  */
  'credit-name'?: CreditNameV3_0_rc1;

  /**  */
  'contributor-email'?: ContributorEmailV3_0_rc1;

  /**  */
  'contributor-attributes'?: ContributorAttributesV3_0_rc1;
}

export interface CountryV3_0_rc1 {
  /**  */
  value?: EnumCountryV3_0_rc1Value;
}

export interface CreditNameV3_0_rc1 {
  /**  */
  value?: string;
}

export interface WorkContributorsV3_0_rc1 {
  /**  */
  contributor?: ContributorV3_0_rc1[];
}

export interface WorkV3_0_rc1 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc1;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  source?: SourceV3_0_rc1;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  title?: WorkTitleV3_0_rc1;

  /**  */
  'journal-title'?: TitleV3_0_rc1;

  /**  */
  'short-description'?: string;

  /**  */
  citation?: Citation;

  /**  */
  type?: EnumWorkV3_0_rc1Type;

  /**  */
  'publication-date'?: PublicationDateV3_0_rc1;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc1;

  /**  */
  url?: UrlV3_0_rc1;

  /**  */
  contributors?: WorkContributorsV3_0_rc1;

  /**  */
  'language-code'?: string;

  /**  */
  country?: CountryV3_0_rc1;

  /**  */
  visibility?: EnumWorkV3_0_rc1Visibility;
}

export interface WorkBulkV3_0_rc1 {
  /**  */
  bulk?: BulkElement[];
}

export interface AmountV3_0_rc1 {
  /**  */
  value?: string;

  /**  */
  'currency-code': string;
}

export interface FundingContributorAttributesV3_0_rc1 {
  /**  */
  'contributor-role': EnumFundingContributorAttributesV3_0_rc1ContributorRole;
}

export interface FundingContributorV3_0_rc1 {
  /**  */
  'contributor-orcid'?: ContributorOrcidV3_0_rc1;

  /**  */
  'credit-name'?: CreditNameV3_0_rc1;

  /**  */
  'contributor-email'?: ContributorEmailV3_0_rc1;

  /**  */
  'contributor-attributes'?: FundingContributorAttributesV3_0_rc1;
}

export interface FundingContributorsV3_0_rc1 {
  /**  */
  contributor?: FundingContributorV3_0_rc1[];
}

export interface FundingV3_0_rc1 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc1;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  source?: SourceV3_0_rc1;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  type: EnumFundingV3_0_rc1Type;

  /**  */
  'organization-defined-type'?: OrganizationDefinedFundingSubTypeV3_0_rc1;

  /**  */
  title: FundingTitleV3_0_rc1;

  /**  */
  'short-description'?: string;

  /**  */
  amount?: AmountV3_0_rc1;

  /**  */
  url?: UrlV3_0_rc1;

  /**  */
  'start-date'?: FuzzyDateV3_0_rc1;

  /**  */
  'end-date'?: FuzzyDateV3_0_rc1;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc1;

  /**  */
  contributors?: FundingContributorsV3_0_rc1;

  /**  */
  organization: OrganizationV3_0_rc1;

  /**  */
  visibility?: EnumFundingV3_0_rc1Visibility;
}

export interface OrganizationDefinedFundingSubTypeV3_0_rc1 {
  /**  */
  value?: string;
}

export interface EducationV3_0_rc1 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc1;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  source?: SourceV3_0_rc1;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date': FuzzyDateV3_0_rc1;

  /**  */
  'end-date'?: FuzzyDateV3_0_rc1;

  /**  */
  organization: OrganizationV3_0_rc1;

  /**  */
  url?: UrlV3_0_rc1;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc1;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumEducationV3_0_rc1Visibility;
}

export interface EmploymentV3_0_rc1 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc1;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  source?: SourceV3_0_rc1;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date': FuzzyDateV3_0_rc1;

  /**  */
  'end-date'?: FuzzyDateV3_0_rc1;

  /**  */
  organization: OrganizationV3_0_rc1;

  /**  */
  url?: UrlV3_0_rc1;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc1;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumEmploymentV3_0_rc1Visibility;
}

export interface PeerReviewV3_0_rc1 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc1;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  source?: SourceV3_0_rc1;

  /**  */
  'reviewer-role'?: EnumPeerReviewV3_0_rc1ReviewerRole;

  /**  */
  'review-identifiers'?: ExternalIDsV3_0_rc1;

  /**  */
  'review-url'?: UrlV3_0_rc1;

  /**  */
  'review-type'?: EnumPeerReviewV3_0_rc1ReviewType;

  /**  */
  'review-completion-date'?: FuzzyDateV3_0_rc1;

  /**  */
  'review-group-id': string;

  /**  */
  'subject-external-identifier'?: ExternalIDV3_0_rc1;

  /**  */
  'subject-container-name'?: TitleV3_0_rc1;

  /**  */
  'subject-type'?: EnumPeerReviewV3_0_rc1SubjectType;

  /**  */
  'subject-name'?: WorkTitleV3_0_rc1;

  /**  */
  'subject-url'?: UrlV3_0_rc1;

  /**  */
  'convening-organization': OrganizationV3_0_rc1;

  /**  */
  visibility?: EnumPeerReviewV3_0_rc1Visibility;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;
}

export interface AuthorizationUrlV3_0_rc1 {
  /**  */
  uri: string;

  /**  */
  path: string;

  /**  */
  host: string;
}

export interface ItemV3_0_rc1 {
  /**  */
  'put-code'?: string;

  /**  */
  'item-type': EnumItemV3_0_rc1ItemType;

  /**  */
  'item-name': string;

  /**  */
  'external-id': ExternalIDV3_0_rc1;
}

export interface ItemsV3_0_rc1 {
  /**  */
  item: ItemV3_0_rc1[];
}

export interface NotificationPermissionV3_0_rc1 {
  /**  */
  'put-code'?: number;

  /**  */
  'notification-type': EnumNotificationPermissionV3_0_rc1NotificationType;

  /**  */
  'authorization-url': AuthorizationUrlV3_0_rc1;

  /**  */
  'notification-subject'?: string;

  /**  */
  'notification-intro'?: string;

  /**  */
  items: ItemsV3_0_rc1;

  /**  */
  'created-date'?: Date;

  /**  */
  'sent-date'?: Date;

  /**  */
  'read-date'?: Date;

  /**  */
  'actioned-date'?: Date;

  /**  */
  'archived-date'?: Date;

  /**  */
  source?: SourceV3_0_rc1;
}

export interface ResearcherUrlV3_0_rc1 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc1;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  source?: SourceV3_0_rc1;

  /**  */
  'url-name'?: string;

  /**  */
  url?: UrlV3_0_rc1;

  /**  */
  visibility?: EnumResearcherUrlV3_0_rc1Visibility;

  /**  */
  path?: string;

  /**  */
  'put-code'?: number;

  /**  */
  'display-index'?: number;
}

export interface OtherNameV3_0_rc1 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc1;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  source?: SourceV3_0_rc1;

  /**  */
  content?: string;

  /**  */
  visibility?: EnumOtherNameV3_0_rc1Visibility;

  /**  */
  path?: string;

  /**  */
  'put-code'?: number;

  /**  */
  'display-index'?: number;
}

export interface BiographyV3_0_rc1 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc1;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  content?: string;

  /**  */
  visibility?: EnumBiographyV3_0_rc1Visibility;

  /**  */
  path?: string;
}

export interface FamilyNameV3_0_rc1 {
  /**  */
  value?: string;
}

export interface GivenNamesV3_0_rc1 {
  /**  */
  value?: string;
}

export interface NameV3_0_rc1 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc1;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  'given-names'?: GivenNamesV3_0_rc1;

  /**  */
  'family-name'?: FamilyNameV3_0_rc1;

  /**  */
  'credit-name'?: CreditNameV3_0_rc1;

  /**  */
  source?: SourceV3_0_rc1;

  /**  */
  visibility?: EnumNameV3_0_rc1Visibility;

  /**  */
  path?: string;
}

export interface OtherNamesV3_0_rc1 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  'other-name'?: OtherNameV3_0_rc1[];

  /**  */
  path?: string;
}

export interface PersonalDetailsV3_0_rc1 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  name?: NameV3_0_rc1;

  /**  */
  'other-names'?: OtherNamesV3_0_rc1;

  /**  */
  biography?: BiographyV3_0_rc1;

  /**  */
  path?: string;
}

export interface PersonExternalIdentifierV3_0_rc1 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc1;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  source?: SourceV3_0_rc1;

  /**  */
  'external-id-type': string;

  /**  */
  'external-id-value': string;

  /**  */
  'external-id-url'?: UrlV3_0_rc1;

  /**  */
  'external-id-relationship'?: EnumPersonExternalIdentifierV3_0_rc1ExternalIdRelationship;

  /**  */
  visibility?: EnumPersonExternalIdentifierV3_0_rc1Visibility;

  /**  */
  path?: string;

  /**  */
  'put-code'?: number;

  /**  */
  'display-index'?: number;
}

export interface KeywordV3_0_rc1 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc1;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  source?: SourceV3_0_rc1;

  /**  */
  content?: string;

  /**  */
  visibility?: EnumKeywordV3_0_rc1Visibility;

  /**  */
  path?: string;

  /**  */
  'put-code'?: number;

  /**  */
  'display-index'?: number;
}

export interface AddressV3_0_rc1 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc1;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  source?: SourceV3_0_rc1;

  /**  */
  country: CountryV3_0_rc1;

  /**  */
  visibility?: EnumAddressV3_0_rc1Visibility;

  /**  */
  path?: string;

  /**  */
  'put-code'?: number;

  /**  */
  'display-index'?: number;
}

export interface AddressesV3_0_rc1 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  address?: AddressV3_0_rc1[];

  /**  */
  path?: string;
}

export interface CompletionDateV3_0_rc1 {
  /**  */
  value?: Date;
}

export interface DeactivationDateV3_0_rc1 {
  /**  */
  value?: Date;
}

export interface EmailV3_0_rc1 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc1;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  source?: SourceV3_0_rc1;

  /**  */
  email?: string;

  /**  */
  path?: string;

  /**  */
  visibility?: EnumEmailV3_0_rc1Visibility;

  /**  */
  verified?: boolean;

  /**  */
  primary?: boolean;

  /**  */
  'put-code'?: number;
}

export interface EmailsV3_0_rc1 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  email?: EmailV3_0_rc1[];

  /**  */
  path?: string;
}

export interface HistoryV3_0_rc1 {
  /**  */
  'creation-method'?: EnumHistoryV3_0_rc1CreationMethod;

  /**  */
  'completion-date'?: CompletionDateV3_0_rc1;

  /**  */
  'submission-date'?: SubmissionDateV3_0_rc1;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  claimed?: boolean;

  /**  */
  source?: SourceV3_0_rc1;

  /**  */
  'deactivation-date'?: DeactivationDateV3_0_rc1;

  /**  */
  'verified-email'?: boolean;

  /**  */
  'verified-primary-email'?: boolean;
}

export interface KeywordsV3_0_rc1 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  keyword?: KeywordV3_0_rc1[];

  /**  */
  path?: string;
}

export interface OrcidIdentifierV3_0_rc1 {
  /**  */
  uri?: string;

  /**  */
  path?: string;

  /**  */
  host?: string;
}

export interface PersonExternalIdentifiersV3_0_rc1 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  'external-identifier'?: PersonExternalIdentifierV3_0_rc1[];

  /**  */
  path?: string;
}

export interface PersonV3_0_rc1 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  name?: NameV3_0_rc1;

  /**  */
  'other-names'?: OtherNamesV3_0_rc1;

  /**  */
  biography?: BiographyV3_0_rc1;

  /**  */
  'researcher-urls'?: ResearcherUrlsV3_0_rc1;

  /**  */
  emails?: EmailsV3_0_rc1;

  /**  */
  addresses?: AddressesV3_0_rc1;

  /**  */
  keywords?: KeywordsV3_0_rc1;

  /**  */
  'external-identifiers'?: PersonExternalIdentifiersV3_0_rc1;

  /**  */
  path?: string;
}

export interface PreferencesV3_0_rc1 {
  /**  */
  locale?: EnumPreferencesV3_0_rc1Locale;
}

export interface RecordV3_0_rc1 {
  /**  */
  'orcid-identifier'?: OrcidIdentifierV3_0_rc1;

  /**  */
  preferences?: PreferencesV3_0_rc1;

  /**  */
  history?: HistoryV3_0_rc1;

  /**  */
  person?: PersonV3_0_rc1;

  /**  */
  'activities-summary'?: ActivitiesSummaryV3_0_rc1;

  /**  */
  path?: string;
}

export interface ResearcherUrlsV3_0_rc1 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  'researcher-url'?: ResearcherUrlV3_0_rc1[];

  /**  */
  path?: string;
}

export interface SubmissionDateV3_0_rc1 {
  /**  */
  value?: Date;
}

export interface ResultV3_0_rc1 {
  /**  */
  'orcid-identifier'?: OrcidIdentifierV3_0_rc1;
}

export interface SearchV3_0_rc1 {
  /**  */
  result?: ResultV3_0_rc1[];

  /**  */
  'num-found'?: number;
}

export interface DistinctionV3_0_rc1 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc1;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  source?: SourceV3_0_rc1;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date': FuzzyDateV3_0_rc1;

  /**  */
  'end-date'?: FuzzyDateV3_0_rc1;

  /**  */
  organization: OrganizationV3_0_rc1;

  /**  */
  url?: UrlV3_0_rc1;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc1;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumDistinctionV3_0_rc1Visibility;
}

export interface InvitedPositionV3_0_rc1 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc1;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  source?: SourceV3_0_rc1;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date': FuzzyDateV3_0_rc1;

  /**  */
  'end-date'?: FuzzyDateV3_0_rc1;

  /**  */
  organization: OrganizationV3_0_rc1;

  /**  */
  url?: UrlV3_0_rc1;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc1;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumInvitedPositionV3_0_rc1Visibility;
}

export interface MembershipV3_0_rc1 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc1;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  source?: SourceV3_0_rc1;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date': FuzzyDateV3_0_rc1;

  /**  */
  'end-date'?: FuzzyDateV3_0_rc1;

  /**  */
  organization: OrganizationV3_0_rc1;

  /**  */
  url?: UrlV3_0_rc1;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc1;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumMembershipV3_0_rc1Visibility;
}

export interface QualificationV3_0_rc1 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc1;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  source?: SourceV3_0_rc1;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date': FuzzyDateV3_0_rc1;

  /**  */
  'end-date'?: FuzzyDateV3_0_rc1;

  /**  */
  organization: OrganizationV3_0_rc1;

  /**  */
  url?: UrlV3_0_rc1;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc1;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumQualificationV3_0_rc1Visibility;
}

export interface ServiceV3_0_rc1 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc1;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  source?: SourceV3_0_rc1;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date': FuzzyDateV3_0_rc1;

  /**  */
  'end-date'?: FuzzyDateV3_0_rc1;

  /**  */
  organization: OrganizationV3_0_rc1;

  /**  */
  url?: UrlV3_0_rc1;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc1;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumServiceV3_0_rc1Visibility;
}

export interface ResearchResourceItemV3_0_rc1 {
  /**  */
  'resource-name'?: string;

  /**  */
  'resource-type'?: string;

  /**  */
  hosts?: ResearchResourceHostsV3_0_rc1;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc1;

  /**  */
  url?: UrlV3_0_rc1;
}

export interface ResearchResourceV3_0_rc1 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc1;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc1;

  /**  */
  source?: SourceV3_0_rc1;

  /**  */
  proposal?: ResearchResourceProposalV3_0_rc1;

  /**  */
  'resource-item'?: ResearchResourceItemV3_0_rc1[];

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumResearchResourceV3_0_rc1Visibility;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;
}

export interface ActivitiesSummaryV3_0_rc2 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  distinctions?: DistinctionsSummaryV3_0_rc2;

  /**  */
  educations?: EducationsSummaryV3_0_rc2;

  /**  */
  employments?: EmploymentsSummaryV3_0_rc2;

  /**  */
  fundings?: FundingsV3_0_rc2;

  /**  */
  'invited-positions'?: InvitedPositionsV3_0_rc2;

  /**  */
  memberships?: MembershipsV3_0_rc2;

  /**  */
  'peer-reviews'?: PeerReviewsV3_0_rc2;

  /**  */
  qualifications?: QualificationsV3_0_rc2;

  /**  */
  'research-resources'?: ResearchResourcesV3_0_rc2;

  /**  */
  services?: ServicesV3_0_rc2;

  /**  */
  works?: WorksSummaryV3_0_rc2;

  /**  */
  path?: string;
}

export interface AffiliationGroupV3_0_rc2 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc2;

  /**  */
  summaries?: AffiliationSummaryV3_0_rc2[];
}

export interface AffiliationGroupV3_0_rc2DistinctionSummaryV3_0_rc2 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc2;

  /**  */
  summaries?: DistinctionSummaryV3_0_rc2[];
}

export interface AffiliationGroupV3_0_rc2EducationSummaryV3_0_rc2 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc2;

  /**  */
  summaries?: EducationSummaryV3_0_rc2[];
}

export interface AffiliationGroupV3_0_rc2EmploymentSummaryV3_0_rc2 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc2;

  /**  */
  summaries?: EmploymentSummaryV3_0_rc2[];
}

export interface AffiliationGroupV3_0_rc2InvitedPositionSummaryV3_0_rc2 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc2;

  /**  */
  summaries?: InvitedPositionSummaryV3_0_rc2[];
}

export interface AffiliationGroupV3_0_rc2MembershipSummaryV3_0_rc2 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc2;

  /**  */
  summaries?: MembershipSummaryV3_0_rc2[];
}

export interface AffiliationGroupV3_0_rc2QualificationSummaryV3_0_rc2 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc2;

  /**  */
  summaries?: QualificationSummaryV3_0_rc2[];
}

export interface AffiliationGroupV3_0_rc2ServiceSummaryV3_0_rc2 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc2;

  /**  */
  summaries?: ServiceSummaryV3_0_rc2[];
}

export interface AffiliationSummaryV3_0_rc2 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc2;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  source?: SourceV3_0_rc2;

  /**  */
  'put-code'?: number;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date'?: FuzzyDateV3_0_rc2;

  /**  */
  'end-date'?: FuzzyDateV3_0_rc2;

  /**  */
  organization?: OrganizationV3_0_rc2;

  /**  */
  url?: UrlV3_0_rc2;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc2;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumAffiliationSummaryV3_0_rc2Visibility;

  /**  */
  path?: string;
}

export interface CreatedDateV3_0_rc2 {
  /**  */
  value?: Date;
}

export interface DayV3_0_rc2 {
  /**  */
  value?: string;
}

export interface DisambiguatedOrganizationV3_0_rc2 {
  /**  */
  'disambiguated-organization-identifier': string;

  /**  */
  'disambiguation-source': string;
}

export interface DistinctionSummaryV3_0_rc2 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc2;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  source?: SourceV3_0_rc2;

  /**  */
  'put-code'?: number;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date'?: FuzzyDateV3_0_rc2;

  /**  */
  'end-date'?: FuzzyDateV3_0_rc2;

  /**  */
  organization?: OrganizationV3_0_rc2;

  /**  */
  url?: UrlV3_0_rc2;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc2;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumDistinctionSummaryV3_0_rc2Visibility;

  /**  */
  path?: string;
}

export interface DistinctionsSummaryV3_0_rc2 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  'affiliation-group'?: AffiliationGroupV3_0_rc2DistinctionSummaryV3_0_rc2[];

  /**  */
  path?: string;
}

export interface EducationSummaryV3_0_rc2 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc2;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  source?: SourceV3_0_rc2;

  /**  */
  'put-code'?: number;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date'?: FuzzyDateV3_0_rc2;

  /**  */
  'end-date'?: FuzzyDateV3_0_rc2;

  /**  */
  organization?: OrganizationV3_0_rc2;

  /**  */
  url?: UrlV3_0_rc2;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc2;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumEducationSummaryV3_0_rc2Visibility;

  /**  */
  path?: string;
}

export interface EducationsSummaryV3_0_rc2 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  'affiliation-group'?: AffiliationGroupV3_0_rc2EducationSummaryV3_0_rc2[];

  /**  */
  path?: string;
}

export interface EmploymentSummaryV3_0_rc2 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc2;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  source?: SourceV3_0_rc2;

  /**  */
  'put-code'?: number;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date'?: FuzzyDateV3_0_rc2;

  /**  */
  'end-date'?: FuzzyDateV3_0_rc2;

  /**  */
  organization?: OrganizationV3_0_rc2;

  /**  */
  url?: UrlV3_0_rc2;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc2;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumEmploymentSummaryV3_0_rc2Visibility;

  /**  */
  path?: string;
}

export interface EmploymentsSummaryV3_0_rc2 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  'affiliation-group'?: AffiliationGroupV3_0_rc2EmploymentSummaryV3_0_rc2[];

  /**  */
  path?: string;
}

export interface ExternalIDV3_0_rc2 {
  /**  */
  'external-id-type': string;

  /**  */
  'external-id-value': string;

  /**  */
  'external-id-normalized'?: TransientNonEmptyString;

  /**  */
  'external-id-normalized-error'?: TransientError;

  /**  */
  'external-id-url'?: UrlV3_0_rc2;

  /**  */
  'external-id-relationship'?: EnumExternalIDV3_0_rc2ExternalIdRelationship;
}

export interface ExternalIDsV3_0_rc2 {
  /**  */
  'external-id'?: ExternalIDV3_0_rc2[];
}

export interface FundingGroupV3_0_rc2 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc2;

  /**  */
  'funding-summary'?: FundingSummaryV3_0_rc2[];
}

export interface FundingSummaryV3_0_rc2 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc2;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  source?: SourceV3_0_rc2;

  /**  */
  title: FundingTitleV3_0_rc2;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc2;

  /**  */
  url?: UrlV3_0_rc2;

  /**  */
  type: EnumFundingSummaryV3_0_rc2Type;

  /**  */
  'start-date'?: FuzzyDateV3_0_rc2;

  /**  */
  'end-date'?: FuzzyDateV3_0_rc2;

  /**  */
  organization: OrganizationV3_0_rc2;

  /**  */
  visibility?: EnumFundingSummaryV3_0_rc2Visibility;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  'display-index'?: string;
}

export interface FundingTitleV3_0_rc2 {
  /**  */
  title?: TitleV3_0_rc2;

  /**  */
  'translated-title'?: TranslatedTitleV3_0_rc2;
}

export interface FundingsV3_0_rc2 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  group?: FundingGroupV3_0_rc2[];

  /**  */
  path?: string;
}

export interface FuzzyDateV3_0_rc2 {
  /**  */
  year: YearV3_0_rc2;

  /**  */
  month?: MonthV3_0_rc2;

  /**  */
  day?: DayV3_0_rc2;
}

export interface InvitedPositionSummaryV3_0_rc2 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc2;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  source?: SourceV3_0_rc2;

  /**  */
  'put-code'?: number;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date'?: FuzzyDateV3_0_rc2;

  /**  */
  'end-date'?: FuzzyDateV3_0_rc2;

  /**  */
  organization?: OrganizationV3_0_rc2;

  /**  */
  url?: UrlV3_0_rc2;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc2;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumInvitedPositionSummaryV3_0_rc2Visibility;

  /**  */
  path?: string;
}

export interface InvitedPositionsV3_0_rc2 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  'affiliation-group'?: AffiliationGroupV3_0_rc2InvitedPositionSummaryV3_0_rc2[];

  /**  */
  path?: string;
}

export interface LastModifiedDateV3_0_rc2 {
  /**  */
  value?: Date;
}

export interface MembershipSummaryV3_0_rc2 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc2;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  source?: SourceV3_0_rc2;

  /**  */
  'put-code'?: number;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date'?: FuzzyDateV3_0_rc2;

  /**  */
  'end-date'?: FuzzyDateV3_0_rc2;

  /**  */
  organization?: OrganizationV3_0_rc2;

  /**  */
  url?: UrlV3_0_rc2;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc2;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumMembershipSummaryV3_0_rc2Visibility;

  /**  */
  path?: string;
}

export interface MembershipsV3_0_rc2 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  'affiliation-group'?: AffiliationGroupV3_0_rc2MembershipSummaryV3_0_rc2[];

  /**  */
  path?: string;
}

export interface MonthV3_0_rc2 {
  /**  */
  value?: string;
}

export interface OrganizationAddressV3_0_rc2 {
  /**  */
  city: string;

  /**  */
  region?: string;

  /**  */
  country: EnumOrganizationAddressV3_0_rc2Country;
}

export interface OrganizationV3_0_rc2 {
  /**  */
  name: string;

  /**  */
  address: OrganizationAddressV3_0_rc2;

  /**  */
  'disambiguated-organization'?: DisambiguatedOrganizationV3_0_rc2;
}

export interface PeerReviewDuplicateGroupV3_0_rc2 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc2;

  /**  */
  'peer-review-summary'?: PeerReviewSummaryV3_0_rc2[];
}

export interface PeerReviewGroupV3_0_rc2 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc2;

  /**  */
  'peer-review-group'?: PeerReviewDuplicateGroupV3_0_rc2[];
}

export interface PeerReviewSummaryV3_0_rc2 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc2;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  source?: SourceV3_0_rc2;

  /**  */
  'reviewer-role'?: EnumPeerReviewSummaryV3_0_rc2ReviewerRole;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc2;

  /**  */
  'review-url'?: UrlV3_0_rc2;

  /**  */
  'review-type'?: EnumPeerReviewSummaryV3_0_rc2ReviewType;

  /**  */
  'completion-date'?: FuzzyDateV3_0_rc2;

  /**  */
  'review-group-id': string;

  /**  */
  'convening-organization': OrganizationV3_0_rc2;

  /**  */
  visibility?: EnumPeerReviewSummaryV3_0_rc2Visibility;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  'display-index'?: string;
}

export interface PeerReviewsV3_0_rc2 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  group?: PeerReviewGroupV3_0_rc2[];

  /**  */
  path?: string;
}

export interface PublicationDateV3_0_rc2 {
  /**  */
  year: YearV3_0_rc2;

  /**  */
  month?: MonthV3_0_rc2;

  /**  */
  day?: DayV3_0_rc2;
}

export interface QualificationSummaryV3_0_rc2 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc2;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  source?: SourceV3_0_rc2;

  /**  */
  'put-code'?: number;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date'?: FuzzyDateV3_0_rc2;

  /**  */
  'end-date'?: FuzzyDateV3_0_rc2;

  /**  */
  organization?: OrganizationV3_0_rc2;

  /**  */
  url?: UrlV3_0_rc2;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc2;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumQualificationSummaryV3_0_rc2Visibility;

  /**  */
  path?: string;
}

export interface QualificationsV3_0_rc2 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  'affiliation-group'?: AffiliationGroupV3_0_rc2QualificationSummaryV3_0_rc2[];

  /**  */
  path?: string;
}

export interface ResearchResourceGroupV3_0_rc2 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc2;

  /**  */
  'research-resource-summary'?: ResearchResourceSummaryV3_0_rc2[];
}

export interface ResearchResourceHostsV3_0_rc2 {
  /**  */
  organization?: OrganizationV3_0_rc2[];
}

export interface ResearchResourceProposalV3_0_rc2 {
  /**  */
  title?: ResearchResourceTitleV3_0_rc2;

  /**  */
  hosts?: ResearchResourceHostsV3_0_rc2;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc2;

  /**  */
  'start-date'?: FuzzyDateV3_0_rc2;

  /**  */
  'end-date'?: FuzzyDateV3_0_rc2;

  /**  */
  url?: UrlV3_0_rc2;
}

export interface ResearchResourceSummaryV3_0_rc2 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc2;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  source?: SourceV3_0_rc2;

  /**  */
  proposal?: ResearchResourceProposalV3_0_rc2;

  /**  */
  visibility?: EnumResearchResourceSummaryV3_0_rc2Visibility;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  'display-index'?: string;
}

export interface ResearchResourceTitleV3_0_rc2 {
  /**  */
  title?: TitleV3_0_rc2;

  /**  */
  'translated-title'?: TranslatedTitleV3_0_rc2;
}

export interface ResearchResourcesV3_0_rc2 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  group?: ResearchResourceGroupV3_0_rc2[];

  /**  */
  path?: string;
}

export interface ServiceSummaryV3_0_rc2 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc2;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  source?: SourceV3_0_rc2;

  /**  */
  'put-code'?: number;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date'?: FuzzyDateV3_0_rc2;

  /**  */
  'end-date'?: FuzzyDateV3_0_rc2;

  /**  */
  organization?: OrganizationV3_0_rc2;

  /**  */
  url?: UrlV3_0_rc2;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc2;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumServiceSummaryV3_0_rc2Visibility;

  /**  */
  path?: string;
}

export interface ServicesV3_0_rc2 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  'affiliation-group'?: AffiliationGroupV3_0_rc2ServiceSummaryV3_0_rc2[];

  /**  */
  path?: string;
}

export interface SourceClientIdV3_0_rc2 {
  /**  */
  uri?: string;

  /**  */
  path?: string;

  /**  */
  host?: string;
}

export interface SourceNameV3_0_rc2 {
  /**  */
  value?: string;
}

export interface SourceOrcidV3_0_rc2 {
  /**  */
  uri?: string;

  /**  */
  path?: string;

  /**  */
  host?: string;
}

export interface SourceV3_0_rc2 {
  /**  */
  'source-orcid'?: SourceOrcidV3_0_rc2;

  /**  */
  'source-client-id'?: SourceClientIdV3_0_rc2;

  /**  */
  'source-name'?: SourceNameV3_0_rc2;

  /**  */
  'assertion-origin-orcid'?: SourceOrcidV3_0_rc2;

  /**  */
  'assertion-origin-client-id'?: SourceClientIdV3_0_rc2;

  /**  */
  'assertion-origin-name'?: SourceNameV3_0_rc2;
}

export interface SubtitleV3_0_rc2 {
  /**  */
  value?: string;
}

export interface TitleV3_0_rc2 {
  /**  */
  value?: string;
}

export interface TranslatedTitleV3_0_rc2 {
  /**  */
  value?: string;

  /**  */
  'language-code': EnumTranslatedTitleV3_0_rc2LanguageCode;
}

export interface UrlV3_0_rc2 {
  /**  */
  value?: string;
}

export interface WorkGroupV3_0_rc2 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc2;

  /**  */
  'work-summary'?: WorkSummaryV3_0_rc2[];
}

export interface WorkSummaryV3_0_rc2 {
  /**  */
  'put-code'?: number;

  /**  */
  'created-date'?: CreatedDateV3_0_rc2;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  source?: SourceV3_0_rc2;

  /**  */
  title?: WorkTitleV3_0_rc2;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc2;

  /**  */
  url?: UrlV3_0_rc2;

  /**  */
  type?: EnumWorkSummaryV3_0_rc2Type;

  /**  */
  'publication-date'?: PublicationDateV3_0_rc2;

  /**  */
  'journal-title'?: TitleV3_0_rc2;

  /**  */
  visibility?: EnumWorkSummaryV3_0_rc2Visibility;

  /**  */
  path?: string;

  /**  */
  'display-index'?: string;
}

export interface WorkTitleV3_0_rc2 {
  /**  */
  title?: TitleV3_0_rc2;

  /**  */
  subtitle?: SubtitleV3_0_rc2;

  /**  */
  'translated-title'?: TranslatedTitleV3_0_rc2;
}

export interface WorksSummaryV3_0_rc2 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  group?: WorkGroupV3_0_rc2[];

  /**  */
  path?: string;
}

export interface YearV3_0_rc2 {
  /**  */
  value?: string;
}

export interface ContributorAttributesV3_0_rc2 {
  /**  */
  'contributor-sequence': EnumContributorAttributesV3_0_rc2ContributorSequence;

  /**  */
  'contributor-role': EnumContributorAttributesV3_0_rc2ContributorRole;
}

export interface ContributorEmailV3_0_rc2 {
  /**  */
  value?: string;
}

export interface ContributorOrcidV3_0_rc2 {
  /**  */
  uri?: string;

  /**  */
  path?: string;

  /**  */
  host?: string;
}

export interface ContributorV3_0_rc2 {
  /**  */
  'contributor-orcid'?: ContributorOrcidV3_0_rc2;

  /**  */
  'credit-name'?: CreditNameV3_0_rc2;

  /**  */
  'contributor-email'?: ContributorEmailV3_0_rc2;

  /**  */
  'contributor-attributes'?: ContributorAttributesV3_0_rc2;
}

export interface CountryV3_0_rc2 {
  /**  */
  value?: EnumCountryV3_0_rc2Value;
}

export interface CreditNameV3_0_rc2 {
  /**  */
  value?: string;
}

export interface WorkContributorsV3_0_rc2 {
  /**  */
  contributor?: ContributorV3_0_rc2[];
}

export interface WorkV3_0_rc2 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc2;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  source?: SourceV3_0_rc2;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  title?: WorkTitleV3_0_rc2;

  /**  */
  'journal-title'?: TitleV3_0_rc2;

  /**  */
  'short-description'?: string;

  /**  */
  citation?: Citation;

  /**  */
  type?: EnumWorkV3_0_rc2Type;

  /**  */
  'publication-date'?: PublicationDateV3_0_rc2;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc2;

  /**  */
  url?: UrlV3_0_rc2;

  /**  */
  contributors?: WorkContributorsV3_0_rc2;

  /**  */
  'language-code'?: EnumWorkV3_0_rc2LanguageCode;

  /**  */
  country?: CountryV3_0_rc2;

  /**  */
  visibility?: EnumWorkV3_0_rc2Visibility;
}

export interface WorkBulkV3_0_rc2 {
  /**  */
  bulk?: BulkElement[];
}

export interface AmountV3_0_rc2 {
  /**  */
  value?: string;

  /**  */
  'currency-code': Currency;
}

export interface FundingContributorAttributesV3_0_rc2 {
  /**  */
  'contributor-role': EnumFundingContributorAttributesV3_0_rc2ContributorRole;
}

export interface FundingContributorV3_0_rc2 {
  /**  */
  'contributor-orcid'?: ContributorOrcidV3_0_rc2;

  /**  */
  'credit-name'?: CreditNameV3_0_rc2;

  /**  */
  'contributor-email'?: ContributorEmailV3_0_rc2;

  /**  */
  'contributor-attributes'?: FundingContributorAttributesV3_0_rc2;
}

export interface FundingContributorsV3_0_rc2 {
  /**  */
  contributor?: FundingContributorV3_0_rc2[];
}

export interface FundingV3_0_rc2 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc2;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  source?: SourceV3_0_rc2;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  type: EnumFundingV3_0_rc2Type;

  /**  */
  'organization-defined-type'?: OrganizationDefinedFundingSubTypeV3_0_rc2;

  /**  */
  title: FundingTitleV3_0_rc2;

  /**  */
  'short-description'?: string;

  /**  */
  amount?: AmountV3_0_rc2;

  /**  */
  url?: UrlV3_0_rc2;

  /**  */
  'start-date'?: FuzzyDateV3_0_rc2;

  /**  */
  'end-date'?: FuzzyDateV3_0_rc2;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc2;

  /**  */
  contributors?: FundingContributorsV3_0_rc2;

  /**  */
  organization: OrganizationV3_0_rc2;

  /**  */
  visibility?: EnumFundingV3_0_rc2Visibility;
}

export interface OrganizationDefinedFundingSubTypeV3_0_rc2 {
  /**  */
  value?: string;
}

export interface EducationV3_0_rc2 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc2;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  source?: SourceV3_0_rc2;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date': FuzzyDateV3_0_rc2;

  /**  */
  'end-date'?: FuzzyDateV3_0_rc2;

  /**  */
  organization: OrganizationV3_0_rc2;

  /**  */
  url?: UrlV3_0_rc2;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc2;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumEducationV3_0_rc2Visibility;
}

export interface EmploymentV3_0_rc2 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc2;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  source?: SourceV3_0_rc2;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date': FuzzyDateV3_0_rc2;

  /**  */
  'end-date'?: FuzzyDateV3_0_rc2;

  /**  */
  organization: OrganizationV3_0_rc2;

  /**  */
  url?: UrlV3_0_rc2;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc2;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumEmploymentV3_0_rc2Visibility;
}

export interface PeerReviewV3_0_rc2 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc2;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  source?: SourceV3_0_rc2;

  /**  */
  'reviewer-role'?: EnumPeerReviewV3_0_rc2ReviewerRole;

  /**  */
  'review-identifiers'?: ExternalIDsV3_0_rc2;

  /**  */
  'review-url'?: UrlV3_0_rc2;

  /**  */
  'review-type'?: EnumPeerReviewV3_0_rc2ReviewType;

  /**  */
  'review-completion-date'?: FuzzyDateV3_0_rc2;

  /**  */
  'review-group-id': string;

  /**  */
  'subject-external-identifier'?: ExternalIDV3_0_rc2;

  /**  */
  'subject-container-name'?: TitleV3_0_rc2;

  /**  */
  'subject-type'?: EnumPeerReviewV3_0_rc2SubjectType;

  /**  */
  'subject-name'?: SubjectNameV3_0_rc2;

  /**  */
  'subject-url'?: UrlV3_0_rc2;

  /**  */
  'convening-organization': OrganizationV3_0_rc2;

  /**  */
  visibility?: EnumPeerReviewV3_0_rc2Visibility;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;
}

export interface SubjectNameV3_0_rc2 {
  /**  */
  title?: TitleV3_0_rc2;

  /**  */
  subtitle?: SubtitleV3_0_rc2;

  /**  */
  'translated-title'?: TranslatedTitleV3_0_rc2;
}

export interface AuthorizationUrlV3_0_rc2 {
  /**  */
  uri: string;

  /**  */
  path: string;

  /**  */
  host: string;
}

export interface ItemV3_0_rc2 {
  /**  */
  'put-code'?: string;

  /**  */
  'item-type': EnumItemV3_0_rc2ItemType;

  /**  */
  'item-name': string;

  /**  */
  'external-id': ExternalIDV3_0_rc2;
}

export interface ItemsV3_0_rc2 {
  /**  */
  item: ItemV3_0_rc2[];
}

export interface NotificationPermissionV3_0_rc2 {
  /**  */
  'put-code'?: number;

  /**  */
  'notification-type': EnumNotificationPermissionV3_0_rc2NotificationType;

  /**  */
  'authorization-url': AuthorizationUrlV3_0_rc2;

  /**  */
  'notification-subject'?: string;

  /**  */
  'notification-intro'?: string;

  /**  */
  items: ItemsV3_0_rc2;

  /**  */
  'created-date'?: Date;

  /**  */
  'sent-date'?: Date;

  /**  */
  'read-date'?: Date;

  /**  */
  'actioned-date'?: Date;

  /**  */
  'archived-date'?: Date;

  /**  */
  source?: SourceV3_0_rc2;
}

export interface ResearcherUrlV3_0_rc2 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc2;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  source?: SourceV3_0_rc2;

  /**  */
  'url-name'?: string;

  /**  */
  url?: UrlV3_0_rc2;

  /**  */
  visibility?: EnumResearcherUrlV3_0_rc2Visibility;

  /**  */
  path?: string;

  /**  */
  'put-code'?: number;

  /**  */
  'display-index'?: number;
}

export interface OtherNameV3_0_rc2 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc2;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  source?: SourceV3_0_rc2;

  /**  */
  content?: string;

  /**  */
  visibility?: EnumOtherNameV3_0_rc2Visibility;

  /**  */
  path?: string;

  /**  */
  'put-code'?: number;

  /**  */
  'display-index'?: number;
}

export interface BiographyV3_0_rc2 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc2;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  content?: string;

  /**  */
  visibility?: EnumBiographyV3_0_rc2Visibility;

  /**  */
  path?: string;
}

export interface FamilyNameV3_0_rc2 {
  /**  */
  value?: string;
}

export interface GivenNamesV3_0_rc2 {
  /**  */
  value?: string;
}

export interface NameV3_0_rc2 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc2;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  'given-names'?: GivenNamesV3_0_rc2;

  /**  */
  'family-name'?: FamilyNameV3_0_rc2;

  /**  */
  'credit-name'?: CreditNameV3_0_rc2;

  /**  */
  source?: SourceV3_0_rc2;

  /**  */
  visibility?: EnumNameV3_0_rc2Visibility;

  /**  */
  path?: string;
}

export interface OtherNamesV3_0_rc2 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  'other-name'?: OtherNameV3_0_rc2[];

  /**  */
  path?: string;
}

export interface PersonalDetailsV3_0_rc2 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  name?: NameV3_0_rc2;

  /**  */
  'other-names'?: OtherNamesV3_0_rc2;

  /**  */
  biography?: BiographyV3_0_rc2;

  /**  */
  path?: string;
}

export interface PersonExternalIdentifierV3_0_rc2 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc2;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  source?: SourceV3_0_rc2;

  /**  */
  'external-id-type': string;

  /**  */
  'external-id-value': string;

  /**  */
  'external-id-url'?: UrlV3_0_rc2;

  /**  */
  'external-id-relationship'?: EnumPersonExternalIdentifierV3_0_rc2ExternalIdRelationship;

  /**  */
  visibility?: EnumPersonExternalIdentifierV3_0_rc2Visibility;

  /**  */
  path?: string;

  /**  */
  'put-code'?: number;

  /**  */
  'display-index'?: number;
}

export interface KeywordV3_0_rc2 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc2;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  source?: SourceV3_0_rc2;

  /**  */
  content?: string;

  /**  */
  visibility?: EnumKeywordV3_0_rc2Visibility;

  /**  */
  path?: string;

  /**  */
  'put-code'?: number;

  /**  */
  'display-index'?: number;
}

export interface AddressV3_0_rc2 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc2;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  source?: SourceV3_0_rc2;

  /**  */
  country: CountryV3_0_rc2;

  /**  */
  visibility?: EnumAddressV3_0_rc2Visibility;

  /**  */
  path?: string;

  /**  */
  'put-code'?: number;

  /**  */
  'display-index'?: number;
}

export interface AddressesV3_0_rc2 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  address?: AddressV3_0_rc2[];

  /**  */
  path?: string;
}

export interface CompletionDateV3_0_rc2 {
  /**  */
  value?: Date;
}

export interface DeactivationDateV3_0_rc2 {
  /**  */
  value?: Date;
}

export interface EmailV3_0_rc2 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc2;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  source?: SourceV3_0_rc2;

  /**  */
  email?: string;

  /**  */
  path?: string;

  /**  */
  visibility?: EnumEmailV3_0_rc2Visibility;

  /**  */
  verified?: boolean;

  /**  */
  primary?: boolean;

  /**  */
  'put-code'?: number;
}

export interface EmailsV3_0_rc2 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  email?: EmailV3_0_rc2[];

  /**  */
  path?: string;
}

export interface HistoryV3_0_rc2 {
  /**  */
  'creation-method'?: EnumHistoryV3_0_rc2CreationMethod;

  /**  */
  'completion-date'?: CompletionDateV3_0_rc2;

  /**  */
  'submission-date'?: SubmissionDateV3_0_rc2;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  claimed?: boolean;

  /**  */
  source?: SourceV3_0_rc2;

  /**  */
  'deactivation-date'?: DeactivationDateV3_0_rc2;

  /**  */
  'verified-email'?: boolean;

  /**  */
  'verified-primary-email'?: boolean;
}

export interface KeywordsV3_0_rc2 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  keyword?: KeywordV3_0_rc2[];

  /**  */
  path?: string;
}

export interface OrcidIdentifierV3_0_rc2 {
  /**  */
  uri?: string;

  /**  */
  path?: string;

  /**  */
  host?: string;
}

export interface PersonExternalIdentifiersV3_0_rc2 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  'external-identifier'?: PersonExternalIdentifierV3_0_rc2[];

  /**  */
  path?: string;
}

export interface PersonV3_0_rc2 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  name?: NameV3_0_rc2;

  /**  */
  'other-names'?: OtherNamesV3_0_rc2;

  /**  */
  biography?: BiographyV3_0_rc2;

  /**  */
  'researcher-urls'?: ResearcherUrlsV3_0_rc2;

  /**  */
  emails?: EmailsV3_0_rc2;

  /**  */
  addresses?: AddressesV3_0_rc2;

  /**  */
  keywords?: KeywordsV3_0_rc2;

  /**  */
  'external-identifiers'?: PersonExternalIdentifiersV3_0_rc2;

  /**  */
  path?: string;
}

export interface PreferencesV3_0_rc2 {
  /**  */
  locale?: EnumPreferencesV3_0_rc2Locale;
}

export interface RecordV3_0_rc2 {
  /**  */
  'orcid-identifier'?: OrcidIdentifierV3_0_rc2;

  /**  */
  preferences?: PreferencesV3_0_rc2;

  /**  */
  history?: HistoryV3_0_rc2;

  /**  */
  person?: PersonV3_0_rc2;

  /**  */
  'activities-summary'?: ActivitiesSummaryV3_0_rc2;

  /**  */
  path?: string;
}

export interface ResearcherUrlsV3_0_rc2 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  'researcher-url'?: ResearcherUrlV3_0_rc2[];

  /**  */
  path?: string;
}

export interface SubmissionDateV3_0_rc2 {
  /**  */
  value?: Date;
}

export interface ResultV3_0_rc2 {
  /**  */
  'orcid-identifier'?: OrcidIdentifierV3_0_rc2;
}

export interface SearchV3_0_rc2 {
  /**  */
  result?: ResultV3_0_rc2[];

  /**  */
  'num-found'?: number;
}

export interface DistinctionV3_0_rc2 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc2;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  source?: SourceV3_0_rc2;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date': FuzzyDateV3_0_rc2;

  /**  */
  'end-date'?: FuzzyDateV3_0_rc2;

  /**  */
  organization: OrganizationV3_0_rc2;

  /**  */
  url?: UrlV3_0_rc2;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc2;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumDistinctionV3_0_rc2Visibility;
}

export interface InvitedPositionV3_0_rc2 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc2;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  source?: SourceV3_0_rc2;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date': FuzzyDateV3_0_rc2;

  /**  */
  'end-date'?: FuzzyDateV3_0_rc2;

  /**  */
  organization: OrganizationV3_0_rc2;

  /**  */
  url?: UrlV3_0_rc2;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc2;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumInvitedPositionV3_0_rc2Visibility;
}

export interface MembershipV3_0_rc2 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc2;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  source?: SourceV3_0_rc2;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date': FuzzyDateV3_0_rc2;

  /**  */
  'end-date'?: FuzzyDateV3_0_rc2;

  /**  */
  organization: OrganizationV3_0_rc2;

  /**  */
  url?: UrlV3_0_rc2;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc2;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumMembershipV3_0_rc2Visibility;
}

export interface QualificationV3_0_rc2 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc2;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  source?: SourceV3_0_rc2;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date': FuzzyDateV3_0_rc2;

  /**  */
  'end-date'?: FuzzyDateV3_0_rc2;

  /**  */
  organization: OrganizationV3_0_rc2;

  /**  */
  url?: UrlV3_0_rc2;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc2;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumQualificationV3_0_rc2Visibility;
}

export interface ServiceV3_0_rc2 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc2;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  source?: SourceV3_0_rc2;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;

  /**  */
  'department-name'?: string;

  /**  */
  'role-title'?: string;

  /**  */
  'start-date': FuzzyDateV3_0_rc2;

  /**  */
  'end-date'?: FuzzyDateV3_0_rc2;

  /**  */
  organization: OrganizationV3_0_rc2;

  /**  */
  url?: UrlV3_0_rc2;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc2;

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumServiceV3_0_rc2Visibility;
}

export interface ResearchResourceItemV3_0_rc2 {
  /**  */
  'resource-name'?: string;

  /**  */
  'resource-type'?: EnumResearchResourceItemV3_0_rc2ResourceType;

  /**  */
  hosts?: ResearchResourceHostsV3_0_rc2;

  /**  */
  'external-ids'?: ExternalIDsV3_0_rc2;

  /**  */
  url?: UrlV3_0_rc2;
}

export interface ResearchResourceV3_0_rc2 {
  /**  */
  'created-date'?: CreatedDateV3_0_rc2;

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0_rc2;

  /**  */
  source?: SourceV3_0_rc2;

  /**  */
  proposal?: ResearchResourceProposalV3_0_rc2;

  /**  */
  'resource-item'?: ResearchResourceItemV3_0_rc2[];

  /**  */
  'display-index'?: string;

  /**  */
  visibility?: EnumResearchResourceV3_0_rc2Visibility;

  /**  */
  'put-code'?: number;

  /**  */
  path?: string;
}
export enum EnumEducationSummaryV2_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumEmploymentSummaryV2_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumExternalIDV2_0ExternalIdRelationship {
  'PART_OF' = 'PART_OF',
  'SELF' = 'SELF',
  'FUNDED_BY' = 'FUNDED_BY'
}
export enum EnumFundingSummaryV2_0Type {
  'GRANT' = 'GRANT',
  'CONTRACT' = 'CONTRACT',
  'AWARD' = 'AWARD',
  'SALARY_AWARD' = 'SALARY_AWARD'
}
export enum EnumFundingSummaryV2_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumOrganizationAddressV2_0Country {
  'AF' = 'AF',
  'AX' = 'AX',
  'AL' = 'AL',
  'DZ' = 'DZ',
  'AS' = 'AS',
  'AD' = 'AD',
  'AO' = 'AO',
  'AI' = 'AI',
  'AQ' = 'AQ',
  'AG' = 'AG',
  'AR' = 'AR',
  'AM' = 'AM',
  'AW' = 'AW',
  'AU' = 'AU',
  'AT' = 'AT',
  'AZ' = 'AZ',
  'BS' = 'BS',
  'BH' = 'BH',
  'BD' = 'BD',
  'BB' = 'BB',
  'BY' = 'BY',
  'BE' = 'BE',
  'BZ' = 'BZ',
  'BJ' = 'BJ',
  'BM' = 'BM',
  'BT' = 'BT',
  'BO' = 'BO',
  'BQ' = 'BQ',
  'BA' = 'BA',
  'BW' = 'BW',
  'BV' = 'BV',
  'BR' = 'BR',
  'IO' = 'IO',
  'BN' = 'BN',
  'BG' = 'BG',
  'BF' = 'BF',
  'BI' = 'BI',
  'KH' = 'KH',
  'CM' = 'CM',
  'CA' = 'CA',
  'CV' = 'CV',
  'KY' = 'KY',
  'CF' = 'CF',
  'TD' = 'TD',
  'CL' = 'CL',
  'CN' = 'CN',
  'CX' = 'CX',
  'CC' = 'CC',
  'CO' = 'CO',
  'KM' = 'KM',
  'CG' = 'CG',
  'CD' = 'CD',
  'CK' = 'CK',
  'CR' = 'CR',
  'CI' = 'CI',
  'HR' = 'HR',
  'CU' = 'CU',
  'CW' = 'CW',
  'CY' = 'CY',
  'CZ' = 'CZ',
  'DK' = 'DK',
  'DJ' = 'DJ',
  'DM' = 'DM',
  'DO' = 'DO',
  'EC' = 'EC',
  'EG' = 'EG',
  'SV' = 'SV',
  'GQ' = 'GQ',
  'ER' = 'ER',
  'EE' = 'EE',
  'ET' = 'ET',
  'FK' = 'FK',
  'FO' = 'FO',
  'FJ' = 'FJ',
  'FI' = 'FI',
  'FR' = 'FR',
  'GF' = 'GF',
  'PF' = 'PF',
  'TF' = 'TF',
  'GA' = 'GA',
  'GM' = 'GM',
  'GE' = 'GE',
  'DE' = 'DE',
  'GH' = 'GH',
  'GI' = 'GI',
  'GR' = 'GR',
  'GL' = 'GL',
  'GD' = 'GD',
  'GP' = 'GP',
  'GU' = 'GU',
  'GT' = 'GT',
  'GG' = 'GG',
  'GN' = 'GN',
  'GW' = 'GW',
  'GY' = 'GY',
  'HT' = 'HT',
  'HM' = 'HM',
  'VA' = 'VA',
  'HN' = 'HN',
  'HK' = 'HK',
  'HU' = 'HU',
  'IS' = 'IS',
  'IN' = 'IN',
  'ID' = 'ID',
  'IR' = 'IR',
  'IQ' = 'IQ',
  'IE' = 'IE',
  'IM' = 'IM',
  'IL' = 'IL',
  'IT' = 'IT',
  'JM' = 'JM',
  'JP' = 'JP',
  'JE' = 'JE',
  'JO' = 'JO',
  'KZ' = 'KZ',
  'KE' = 'KE',
  'KI' = 'KI',
  'KP' = 'KP',
  'KR' = 'KR',
  'KW' = 'KW',
  'KG' = 'KG',
  'LA' = 'LA',
  'LV' = 'LV',
  'LB' = 'LB',
  'LS' = 'LS',
  'LR' = 'LR',
  'LY' = 'LY',
  'LI' = 'LI',
  'LT' = 'LT',
  'LU' = 'LU',
  'MO' = 'MO',
  'MK' = 'MK',
  'MG' = 'MG',
  'MW' = 'MW',
  'MY' = 'MY',
  'MV' = 'MV',
  'ML' = 'ML',
  'MT' = 'MT',
  'MH' = 'MH',
  'MQ' = 'MQ',
  'MR' = 'MR',
  'MU' = 'MU',
  'YT' = 'YT',
  'MX' = 'MX',
  'FM' = 'FM',
  'MD' = 'MD',
  'MC' = 'MC',
  'MN' = 'MN',
  'ME' = 'ME',
  'MS' = 'MS',
  'MA' = 'MA',
  'MZ' = 'MZ',
  'MM' = 'MM',
  'NA' = 'NA',
  'NR' = 'NR',
  'NP' = 'NP',
  'NL' = 'NL',
  'NC' = 'NC',
  'NZ' = 'NZ',
  'NI' = 'NI',
  'NE' = 'NE',
  'NG' = 'NG',
  'NU' = 'NU',
  'NF' = 'NF',
  'MP' = 'MP',
  'NO' = 'NO',
  'OM' = 'OM',
  'PK' = 'PK',
  'PW' = 'PW',
  'PS' = 'PS',
  'PA' = 'PA',
  'PG' = 'PG',
  'PY' = 'PY',
  'PE' = 'PE',
  'PH' = 'PH',
  'PN' = 'PN',
  'PL' = 'PL',
  'PT' = 'PT',
  'PR' = 'PR',
  'QA' = 'QA',
  'RE' = 'RE',
  'RO' = 'RO',
  'RU' = 'RU',
  'RW' = 'RW',
  'BL' = 'BL',
  'SH' = 'SH',
  'KN' = 'KN',
  'LC' = 'LC',
  'MF' = 'MF',
  'PM' = 'PM',
  'VC' = 'VC',
  'WS' = 'WS',
  'SM' = 'SM',
  'ST' = 'ST',
  'SA' = 'SA',
  'SN' = 'SN',
  'RS' = 'RS',
  'SC' = 'SC',
  'SL' = 'SL',
  'SG' = 'SG',
  'SX' = 'SX',
  'SK' = 'SK',
  'SI' = 'SI',
  'SB' = 'SB',
  'SO' = 'SO',
  'ZA' = 'ZA',
  'GS' = 'GS',
  'SS' = 'SS',
  'ES' = 'ES',
  'LK' = 'LK',
  'SD' = 'SD',
  'SR' = 'SR',
  'SJ' = 'SJ',
  'SZ' = 'SZ',
  'SE' = 'SE',
  'CH' = 'CH',
  'SY' = 'SY',
  'TJ' = 'TJ',
  'TZ' = 'TZ',
  'TH' = 'TH',
  'TL' = 'TL',
  'TG' = 'TG',
  'TK' = 'TK',
  'TO' = 'TO',
  'TT' = 'TT',
  'TN' = 'TN',
  'TR' = 'TR',
  'TM' = 'TM',
  'TC' = 'TC',
  'TV' = 'TV',
  'UG' = 'UG',
  'UA' = 'UA',
  'AE' = 'AE',
  'GB' = 'GB',
  'US' = 'US',
  'UM' = 'UM',
  'UY' = 'UY',
  'UZ' = 'UZ',
  'VU' = 'VU',
  'VE' = 'VE',
  'VN' = 'VN',
  'VG' = 'VG',
  'VI' = 'VI',
  'WF' = 'WF',
  'EH' = 'EH',
  'YE' = 'YE',
  'ZM' = 'ZM',
  'ZW' = 'ZW',
  'TW' = 'TW',
  'XK' = 'XK'
}
export enum EnumPeerReviewSummaryV2_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumPublicationDateV2_0MediaType {
  'PRINT' = 'PRINT',
  'ONLINE' = 'ONLINE',
  'OTHER' = 'OTHER'
}
export enum EnumWorkSummaryV2_0Type {
  'ARTISTIC_PERFORMANCE' = 'ARTISTIC_PERFORMANCE',
  'BOOK_CHAPTER' = 'BOOK_CHAPTER',
  'BOOK_REVIEW' = 'BOOK_REVIEW',
  'BOOK' = 'BOOK',
  'CONFERENCE_ABSTRACT' = 'CONFERENCE_ABSTRACT',
  'CONFERENCE_PAPER' = 'CONFERENCE_PAPER',
  'CONFERENCE_POSTER' = 'CONFERENCE_POSTER',
  'DATA_SET' = 'DATA_SET',
  'DICTIONARY_ENTRY' = 'DICTIONARY_ENTRY',
  'DISCLOSURE' = 'DISCLOSURE',
  'DISSERTATION' = 'DISSERTATION',
  'EDITED_BOOK' = 'EDITED_BOOK',
  'ENCYCLOPEDIA_ENTRY' = 'ENCYCLOPEDIA_ENTRY',
  'INVENTION' = 'INVENTION',
  'JOURNAL_ARTICLE' = 'JOURNAL_ARTICLE',
  'JOURNAL_ISSUE' = 'JOURNAL_ISSUE',
  'LECTURE_SPEECH' = 'LECTURE_SPEECH',
  'LICENSE' = 'LICENSE',
  'MAGAZINE_ARTICLE' = 'MAGAZINE_ARTICLE',
  'MANUAL' = 'MANUAL',
  'NEWSLETTER_ARTICLE' = 'NEWSLETTER_ARTICLE',
  'NEWSPAPER_ARTICLE' = 'NEWSPAPER_ARTICLE',
  'ONLINE_RESOURCE' = 'ONLINE_RESOURCE',
  'OTHER' = 'OTHER',
  'PATENT' = 'PATENT',
  'REGISTERED_COPYRIGHT' = 'REGISTERED_COPYRIGHT',
  'REPORT' = 'REPORT',
  'RESEARCH_TECHNIQUE' = 'RESEARCH_TECHNIQUE',
  'RESEARCH_TOOL' = 'RESEARCH_TOOL',
  'REVIEW' = 'REVIEW',
  'SPIN_OFF_COMPANY' = 'SPIN_OFF_COMPANY',
  'STANDARDS_AND_POLICY' = 'STANDARDS_AND_POLICY',
  'SUPERVISED_STUDENT_PUBLICATION' = 'SUPERVISED_STUDENT_PUBLICATION',
  'TECHNICAL_STANDARD' = 'TECHNICAL_STANDARD',
  'TEST' = 'TEST',
  'TRADEMARK' = 'TRADEMARK',
  'TRANSLATION' = 'TRANSLATION',
  'WEBSITE' = 'WEBSITE',
  'WORKING_PAPER' = 'WORKING_PAPER',
  'UNDEFINED' = 'UNDEFINED'
}
export enum EnumWorkSummaryV2_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumCitationCitationType {
  'formatted-unspecified' = 'formatted-unspecified',
  'bibtex' = 'bibtex',
  'formatted-apa' = 'formatted-apa',
  'formatted-harvard' = 'formatted-harvard',
  'formatted-ieee' = 'formatted-ieee',
  'formatted-mla' = 'formatted-mla',
  'formatted-vancouver' = 'formatted-vancouver',
  'formatted-chicago' = 'formatted-chicago',
  'ris' = 'ris'
}
export enum EnumCountryV2_0Value {
  'AF' = 'AF',
  'AX' = 'AX',
  'AL' = 'AL',
  'DZ' = 'DZ',
  'AS' = 'AS',
  'AD' = 'AD',
  'AO' = 'AO',
  'AI' = 'AI',
  'AQ' = 'AQ',
  'AG' = 'AG',
  'AR' = 'AR',
  'AM' = 'AM',
  'AW' = 'AW',
  'AU' = 'AU',
  'AT' = 'AT',
  'AZ' = 'AZ',
  'BS' = 'BS',
  'BH' = 'BH',
  'BD' = 'BD',
  'BB' = 'BB',
  'BY' = 'BY',
  'BE' = 'BE',
  'BZ' = 'BZ',
  'BJ' = 'BJ',
  'BM' = 'BM',
  'BT' = 'BT',
  'BO' = 'BO',
  'BQ' = 'BQ',
  'BA' = 'BA',
  'BW' = 'BW',
  'BV' = 'BV',
  'BR' = 'BR',
  'IO' = 'IO',
  'BN' = 'BN',
  'BG' = 'BG',
  'BF' = 'BF',
  'BI' = 'BI',
  'KH' = 'KH',
  'CM' = 'CM',
  'CA' = 'CA',
  'CV' = 'CV',
  'KY' = 'KY',
  'CF' = 'CF',
  'TD' = 'TD',
  'CL' = 'CL',
  'CN' = 'CN',
  'CX' = 'CX',
  'CC' = 'CC',
  'CO' = 'CO',
  'KM' = 'KM',
  'CG' = 'CG',
  'CD' = 'CD',
  'CK' = 'CK',
  'CR' = 'CR',
  'CI' = 'CI',
  'HR' = 'HR',
  'CU' = 'CU',
  'CW' = 'CW',
  'CY' = 'CY',
  'CZ' = 'CZ',
  'DK' = 'DK',
  'DJ' = 'DJ',
  'DM' = 'DM',
  'DO' = 'DO',
  'EC' = 'EC',
  'EG' = 'EG',
  'SV' = 'SV',
  'GQ' = 'GQ',
  'ER' = 'ER',
  'EE' = 'EE',
  'ET' = 'ET',
  'FK' = 'FK',
  'FO' = 'FO',
  'FJ' = 'FJ',
  'FI' = 'FI',
  'FR' = 'FR',
  'GF' = 'GF',
  'PF' = 'PF',
  'TF' = 'TF',
  'GA' = 'GA',
  'GM' = 'GM',
  'GE' = 'GE',
  'DE' = 'DE',
  'GH' = 'GH',
  'GI' = 'GI',
  'GR' = 'GR',
  'GL' = 'GL',
  'GD' = 'GD',
  'GP' = 'GP',
  'GU' = 'GU',
  'GT' = 'GT',
  'GG' = 'GG',
  'GN' = 'GN',
  'GW' = 'GW',
  'GY' = 'GY',
  'HT' = 'HT',
  'HM' = 'HM',
  'VA' = 'VA',
  'HN' = 'HN',
  'HK' = 'HK',
  'HU' = 'HU',
  'IS' = 'IS',
  'IN' = 'IN',
  'ID' = 'ID',
  'IR' = 'IR',
  'IQ' = 'IQ',
  'IE' = 'IE',
  'IM' = 'IM',
  'IL' = 'IL',
  'IT' = 'IT',
  'JM' = 'JM',
  'JP' = 'JP',
  'JE' = 'JE',
  'JO' = 'JO',
  'KZ' = 'KZ',
  'KE' = 'KE',
  'KI' = 'KI',
  'KP' = 'KP',
  'KR' = 'KR',
  'KW' = 'KW',
  'KG' = 'KG',
  'LA' = 'LA',
  'LV' = 'LV',
  'LB' = 'LB',
  'LS' = 'LS',
  'LR' = 'LR',
  'LY' = 'LY',
  'LI' = 'LI',
  'LT' = 'LT',
  'LU' = 'LU',
  'MO' = 'MO',
  'MK' = 'MK',
  'MG' = 'MG',
  'MW' = 'MW',
  'MY' = 'MY',
  'MV' = 'MV',
  'ML' = 'ML',
  'MT' = 'MT',
  'MH' = 'MH',
  'MQ' = 'MQ',
  'MR' = 'MR',
  'MU' = 'MU',
  'YT' = 'YT',
  'MX' = 'MX',
  'FM' = 'FM',
  'MD' = 'MD',
  'MC' = 'MC',
  'MN' = 'MN',
  'ME' = 'ME',
  'MS' = 'MS',
  'MA' = 'MA',
  'MZ' = 'MZ',
  'MM' = 'MM',
  'NA' = 'NA',
  'NR' = 'NR',
  'NP' = 'NP',
  'NL' = 'NL',
  'NC' = 'NC',
  'NZ' = 'NZ',
  'NI' = 'NI',
  'NE' = 'NE',
  'NG' = 'NG',
  'NU' = 'NU',
  'NF' = 'NF',
  'MP' = 'MP',
  'NO' = 'NO',
  'OM' = 'OM',
  'PK' = 'PK',
  'PW' = 'PW',
  'PS' = 'PS',
  'PA' = 'PA',
  'PG' = 'PG',
  'PY' = 'PY',
  'PE' = 'PE',
  'PH' = 'PH',
  'PN' = 'PN',
  'PL' = 'PL',
  'PT' = 'PT',
  'PR' = 'PR',
  'QA' = 'QA',
  'RE' = 'RE',
  'RO' = 'RO',
  'RU' = 'RU',
  'RW' = 'RW',
  'BL' = 'BL',
  'SH' = 'SH',
  'KN' = 'KN',
  'LC' = 'LC',
  'MF' = 'MF',
  'PM' = 'PM',
  'VC' = 'VC',
  'WS' = 'WS',
  'SM' = 'SM',
  'ST' = 'ST',
  'SA' = 'SA',
  'SN' = 'SN',
  'RS' = 'RS',
  'SC' = 'SC',
  'SL' = 'SL',
  'SG' = 'SG',
  'SX' = 'SX',
  'SK' = 'SK',
  'SI' = 'SI',
  'SB' = 'SB',
  'SO' = 'SO',
  'ZA' = 'ZA',
  'GS' = 'GS',
  'SS' = 'SS',
  'ES' = 'ES',
  'LK' = 'LK',
  'SD' = 'SD',
  'SR' = 'SR',
  'SJ' = 'SJ',
  'SZ' = 'SZ',
  'SE' = 'SE',
  'CH' = 'CH',
  'SY' = 'SY',
  'TJ' = 'TJ',
  'TZ' = 'TZ',
  'TH' = 'TH',
  'TL' = 'TL',
  'TG' = 'TG',
  'TK' = 'TK',
  'TO' = 'TO',
  'TT' = 'TT',
  'TN' = 'TN',
  'TR' = 'TR',
  'TM' = 'TM',
  'TC' = 'TC',
  'TV' = 'TV',
  'UG' = 'UG',
  'UA' = 'UA',
  'AE' = 'AE',
  'GB' = 'GB',
  'US' = 'US',
  'UM' = 'UM',
  'UY' = 'UY',
  'UZ' = 'UZ',
  'VU' = 'VU',
  'VE' = 'VE',
  'VN' = 'VN',
  'VG' = 'VG',
  'VI' = 'VI',
  'WF' = 'WF',
  'EH' = 'EH',
  'YE' = 'YE',
  'ZM' = 'ZM',
  'ZW' = 'ZW',
  'TW' = 'TW',
  'XK' = 'XK'
}
export enum EnumWorkV2_0Type {
  'ARTISTIC_PERFORMANCE' = 'ARTISTIC_PERFORMANCE',
  'BOOK_CHAPTER' = 'BOOK_CHAPTER',
  'BOOK_REVIEW' = 'BOOK_REVIEW',
  'BOOK' = 'BOOK',
  'CONFERENCE_ABSTRACT' = 'CONFERENCE_ABSTRACT',
  'CONFERENCE_PAPER' = 'CONFERENCE_PAPER',
  'CONFERENCE_POSTER' = 'CONFERENCE_POSTER',
  'DATA_SET' = 'DATA_SET',
  'DICTIONARY_ENTRY' = 'DICTIONARY_ENTRY',
  'DISCLOSURE' = 'DISCLOSURE',
  'DISSERTATION' = 'DISSERTATION',
  'EDITED_BOOK' = 'EDITED_BOOK',
  'ENCYCLOPEDIA_ENTRY' = 'ENCYCLOPEDIA_ENTRY',
  'INVENTION' = 'INVENTION',
  'JOURNAL_ARTICLE' = 'JOURNAL_ARTICLE',
  'JOURNAL_ISSUE' = 'JOURNAL_ISSUE',
  'LECTURE_SPEECH' = 'LECTURE_SPEECH',
  'LICENSE' = 'LICENSE',
  'MAGAZINE_ARTICLE' = 'MAGAZINE_ARTICLE',
  'MANUAL' = 'MANUAL',
  'NEWSLETTER_ARTICLE' = 'NEWSLETTER_ARTICLE',
  'NEWSPAPER_ARTICLE' = 'NEWSPAPER_ARTICLE',
  'ONLINE_RESOURCE' = 'ONLINE_RESOURCE',
  'OTHER' = 'OTHER',
  'PATENT' = 'PATENT',
  'REGISTERED_COPYRIGHT' = 'REGISTERED_COPYRIGHT',
  'REPORT' = 'REPORT',
  'RESEARCH_TECHNIQUE' = 'RESEARCH_TECHNIQUE',
  'RESEARCH_TOOL' = 'RESEARCH_TOOL',
  'REVIEW' = 'REVIEW',
  'SPIN_OFF_COMPANY' = 'SPIN_OFF_COMPANY',
  'STANDARDS_AND_POLICY' = 'STANDARDS_AND_POLICY',
  'SUPERVISED_STUDENT_PUBLICATION' = 'SUPERVISED_STUDENT_PUBLICATION',
  'TECHNICAL_STANDARD' = 'TECHNICAL_STANDARD',
  'TEST' = 'TEST',
  'TRADEMARK' = 'TRADEMARK',
  'TRANSLATION' = 'TRANSLATION',
  'WEBSITE' = 'WEBSITE',
  'WORKING_PAPER' = 'WORKING_PAPER',
  'UNDEFINED' = 'UNDEFINED'
}
export enum EnumWorkV2_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumFundingContributorAttributesV2_0ContributorRole {
  'LEAD' = 'LEAD',
  'CO_LEAD' = 'CO_LEAD',
  'SUPPORTED_BY' = 'SUPPORTED_BY',
  'OTHER_CONTRIBUTION' = 'OTHER_CONTRIBUTION'
}
export enum EnumFundingV2_0Type {
  'GRANT' = 'GRANT',
  'CONTRACT' = 'CONTRACT',
  'AWARD' = 'AWARD',
  'SALARY_AWARD' = 'SALARY_AWARD'
}
export enum EnumFundingV2_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumEducationV2_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumEmploymentV2_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumPeerReviewV2_0ReviewerRole {
  'REVIEWER' = 'REVIEWER',
  'EDITOR' = 'EDITOR',
  'MEMBER' = 'MEMBER',
  'CHAIR' = 'CHAIR',
  'ORGANIZER' = 'ORGANIZER'
}
export enum EnumPeerReviewV2_0ReviewType {
  'REVIEW' = 'REVIEW',
  'EVALUATION' = 'EVALUATION'
}
export enum EnumPeerReviewV2_0SubjectType {
  'ARTISTIC_PERFORMANCE' = 'ARTISTIC_PERFORMANCE',
  'BOOK_CHAPTER' = 'BOOK_CHAPTER',
  'BOOK_REVIEW' = 'BOOK_REVIEW',
  'BOOK' = 'BOOK',
  'CONFERENCE_ABSTRACT' = 'CONFERENCE_ABSTRACT',
  'CONFERENCE_PAPER' = 'CONFERENCE_PAPER',
  'CONFERENCE_POSTER' = 'CONFERENCE_POSTER',
  'DATA_SET' = 'DATA_SET',
  'DICTIONARY_ENTRY' = 'DICTIONARY_ENTRY',
  'DISCLOSURE' = 'DISCLOSURE',
  'DISSERTATION' = 'DISSERTATION',
  'EDITED_BOOK' = 'EDITED_BOOK',
  'ENCYCLOPEDIA_ENTRY' = 'ENCYCLOPEDIA_ENTRY',
  'INVENTION' = 'INVENTION',
  'JOURNAL_ARTICLE' = 'JOURNAL_ARTICLE',
  'JOURNAL_ISSUE' = 'JOURNAL_ISSUE',
  'LECTURE_SPEECH' = 'LECTURE_SPEECH',
  'LICENSE' = 'LICENSE',
  'MAGAZINE_ARTICLE' = 'MAGAZINE_ARTICLE',
  'MANUAL' = 'MANUAL',
  'NEWSLETTER_ARTICLE' = 'NEWSLETTER_ARTICLE',
  'NEWSPAPER_ARTICLE' = 'NEWSPAPER_ARTICLE',
  'ONLINE_RESOURCE' = 'ONLINE_RESOURCE',
  'OTHER' = 'OTHER',
  'PATENT' = 'PATENT',
  'REGISTERED_COPYRIGHT' = 'REGISTERED_COPYRIGHT',
  'REPORT' = 'REPORT',
  'RESEARCH_TECHNIQUE' = 'RESEARCH_TECHNIQUE',
  'RESEARCH_TOOL' = 'RESEARCH_TOOL',
  'REVIEW' = 'REVIEW',
  'SPIN_OFF_COMPANY' = 'SPIN_OFF_COMPANY',
  'STANDARDS_AND_POLICY' = 'STANDARDS_AND_POLICY',
  'SUPERVISED_STUDENT_PUBLICATION' = 'SUPERVISED_STUDENT_PUBLICATION',
  'TECHNICAL_STANDARD' = 'TECHNICAL_STANDARD',
  'TEST' = 'TEST',
  'TRADEMARK' = 'TRADEMARK',
  'TRANSLATION' = 'TRANSLATION',
  'WEBSITE' = 'WEBSITE',
  'WORKING_PAPER' = 'WORKING_PAPER',
  'UNDEFINED' = 'UNDEFINED'
}
export enum EnumPeerReviewV2_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumNotificationNotificationType {
  'CUSTOM' = 'CUSTOM',
  'INSTITUTIONAL_CONNECTION' = 'INSTITUTIONAL_CONNECTION',
  'PERMISSION' = 'PERMISSION',
  'AMENDED' = 'AMENDED',
  'SERVICE_ANNOUNCEMENT' = 'SERVICE_ANNOUNCEMENT',
  'ADMINISTRATIVE' = 'ADMINISTRATIVE',
  'TIP' = 'TIP',
  'FIND_MY_STUFF' = 'FIND_MY_STUFF'
}
export enum EnumItemV2_0ItemType {
  'EDUCATION' = 'EDUCATION',
  'EMPLOYMENT' = 'EMPLOYMENT',
  'FUNDING' = 'FUNDING',
  'PEER_REVIEW' = 'PEER_REVIEW',
  'WORK' = 'WORK'
}
export enum EnumNotificationPermissionV2_0NotificationType {
  'CUSTOM' = 'CUSTOM',
  'INSTITUTIONAL_CONNECTION' = 'INSTITUTIONAL_CONNECTION',
  'PERMISSION' = 'PERMISSION',
  'AMENDED' = 'AMENDED',
  'SERVICE_ANNOUNCEMENT' = 'SERVICE_ANNOUNCEMENT',
  'ADMINISTRATIVE' = 'ADMINISTRATIVE',
  'TIP' = 'TIP'
}
export enum EnumResearcherUrlV2_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumEmailV2_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumOtherNameV2_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumBiographyV2_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumNameV2_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumPersonExternalIdentifierV2_0ExternalIdRelationship {
  'PART_OF' = 'PART_OF',
  'SELF' = 'SELF',
  'FUNDED_BY' = 'FUNDED_BY'
}
export enum EnumPersonExternalIdentifierV2_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumKeywordV2_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumAddressV2_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumHistoryV2_0CreationMethod {
  'API' = 'API',
  'DIRECT' = 'DIRECT',
  'MEMBER_REFERRED' = 'MEMBER_REFERRED',
  'WEBSITE' = 'WEBSITE',
  'INTEGRATION_TEST' = 'INTEGRATION_TEST'
}
export enum EnumPreferencesV2_0Locale {
  'AR' = 'AR',
  'EN' = 'EN',
  'ES' = 'ES',
  'FR' = 'FR',
  'KO' = 'KO',
  'PT' = 'PT',
  'RU' = 'RU',
  'ZH_CN' = 'ZH_CN',
  'ZH_TW' = 'ZH_TW',
  'IT' = 'IT',
  'JA' = 'JA',
  'XX' = 'XX'
}
export enum EnumAffiliationSummaryV3_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumDistinctionSummaryV3_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumEducationSummaryV3_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumEmploymentSummaryV3_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumExternalIDV3_0ExternalIdRelationship {
  'part-of' = 'part-of',
  'self' = 'self',
  'version-of' = 'version-of'
}
export enum EnumFundingSummaryV3_0Type {
  'GRANT' = 'GRANT',
  'CONTRACT' = 'CONTRACT',
  'AWARD' = 'AWARD',
  'SALARY_AWARD' = 'SALARY_AWARD'
}
export enum EnumFundingSummaryV3_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumInvitedPositionSummaryV3_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumMembershipSummaryV3_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumOrganizationAddressV3_0Country {
  'AF' = 'AF',
  'AX' = 'AX',
  'AL' = 'AL',
  'DZ' = 'DZ',
  'AS' = 'AS',
  'AD' = 'AD',
  'AO' = 'AO',
  'AI' = 'AI',
  'AQ' = 'AQ',
  'AG' = 'AG',
  'AR' = 'AR',
  'AM' = 'AM',
  'AW' = 'AW',
  'AU' = 'AU',
  'AT' = 'AT',
  'AZ' = 'AZ',
  'BS' = 'BS',
  'BH' = 'BH',
  'BD' = 'BD',
  'BB' = 'BB',
  'BY' = 'BY',
  'BE' = 'BE',
  'BZ' = 'BZ',
  'BJ' = 'BJ',
  'BM' = 'BM',
  'BT' = 'BT',
  'BO' = 'BO',
  'BQ' = 'BQ',
  'BA' = 'BA',
  'BW' = 'BW',
  'BV' = 'BV',
  'BR' = 'BR',
  'IO' = 'IO',
  'BN' = 'BN',
  'BG' = 'BG',
  'BF' = 'BF',
  'BI' = 'BI',
  'KH' = 'KH',
  'CM' = 'CM',
  'CA' = 'CA',
  'CV' = 'CV',
  'KY' = 'KY',
  'CF' = 'CF',
  'TD' = 'TD',
  'CL' = 'CL',
  'CN' = 'CN',
  'CX' = 'CX',
  'CC' = 'CC',
  'CO' = 'CO',
  'KM' = 'KM',
  'CG' = 'CG',
  'CD' = 'CD',
  'CK' = 'CK',
  'CR' = 'CR',
  'CI' = 'CI',
  'HR' = 'HR',
  'CU' = 'CU',
  'CW' = 'CW',
  'CY' = 'CY',
  'CZ' = 'CZ',
  'DK' = 'DK',
  'DJ' = 'DJ',
  'DM' = 'DM',
  'DO' = 'DO',
  'EC' = 'EC',
  'EG' = 'EG',
  'SV' = 'SV',
  'GQ' = 'GQ',
  'ER' = 'ER',
  'EE' = 'EE',
  'ET' = 'ET',
  'FK' = 'FK',
  'FO' = 'FO',
  'FJ' = 'FJ',
  'FI' = 'FI',
  'FR' = 'FR',
  'GF' = 'GF',
  'PF' = 'PF',
  'TF' = 'TF',
  'GA' = 'GA',
  'GM' = 'GM',
  'GE' = 'GE',
  'DE' = 'DE',
  'GH' = 'GH',
  'GI' = 'GI',
  'GR' = 'GR',
  'GL' = 'GL',
  'GD' = 'GD',
  'GP' = 'GP',
  'GU' = 'GU',
  'GT' = 'GT',
  'GG' = 'GG',
  'GN' = 'GN',
  'GW' = 'GW',
  'GY' = 'GY',
  'HT' = 'HT',
  'HM' = 'HM',
  'VA' = 'VA',
  'HN' = 'HN',
  'HK' = 'HK',
  'HU' = 'HU',
  'IS' = 'IS',
  'IN' = 'IN',
  'ID' = 'ID',
  'IR' = 'IR',
  'IQ' = 'IQ',
  'IE' = 'IE',
  'IM' = 'IM',
  'IL' = 'IL',
  'IT' = 'IT',
  'JM' = 'JM',
  'JP' = 'JP',
  'JE' = 'JE',
  'JO' = 'JO',
  'KZ' = 'KZ',
  'KE' = 'KE',
  'KI' = 'KI',
  'KP' = 'KP',
  'KR' = 'KR',
  'KW' = 'KW',
  'KG' = 'KG',
  'LA' = 'LA',
  'LV' = 'LV',
  'LB' = 'LB',
  'LS' = 'LS',
  'LR' = 'LR',
  'LY' = 'LY',
  'LI' = 'LI',
  'LT' = 'LT',
  'LU' = 'LU',
  'MO' = 'MO',
  'MK' = 'MK',
  'MG' = 'MG',
  'MW' = 'MW',
  'MY' = 'MY',
  'MV' = 'MV',
  'ML' = 'ML',
  'MT' = 'MT',
  'MH' = 'MH',
  'MQ' = 'MQ',
  'MR' = 'MR',
  'MU' = 'MU',
  'YT' = 'YT',
  'MX' = 'MX',
  'FM' = 'FM',
  'MD' = 'MD',
  'MC' = 'MC',
  'MN' = 'MN',
  'ME' = 'ME',
  'MS' = 'MS',
  'MA' = 'MA',
  'MZ' = 'MZ',
  'MM' = 'MM',
  'NA' = 'NA',
  'NR' = 'NR',
  'NP' = 'NP',
  'NL' = 'NL',
  'NC' = 'NC',
  'NZ' = 'NZ',
  'NI' = 'NI',
  'NE' = 'NE',
  'NG' = 'NG',
  'NU' = 'NU',
  'NF' = 'NF',
  'MP' = 'MP',
  'NO' = 'NO',
  'OM' = 'OM',
  'PK' = 'PK',
  'PW' = 'PW',
  'PS' = 'PS',
  'PA' = 'PA',
  'PG' = 'PG',
  'PY' = 'PY',
  'PE' = 'PE',
  'PH' = 'PH',
  'PN' = 'PN',
  'PL' = 'PL',
  'PT' = 'PT',
  'PR' = 'PR',
  'QA' = 'QA',
  'RE' = 'RE',
  'RO' = 'RO',
  'RU' = 'RU',
  'RW' = 'RW',
  'BL' = 'BL',
  'SH' = 'SH',
  'KN' = 'KN',
  'LC' = 'LC',
  'MF' = 'MF',
  'PM' = 'PM',
  'VC' = 'VC',
  'WS' = 'WS',
  'SM' = 'SM',
  'ST' = 'ST',
  'SA' = 'SA',
  'SN' = 'SN',
  'RS' = 'RS',
  'SC' = 'SC',
  'SL' = 'SL',
  'SG' = 'SG',
  'SX' = 'SX',
  'SK' = 'SK',
  'SI' = 'SI',
  'SB' = 'SB',
  'SO' = 'SO',
  'ZA' = 'ZA',
  'GS' = 'GS',
  'SS' = 'SS',
  'ES' = 'ES',
  'LK' = 'LK',
  'SD' = 'SD',
  'SR' = 'SR',
  'SJ' = 'SJ',
  'SZ' = 'SZ',
  'SE' = 'SE',
  'CH' = 'CH',
  'SY' = 'SY',
  'TJ' = 'TJ',
  'TZ' = 'TZ',
  'TH' = 'TH',
  'TL' = 'TL',
  'TG' = 'TG',
  'TK' = 'TK',
  'TO' = 'TO',
  'TT' = 'TT',
  'TN' = 'TN',
  'TR' = 'TR',
  'TM' = 'TM',
  'TC' = 'TC',
  'TV' = 'TV',
  'UG' = 'UG',
  'UA' = 'UA',
  'AE' = 'AE',
  'GB' = 'GB',
  'US' = 'US',
  'UM' = 'UM',
  'UY' = 'UY',
  'UZ' = 'UZ',
  'VU' = 'VU',
  'VE' = 'VE',
  'VN' = 'VN',
  'VG' = 'VG',
  'VI' = 'VI',
  'WF' = 'WF',
  'EH' = 'EH',
  'YE' = 'YE',
  'ZM' = 'ZM',
  'ZW' = 'ZW',
  'TW' = 'TW',
  'XK' = 'XK'
}
export enum EnumPeerReviewSummaryV3_0ReviewerRole {
  'REVIEWER' = 'REVIEWER',
  'EDITOR' = 'EDITOR',
  'MEMBER' = 'MEMBER',
  'CHAIR' = 'CHAIR',
  'ORGANIZER' = 'ORGANIZER'
}
export enum EnumPeerReviewSummaryV3_0ReviewType {
  'REVIEW' = 'REVIEW',
  'EVALUATION' = 'EVALUATION'
}
export enum EnumPeerReviewSummaryV3_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumQualificationSummaryV3_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumResearchResourceSummaryV3_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumServiceSummaryV3_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumTranslatedTitleV3_0LanguageCode {
  'ab' = 'ab',
  'aa' = 'aa',
  'af' = 'af',
  'ak' = 'ak',
  'sq' = 'sq',
  'am' = 'am',
  'ar' = 'ar',
  'an' = 'an',
  'hy' = 'hy',
  'as' = 'as',
  'av' = 'av',
  'ae' = 'ae',
  'ay' = 'ay',
  'az' = 'az',
  'bm' = 'bm',
  'ba' = 'ba',
  'eu' = 'eu',
  'be' = 'be',
  'bn' = 'bn',
  'bh' = 'bh',
  'bi' = 'bi',
  'bs' = 'bs',
  'br' = 'br',
  'bg' = 'bg',
  'my' = 'my',
  'ca' = 'ca',
  'ch' = 'ch',
  'ce' = 'ce',
  'zh_CN' = 'zh_CN',
  'zh_TW' = 'zh_TW',
  'cu' = 'cu',
  'cv' = 'cv',
  'kw' = 'kw',
  'co' = 'co',
  'cr' = 'cr',
  'hr' = 'hr',
  'cs' = 'cs',
  'da' = 'da',
  'dv' = 'dv',
  'nl' = 'nl',
  'dz' = 'dz',
  'en' = 'en',
  'eo' = 'eo',
  'et' = 'et',
  'ee' = 'ee',
  'fo' = 'fo',
  'fj' = 'fj',
  'fi' = 'fi',
  'fr' = 'fr',
  'fy' = 'fy',
  'ff' = 'ff',
  'gl' = 'gl',
  'lg' = 'lg',
  'ka' = 'ka',
  'de' = 'de',
  'el' = 'el',
  'kl' = 'kl',
  'gn' = 'gn',
  'gu' = 'gu',
  'ht' = 'ht',
  'ha' = 'ha',
  'iw' = 'iw',
  'hz' = 'hz',
  'hi' = 'hi',
  'ho' = 'ho',
  'hu' = 'hu',
  'is' = 'is',
  'io' = 'io',
  'ig' = 'ig',
  'in' = 'in',
  'ia' = 'ia',
  'ie' = 'ie',
  'iu' = 'iu',
  'ik' = 'ik',
  'ga' = 'ga',
  'it' = 'it',
  'ja' = 'ja',
  'jv' = 'jv',
  'kn' = 'kn',
  'kr' = 'kr',
  'ks' = 'ks',
  'kk' = 'kk',
  'km' = 'km',
  'ki' = 'ki',
  'rw' = 'rw',
  'ky' = 'ky',
  'kv' = 'kv',
  'kg' = 'kg',
  'ko' = 'ko',
  'ku' = 'ku',
  'kj' = 'kj',
  'lo' = 'lo',
  'la' = 'la',
  'lv' = 'lv',
  'li' = 'li',
  'ln' = 'ln',
  'lt' = 'lt',
  'lu' = 'lu',
  'lb' = 'lb',
  'mk' = 'mk',
  'mg' = 'mg',
  'ms' = 'ms',
  'ml' = 'ml',
  'mt' = 'mt',
  'gv' = 'gv',
  'mi' = 'mi',
  'mr' = 'mr',
  'mh' = 'mh',
  'mo' = 'mo',
  'mn' = 'mn',
  'na' = 'na',
  'nv' = 'nv',
  'ng' = 'ng',
  'ne' = 'ne',
  'nd' = 'nd',
  'se' = 'se',
  'no' = 'no',
  'nb' = 'nb',
  'nn' = 'nn',
  'ny' = 'ny',
  'oc' = 'oc',
  'oj' = 'oj',
  'or' = 'or',
  'om' = 'om',
  'os' = 'os',
  'pi' = 'pi',
  'pa' = 'pa',
  'fa' = 'fa',
  'pl' = 'pl',
  'pt' = 'pt',
  'ps' = 'ps',
  'qu' = 'qu',
  'rm' = 'rm',
  'ro' = 'ro',
  'rn' = 'rn',
  'ru' = 'ru',
  'sm' = 'sm',
  'sg' = 'sg',
  'sa' = 'sa',
  'sc' = 'sc',
  'gd' = 'gd',
  'sr' = 'sr',
  'sn' = 'sn',
  'ii' = 'ii',
  'sd' = 'sd',
  'si' = 'si',
  'sk' = 'sk',
  'sl' = 'sl',
  'so' = 'so',
  'nr' = 'nr',
  'st' = 'st',
  'es' = 'es',
  'su' = 'su',
  'sw' = 'sw',
  'ss' = 'ss',
  'sv' = 'sv',
  'tl' = 'tl',
  'ty' = 'ty',
  'tg' = 'tg',
  'ta' = 'ta',
  'tt' = 'tt',
  'te' = 'te',
  'th' = 'th',
  'bo' = 'bo',
  'ti' = 'ti',
  'to' = 'to',
  'ts' = 'ts',
  'tn' = 'tn',
  'tr' = 'tr',
  'tk' = 'tk',
  'tw' = 'tw',
  'ug' = 'ug',
  'uk' = 'uk',
  'ur' = 'ur',
  'uz' = 'uz',
  've' = 've',
  'vi' = 'vi',
  'vo' = 'vo',
  'wa' = 'wa',
  'cy' = 'cy',
  'wo' = 'wo',
  'xh' = 'xh',
  'ji' = 'ji',
  'yo' = 'yo',
  'za' = 'za',
  'zu' = 'zu'
}
export enum EnumWorkSummaryV3_0Type {
  'ANNOTATION' = 'ANNOTATION',
  'ARTISTIC_PERFORMANCE' = 'ARTISTIC_PERFORMANCE',
  'BOOK_CHAPTER' = 'BOOK_CHAPTER',
  'BOOK_REVIEW' = 'BOOK_REVIEW',
  'BOOK' = 'BOOK',
  'CONFERENCE_ABSTRACT' = 'CONFERENCE_ABSTRACT',
  'CONFERENCE_PAPER' = 'CONFERENCE_PAPER',
  'CONFERENCE_POSTER' = 'CONFERENCE_POSTER',
  'DATA_MANAGEMENT_PLAN' = 'DATA_MANAGEMENT_PLAN',
  'DATA_SET' = 'DATA_SET',
  'DICTIONARY_ENTRY' = 'DICTIONARY_ENTRY',
  'DISCLOSURE' = 'DISCLOSURE',
  'DISSERTATION_THESIS' = 'DISSERTATION_THESIS',
  'EDITED_BOOK' = 'EDITED_BOOK',
  'ENCYCLOPEDIA_ENTRY' = 'ENCYCLOPEDIA_ENTRY',
  'INVENTION' = 'INVENTION',
  'JOURNAL_ARTICLE' = 'JOURNAL_ARTICLE',
  'JOURNAL_ISSUE' = 'JOURNAL_ISSUE',
  'LECTURE_SPEECH' = 'LECTURE_SPEECH',
  'LICENSE' = 'LICENSE',
  'MAGAZINE_ARTICLE' = 'MAGAZINE_ARTICLE',
  'MANUAL' = 'MANUAL',
  'NEWSLETTER_ARTICLE' = 'NEWSLETTER_ARTICLE',
  'NEWSPAPER_ARTICLE' = 'NEWSPAPER_ARTICLE',
  'ONLINE_RESOURCE' = 'ONLINE_RESOURCE',
  'OTHER' = 'OTHER',
  'PATENT' = 'PATENT',
  'PHYSICAL_OBJECT' = 'PHYSICAL_OBJECT',
  'PREPRINT' = 'PREPRINT',
  'REGISTERED_COPYRIGHT' = 'REGISTERED_COPYRIGHT',
  'REVIEW' = 'REVIEW',
  'REPORT' = 'REPORT',
  'RESEARCH_TECHNIQUE' = 'RESEARCH_TECHNIQUE',
  'RESEARCH_TOOL' = 'RESEARCH_TOOL',
  'SOFTWARE' = 'SOFTWARE',
  'SPIN_OFF_COMPANY' = 'SPIN_OFF_COMPANY',
  'STANDARDS_AND_POLICY' = 'STANDARDS_AND_POLICY',
  'SUPERVISED_STUDENT_PUBLICATION' = 'SUPERVISED_STUDENT_PUBLICATION',
  'TECHNICAL_STANDARD' = 'TECHNICAL_STANDARD',
  'TEST' = 'TEST',
  'TRADEMARK' = 'TRADEMARK',
  'TRANSLATION' = 'TRANSLATION',
  'WEBSITE' = 'WEBSITE',
  'WORKING_PAPER' = 'WORKING_PAPER',
  'UNDEFINED' = 'UNDEFINED'
}
export enum EnumWorkSummaryV3_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumContributorAttributesV3_0ContributorSequence {
  'first' = 'first',
  'additional' = 'additional'
}
export enum EnumContributorAttributesV3_0ContributorRole {
  'author' = 'author',
  'assignee' = 'assignee',
  'editor' = 'editor',
  'chair-or-translator' = 'chair-or-translator',
  'co-investigator' = 'co-investigator',
  'co-inventor' = 'co-inventor',
  'graduate-student' = 'graduate-student',
  'other-inventor' = 'other-inventor',
  'principal-investigator' = 'principal-investigator',
  'postdoctoral-researcher' = 'postdoctoral-researcher',
  'support-staff' = 'support-staff'
}
export enum EnumCountryV3_0Value {
  'AF' = 'AF',
  'AX' = 'AX',
  'AL' = 'AL',
  'DZ' = 'DZ',
  'AS' = 'AS',
  'AD' = 'AD',
  'AO' = 'AO',
  'AI' = 'AI',
  'AQ' = 'AQ',
  'AG' = 'AG',
  'AR' = 'AR',
  'AM' = 'AM',
  'AW' = 'AW',
  'AU' = 'AU',
  'AT' = 'AT',
  'AZ' = 'AZ',
  'BS' = 'BS',
  'BH' = 'BH',
  'BD' = 'BD',
  'BB' = 'BB',
  'BY' = 'BY',
  'BE' = 'BE',
  'BZ' = 'BZ',
  'BJ' = 'BJ',
  'BM' = 'BM',
  'BT' = 'BT',
  'BO' = 'BO',
  'BQ' = 'BQ',
  'BA' = 'BA',
  'BW' = 'BW',
  'BV' = 'BV',
  'BR' = 'BR',
  'IO' = 'IO',
  'BN' = 'BN',
  'BG' = 'BG',
  'BF' = 'BF',
  'BI' = 'BI',
  'KH' = 'KH',
  'CM' = 'CM',
  'CA' = 'CA',
  'CV' = 'CV',
  'KY' = 'KY',
  'CF' = 'CF',
  'TD' = 'TD',
  'CL' = 'CL',
  'CN' = 'CN',
  'CX' = 'CX',
  'CC' = 'CC',
  'CO' = 'CO',
  'KM' = 'KM',
  'CG' = 'CG',
  'CD' = 'CD',
  'CK' = 'CK',
  'CR' = 'CR',
  'CI' = 'CI',
  'HR' = 'HR',
  'CU' = 'CU',
  'CW' = 'CW',
  'CY' = 'CY',
  'CZ' = 'CZ',
  'DK' = 'DK',
  'DJ' = 'DJ',
  'DM' = 'DM',
  'DO' = 'DO',
  'EC' = 'EC',
  'EG' = 'EG',
  'SV' = 'SV',
  'GQ' = 'GQ',
  'ER' = 'ER',
  'EE' = 'EE',
  'ET' = 'ET',
  'FK' = 'FK',
  'FO' = 'FO',
  'FJ' = 'FJ',
  'FI' = 'FI',
  'FR' = 'FR',
  'GF' = 'GF',
  'PF' = 'PF',
  'TF' = 'TF',
  'GA' = 'GA',
  'GM' = 'GM',
  'GE' = 'GE',
  'DE' = 'DE',
  'GH' = 'GH',
  'GI' = 'GI',
  'GR' = 'GR',
  'GL' = 'GL',
  'GD' = 'GD',
  'GP' = 'GP',
  'GU' = 'GU',
  'GT' = 'GT',
  'GG' = 'GG',
  'GN' = 'GN',
  'GW' = 'GW',
  'GY' = 'GY',
  'HT' = 'HT',
  'HM' = 'HM',
  'VA' = 'VA',
  'HN' = 'HN',
  'HK' = 'HK',
  'HU' = 'HU',
  'IS' = 'IS',
  'IN' = 'IN',
  'ID' = 'ID',
  'IR' = 'IR',
  'IQ' = 'IQ',
  'IE' = 'IE',
  'IM' = 'IM',
  'IL' = 'IL',
  'IT' = 'IT',
  'JM' = 'JM',
  'JP' = 'JP',
  'JE' = 'JE',
  'JO' = 'JO',
  'KZ' = 'KZ',
  'KE' = 'KE',
  'KI' = 'KI',
  'KP' = 'KP',
  'KR' = 'KR',
  'KW' = 'KW',
  'KG' = 'KG',
  'LA' = 'LA',
  'LV' = 'LV',
  'LB' = 'LB',
  'LS' = 'LS',
  'LR' = 'LR',
  'LY' = 'LY',
  'LI' = 'LI',
  'LT' = 'LT',
  'LU' = 'LU',
  'MO' = 'MO',
  'MK' = 'MK',
  'MG' = 'MG',
  'MW' = 'MW',
  'MY' = 'MY',
  'MV' = 'MV',
  'ML' = 'ML',
  'MT' = 'MT',
  'MH' = 'MH',
  'MQ' = 'MQ',
  'MR' = 'MR',
  'MU' = 'MU',
  'YT' = 'YT',
  'MX' = 'MX',
  'FM' = 'FM',
  'MD' = 'MD',
  'MC' = 'MC',
  'MN' = 'MN',
  'ME' = 'ME',
  'MS' = 'MS',
  'MA' = 'MA',
  'MZ' = 'MZ',
  'MM' = 'MM',
  'NA' = 'NA',
  'NR' = 'NR',
  'NP' = 'NP',
  'NL' = 'NL',
  'NC' = 'NC',
  'NZ' = 'NZ',
  'NI' = 'NI',
  'NE' = 'NE',
  'NG' = 'NG',
  'NU' = 'NU',
  'NF' = 'NF',
  'MP' = 'MP',
  'NO' = 'NO',
  'OM' = 'OM',
  'PK' = 'PK',
  'PW' = 'PW',
  'PS' = 'PS',
  'PA' = 'PA',
  'PG' = 'PG',
  'PY' = 'PY',
  'PE' = 'PE',
  'PH' = 'PH',
  'PN' = 'PN',
  'PL' = 'PL',
  'PT' = 'PT',
  'PR' = 'PR',
  'QA' = 'QA',
  'RE' = 'RE',
  'RO' = 'RO',
  'RU' = 'RU',
  'RW' = 'RW',
  'BL' = 'BL',
  'SH' = 'SH',
  'KN' = 'KN',
  'LC' = 'LC',
  'MF' = 'MF',
  'PM' = 'PM',
  'VC' = 'VC',
  'WS' = 'WS',
  'SM' = 'SM',
  'ST' = 'ST',
  'SA' = 'SA',
  'SN' = 'SN',
  'RS' = 'RS',
  'SC' = 'SC',
  'SL' = 'SL',
  'SG' = 'SG',
  'SX' = 'SX',
  'SK' = 'SK',
  'SI' = 'SI',
  'SB' = 'SB',
  'SO' = 'SO',
  'ZA' = 'ZA',
  'GS' = 'GS',
  'SS' = 'SS',
  'ES' = 'ES',
  'LK' = 'LK',
  'SD' = 'SD',
  'SR' = 'SR',
  'SJ' = 'SJ',
  'SZ' = 'SZ',
  'SE' = 'SE',
  'CH' = 'CH',
  'SY' = 'SY',
  'TJ' = 'TJ',
  'TZ' = 'TZ',
  'TH' = 'TH',
  'TL' = 'TL',
  'TG' = 'TG',
  'TK' = 'TK',
  'TO' = 'TO',
  'TT' = 'TT',
  'TN' = 'TN',
  'TR' = 'TR',
  'TM' = 'TM',
  'TC' = 'TC',
  'TV' = 'TV',
  'UG' = 'UG',
  'UA' = 'UA',
  'AE' = 'AE',
  'GB' = 'GB',
  'US' = 'US',
  'UM' = 'UM',
  'UY' = 'UY',
  'UZ' = 'UZ',
  'VU' = 'VU',
  'VE' = 'VE',
  'VN' = 'VN',
  'VG' = 'VG',
  'VI' = 'VI',
  'WF' = 'WF',
  'EH' = 'EH',
  'YE' = 'YE',
  'ZM' = 'ZM',
  'ZW' = 'ZW',
  'TW' = 'TW',
  'XK' = 'XK'
}
export enum EnumWorkV3_0Type {
  'annotation' = 'annotation',
  'artistic-performance' = 'artistic-performance',
  'book-chapter' = 'book-chapter',
  'book-review' = 'book-review',
  'book' = 'book',
  'conference-abstract' = 'conference-abstract',
  'conference-paper' = 'conference-paper',
  'conference-poster' = 'conference-poster',
  'data-management-plan' = 'data-management-plan',
  'data-set' = 'data-set',
  'dictionary-entry' = 'dictionary-entry',
  'disclosure' = 'disclosure',
  'dissertation-thesis' = 'dissertation-thesis',
  'edited-book' = 'edited-book',
  'encyclopedia-entry' = 'encyclopedia-entry',
  'invention' = 'invention',
  'journal-article' = 'journal-article',
  'journal-issue' = 'journal-issue',
  'lecture-speech' = 'lecture-speech',
  'license' = 'license',
  'magazine-article' = 'magazine-article',
  'manual' = 'manual',
  'newsletter-article' = 'newsletter-article',
  'newspaper-article' = 'newspaper-article',
  'online-resource' = 'online-resource',
  'other' = 'other',
  'patent' = 'patent',
  'physical-object' = 'physical-object',
  'preprint' = 'preprint',
  'registered-copyright' = 'registered-copyright',
  'report' = 'report',
  'research-technique' = 'research-technique',
  'research-tool' = 'research-tool',
  'software' = 'software',
  'spin-off-company' = 'spin-off-company',
  'standards-and-policy' = 'standards-and-policy',
  'supervised-student-publication' = 'supervised-student-publication',
  'technical-standard' = 'technical-standard',
  'test' = 'test',
  'trademark' = 'trademark',
  'translation' = 'translation',
  'website' = 'website',
  'working-paper' = 'working-paper',
  'review' = 'review',
  'undefined' = 'undefined'
}
export enum EnumWorkV3_0LanguageCode {
  'ab' = 'ab',
  'aa' = 'aa',
  'af' = 'af',
  'ak' = 'ak',
  'sq' = 'sq',
  'am' = 'am',
  'ar' = 'ar',
  'an' = 'an',
  'hy' = 'hy',
  'as' = 'as',
  'av' = 'av',
  'ae' = 'ae',
  'ay' = 'ay',
  'az' = 'az',
  'bm' = 'bm',
  'ba' = 'ba',
  'eu' = 'eu',
  'be' = 'be',
  'bn' = 'bn',
  'bh' = 'bh',
  'bi' = 'bi',
  'bs' = 'bs',
  'br' = 'br',
  'bg' = 'bg',
  'my' = 'my',
  'ca' = 'ca',
  'ch' = 'ch',
  'ce' = 'ce',
  'zh_CN' = 'zh_CN',
  'zh_TW' = 'zh_TW',
  'cu' = 'cu',
  'cv' = 'cv',
  'kw' = 'kw',
  'co' = 'co',
  'cr' = 'cr',
  'hr' = 'hr',
  'cs' = 'cs',
  'da' = 'da',
  'dv' = 'dv',
  'nl' = 'nl',
  'dz' = 'dz',
  'en' = 'en',
  'eo' = 'eo',
  'et' = 'et',
  'ee' = 'ee',
  'fo' = 'fo',
  'fj' = 'fj',
  'fi' = 'fi',
  'fr' = 'fr',
  'fy' = 'fy',
  'ff' = 'ff',
  'gl' = 'gl',
  'lg' = 'lg',
  'ka' = 'ka',
  'de' = 'de',
  'el' = 'el',
  'kl' = 'kl',
  'gn' = 'gn',
  'gu' = 'gu',
  'ht' = 'ht',
  'ha' = 'ha',
  'iw' = 'iw',
  'hz' = 'hz',
  'hi' = 'hi',
  'ho' = 'ho',
  'hu' = 'hu',
  'is' = 'is',
  'io' = 'io',
  'ig' = 'ig',
  'in' = 'in',
  'ia' = 'ia',
  'ie' = 'ie',
  'iu' = 'iu',
  'ik' = 'ik',
  'ga' = 'ga',
  'it' = 'it',
  'ja' = 'ja',
  'jv' = 'jv',
  'kn' = 'kn',
  'kr' = 'kr',
  'ks' = 'ks',
  'kk' = 'kk',
  'km' = 'km',
  'ki' = 'ki',
  'rw' = 'rw',
  'ky' = 'ky',
  'kv' = 'kv',
  'kg' = 'kg',
  'ko' = 'ko',
  'ku' = 'ku',
  'kj' = 'kj',
  'lo' = 'lo',
  'la' = 'la',
  'lv' = 'lv',
  'li' = 'li',
  'ln' = 'ln',
  'lt' = 'lt',
  'lu' = 'lu',
  'lb' = 'lb',
  'mk' = 'mk',
  'mg' = 'mg',
  'ms' = 'ms',
  'ml' = 'ml',
  'mt' = 'mt',
  'gv' = 'gv',
  'mi' = 'mi',
  'mr' = 'mr',
  'mh' = 'mh',
  'mo' = 'mo',
  'mn' = 'mn',
  'na' = 'na',
  'nv' = 'nv',
  'ng' = 'ng',
  'ne' = 'ne',
  'nd' = 'nd',
  'se' = 'se',
  'no' = 'no',
  'nb' = 'nb',
  'nn' = 'nn',
  'ny' = 'ny',
  'oc' = 'oc',
  'oj' = 'oj',
  'or' = 'or',
  'om' = 'om',
  'os' = 'os',
  'pi' = 'pi',
  'pa' = 'pa',
  'fa' = 'fa',
  'pl' = 'pl',
  'pt' = 'pt',
  'ps' = 'ps',
  'qu' = 'qu',
  'rm' = 'rm',
  'ro' = 'ro',
  'rn' = 'rn',
  'ru' = 'ru',
  'sm' = 'sm',
  'sg' = 'sg',
  'sa' = 'sa',
  'sc' = 'sc',
  'gd' = 'gd',
  'sr' = 'sr',
  'sn' = 'sn',
  'ii' = 'ii',
  'sd' = 'sd',
  'si' = 'si',
  'sk' = 'sk',
  'sl' = 'sl',
  'so' = 'so',
  'nr' = 'nr',
  'st' = 'st',
  'es' = 'es',
  'su' = 'su',
  'sw' = 'sw',
  'ss' = 'ss',
  'sv' = 'sv',
  'tl' = 'tl',
  'ty' = 'ty',
  'tg' = 'tg',
  'ta' = 'ta',
  'tt' = 'tt',
  'te' = 'te',
  'th' = 'th',
  'bo' = 'bo',
  'ti' = 'ti',
  'to' = 'to',
  'ts' = 'ts',
  'tn' = 'tn',
  'tr' = 'tr',
  'tk' = 'tk',
  'tw' = 'tw',
  'ug' = 'ug',
  'uk' = 'uk',
  'ur' = 'ur',
  'uz' = 'uz',
  've' = 've',
  'vi' = 'vi',
  'vo' = 'vo',
  'wa' = 'wa',
  'cy' = 'cy',
  'wo' = 'wo',
  'xh' = 'xh',
  'ji' = 'ji',
  'yo' = 'yo',
  'za' = 'za',
  'zu' = 'zu'
}
export enum EnumWorkV3_0Visibility {
  'limited' = 'limited',
  'registered-only' = 'registered-only',
  'public' = 'public'
}
export enum EnumFundingContributorAttributesV3_0ContributorRole {
  'author' = 'author',
  'assignee' = 'assignee',
  'editor' = 'editor',
  'chair-or-translator' = 'chair-or-translator',
  'co-investigator' = 'co-investigator',
  'co-inventor' = 'co-inventor',
  'graduate-student' = 'graduate-student',
  'other-inventor' = 'other-inventor',
  'principal-investigator' = 'principal-investigator',
  'postdoctoral-researcher' = 'postdoctoral-researcher',
  'support-staff' = 'support-staff'
}
export enum EnumFundingV3_0Type {
  'grant' = 'grant',
  'contract' = 'contract',
  'award' = 'award',
  'salary-award' = 'salary-award'
}
export enum EnumFundingV3_0Visibility {
  'limited' = 'limited',
  'registered-only' = 'registered-only',
  'public' = 'public'
}
export enum EnumEducationV3_0Visibility {
  'limited' = 'limited',
  'registered-only' = 'registered-only',
  'public' = 'public'
}
export enum EnumEmploymentV3_0Visibility {
  'limited' = 'limited',
  'registered-only' = 'registered-only',
  'public' = 'public'
}
export enum EnumPeerReviewV3_0ReviewerRole {
  'reviewer' = 'reviewer',
  'editor' = 'editor',
  'member' = 'member',
  'chair' = 'chair',
  'organizer' = 'organizer'
}
export enum EnumPeerReviewV3_0ReviewType {
  'review' = 'review',
  'evaluation' = 'evaluation'
}
export enum EnumPeerReviewV3_0SubjectType {
  'artistic-performance' = 'artistic-performance',
  'book-chapter' = 'book-chapter',
  'book-review' = 'book-review',
  'book' = 'book',
  'conference-abstract' = 'conference-abstract',
  'conference-paper' = 'conference-paper',
  'conference-poster' = 'conference-poster',
  'data-set' = 'data-set',
  'dictionary-entry' = 'dictionary-entry',
  'disclosure' = 'disclosure',
  'dissertation-thesis' = 'dissertation-thesis',
  'edited-book' = 'edited-book',
  'encyclopedia-entry' = 'encyclopedia-entry',
  'invention' = 'invention',
  'journal-article' = 'journal-article',
  'journal-issue' = 'journal-issue',
  'lecture-speech' = 'lecture-speech',
  'license' = 'license',
  'magazine-article' = 'magazine-article',
  'manual' = 'manual',
  'newsletter-article' = 'newsletter-article',
  'newspaper-article' = 'newspaper-article',
  'online-resource' = 'online-resource',
  'other' = 'other',
  'patent' = 'patent',
  'registered-copyright' = 'registered-copyright',
  'report' = 'report',
  'research-technique' = 'research-technique',
  'research-tool' = 'research-tool',
  'software' = 'software',
  'spin-off-company' = 'spin-off-company',
  'standards-and-policy' = 'standards-and-policy',
  'supervised-student-publication' = 'supervised-student-publication',
  'technical-standard' = 'technical-standard',
  'test' = 'test',
  'trademark' = 'trademark',
  'translation' = 'translation',
  'website' = 'website',
  'working-paper' = 'working-paper',
  'grant' = 'grant',
  'contract' = 'contract',
  'award' = 'award',
  'salary-award' = 'salary-award',
  'research-resource-proposal' = 'research-resource-proposal',
  'undefined' = 'undefined'
}
export enum EnumPeerReviewV3_0Visibility {
  'limited' = 'limited',
  'registered-only' = 'registered-only',
  'public' = 'public'
}
export enum EnumItemV3_0ItemType {
  'bio' = 'bio',
  'distinction' = 'distinction',
  'education' = 'education',
  'employment' = 'employment',
  'external-identifier' = 'external-identifier',
  'invited-position' = 'invited-position',
  'funding' = 'funding',
  'membership' = 'membership',
  'peer-review' = 'peer-review',
  'qualification' = 'qualification',
  'service' = 'service',
  'work' = 'work',
  'research-resource' = 'research-resource'
}
export enum EnumNotificationPermissionV3_0NotificationType {
  'custom' = 'custom',
  'institutional-connection' = 'institutional-connection',
  'permission' = 'permission',
  'amended' = 'amended',
  'service-anouncement' = 'service-anouncement',
  'administrative' = 'administrative',
  'tip' = 'tip',
  'find-my-stuff' = 'find-my-stuff'
}
export enum EnumResearcherUrlV3_0Visibility {
  'limited' = 'limited',
  'registered-only' = 'registered-only',
  'public' = 'public'
}
export enum EnumOtherNameV3_0Visibility {
  'limited' = 'limited',
  'registered-only' = 'registered-only',
  'public' = 'public'
}
export enum EnumBiographyV3_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumNameV3_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumPersonExternalIdentifierV3_0ExternalIdRelationship {
  'part-of' = 'part-of',
  'self' = 'self',
  'version-of' = 'version-of'
}
export enum EnumPersonExternalIdentifierV3_0Visibility {
  'limited' = 'limited',
  'registered-only' = 'registered-only',
  'public' = 'public'
}
export enum EnumKeywordV3_0Visibility {
  'limited' = 'limited',
  'registered-only' = 'registered-only',
  'public' = 'public'
}
export enum EnumAddressV3_0Visibility {
  'limited' = 'limited',
  'registered-only' = 'registered-only',
  'public' = 'public'
}
export enum EnumEmailV3_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumHistoryV3_0CreationMethod {
  'API' = 'API',
  'DIRECT' = 'DIRECT',
  'MEMBER_REFERRED' = 'MEMBER_REFERRED',
  'WEBSITE' = 'WEBSITE',
  'INTEGRATION_TEST' = 'INTEGRATION_TEST'
}
export enum EnumPreferencesV3_0Locale {
  'AR' = 'AR',
  'CS' = 'CS',
  'DE' = 'DE',
  'EN' = 'EN',
  'ES' = 'ES',
  'FR' = 'FR',
  'IT' = 'IT',
  'JA' = 'JA',
  'KO' = 'KO',
  'PT' = 'PT',
  'RU' = 'RU',
  'ZH_CN' = 'ZH_CN',
  'ZH_TW' = 'ZH_TW',
  'XX' = 'XX'
}
export enum EnumDistinctionV3_0Visibility {
  'limited' = 'limited',
  'registered-only' = 'registered-only',
  'public' = 'public'
}
export enum EnumInvitedPositionV3_0Visibility {
  'limited' = 'limited',
  'registered-only' = 'registered-only',
  'public' = 'public'
}
export enum EnumMembershipV3_0Visibility {
  'limited' = 'limited',
  'registered-only' = 'registered-only',
  'public' = 'public'
}
export enum EnumQualificationV3_0Visibility {
  'limited' = 'limited',
  'registered-only' = 'registered-only',
  'public' = 'public'
}
export enum EnumServiceV3_0Visibility {
  'limited' = 'limited',
  'registered-only' = 'registered-only',
  'public' = 'public'
}
export enum EnumResearchResourceItemV3_0ResourceType {
  'infrastructures' = 'infrastructures',
  'collections' = 'collections',
  'equipment' = 'equipment',
  'services' = 'services'
}
export enum EnumResearchResourceV3_0Visibility {
  'limited' = 'limited',
  'registered-only' = 'registered-only',
  'public' = 'public'
}
export enum EnumAffiliationSummaryV3_0_rc1Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumDistinctionSummaryV3_0_rc1Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumEducationSummaryV3_0_rc1Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumEmploymentSummaryV3_0_rc1Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumExternalIDV3_0_rc1ExternalIdRelationship {
  'PART_OF' = 'PART_OF',
  'SELF' = 'SELF'
}
export enum EnumFundingSummaryV3_0_rc1Type {
  'GRANT' = 'GRANT',
  'CONTRACT' = 'CONTRACT',
  'AWARD' = 'AWARD',
  'SALARY_AWARD' = 'SALARY_AWARD'
}
export enum EnumFundingSummaryV3_0_rc1Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumInvitedPositionSummaryV3_0_rc1Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumMembershipSummaryV3_0_rc1Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumOrganizationAddressV3_0_rc1Country {
  'AF' = 'AF',
  'AX' = 'AX',
  'AL' = 'AL',
  'DZ' = 'DZ',
  'AS' = 'AS',
  'AD' = 'AD',
  'AO' = 'AO',
  'AI' = 'AI',
  'AQ' = 'AQ',
  'AG' = 'AG',
  'AR' = 'AR',
  'AM' = 'AM',
  'AW' = 'AW',
  'AU' = 'AU',
  'AT' = 'AT',
  'AZ' = 'AZ',
  'BS' = 'BS',
  'BH' = 'BH',
  'BD' = 'BD',
  'BB' = 'BB',
  'BY' = 'BY',
  'BE' = 'BE',
  'BZ' = 'BZ',
  'BJ' = 'BJ',
  'BM' = 'BM',
  'BT' = 'BT',
  'BO' = 'BO',
  'BQ' = 'BQ',
  'BA' = 'BA',
  'BW' = 'BW',
  'BV' = 'BV',
  'BR' = 'BR',
  'IO' = 'IO',
  'BN' = 'BN',
  'BG' = 'BG',
  'BF' = 'BF',
  'BI' = 'BI',
  'KH' = 'KH',
  'CM' = 'CM',
  'CA' = 'CA',
  'CV' = 'CV',
  'KY' = 'KY',
  'CF' = 'CF',
  'TD' = 'TD',
  'CL' = 'CL',
  'CN' = 'CN',
  'CX' = 'CX',
  'CC' = 'CC',
  'CO' = 'CO',
  'KM' = 'KM',
  'CG' = 'CG',
  'CD' = 'CD',
  'CK' = 'CK',
  'CR' = 'CR',
  'CI' = 'CI',
  'HR' = 'HR',
  'CU' = 'CU',
  'CW' = 'CW',
  'CY' = 'CY',
  'CZ' = 'CZ',
  'DK' = 'DK',
  'DJ' = 'DJ',
  'DM' = 'DM',
  'DO' = 'DO',
  'EC' = 'EC',
  'EG' = 'EG',
  'SV' = 'SV',
  'GQ' = 'GQ',
  'ER' = 'ER',
  'EE' = 'EE',
  'ET' = 'ET',
  'FK' = 'FK',
  'FO' = 'FO',
  'FJ' = 'FJ',
  'FI' = 'FI',
  'FR' = 'FR',
  'GF' = 'GF',
  'PF' = 'PF',
  'TF' = 'TF',
  'GA' = 'GA',
  'GM' = 'GM',
  'GE' = 'GE',
  'DE' = 'DE',
  'GH' = 'GH',
  'GI' = 'GI',
  'GR' = 'GR',
  'GL' = 'GL',
  'GD' = 'GD',
  'GP' = 'GP',
  'GU' = 'GU',
  'GT' = 'GT',
  'GG' = 'GG',
  'GN' = 'GN',
  'GW' = 'GW',
  'GY' = 'GY',
  'HT' = 'HT',
  'HM' = 'HM',
  'VA' = 'VA',
  'HN' = 'HN',
  'HK' = 'HK',
  'HU' = 'HU',
  'IS' = 'IS',
  'IN' = 'IN',
  'ID' = 'ID',
  'IR' = 'IR',
  'IQ' = 'IQ',
  'IE' = 'IE',
  'IM' = 'IM',
  'IL' = 'IL',
  'IT' = 'IT',
  'JM' = 'JM',
  'JP' = 'JP',
  'JE' = 'JE',
  'JO' = 'JO',
  'KZ' = 'KZ',
  'KE' = 'KE',
  'KI' = 'KI',
  'KP' = 'KP',
  'KR' = 'KR',
  'KW' = 'KW',
  'KG' = 'KG',
  'LA' = 'LA',
  'LV' = 'LV',
  'LB' = 'LB',
  'LS' = 'LS',
  'LR' = 'LR',
  'LY' = 'LY',
  'LI' = 'LI',
  'LT' = 'LT',
  'LU' = 'LU',
  'MO' = 'MO',
  'MK' = 'MK',
  'MG' = 'MG',
  'MW' = 'MW',
  'MY' = 'MY',
  'MV' = 'MV',
  'ML' = 'ML',
  'MT' = 'MT',
  'MH' = 'MH',
  'MQ' = 'MQ',
  'MR' = 'MR',
  'MU' = 'MU',
  'YT' = 'YT',
  'MX' = 'MX',
  'FM' = 'FM',
  'MD' = 'MD',
  'MC' = 'MC',
  'MN' = 'MN',
  'ME' = 'ME',
  'MS' = 'MS',
  'MA' = 'MA',
  'MZ' = 'MZ',
  'MM' = 'MM',
  'NA' = 'NA',
  'NR' = 'NR',
  'NP' = 'NP',
  'NL' = 'NL',
  'NC' = 'NC',
  'NZ' = 'NZ',
  'NI' = 'NI',
  'NE' = 'NE',
  'NG' = 'NG',
  'NU' = 'NU',
  'NF' = 'NF',
  'MP' = 'MP',
  'NO' = 'NO',
  'OM' = 'OM',
  'PK' = 'PK',
  'PW' = 'PW',
  'PS' = 'PS',
  'PA' = 'PA',
  'PG' = 'PG',
  'PY' = 'PY',
  'PE' = 'PE',
  'PH' = 'PH',
  'PN' = 'PN',
  'PL' = 'PL',
  'PT' = 'PT',
  'PR' = 'PR',
  'QA' = 'QA',
  'RE' = 'RE',
  'RO' = 'RO',
  'RU' = 'RU',
  'RW' = 'RW',
  'BL' = 'BL',
  'SH' = 'SH',
  'KN' = 'KN',
  'LC' = 'LC',
  'MF' = 'MF',
  'PM' = 'PM',
  'VC' = 'VC',
  'WS' = 'WS',
  'SM' = 'SM',
  'ST' = 'ST',
  'SA' = 'SA',
  'SN' = 'SN',
  'RS' = 'RS',
  'SC' = 'SC',
  'SL' = 'SL',
  'SG' = 'SG',
  'SX' = 'SX',
  'SK' = 'SK',
  'SI' = 'SI',
  'SB' = 'SB',
  'SO' = 'SO',
  'ZA' = 'ZA',
  'GS' = 'GS',
  'SS' = 'SS',
  'ES' = 'ES',
  'LK' = 'LK',
  'SD' = 'SD',
  'SR' = 'SR',
  'SJ' = 'SJ',
  'SZ' = 'SZ',
  'SE' = 'SE',
  'CH' = 'CH',
  'SY' = 'SY',
  'TJ' = 'TJ',
  'TZ' = 'TZ',
  'TH' = 'TH',
  'TL' = 'TL',
  'TG' = 'TG',
  'TK' = 'TK',
  'TO' = 'TO',
  'TT' = 'TT',
  'TN' = 'TN',
  'TR' = 'TR',
  'TM' = 'TM',
  'TC' = 'TC',
  'TV' = 'TV',
  'UG' = 'UG',
  'UA' = 'UA',
  'AE' = 'AE',
  'GB' = 'GB',
  'US' = 'US',
  'UM' = 'UM',
  'UY' = 'UY',
  'UZ' = 'UZ',
  'VU' = 'VU',
  'VE' = 'VE',
  'VN' = 'VN',
  'VG' = 'VG',
  'VI' = 'VI',
  'WF' = 'WF',
  'EH' = 'EH',
  'YE' = 'YE',
  'ZM' = 'ZM',
  'ZW' = 'ZW',
  'TW' = 'TW',
  'XK' = 'XK'
}
export enum EnumPeerReviewSummaryV3_0_rc1ReviewerRole {
  'REVIEWER' = 'REVIEWER',
  'EDITOR' = 'EDITOR',
  'MEMBER' = 'MEMBER',
  'CHAIR' = 'CHAIR',
  'ORGANIZER' = 'ORGANIZER'
}
export enum EnumPeerReviewSummaryV3_0_rc1ReviewType {
  'REVIEW' = 'REVIEW',
  'EVALUATION' = 'EVALUATION'
}
export enum EnumPeerReviewSummaryV3_0_rc1Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumPublicationDateV3_0_rc1MediaType {
  'PRINT' = 'PRINT',
  'ONLINE' = 'ONLINE',
  'OTHER' = 'OTHER'
}
export enum EnumQualificationSummaryV3_0_rc1Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumResearchResourceSummaryV3_0_rc1Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumServiceSummaryV3_0_rc1Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumWorkSummaryV3_0_rc1Type {
  'ARTISTIC_PERFORMANCE' = 'ARTISTIC_PERFORMANCE',
  'BOOK_CHAPTER' = 'BOOK_CHAPTER',
  'BOOK_REVIEW' = 'BOOK_REVIEW',
  'BOOK' = 'BOOK',
  'CONFERENCE_ABSTRACT' = 'CONFERENCE_ABSTRACT',
  'CONFERENCE_PAPER' = 'CONFERENCE_PAPER',
  'CONFERENCE_POSTER' = 'CONFERENCE_POSTER',
  'DATA_SET' = 'DATA_SET',
  'DICTIONARY_ENTRY' = 'DICTIONARY_ENTRY',
  'DISCLOSURE' = 'DISCLOSURE',
  'DISSERTATION' = 'DISSERTATION',
  'EDITED_BOOK' = 'EDITED_BOOK',
  'ENCYCLOPEDIA_ENTRY' = 'ENCYCLOPEDIA_ENTRY',
  'INVENTION' = 'INVENTION',
  'JOURNAL_ARTICLE' = 'JOURNAL_ARTICLE',
  'JOURNAL_ISSUE' = 'JOURNAL_ISSUE',
  'LECTURE_SPEECH' = 'LECTURE_SPEECH',
  'LICENSE' = 'LICENSE',
  'MAGAZINE_ARTICLE' = 'MAGAZINE_ARTICLE',
  'MANUAL' = 'MANUAL',
  'NEWSLETTER_ARTICLE' = 'NEWSLETTER_ARTICLE',
  'NEWSPAPER_ARTICLE' = 'NEWSPAPER_ARTICLE',
  'ONLINE_RESOURCE' = 'ONLINE_RESOURCE',
  'OTHER' = 'OTHER',
  'PATENT' = 'PATENT',
  'PREPRINT' = 'PREPRINT',
  'REGISTERED_COPYRIGHT' = 'REGISTERED_COPYRIGHT',
  'REPORT' = 'REPORT',
  'RESEARCH_TECHNIQUE' = 'RESEARCH_TECHNIQUE',
  'RESEARCH_TOOL' = 'RESEARCH_TOOL',
  'SOFTWARE' = 'SOFTWARE',
  'SPIN_OFF_COMPANY' = 'SPIN_OFF_COMPANY',
  'STANDARDS_AND_POLICY' = 'STANDARDS_AND_POLICY',
  'SUPERVISED_STUDENT_PUBLICATION' = 'SUPERVISED_STUDENT_PUBLICATION',
  'TECHNICAL_STANDARD' = 'TECHNICAL_STANDARD',
  'TEST' = 'TEST',
  'TRADEMARK' = 'TRADEMARK',
  'TRANSLATION' = 'TRANSLATION',
  'WEBSITE' = 'WEBSITE',
  'WORKING_PAPER' = 'WORKING_PAPER',
  'UNDEFINED' = 'UNDEFINED'
}
export enum EnumWorkSummaryV3_0_rc1Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumContributorAttributesV3_0_rc1ContributorSequence {
  'FIRST' = 'FIRST',
  'ADDITIONAL' = 'ADDITIONAL'
}
export enum EnumContributorAttributesV3_0_rc1ContributorRole {
  'AUTHOR' = 'AUTHOR',
  'ASSIGNEE' = 'ASSIGNEE',
  'EDITOR' = 'EDITOR',
  'CHAIR_OR_TRANSLATOR' = 'CHAIR_OR_TRANSLATOR',
  'CO_INVESTIGATOR' = 'CO_INVESTIGATOR',
  'CO_INVENTOR' = 'CO_INVENTOR',
  'GRADUATE_STUDENT' = 'GRADUATE_STUDENT',
  'OTHER_INVENTOR' = 'OTHER_INVENTOR',
  'PRINCIPAL_INVESTIGATOR' = 'PRINCIPAL_INVESTIGATOR',
  'POSTDOCTORAL_RESEARCHER' = 'POSTDOCTORAL_RESEARCHER',
  'SUPPORT_STAFF' = 'SUPPORT_STAFF'
}
export enum EnumCountryV3_0_rc1Value {
  'AF' = 'AF',
  'AX' = 'AX',
  'AL' = 'AL',
  'DZ' = 'DZ',
  'AS' = 'AS',
  'AD' = 'AD',
  'AO' = 'AO',
  'AI' = 'AI',
  'AQ' = 'AQ',
  'AG' = 'AG',
  'AR' = 'AR',
  'AM' = 'AM',
  'AW' = 'AW',
  'AU' = 'AU',
  'AT' = 'AT',
  'AZ' = 'AZ',
  'BS' = 'BS',
  'BH' = 'BH',
  'BD' = 'BD',
  'BB' = 'BB',
  'BY' = 'BY',
  'BE' = 'BE',
  'BZ' = 'BZ',
  'BJ' = 'BJ',
  'BM' = 'BM',
  'BT' = 'BT',
  'BO' = 'BO',
  'BQ' = 'BQ',
  'BA' = 'BA',
  'BW' = 'BW',
  'BV' = 'BV',
  'BR' = 'BR',
  'IO' = 'IO',
  'BN' = 'BN',
  'BG' = 'BG',
  'BF' = 'BF',
  'BI' = 'BI',
  'KH' = 'KH',
  'CM' = 'CM',
  'CA' = 'CA',
  'CV' = 'CV',
  'KY' = 'KY',
  'CF' = 'CF',
  'TD' = 'TD',
  'CL' = 'CL',
  'CN' = 'CN',
  'CX' = 'CX',
  'CC' = 'CC',
  'CO' = 'CO',
  'KM' = 'KM',
  'CG' = 'CG',
  'CD' = 'CD',
  'CK' = 'CK',
  'CR' = 'CR',
  'CI' = 'CI',
  'HR' = 'HR',
  'CU' = 'CU',
  'CW' = 'CW',
  'CY' = 'CY',
  'CZ' = 'CZ',
  'DK' = 'DK',
  'DJ' = 'DJ',
  'DM' = 'DM',
  'DO' = 'DO',
  'EC' = 'EC',
  'EG' = 'EG',
  'SV' = 'SV',
  'GQ' = 'GQ',
  'ER' = 'ER',
  'EE' = 'EE',
  'ET' = 'ET',
  'FK' = 'FK',
  'FO' = 'FO',
  'FJ' = 'FJ',
  'FI' = 'FI',
  'FR' = 'FR',
  'GF' = 'GF',
  'PF' = 'PF',
  'TF' = 'TF',
  'GA' = 'GA',
  'GM' = 'GM',
  'GE' = 'GE',
  'DE' = 'DE',
  'GH' = 'GH',
  'GI' = 'GI',
  'GR' = 'GR',
  'GL' = 'GL',
  'GD' = 'GD',
  'GP' = 'GP',
  'GU' = 'GU',
  'GT' = 'GT',
  'GG' = 'GG',
  'GN' = 'GN',
  'GW' = 'GW',
  'GY' = 'GY',
  'HT' = 'HT',
  'HM' = 'HM',
  'VA' = 'VA',
  'HN' = 'HN',
  'HK' = 'HK',
  'HU' = 'HU',
  'IS' = 'IS',
  'IN' = 'IN',
  'ID' = 'ID',
  'IR' = 'IR',
  'IQ' = 'IQ',
  'IE' = 'IE',
  'IM' = 'IM',
  'IL' = 'IL',
  'IT' = 'IT',
  'JM' = 'JM',
  'JP' = 'JP',
  'JE' = 'JE',
  'JO' = 'JO',
  'KZ' = 'KZ',
  'KE' = 'KE',
  'KI' = 'KI',
  'KP' = 'KP',
  'KR' = 'KR',
  'KW' = 'KW',
  'KG' = 'KG',
  'LA' = 'LA',
  'LV' = 'LV',
  'LB' = 'LB',
  'LS' = 'LS',
  'LR' = 'LR',
  'LY' = 'LY',
  'LI' = 'LI',
  'LT' = 'LT',
  'LU' = 'LU',
  'MO' = 'MO',
  'MK' = 'MK',
  'MG' = 'MG',
  'MW' = 'MW',
  'MY' = 'MY',
  'MV' = 'MV',
  'ML' = 'ML',
  'MT' = 'MT',
  'MH' = 'MH',
  'MQ' = 'MQ',
  'MR' = 'MR',
  'MU' = 'MU',
  'YT' = 'YT',
  'MX' = 'MX',
  'FM' = 'FM',
  'MD' = 'MD',
  'MC' = 'MC',
  'MN' = 'MN',
  'ME' = 'ME',
  'MS' = 'MS',
  'MA' = 'MA',
  'MZ' = 'MZ',
  'MM' = 'MM',
  'NA' = 'NA',
  'NR' = 'NR',
  'NP' = 'NP',
  'NL' = 'NL',
  'NC' = 'NC',
  'NZ' = 'NZ',
  'NI' = 'NI',
  'NE' = 'NE',
  'NG' = 'NG',
  'NU' = 'NU',
  'NF' = 'NF',
  'MP' = 'MP',
  'NO' = 'NO',
  'OM' = 'OM',
  'PK' = 'PK',
  'PW' = 'PW',
  'PS' = 'PS',
  'PA' = 'PA',
  'PG' = 'PG',
  'PY' = 'PY',
  'PE' = 'PE',
  'PH' = 'PH',
  'PN' = 'PN',
  'PL' = 'PL',
  'PT' = 'PT',
  'PR' = 'PR',
  'QA' = 'QA',
  'RE' = 'RE',
  'RO' = 'RO',
  'RU' = 'RU',
  'RW' = 'RW',
  'BL' = 'BL',
  'SH' = 'SH',
  'KN' = 'KN',
  'LC' = 'LC',
  'MF' = 'MF',
  'PM' = 'PM',
  'VC' = 'VC',
  'WS' = 'WS',
  'SM' = 'SM',
  'ST' = 'ST',
  'SA' = 'SA',
  'SN' = 'SN',
  'RS' = 'RS',
  'SC' = 'SC',
  'SL' = 'SL',
  'SG' = 'SG',
  'SX' = 'SX',
  'SK' = 'SK',
  'SI' = 'SI',
  'SB' = 'SB',
  'SO' = 'SO',
  'ZA' = 'ZA',
  'GS' = 'GS',
  'SS' = 'SS',
  'ES' = 'ES',
  'LK' = 'LK',
  'SD' = 'SD',
  'SR' = 'SR',
  'SJ' = 'SJ',
  'SZ' = 'SZ',
  'SE' = 'SE',
  'CH' = 'CH',
  'SY' = 'SY',
  'TJ' = 'TJ',
  'TZ' = 'TZ',
  'TH' = 'TH',
  'TL' = 'TL',
  'TG' = 'TG',
  'TK' = 'TK',
  'TO' = 'TO',
  'TT' = 'TT',
  'TN' = 'TN',
  'TR' = 'TR',
  'TM' = 'TM',
  'TC' = 'TC',
  'TV' = 'TV',
  'UG' = 'UG',
  'UA' = 'UA',
  'AE' = 'AE',
  'GB' = 'GB',
  'US' = 'US',
  'UM' = 'UM',
  'UY' = 'UY',
  'UZ' = 'UZ',
  'VU' = 'VU',
  'VE' = 'VE',
  'VN' = 'VN',
  'VG' = 'VG',
  'VI' = 'VI',
  'WF' = 'WF',
  'EH' = 'EH',
  'YE' = 'YE',
  'ZM' = 'ZM',
  'ZW' = 'ZW',
  'TW' = 'TW',
  'XK' = 'XK'
}
export enum EnumWorkV3_0_rc1Type {
  'ARTISTIC_PERFORMANCE' = 'ARTISTIC_PERFORMANCE',
  'BOOK_CHAPTER' = 'BOOK_CHAPTER',
  'BOOK_REVIEW' = 'BOOK_REVIEW',
  'BOOK' = 'BOOK',
  'CONFERENCE_ABSTRACT' = 'CONFERENCE_ABSTRACT',
  'CONFERENCE_PAPER' = 'CONFERENCE_PAPER',
  'CONFERENCE_POSTER' = 'CONFERENCE_POSTER',
  'DATA_SET' = 'DATA_SET',
  'DICTIONARY_ENTRY' = 'DICTIONARY_ENTRY',
  'DISCLOSURE' = 'DISCLOSURE',
  'DISSERTATION' = 'DISSERTATION',
  'EDITED_BOOK' = 'EDITED_BOOK',
  'ENCYCLOPEDIA_ENTRY' = 'ENCYCLOPEDIA_ENTRY',
  'INVENTION' = 'INVENTION',
  'JOURNAL_ARTICLE' = 'JOURNAL_ARTICLE',
  'JOURNAL_ISSUE' = 'JOURNAL_ISSUE',
  'LECTURE_SPEECH' = 'LECTURE_SPEECH',
  'LICENSE' = 'LICENSE',
  'MAGAZINE_ARTICLE' = 'MAGAZINE_ARTICLE',
  'MANUAL' = 'MANUAL',
  'NEWSLETTER_ARTICLE' = 'NEWSLETTER_ARTICLE',
  'NEWSPAPER_ARTICLE' = 'NEWSPAPER_ARTICLE',
  'ONLINE_RESOURCE' = 'ONLINE_RESOURCE',
  'OTHER' = 'OTHER',
  'PATENT' = 'PATENT',
  'PREPRINT' = 'PREPRINT',
  'REGISTERED_COPYRIGHT' = 'REGISTERED_COPYRIGHT',
  'REPORT' = 'REPORT',
  'RESEARCH_TECHNIQUE' = 'RESEARCH_TECHNIQUE',
  'RESEARCH_TOOL' = 'RESEARCH_TOOL',
  'SOFTWARE' = 'SOFTWARE',
  'SPIN_OFF_COMPANY' = 'SPIN_OFF_COMPANY',
  'STANDARDS_AND_POLICY' = 'STANDARDS_AND_POLICY',
  'SUPERVISED_STUDENT_PUBLICATION' = 'SUPERVISED_STUDENT_PUBLICATION',
  'TECHNICAL_STANDARD' = 'TECHNICAL_STANDARD',
  'TEST' = 'TEST',
  'TRADEMARK' = 'TRADEMARK',
  'TRANSLATION' = 'TRANSLATION',
  'WEBSITE' = 'WEBSITE',
  'WORKING_PAPER' = 'WORKING_PAPER',
  'UNDEFINED' = 'UNDEFINED'
}
export enum EnumWorkV3_0_rc1Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumFundingContributorAttributesV3_0_rc1ContributorRole {
  'LEAD' = 'LEAD',
  'CO_LEAD' = 'CO_LEAD',
  'SUPPORTED_BY' = 'SUPPORTED_BY',
  'OTHER_CONTRIBUTION' = 'OTHER_CONTRIBUTION'
}
export enum EnumFundingV3_0_rc1Type {
  'GRANT' = 'GRANT',
  'CONTRACT' = 'CONTRACT',
  'AWARD' = 'AWARD',
  'SALARY_AWARD' = 'SALARY_AWARD'
}
export enum EnumFundingV3_0_rc1Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumEducationV3_0_rc1Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumEmploymentV3_0_rc1Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumPeerReviewV3_0_rc1ReviewerRole {
  'REVIEWER' = 'REVIEWER',
  'EDITOR' = 'EDITOR',
  'MEMBER' = 'MEMBER',
  'CHAIR' = 'CHAIR',
  'ORGANIZER' = 'ORGANIZER'
}
export enum EnumPeerReviewV3_0_rc1ReviewType {
  'REVIEW' = 'REVIEW',
  'EVALUATION' = 'EVALUATION'
}
export enum EnumPeerReviewV3_0_rc1SubjectType {
  'ARTISTIC_PERFORMANCE' = 'ARTISTIC_PERFORMANCE',
  'BOOK_CHAPTER' = 'BOOK_CHAPTER',
  'BOOK_REVIEW' = 'BOOK_REVIEW',
  'BOOK' = 'BOOK',
  'CONFERENCE_ABSTRACT' = 'CONFERENCE_ABSTRACT',
  'CONFERENCE_PAPER' = 'CONFERENCE_PAPER',
  'CONFERENCE_POSTER' = 'CONFERENCE_POSTER',
  'DATA_SET' = 'DATA_SET',
  'DICTIONARY_ENTRY' = 'DICTIONARY_ENTRY',
  'DISCLOSURE' = 'DISCLOSURE',
  'DISSERTATION' = 'DISSERTATION',
  'EDITED_BOOK' = 'EDITED_BOOK',
  'ENCYCLOPEDIA_ENTRY' = 'ENCYCLOPEDIA_ENTRY',
  'INVENTION' = 'INVENTION',
  'JOURNAL_ARTICLE' = 'JOURNAL_ARTICLE',
  'JOURNAL_ISSUE' = 'JOURNAL_ISSUE',
  'LECTURE_SPEECH' = 'LECTURE_SPEECH',
  'LICENSE' = 'LICENSE',
  'MAGAZINE_ARTICLE' = 'MAGAZINE_ARTICLE',
  'MANUAL' = 'MANUAL',
  'NEWSLETTER_ARTICLE' = 'NEWSLETTER_ARTICLE',
  'NEWSPAPER_ARTICLE' = 'NEWSPAPER_ARTICLE',
  'ONLINE_RESOURCE' = 'ONLINE_RESOURCE',
  'OTHER' = 'OTHER',
  'PATENT' = 'PATENT',
  'REGISTERED_COPYRIGHT' = 'REGISTERED_COPYRIGHT',
  'REPORT' = 'REPORT',
  'RESEARCH_TECHNIQUE' = 'RESEARCH_TECHNIQUE',
  'RESEARCH_TOOL' = 'RESEARCH_TOOL',
  'SOFTWARE' = 'SOFTWARE',
  'SPIN_OFF_COMPANY' = 'SPIN_OFF_COMPANY',
  'STANDARDS_AND_POLICY' = 'STANDARDS_AND_POLICY',
  'SUPERVISED_STUDENT_PUBLICATION' = 'SUPERVISED_STUDENT_PUBLICATION',
  'TECHNICAL_STANDARD' = 'TECHNICAL_STANDARD',
  'TEST' = 'TEST',
  'TRADEMARK' = 'TRADEMARK',
  'TRANSLATION' = 'TRANSLATION',
  'WEBSITE' = 'WEBSITE',
  'WORKING_PAPER' = 'WORKING_PAPER',
  'GRANT' = 'GRANT',
  'CONTRACT' = 'CONTRACT',
  'AWARD' = 'AWARD',
  'SALARY_AWARD' = 'SALARY_AWARD',
  'RESEARCH_RESOURCE_PROPOSAL' = 'RESEARCH_RESOURCE_PROPOSAL',
  'UNDEFINED' = 'UNDEFINED'
}
export enum EnumPeerReviewV3_0_rc1Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumItemV3_0_rc1ItemType {
  'DISTINCTION' = 'DISTINCTION',
  'EDUCATION' = 'EDUCATION',
  'EMPLOYMENT' = 'EMPLOYMENT',
  'INVITED_POSITION' = 'INVITED_POSITION',
  'FUNDING' = 'FUNDING',
  'MEMBERSHIP' = 'MEMBERSHIP',
  'PEER_REVIEW' = 'PEER_REVIEW',
  'QUALIFICATION' = 'QUALIFICATION',
  'SERVICE' = 'SERVICE',
  'WORK' = 'WORK',
  'RESEARCH_RESOURCE' = 'RESEARCH_RESOURCE'
}
export enum EnumNotificationPermissionV3_0_rc1NotificationType {
  'CUSTOM' = 'CUSTOM',
  'INSTITUTIONAL_CONNECTION' = 'INSTITUTIONAL_CONNECTION',
  'PERMISSION' = 'PERMISSION',
  'AMENDED' = 'AMENDED',
  'SERVICE_ANNOUNCEMENT' = 'SERVICE_ANNOUNCEMENT',
  'ADMINISTRATIVE' = 'ADMINISTRATIVE',
  'TIP' = 'TIP',
  'FIND_MY_STUFF' = 'FIND_MY_STUFF'
}
export enum EnumResearcherUrlV3_0_rc1Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumOtherNameV3_0_rc1Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumBiographyV3_0_rc1Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumNameV3_0_rc1Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumPersonExternalIdentifierV3_0_rc1ExternalIdRelationship {
  'PART_OF' = 'PART_OF',
  'SELF' = 'SELF'
}
export enum EnumPersonExternalIdentifierV3_0_rc1Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumKeywordV3_0_rc1Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumAddressV3_0_rc1Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumEmailV3_0_rc1Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumHistoryV3_0_rc1CreationMethod {
  'API' = 'API',
  'DIRECT' = 'DIRECT',
  'MEMBER_REFERRED' = 'MEMBER_REFERRED',
  'WEBSITE' = 'WEBSITE',
  'INTEGRATION_TEST' = 'INTEGRATION_TEST'
}
export enum EnumPreferencesV3_0_rc1Locale {
  'AR' = 'AR',
  'CS' = 'CS',
  'DE' = 'DE',
  'EN' = 'EN',
  'ES' = 'ES',
  'FR' = 'FR',
  'IT' = 'IT',
  'JA' = 'JA',
  'KO' = 'KO',
  'PT' = 'PT',
  'RU' = 'RU',
  'ZH_CN' = 'ZH_CN',
  'ZH_TW' = 'ZH_TW',
  'XX' = 'XX'
}
export enum EnumDistinctionV3_0_rc1Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumInvitedPositionV3_0_rc1Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumMembershipV3_0_rc1Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumQualificationV3_0_rc1Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumServiceV3_0_rc1Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumResearchResourceV3_0_rc1Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumAffiliationSummaryV3_0_rc2Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumDistinctionSummaryV3_0_rc2Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumEducationSummaryV3_0_rc2Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumEmploymentSummaryV3_0_rc2Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumExternalIDV3_0_rc2ExternalIdRelationship {
  'PART_OF' = 'PART_OF',
  'SELF' = 'SELF',
  'VERSION_OF' = 'VERSION_OF',
  'FUNDED_BY' = 'FUNDED_BY'
}
export enum EnumFundingSummaryV3_0_rc2Type {
  'GRANT' = 'GRANT',
  'CONTRACT' = 'CONTRACT',
  'AWARD' = 'AWARD',
  'SALARY_AWARD' = 'SALARY_AWARD'
}
export enum EnumFundingSummaryV3_0_rc2Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumInvitedPositionSummaryV3_0_rc2Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumMembershipSummaryV3_0_rc2Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumOrganizationAddressV3_0_rc2Country {
  'AF' = 'AF',
  'AX' = 'AX',
  'AL' = 'AL',
  'DZ' = 'DZ',
  'AS' = 'AS',
  'AD' = 'AD',
  'AO' = 'AO',
  'AI' = 'AI',
  'AQ' = 'AQ',
  'AG' = 'AG',
  'AR' = 'AR',
  'AM' = 'AM',
  'AW' = 'AW',
  'AU' = 'AU',
  'AT' = 'AT',
  'AZ' = 'AZ',
  'BS' = 'BS',
  'BH' = 'BH',
  'BD' = 'BD',
  'BB' = 'BB',
  'BY' = 'BY',
  'BE' = 'BE',
  'BZ' = 'BZ',
  'BJ' = 'BJ',
  'BM' = 'BM',
  'BT' = 'BT',
  'BO' = 'BO',
  'BQ' = 'BQ',
  'BA' = 'BA',
  'BW' = 'BW',
  'BV' = 'BV',
  'BR' = 'BR',
  'IO' = 'IO',
  'BN' = 'BN',
  'BG' = 'BG',
  'BF' = 'BF',
  'BI' = 'BI',
  'KH' = 'KH',
  'CM' = 'CM',
  'CA' = 'CA',
  'CV' = 'CV',
  'KY' = 'KY',
  'CF' = 'CF',
  'TD' = 'TD',
  'CL' = 'CL',
  'CN' = 'CN',
  'CX' = 'CX',
  'CC' = 'CC',
  'CO' = 'CO',
  'KM' = 'KM',
  'CG' = 'CG',
  'CD' = 'CD',
  'CK' = 'CK',
  'CR' = 'CR',
  'CI' = 'CI',
  'HR' = 'HR',
  'CU' = 'CU',
  'CW' = 'CW',
  'CY' = 'CY',
  'CZ' = 'CZ',
  'DK' = 'DK',
  'DJ' = 'DJ',
  'DM' = 'DM',
  'DO' = 'DO',
  'EC' = 'EC',
  'EG' = 'EG',
  'SV' = 'SV',
  'GQ' = 'GQ',
  'ER' = 'ER',
  'EE' = 'EE',
  'ET' = 'ET',
  'FK' = 'FK',
  'FO' = 'FO',
  'FJ' = 'FJ',
  'FI' = 'FI',
  'FR' = 'FR',
  'GF' = 'GF',
  'PF' = 'PF',
  'TF' = 'TF',
  'GA' = 'GA',
  'GM' = 'GM',
  'GE' = 'GE',
  'DE' = 'DE',
  'GH' = 'GH',
  'GI' = 'GI',
  'GR' = 'GR',
  'GL' = 'GL',
  'GD' = 'GD',
  'GP' = 'GP',
  'GU' = 'GU',
  'GT' = 'GT',
  'GG' = 'GG',
  'GN' = 'GN',
  'GW' = 'GW',
  'GY' = 'GY',
  'HT' = 'HT',
  'HM' = 'HM',
  'VA' = 'VA',
  'HN' = 'HN',
  'HK' = 'HK',
  'HU' = 'HU',
  'IS' = 'IS',
  'IN' = 'IN',
  'ID' = 'ID',
  'IR' = 'IR',
  'IQ' = 'IQ',
  'IE' = 'IE',
  'IM' = 'IM',
  'IL' = 'IL',
  'IT' = 'IT',
  'JM' = 'JM',
  'JP' = 'JP',
  'JE' = 'JE',
  'JO' = 'JO',
  'KZ' = 'KZ',
  'KE' = 'KE',
  'KI' = 'KI',
  'KP' = 'KP',
  'KR' = 'KR',
  'KW' = 'KW',
  'KG' = 'KG',
  'LA' = 'LA',
  'LV' = 'LV',
  'LB' = 'LB',
  'LS' = 'LS',
  'LR' = 'LR',
  'LY' = 'LY',
  'LI' = 'LI',
  'LT' = 'LT',
  'LU' = 'LU',
  'MO' = 'MO',
  'MK' = 'MK',
  'MG' = 'MG',
  'MW' = 'MW',
  'MY' = 'MY',
  'MV' = 'MV',
  'ML' = 'ML',
  'MT' = 'MT',
  'MH' = 'MH',
  'MQ' = 'MQ',
  'MR' = 'MR',
  'MU' = 'MU',
  'YT' = 'YT',
  'MX' = 'MX',
  'FM' = 'FM',
  'MD' = 'MD',
  'MC' = 'MC',
  'MN' = 'MN',
  'ME' = 'ME',
  'MS' = 'MS',
  'MA' = 'MA',
  'MZ' = 'MZ',
  'MM' = 'MM',
  'NA' = 'NA',
  'NR' = 'NR',
  'NP' = 'NP',
  'NL' = 'NL',
  'NC' = 'NC',
  'NZ' = 'NZ',
  'NI' = 'NI',
  'NE' = 'NE',
  'NG' = 'NG',
  'NU' = 'NU',
  'NF' = 'NF',
  'MP' = 'MP',
  'NO' = 'NO',
  'OM' = 'OM',
  'PK' = 'PK',
  'PW' = 'PW',
  'PS' = 'PS',
  'PA' = 'PA',
  'PG' = 'PG',
  'PY' = 'PY',
  'PE' = 'PE',
  'PH' = 'PH',
  'PN' = 'PN',
  'PL' = 'PL',
  'PT' = 'PT',
  'PR' = 'PR',
  'QA' = 'QA',
  'RE' = 'RE',
  'RO' = 'RO',
  'RU' = 'RU',
  'RW' = 'RW',
  'BL' = 'BL',
  'SH' = 'SH',
  'KN' = 'KN',
  'LC' = 'LC',
  'MF' = 'MF',
  'PM' = 'PM',
  'VC' = 'VC',
  'WS' = 'WS',
  'SM' = 'SM',
  'ST' = 'ST',
  'SA' = 'SA',
  'SN' = 'SN',
  'RS' = 'RS',
  'SC' = 'SC',
  'SL' = 'SL',
  'SG' = 'SG',
  'SX' = 'SX',
  'SK' = 'SK',
  'SI' = 'SI',
  'SB' = 'SB',
  'SO' = 'SO',
  'ZA' = 'ZA',
  'GS' = 'GS',
  'SS' = 'SS',
  'ES' = 'ES',
  'LK' = 'LK',
  'SD' = 'SD',
  'SR' = 'SR',
  'SJ' = 'SJ',
  'SZ' = 'SZ',
  'SE' = 'SE',
  'CH' = 'CH',
  'SY' = 'SY',
  'TJ' = 'TJ',
  'TZ' = 'TZ',
  'TH' = 'TH',
  'TL' = 'TL',
  'TG' = 'TG',
  'TK' = 'TK',
  'TO' = 'TO',
  'TT' = 'TT',
  'TN' = 'TN',
  'TR' = 'TR',
  'TM' = 'TM',
  'TC' = 'TC',
  'TV' = 'TV',
  'UG' = 'UG',
  'UA' = 'UA',
  'AE' = 'AE',
  'GB' = 'GB',
  'US' = 'US',
  'UM' = 'UM',
  'UY' = 'UY',
  'UZ' = 'UZ',
  'VU' = 'VU',
  'VE' = 'VE',
  'VN' = 'VN',
  'VG' = 'VG',
  'VI' = 'VI',
  'WF' = 'WF',
  'EH' = 'EH',
  'YE' = 'YE',
  'ZM' = 'ZM',
  'ZW' = 'ZW',
  'TW' = 'TW',
  'XK' = 'XK'
}
export enum EnumPeerReviewSummaryV3_0_rc2ReviewerRole {
  'REVIEWER' = 'REVIEWER',
  'EDITOR' = 'EDITOR',
  'MEMBER' = 'MEMBER',
  'CHAIR' = 'CHAIR',
  'ORGANIZER' = 'ORGANIZER'
}
export enum EnumPeerReviewSummaryV3_0_rc2ReviewType {
  'REVIEW' = 'REVIEW',
  'EVALUATION' = 'EVALUATION'
}
export enum EnumPeerReviewSummaryV3_0_rc2Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumQualificationSummaryV3_0_rc2Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumResearchResourceSummaryV3_0_rc2Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumServiceSummaryV3_0_rc2Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumTranslatedTitleV3_0_rc2LanguageCode {
  'ab' = 'ab',
  'aa' = 'aa',
  'af' = 'af',
  'ak' = 'ak',
  'sq' = 'sq',
  'am' = 'am',
  'ar' = 'ar',
  'an' = 'an',
  'hy' = 'hy',
  'as' = 'as',
  'av' = 'av',
  'ae' = 'ae',
  'ay' = 'ay',
  'az' = 'az',
  'bm' = 'bm',
  'ba' = 'ba',
  'eu' = 'eu',
  'be' = 'be',
  'bn' = 'bn',
  'bh' = 'bh',
  'bi' = 'bi',
  'bs' = 'bs',
  'br' = 'br',
  'bg' = 'bg',
  'my' = 'my',
  'ca' = 'ca',
  'ch' = 'ch',
  'ce' = 'ce',
  'zh_CN' = 'zh_CN',
  'zh_TW' = 'zh_TW',
  'cu' = 'cu',
  'cv' = 'cv',
  'kw' = 'kw',
  'co' = 'co',
  'cr' = 'cr',
  'hr' = 'hr',
  'cs' = 'cs',
  'da' = 'da',
  'dv' = 'dv',
  'nl' = 'nl',
  'dz' = 'dz',
  'en' = 'en',
  'eo' = 'eo',
  'et' = 'et',
  'ee' = 'ee',
  'fo' = 'fo',
  'fj' = 'fj',
  'fi' = 'fi',
  'fr' = 'fr',
  'fy' = 'fy',
  'ff' = 'ff',
  'gl' = 'gl',
  'lg' = 'lg',
  'ka' = 'ka',
  'de' = 'de',
  'el' = 'el',
  'kl' = 'kl',
  'gn' = 'gn',
  'gu' = 'gu',
  'ht' = 'ht',
  'ha' = 'ha',
  'iw' = 'iw',
  'hz' = 'hz',
  'hi' = 'hi',
  'ho' = 'ho',
  'hu' = 'hu',
  'is' = 'is',
  'io' = 'io',
  'ig' = 'ig',
  'in' = 'in',
  'ia' = 'ia',
  'ie' = 'ie',
  'iu' = 'iu',
  'ik' = 'ik',
  'ga' = 'ga',
  'it' = 'it',
  'ja' = 'ja',
  'jv' = 'jv',
  'kn' = 'kn',
  'kr' = 'kr',
  'ks' = 'ks',
  'kk' = 'kk',
  'km' = 'km',
  'ki' = 'ki',
  'rw' = 'rw',
  'ky' = 'ky',
  'kv' = 'kv',
  'kg' = 'kg',
  'ko' = 'ko',
  'ku' = 'ku',
  'kj' = 'kj',
  'lo' = 'lo',
  'la' = 'la',
  'lv' = 'lv',
  'li' = 'li',
  'ln' = 'ln',
  'lt' = 'lt',
  'lu' = 'lu',
  'lb' = 'lb',
  'mk' = 'mk',
  'mg' = 'mg',
  'ms' = 'ms',
  'ml' = 'ml',
  'mt' = 'mt',
  'gv' = 'gv',
  'mi' = 'mi',
  'mr' = 'mr',
  'mh' = 'mh',
  'mo' = 'mo',
  'mn' = 'mn',
  'na' = 'na',
  'nv' = 'nv',
  'ng' = 'ng',
  'ne' = 'ne',
  'nd' = 'nd',
  'se' = 'se',
  'no' = 'no',
  'nb' = 'nb',
  'nn' = 'nn',
  'ny' = 'ny',
  'oc' = 'oc',
  'oj' = 'oj',
  'or' = 'or',
  'om' = 'om',
  'os' = 'os',
  'pi' = 'pi',
  'pa' = 'pa',
  'fa' = 'fa',
  'pl' = 'pl',
  'pt' = 'pt',
  'ps' = 'ps',
  'qu' = 'qu',
  'rm' = 'rm',
  'ro' = 'ro',
  'rn' = 'rn',
  'ru' = 'ru',
  'sm' = 'sm',
  'sg' = 'sg',
  'sa' = 'sa',
  'sc' = 'sc',
  'gd' = 'gd',
  'sr' = 'sr',
  'sn' = 'sn',
  'ii' = 'ii',
  'sd' = 'sd',
  'si' = 'si',
  'sk' = 'sk',
  'sl' = 'sl',
  'so' = 'so',
  'nr' = 'nr',
  'st' = 'st',
  'es' = 'es',
  'su' = 'su',
  'sw' = 'sw',
  'ss' = 'ss',
  'sv' = 'sv',
  'tl' = 'tl',
  'ty' = 'ty',
  'tg' = 'tg',
  'ta' = 'ta',
  'tt' = 'tt',
  'te' = 'te',
  'th' = 'th',
  'bo' = 'bo',
  'ti' = 'ti',
  'to' = 'to',
  'ts' = 'ts',
  'tn' = 'tn',
  'tr' = 'tr',
  'tk' = 'tk',
  'tw' = 'tw',
  'ug' = 'ug',
  'uk' = 'uk',
  'ur' = 'ur',
  'uz' = 'uz',
  've' = 've',
  'vi' = 'vi',
  'vo' = 'vo',
  'wa' = 'wa',
  'cy' = 'cy',
  'wo' = 'wo',
  'xh' = 'xh',
  'ji' = 'ji',
  'yo' = 'yo',
  'za' = 'za',
  'zu' = 'zu'
}
export enum EnumWorkSummaryV3_0_rc2Type {
  'ANNOTATION' = 'ANNOTATION',
  'ARTISTIC_PERFORMANCE' = 'ARTISTIC_PERFORMANCE',
  'BOOK_CHAPTER' = 'BOOK_CHAPTER',
  'BOOK_REVIEW' = 'BOOK_REVIEW',
  'BOOK' = 'BOOK',
  'CONFERENCE_ABSTRACT' = 'CONFERENCE_ABSTRACT',
  'CONFERENCE_PAPER' = 'CONFERENCE_PAPER',
  'CONFERENCE_POSTER' = 'CONFERENCE_POSTER',
  'DATA_MANAGEMENT_PLAN' = 'DATA_MANAGEMENT_PLAN',
  'DATA_SET' = 'DATA_SET',
  'DICTIONARY_ENTRY' = 'DICTIONARY_ENTRY',
  'DISCLOSURE' = 'DISCLOSURE',
  'DISSERTATION_THESIS' = 'DISSERTATION_THESIS',
  'EDITED_BOOK' = 'EDITED_BOOK',
  'ENCYCLOPEDIA_ENTRY' = 'ENCYCLOPEDIA_ENTRY',
  'INVENTION' = 'INVENTION',
  'JOURNAL_ARTICLE' = 'JOURNAL_ARTICLE',
  'JOURNAL_ISSUE' = 'JOURNAL_ISSUE',
  'LECTURE_SPEECH' = 'LECTURE_SPEECH',
  'LICENSE' = 'LICENSE',
  'MAGAZINE_ARTICLE' = 'MAGAZINE_ARTICLE',
  'MANUAL' = 'MANUAL',
  'NEWSLETTER_ARTICLE' = 'NEWSLETTER_ARTICLE',
  'NEWSPAPER_ARTICLE' = 'NEWSPAPER_ARTICLE',
  'ONLINE_RESOURCE' = 'ONLINE_RESOURCE',
  'OTHER' = 'OTHER',
  'PATENT' = 'PATENT',
  'PHYSICAL_OBJECT' = 'PHYSICAL_OBJECT',
  'PREPRINT' = 'PREPRINT',
  'REGISTERED_COPYRIGHT' = 'REGISTERED_COPYRIGHT',
  'REVIEW' = 'REVIEW',
  'REPORT' = 'REPORT',
  'RESEARCH_TECHNIQUE' = 'RESEARCH_TECHNIQUE',
  'RESEARCH_TOOL' = 'RESEARCH_TOOL',
  'SOFTWARE' = 'SOFTWARE',
  'SPIN_OFF_COMPANY' = 'SPIN_OFF_COMPANY',
  'STANDARDS_AND_POLICY' = 'STANDARDS_AND_POLICY',
  'SUPERVISED_STUDENT_PUBLICATION' = 'SUPERVISED_STUDENT_PUBLICATION',
  'TECHNICAL_STANDARD' = 'TECHNICAL_STANDARD',
  'TEST' = 'TEST',
  'TRADEMARK' = 'TRADEMARK',
  'TRANSLATION' = 'TRANSLATION',
  'WEBSITE' = 'WEBSITE',
  'WORKING_PAPER' = 'WORKING_PAPER',
  'UNDEFINED' = 'UNDEFINED'
}
export enum EnumWorkSummaryV3_0_rc2Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumContributorAttributesV3_0_rc2ContributorSequence {
  'FIRST' = 'FIRST',
  'ADDITIONAL' = 'ADDITIONAL'
}
export enum EnumContributorAttributesV3_0_rc2ContributorRole {
  'AUTHOR' = 'AUTHOR',
  'ASSIGNEE' = 'ASSIGNEE',
  'EDITOR' = 'EDITOR',
  'CHAIR_OR_TRANSLATOR' = 'CHAIR_OR_TRANSLATOR',
  'CO_INVESTIGATOR' = 'CO_INVESTIGATOR',
  'CO_INVENTOR' = 'CO_INVENTOR',
  'GRADUATE_STUDENT' = 'GRADUATE_STUDENT',
  'OTHER_INVENTOR' = 'OTHER_INVENTOR',
  'PRINCIPAL_INVESTIGATOR' = 'PRINCIPAL_INVESTIGATOR',
  'POSTDOCTORAL_RESEARCHER' = 'POSTDOCTORAL_RESEARCHER',
  'SUPPORT_STAFF' = 'SUPPORT_STAFF'
}
export enum EnumCountryV3_0_rc2Value {
  'AF' = 'AF',
  'AX' = 'AX',
  'AL' = 'AL',
  'DZ' = 'DZ',
  'AS' = 'AS',
  'AD' = 'AD',
  'AO' = 'AO',
  'AI' = 'AI',
  'AQ' = 'AQ',
  'AG' = 'AG',
  'AR' = 'AR',
  'AM' = 'AM',
  'AW' = 'AW',
  'AU' = 'AU',
  'AT' = 'AT',
  'AZ' = 'AZ',
  'BS' = 'BS',
  'BH' = 'BH',
  'BD' = 'BD',
  'BB' = 'BB',
  'BY' = 'BY',
  'BE' = 'BE',
  'BZ' = 'BZ',
  'BJ' = 'BJ',
  'BM' = 'BM',
  'BT' = 'BT',
  'BO' = 'BO',
  'BQ' = 'BQ',
  'BA' = 'BA',
  'BW' = 'BW',
  'BV' = 'BV',
  'BR' = 'BR',
  'IO' = 'IO',
  'BN' = 'BN',
  'BG' = 'BG',
  'BF' = 'BF',
  'BI' = 'BI',
  'KH' = 'KH',
  'CM' = 'CM',
  'CA' = 'CA',
  'CV' = 'CV',
  'KY' = 'KY',
  'CF' = 'CF',
  'TD' = 'TD',
  'CL' = 'CL',
  'CN' = 'CN',
  'CX' = 'CX',
  'CC' = 'CC',
  'CO' = 'CO',
  'KM' = 'KM',
  'CG' = 'CG',
  'CD' = 'CD',
  'CK' = 'CK',
  'CR' = 'CR',
  'CI' = 'CI',
  'HR' = 'HR',
  'CU' = 'CU',
  'CW' = 'CW',
  'CY' = 'CY',
  'CZ' = 'CZ',
  'DK' = 'DK',
  'DJ' = 'DJ',
  'DM' = 'DM',
  'DO' = 'DO',
  'EC' = 'EC',
  'EG' = 'EG',
  'SV' = 'SV',
  'GQ' = 'GQ',
  'ER' = 'ER',
  'EE' = 'EE',
  'ET' = 'ET',
  'FK' = 'FK',
  'FO' = 'FO',
  'FJ' = 'FJ',
  'FI' = 'FI',
  'FR' = 'FR',
  'GF' = 'GF',
  'PF' = 'PF',
  'TF' = 'TF',
  'GA' = 'GA',
  'GM' = 'GM',
  'GE' = 'GE',
  'DE' = 'DE',
  'GH' = 'GH',
  'GI' = 'GI',
  'GR' = 'GR',
  'GL' = 'GL',
  'GD' = 'GD',
  'GP' = 'GP',
  'GU' = 'GU',
  'GT' = 'GT',
  'GG' = 'GG',
  'GN' = 'GN',
  'GW' = 'GW',
  'GY' = 'GY',
  'HT' = 'HT',
  'HM' = 'HM',
  'VA' = 'VA',
  'HN' = 'HN',
  'HK' = 'HK',
  'HU' = 'HU',
  'IS' = 'IS',
  'IN' = 'IN',
  'ID' = 'ID',
  'IR' = 'IR',
  'IQ' = 'IQ',
  'IE' = 'IE',
  'IM' = 'IM',
  'IL' = 'IL',
  'IT' = 'IT',
  'JM' = 'JM',
  'JP' = 'JP',
  'JE' = 'JE',
  'JO' = 'JO',
  'KZ' = 'KZ',
  'KE' = 'KE',
  'KI' = 'KI',
  'KP' = 'KP',
  'KR' = 'KR',
  'KW' = 'KW',
  'KG' = 'KG',
  'LA' = 'LA',
  'LV' = 'LV',
  'LB' = 'LB',
  'LS' = 'LS',
  'LR' = 'LR',
  'LY' = 'LY',
  'LI' = 'LI',
  'LT' = 'LT',
  'LU' = 'LU',
  'MO' = 'MO',
  'MK' = 'MK',
  'MG' = 'MG',
  'MW' = 'MW',
  'MY' = 'MY',
  'MV' = 'MV',
  'ML' = 'ML',
  'MT' = 'MT',
  'MH' = 'MH',
  'MQ' = 'MQ',
  'MR' = 'MR',
  'MU' = 'MU',
  'YT' = 'YT',
  'MX' = 'MX',
  'FM' = 'FM',
  'MD' = 'MD',
  'MC' = 'MC',
  'MN' = 'MN',
  'ME' = 'ME',
  'MS' = 'MS',
  'MA' = 'MA',
  'MZ' = 'MZ',
  'MM' = 'MM',
  'NA' = 'NA',
  'NR' = 'NR',
  'NP' = 'NP',
  'NL' = 'NL',
  'NC' = 'NC',
  'NZ' = 'NZ',
  'NI' = 'NI',
  'NE' = 'NE',
  'NG' = 'NG',
  'NU' = 'NU',
  'NF' = 'NF',
  'MP' = 'MP',
  'NO' = 'NO',
  'OM' = 'OM',
  'PK' = 'PK',
  'PW' = 'PW',
  'PS' = 'PS',
  'PA' = 'PA',
  'PG' = 'PG',
  'PY' = 'PY',
  'PE' = 'PE',
  'PH' = 'PH',
  'PN' = 'PN',
  'PL' = 'PL',
  'PT' = 'PT',
  'PR' = 'PR',
  'QA' = 'QA',
  'RE' = 'RE',
  'RO' = 'RO',
  'RU' = 'RU',
  'RW' = 'RW',
  'BL' = 'BL',
  'SH' = 'SH',
  'KN' = 'KN',
  'LC' = 'LC',
  'MF' = 'MF',
  'PM' = 'PM',
  'VC' = 'VC',
  'WS' = 'WS',
  'SM' = 'SM',
  'ST' = 'ST',
  'SA' = 'SA',
  'SN' = 'SN',
  'RS' = 'RS',
  'SC' = 'SC',
  'SL' = 'SL',
  'SG' = 'SG',
  'SX' = 'SX',
  'SK' = 'SK',
  'SI' = 'SI',
  'SB' = 'SB',
  'SO' = 'SO',
  'ZA' = 'ZA',
  'GS' = 'GS',
  'SS' = 'SS',
  'ES' = 'ES',
  'LK' = 'LK',
  'SD' = 'SD',
  'SR' = 'SR',
  'SJ' = 'SJ',
  'SZ' = 'SZ',
  'SE' = 'SE',
  'CH' = 'CH',
  'SY' = 'SY',
  'TJ' = 'TJ',
  'TZ' = 'TZ',
  'TH' = 'TH',
  'TL' = 'TL',
  'TG' = 'TG',
  'TK' = 'TK',
  'TO' = 'TO',
  'TT' = 'TT',
  'TN' = 'TN',
  'TR' = 'TR',
  'TM' = 'TM',
  'TC' = 'TC',
  'TV' = 'TV',
  'UG' = 'UG',
  'UA' = 'UA',
  'AE' = 'AE',
  'GB' = 'GB',
  'US' = 'US',
  'UM' = 'UM',
  'UY' = 'UY',
  'UZ' = 'UZ',
  'VU' = 'VU',
  'VE' = 'VE',
  'VN' = 'VN',
  'VG' = 'VG',
  'VI' = 'VI',
  'WF' = 'WF',
  'EH' = 'EH',
  'YE' = 'YE',
  'ZM' = 'ZM',
  'ZW' = 'ZW',
  'TW' = 'TW',
  'XK' = 'XK'
}
export enum EnumWorkV3_0_rc2Type {
  'ANNOTATION' = 'ANNOTATION',
  'ARTISTIC_PERFORMANCE' = 'ARTISTIC_PERFORMANCE',
  'BOOK_CHAPTER' = 'BOOK_CHAPTER',
  'BOOK_REVIEW' = 'BOOK_REVIEW',
  'BOOK' = 'BOOK',
  'CONFERENCE_ABSTRACT' = 'CONFERENCE_ABSTRACT',
  'CONFERENCE_PAPER' = 'CONFERENCE_PAPER',
  'CONFERENCE_POSTER' = 'CONFERENCE_POSTER',
  'DATA_MANAGEMENT_PLAN' = 'DATA_MANAGEMENT_PLAN',
  'DATA_SET' = 'DATA_SET',
  'DICTIONARY_ENTRY' = 'DICTIONARY_ENTRY',
  'DISCLOSURE' = 'DISCLOSURE',
  'DISSERTATION_THESIS' = 'DISSERTATION_THESIS',
  'EDITED_BOOK' = 'EDITED_BOOK',
  'ENCYCLOPEDIA_ENTRY' = 'ENCYCLOPEDIA_ENTRY',
  'INVENTION' = 'INVENTION',
  'JOURNAL_ARTICLE' = 'JOURNAL_ARTICLE',
  'JOURNAL_ISSUE' = 'JOURNAL_ISSUE',
  'LECTURE_SPEECH' = 'LECTURE_SPEECH',
  'LICENSE' = 'LICENSE',
  'MAGAZINE_ARTICLE' = 'MAGAZINE_ARTICLE',
  'MANUAL' = 'MANUAL',
  'NEWSLETTER_ARTICLE' = 'NEWSLETTER_ARTICLE',
  'NEWSPAPER_ARTICLE' = 'NEWSPAPER_ARTICLE',
  'ONLINE_RESOURCE' = 'ONLINE_RESOURCE',
  'OTHER' = 'OTHER',
  'PATENT' = 'PATENT',
  'PHYSICAL_OBJECT' = 'PHYSICAL_OBJECT',
  'PREPRINT' = 'PREPRINT',
  'REGISTERED_COPYRIGHT' = 'REGISTERED_COPYRIGHT',
  'REVIEW' = 'REVIEW',
  'REPORT' = 'REPORT',
  'RESEARCH_TECHNIQUE' = 'RESEARCH_TECHNIQUE',
  'RESEARCH_TOOL' = 'RESEARCH_TOOL',
  'SOFTWARE' = 'SOFTWARE',
  'SPIN_OFF_COMPANY' = 'SPIN_OFF_COMPANY',
  'STANDARDS_AND_POLICY' = 'STANDARDS_AND_POLICY',
  'SUPERVISED_STUDENT_PUBLICATION' = 'SUPERVISED_STUDENT_PUBLICATION',
  'TECHNICAL_STANDARD' = 'TECHNICAL_STANDARD',
  'TEST' = 'TEST',
  'TRADEMARK' = 'TRADEMARK',
  'TRANSLATION' = 'TRANSLATION',
  'WEBSITE' = 'WEBSITE',
  'WORKING_PAPER' = 'WORKING_PAPER',
  'UNDEFINED' = 'UNDEFINED'
}
export enum EnumWorkV3_0_rc2LanguageCode {
  'ab' = 'ab',
  'aa' = 'aa',
  'af' = 'af',
  'ak' = 'ak',
  'sq' = 'sq',
  'am' = 'am',
  'ar' = 'ar',
  'an' = 'an',
  'hy' = 'hy',
  'as' = 'as',
  'av' = 'av',
  'ae' = 'ae',
  'ay' = 'ay',
  'az' = 'az',
  'bm' = 'bm',
  'ba' = 'ba',
  'eu' = 'eu',
  'be' = 'be',
  'bn' = 'bn',
  'bh' = 'bh',
  'bi' = 'bi',
  'bs' = 'bs',
  'br' = 'br',
  'bg' = 'bg',
  'my' = 'my',
  'ca' = 'ca',
  'ch' = 'ch',
  'ce' = 'ce',
  'zh_CN' = 'zh_CN',
  'zh_TW' = 'zh_TW',
  'cu' = 'cu',
  'cv' = 'cv',
  'kw' = 'kw',
  'co' = 'co',
  'cr' = 'cr',
  'hr' = 'hr',
  'cs' = 'cs',
  'da' = 'da',
  'dv' = 'dv',
  'nl' = 'nl',
  'dz' = 'dz',
  'en' = 'en',
  'eo' = 'eo',
  'et' = 'et',
  'ee' = 'ee',
  'fo' = 'fo',
  'fj' = 'fj',
  'fi' = 'fi',
  'fr' = 'fr',
  'fy' = 'fy',
  'ff' = 'ff',
  'gl' = 'gl',
  'lg' = 'lg',
  'ka' = 'ka',
  'de' = 'de',
  'el' = 'el',
  'kl' = 'kl',
  'gn' = 'gn',
  'gu' = 'gu',
  'ht' = 'ht',
  'ha' = 'ha',
  'iw' = 'iw',
  'hz' = 'hz',
  'hi' = 'hi',
  'ho' = 'ho',
  'hu' = 'hu',
  'is' = 'is',
  'io' = 'io',
  'ig' = 'ig',
  'in' = 'in',
  'ia' = 'ia',
  'ie' = 'ie',
  'iu' = 'iu',
  'ik' = 'ik',
  'ga' = 'ga',
  'it' = 'it',
  'ja' = 'ja',
  'jv' = 'jv',
  'kn' = 'kn',
  'kr' = 'kr',
  'ks' = 'ks',
  'kk' = 'kk',
  'km' = 'km',
  'ki' = 'ki',
  'rw' = 'rw',
  'ky' = 'ky',
  'kv' = 'kv',
  'kg' = 'kg',
  'ko' = 'ko',
  'ku' = 'ku',
  'kj' = 'kj',
  'lo' = 'lo',
  'la' = 'la',
  'lv' = 'lv',
  'li' = 'li',
  'ln' = 'ln',
  'lt' = 'lt',
  'lu' = 'lu',
  'lb' = 'lb',
  'mk' = 'mk',
  'mg' = 'mg',
  'ms' = 'ms',
  'ml' = 'ml',
  'mt' = 'mt',
  'gv' = 'gv',
  'mi' = 'mi',
  'mr' = 'mr',
  'mh' = 'mh',
  'mo' = 'mo',
  'mn' = 'mn',
  'na' = 'na',
  'nv' = 'nv',
  'ng' = 'ng',
  'ne' = 'ne',
  'nd' = 'nd',
  'se' = 'se',
  'no' = 'no',
  'nb' = 'nb',
  'nn' = 'nn',
  'ny' = 'ny',
  'oc' = 'oc',
  'oj' = 'oj',
  'or' = 'or',
  'om' = 'om',
  'os' = 'os',
  'pi' = 'pi',
  'pa' = 'pa',
  'fa' = 'fa',
  'pl' = 'pl',
  'pt' = 'pt',
  'ps' = 'ps',
  'qu' = 'qu',
  'rm' = 'rm',
  'ro' = 'ro',
  'rn' = 'rn',
  'ru' = 'ru',
  'sm' = 'sm',
  'sg' = 'sg',
  'sa' = 'sa',
  'sc' = 'sc',
  'gd' = 'gd',
  'sr' = 'sr',
  'sn' = 'sn',
  'ii' = 'ii',
  'sd' = 'sd',
  'si' = 'si',
  'sk' = 'sk',
  'sl' = 'sl',
  'so' = 'so',
  'nr' = 'nr',
  'st' = 'st',
  'es' = 'es',
  'su' = 'su',
  'sw' = 'sw',
  'ss' = 'ss',
  'sv' = 'sv',
  'tl' = 'tl',
  'ty' = 'ty',
  'tg' = 'tg',
  'ta' = 'ta',
  'tt' = 'tt',
  'te' = 'te',
  'th' = 'th',
  'bo' = 'bo',
  'ti' = 'ti',
  'to' = 'to',
  'ts' = 'ts',
  'tn' = 'tn',
  'tr' = 'tr',
  'tk' = 'tk',
  'tw' = 'tw',
  'ug' = 'ug',
  'uk' = 'uk',
  'ur' = 'ur',
  'uz' = 'uz',
  've' = 've',
  'vi' = 'vi',
  'vo' = 'vo',
  'wa' = 'wa',
  'cy' = 'cy',
  'wo' = 'wo',
  'xh' = 'xh',
  'ji' = 'ji',
  'yo' = 'yo',
  'za' = 'za',
  'zu' = 'zu'
}
export enum EnumWorkV3_0_rc2Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumFundingContributorAttributesV3_0_rc2ContributorRole {
  'LEAD' = 'LEAD',
  'CO_LEAD' = 'CO_LEAD',
  'SUPPORTED_BY' = 'SUPPORTED_BY',
  'OTHER_CONTRIBUTION' = 'OTHER_CONTRIBUTION'
}
export enum EnumFundingV3_0_rc2Type {
  'GRANT' = 'GRANT',
  'CONTRACT' = 'CONTRACT',
  'AWARD' = 'AWARD',
  'SALARY_AWARD' = 'SALARY_AWARD'
}
export enum EnumFundingV3_0_rc2Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumEducationV3_0_rc2Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumEmploymentV3_0_rc2Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumPeerReviewV3_0_rc2ReviewerRole {
  'REVIEWER' = 'REVIEWER',
  'EDITOR' = 'EDITOR',
  'MEMBER' = 'MEMBER',
  'CHAIR' = 'CHAIR',
  'ORGANIZER' = 'ORGANIZER'
}
export enum EnumPeerReviewV3_0_rc2ReviewType {
  'REVIEW' = 'REVIEW',
  'EVALUATION' = 'EVALUATION'
}
export enum EnumPeerReviewV3_0_rc2SubjectType {
  'ARTISTIC_PERFORMANCE' = 'ARTISTIC_PERFORMANCE',
  'BOOK_CHAPTER' = 'BOOK_CHAPTER',
  'BOOK_REVIEW' = 'BOOK_REVIEW',
  'BOOK' = 'BOOK',
  'CONFERENCE_ABSTRACT' = 'CONFERENCE_ABSTRACT',
  'CONFERENCE_PAPER' = 'CONFERENCE_PAPER',
  'CONFERENCE_POSTER' = 'CONFERENCE_POSTER',
  'DATA_SET' = 'DATA_SET',
  'DICTIONARY_ENTRY' = 'DICTIONARY_ENTRY',
  'DISCLOSURE' = 'DISCLOSURE',
  'DISSERTATION_THESIS' = 'DISSERTATION_THESIS',
  'EDITED_BOOK' = 'EDITED_BOOK',
  'ENCYCLOPEDIA_ENTRY' = 'ENCYCLOPEDIA_ENTRY',
  'INVENTION' = 'INVENTION',
  'JOURNAL_ARTICLE' = 'JOURNAL_ARTICLE',
  'JOURNAL_ISSUE' = 'JOURNAL_ISSUE',
  'LECTURE_SPEECH' = 'LECTURE_SPEECH',
  'LICENSE' = 'LICENSE',
  'MAGAZINE_ARTICLE' = 'MAGAZINE_ARTICLE',
  'MANUAL' = 'MANUAL',
  'NEWSLETTER_ARTICLE' = 'NEWSLETTER_ARTICLE',
  'NEWSPAPER_ARTICLE' = 'NEWSPAPER_ARTICLE',
  'ONLINE_RESOURCE' = 'ONLINE_RESOURCE',
  'OTHER' = 'OTHER',
  'PATENT' = 'PATENT',
  'REGISTERED_COPYRIGHT' = 'REGISTERED_COPYRIGHT',
  'REPORT' = 'REPORT',
  'RESEARCH_TECHNIQUE' = 'RESEARCH_TECHNIQUE',
  'RESEARCH_TOOL' = 'RESEARCH_TOOL',
  'SOFTWARE' = 'SOFTWARE',
  'SPIN_OFF_COMPANY' = 'SPIN_OFF_COMPANY',
  'STANDARDS_AND_POLICY' = 'STANDARDS_AND_POLICY',
  'SUPERVISED_STUDENT_PUBLICATION' = 'SUPERVISED_STUDENT_PUBLICATION',
  'TECHNICAL_STANDARD' = 'TECHNICAL_STANDARD',
  'TEST' = 'TEST',
  'TRADEMARK' = 'TRADEMARK',
  'TRANSLATION' = 'TRANSLATION',
  'WEBSITE' = 'WEBSITE',
  'WORKING_PAPER' = 'WORKING_PAPER',
  'GRANT' = 'GRANT',
  'CONTRACT' = 'CONTRACT',
  'AWARD' = 'AWARD',
  'SALARY_AWARD' = 'SALARY_AWARD',
  'RESEARCH_RESOURCE_PROPOSAL' = 'RESEARCH_RESOURCE_PROPOSAL',
  'UNDEFINED' = 'UNDEFINED'
}
export enum EnumPeerReviewV3_0_rc2Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumItemV3_0_rc2ItemType {
  'DISTINCTION' = 'DISTINCTION',
  'EDUCATION' = 'EDUCATION',
  'EMPLOYMENT' = 'EMPLOYMENT',
  'INVITED_POSITION' = 'INVITED_POSITION',
  'FUNDING' = 'FUNDING',
  'MEMBERSHIP' = 'MEMBERSHIP',
  'PEER_REVIEW' = 'PEER_REVIEW',
  'QUALIFICATION' = 'QUALIFICATION',
  'SERVICE' = 'SERVICE',
  'WORK' = 'WORK',
  'RESEARCH_RESOURCE' = 'RESEARCH_RESOURCE'
}
export enum EnumNotificationPermissionV3_0_rc2NotificationType {
  'CUSTOM' = 'CUSTOM',
  'INSTITUTIONAL_CONNECTION' = 'INSTITUTIONAL_CONNECTION',
  'PERMISSION' = 'PERMISSION',
  'AMENDED' = 'AMENDED',
  'SERVICE_ANNOUNCEMENT' = 'SERVICE_ANNOUNCEMENT',
  'ADMINISTRATIVE' = 'ADMINISTRATIVE',
  'TIP' = 'TIP',
  'FIND_MY_STUFF' = 'FIND_MY_STUFF'
}
export enum EnumResearcherUrlV3_0_rc2Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumOtherNameV3_0_rc2Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumBiographyV3_0_rc2Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumNameV3_0_rc2Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumPersonExternalIdentifierV3_0_rc2ExternalIdRelationship {
  'PART_OF' = 'PART_OF',
  'SELF' = 'SELF',
  'VERSION_OF' = 'VERSION_OF',
  'FUNDED_BY' = 'FUNDED_BY'
}
export enum EnumPersonExternalIdentifierV3_0_rc2Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumKeywordV3_0_rc2Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumAddressV3_0_rc2Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumEmailV3_0_rc2Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumHistoryV3_0_rc2CreationMethod {
  'API' = 'API',
  'DIRECT' = 'DIRECT',
  'MEMBER_REFERRED' = 'MEMBER_REFERRED',
  'WEBSITE' = 'WEBSITE',
  'INTEGRATION_TEST' = 'INTEGRATION_TEST'
}
export enum EnumPreferencesV3_0_rc2Locale {
  'AR' = 'AR',
  'CS' = 'CS',
  'DE' = 'DE',
  'EN' = 'EN',
  'ES' = 'ES',
  'FR' = 'FR',
  'IT' = 'IT',
  'JA' = 'JA',
  'KO' = 'KO',
  'PT' = 'PT',
  'RU' = 'RU',
  'ZH_CN' = 'ZH_CN',
  'ZH_TW' = 'ZH_TW',
  'XX' = 'XX'
}
export enum EnumDistinctionV3_0_rc2Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumInvitedPositionV3_0_rc2Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumMembershipV3_0_rc2Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumQualificationV3_0_rc2Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumServiceV3_0_rc2Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
export enum EnumResearchResourceItemV3_0_rc2ResourceType {
  'infrastructures' = 'infrastructures',
  'collections' = 'collections',
  'equipment' = 'equipment',
  'services' = 'services'
}
export enum EnumResearchResourceV3_0_rc2Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE'
}
