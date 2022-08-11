/** Generate by swagger-axios-codegen */
// @ts-nocheck
/* eslint-disable */

/** Generate by swagger-axios-codegen */
/* eslint-disable */
// @ts-nocheck
import axiosStatic, { AxiosInstance, AxiosRequestConfig } from 'axios'

export interface IRequestOptions extends AxiosRequestConfig {}

export interface IRequestConfig {
  method?: any
  headers?: any
  url?: any
  data?: any
  params?: any
}

// Add options interface
export interface ServiceOptions {
  axios?: AxiosInstance
}

// Add default options
export const serviceOptions: ServiceOptions = {}

// Instance selector
export function axios(
  configs: IRequestConfig,
  resolve: (p: any) => void,
  reject: (p: any) => void,
): Promise<any> {
  if (serviceOptions.axios) {
    return serviceOptions.axios
      .request(configs)
      .then((res) => {
        resolve(res.data)
      })
      .catch((err) => {
        reject(err)
      })
  } else {
    throw new Error('please inject yourself instance like axios  ')
  }
}

export function getConfigs(
  method: string,
  contentType: string,
  url: string,
  options: any,
): IRequestConfig {
  const configs: IRequestConfig = { ...options, method, url }
  configs.headers = {
    ...options.headers,
    'Content-Type': contentType,
  }
  return configs
}

export const basePath = ''

export interface IList<T> extends Array<T> {}
export interface List<T> extends Array<T> {}
export interface IDictionary<TValue> {
  [key: string]: TValue
}
export interface Dictionary<TValue> extends IDictionary<TValue> {}

export interface IListResult<T> {
  items?: T[]
}

export class ListResultDto<T> implements IListResult<T> {
  items?: T[]
}

export interface IPagedResult<T> extends IListResult<T> {
  totalCount?: number
  items?: T[]
}

export class PagedResultDto<T = any> implements IPagedResult<T> {
  totalCount?: number
  items?: T[]
}

// customer definition
// empty

export class DevelopmentMemberApiV30Service {
  /**
   *
   */
  static viewStatusJson(options: IRequestOptions = {}): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/apiStatus'

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch all activities
   */
  static viewActivities(
    params: {
      /**  */
      orcid: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<ActivitiesSummaryV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/activities'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch a Work
   */
  static viewWork(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<WorkV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/work/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Update a Work
   */
  static updateWork(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
      /**  */
      body?: WorkV3_0
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/work/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options)

      let data = params['body']

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Delete a Work
   */
  static deleteWork(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/work/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options)

      let data = null

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch all works
   */
  static viewWorks(
    params: {
      /**  */
      orcid: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<WorksSummaryV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/works'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Create a list of Works
   */
  static createWorks(
    params: {
      /**  */
      orcid: string
      /**  */
      body?: WorkBulkV3_0
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/works'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options)

      let data = params['body']

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch specified works
   */
  static viewSpecifiedWorks(
    params: {
      /**  */
      orcid: string
      /**  */
      putCodes: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<WorkBulkV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/works/{putCodes}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCodes}', params['putCodes'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch a Work Summary
   */
  static viewWorkSummary(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<WorkSummaryV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/work/summary/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Create a Work
   */
  static createWork(
    params: {
      /**  */
      orcid: string
      /**  */
      body?: WorkV3_0
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/work'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options)

      let data = params['body']

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch a Funding
   */
  static viewFunding(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<FundingV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/funding/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Update a Funding
   */
  static updateFunding(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
      /**  */
      body?: FundingV3_0
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/funding/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options)

      let data = params['body']

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Delete a Funding
   */
  static deleteFunding(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/funding/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options)

      let data = null

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch all fundings
   */
  static viewFundings(
    params: {
      /**  */
      orcid: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<FundingsV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/fundings'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch a Funding Summary
   */
  static viewFundingSummary(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<FundingSummaryV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/funding/summary/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Create a Funding
   */
  static createFunding(
    params: {
      /**  */
      orcid: string
      /**  */
      body?: FundingV3_0
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/funding'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options)

      let data = params['body']

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch an Education
   */
  static viewEducation(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<EducationV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/education/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Update an Education
   */
  static updateEducation(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
      /**  */
      body?: EducationV3_0
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/education/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options)

      let data = params['body']

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Delete an Education
   */
  static deleteEducation(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/education/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options)

      let data = null

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch all educations
   */
  static viewEducations(
    params: {
      /**  */
      orcid: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<EducationsSummaryV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/educations'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch an Education summary
   */
  static viewEducationSummary(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<EducationSummaryV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/education/summary/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Create an Education
   */
  static createEducation(
    params: {
      /**  */
      orcid: string
      /**  */
      body?: EducationV3_0
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/education'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options)

      let data = params['body']

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch an Employment
   */
  static viewEmployment(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<EmploymentV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/employment/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Update an Employment
   */
  static updateEmployment(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
      /**  */
      body?: EmploymentV3_0
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/employment/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options)

      let data = params['body']

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Delete an Employment
   */
  static deleteEmployment(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/employment/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options)

      let data = null

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch all employments
   */
  static viewEmployments(
    params: {
      /**  */
      orcid: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<EmploymentsSummaryV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/employments'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch an Employment Summary
   */
  static viewEmploymentSummary(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<EmploymentSummaryV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/employment/summary/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Create an Employment
   */
  static createEmployment(
    params: {
      /**  */
      orcid: string
      /**  */
      body?: EmploymentV3_0
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/employment'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options)

      let data = params['body']

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch a Peer Review
   */
  static viewPeerReview(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<PeerReviewV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/peer-review/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Update a Peer Review
   */
  static updatePeerReview(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
      /**  */
      body?: PeerReviewV3_0
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/peer-review/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options)

      let data = params['body']

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Delete a Peer Review
   */
  static deletePeerReview(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/peer-review/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options)

      let data = null

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch all peer reviews
   */
  static viewPeerReviews(
    params: {
      /**  */
      orcid: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<PeerReviewsV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/peer-reviews'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch a Peer Review Summary
   */
  static viewPeerReviewSummary(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<PeerReviewSummaryV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/peer-review/summary/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Create a Peer Review
   */
  static createPeerReview(
    params: {
      /**  */
      orcid: string
      /**  */
      body?: PeerReviewV3_0
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/peer-review'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options)

      let data = params['body']

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch a Group
   */
  static viewGroupIdRecord(
    params: {
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<GroupIdRecord> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/group-id-record/{putCode}'
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Update a Group
   */
  static updateGroupIdRecord(
    params: {
      /**  */
      putCode: string
      /**  */
      body?: GroupIdRecord
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/group-id-record/{putCode}'
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options)

      let data = params['body']

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Delete a Group
   */
  static deleteGroupIdRecord(
    params: {
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/group-id-record/{putCode}'
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options)

      let data = null

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch Groups
   */
  static viewGroupIdRecords(
    params: {
      /**  */
      pageSize?: string
      /**  */
      page?: string
      /**  */
      name?: string
      /**  */
      groupId?: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<GroupIdRecords> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/group-id-record'

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)
      configs.params = {
        'page-size': params['pageSize'],
        page: params['page'],
        name: params['name'],
        'group-id': params['groupId'],
      }

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Create a Group
   */
  static createGroupIdRecord(
    params: {
      /**  */
      body?: GroupIdRecord
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/group-id-record'

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options)

      let data = params['body']

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch a notification by id
   */
  static viewPermissionNotification(
    params: {
      /**  */
      orcid: string
      /**  */
      id: number
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<Notification> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/notification-permission/{id}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{id}', params['id'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Archive a notification
   */
  static flagAsArchivedPermissionNotification(
    params: {
      /**  */
      orcid: string
      /**  */
      id: number
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<Notification> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/notification-permission/{id}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{id}', params['id'] + '')

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options)

      let data = null

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Add a notification
   */
  static addPermissionNotification(
    params: {
      /**  */
      orcid: string
      /**  */
      body?: NotificationPermissionV3_0
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/notification-permission'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options)

      let data = params['body']

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch all researcher urls for an ORCID ID
   */
  static viewResearcherUrls(
    params: {
      /**  */
      orcid: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/researcher-urls'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Add a new researcher url for an ORCID ID
   */
  static createResearcherUrl(
    params: {
      /**  */
      orcid: string
      /**  */
      body?: ResearcherUrlV3_0
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/researcher-urls'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options)

      let data = params['body']

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch one researcher url for an ORCID ID
   */
  static viewResearcherUrl(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/researcher-urls/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Edits researcher url for an ORCID ID
   */
  static editResearcherUrl(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
      /**  */
      body?: ResearcherUrlV3_0
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/researcher-urls/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options)

      let data = params['body']

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Delete one researcher url from an ORCID ID
   */
  static deleteResearcherUrl(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/researcher-urls/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options)

      let data = null

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch all emails for an ORCID ID
   */
  static viewEmails(
    params: {
      /**  */
      orcid: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/email'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch Other name
   */
  static viewOtherName(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/other-names/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Edit other name
   */
  static editOtherName(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
      /**  */
      body?: OtherNameV3_0
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/other-names/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options)

      let data = params['body']

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Delete other name
   */
  static deleteOtherName(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/other-names/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options)

      let data = null

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch Other names
   */
  static viewOtherNames(
    params: {
      /**  */
      orcid: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/other-names'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Add other name
   */
  static createOtherName(
    params: {
      /**  */
      orcid: string
      /**  */
      body?: OtherNameV3_0
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/other-names'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options)

      let data = params['body']

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch personal details for an ORCID ID
   */
  static viewPersonalDetails(
    params: {
      /**  */
      orcid: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<PersonalDetailsV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/personal-details'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch external identifier
   */
  static viewExternalIdentifier(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/external-identifiers/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Edit external identifier
   */
  static editExternalIdentifier(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
      /**  */
      body?: PersonExternalIdentifierV3_0
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/external-identifiers/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options)

      let data = params['body']

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Delete external identifier
   */
  static deleteExternalIdentifier(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/external-identifiers/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options)

      let data = null

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch external identifiers
   */
  static viewExternalIdentifiers(
    params: {
      /**  */
      orcid: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/external-identifiers'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Add external identifier
   */
  static createExternalIdentifier(
    params: {
      /**  */
      orcid: string
      /**  */
      body?: PersonExternalIdentifierV3_0
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/external-identifiers'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options)

      let data = params['body']

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Get biography details
   */
  static viewBiography(
    params: {
      /**  */
      orcid: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<BiographyV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/biography'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch keyword
   */
  static viewKeyword(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/keywords/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Edit keyword
   */
  static editKeyword(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
      /**  */
      body?: KeywordV3_0
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/keywords/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options)

      let data = params['body']

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Delete keyword
   */
  static deleteKeyword(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/keywords/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options)

      let data = null

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch keywords
   */
  static viewKeywords(
    params: {
      /**  */
      orcid: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/keywords'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Add keyword
   */
  static createKeyword(
    params: {
      /**  */
      orcid: string
      /**  */
      body?: KeywordV3_0
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/keywords'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options)

      let data = params['body']

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch an address
   */
  static viewAddress(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/address/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Edit an address
   */
  static editAddress(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
      /**  */
      body?: AddressV3_0
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/address/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options)

      let data = params['body']

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Delete an address
   */
  static deleteAddress(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/address/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options)

      let data = null

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch all addresses of a profile
   */
  static viewAddresses(
    params: {
      /**  */
      orcid: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<AddressesV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/address'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Add an address
   */
  static createAddress(
    params: {
      /**  */
      orcid: string
      /**  */
      body?: AddressV3_0
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/address'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options)

      let data = params['body']

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch person details
   */
  static viewPerson(
    params: {
      /**  */
      orcid: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/person'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch record details
   */
  static viewRecord(
    params: {
      /**  */
      orcid: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<RecordV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Search records
   */
  static searchByQuery(
    params: {
      /**  */
      q?: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<SearchV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/search'

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)
      configs.params = { q: params['q'] }

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch client details
   */
  static viewClient(
    params: {
      /**  */
      clientId: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/client/{client_id}'
      url = url.replace('{client_id}', params['clientId'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch an Distinction
   */
  static viewDistinction(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<DistinctionV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/distinction/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Update an Distinction
   */
  static updateDistinction(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
      /**  */
      body?: DistinctionV3_0
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/distinction/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options)

      let data = params['body']

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Delete an Distinction
   */
  static deleteDistinction(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/distinction/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options)

      let data = null

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch all distinctions
   */
  static viewDistinctions(
    params: {
      /**  */
      orcid: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<DistinctionsSummaryV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/distinctions'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch an Distinction summary
   */
  static viewDistinctionSummary(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<DistinctionSummaryV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/distinction/summary/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Create an Distinction
   */
  static createDistinction(
    params: {
      /**  */
      orcid: string
      /**  */
      body?: DistinctionV3_0
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/distinction'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options)

      let data = params['body']

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch an InvitedPosition
   */
  static viewInvitedPosition(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<InvitedPositionV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/invited-position/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Update an InvitedPosition
   */
  static updateInvitedPosition(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
      /**  */
      body?: InvitedPositionV3_0
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/invited-position/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options)

      let data = params['body']

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Delete an InvitedPosition
   */
  static deleteInvitedPosition(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/invited-position/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options)

      let data = null

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch all invitedPositions
   */
  static viewInvitedPositions(
    params: {
      /**  */
      orcid: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<InvitedPositionsV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/invited-positions'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch an InvitedPosition summary
   */
  static viewInvitedPositionSummary(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<InvitedPositionSummaryV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/invited-position/summary/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Create an InvitedPosition
   */
  static createInvitedPosition(
    params: {
      /**  */
      orcid: string
      /**  */
      body?: InvitedPositionV3_0
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/invited-position'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options)

      let data = params['body']

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch an Membership
   */
  static viewMembership(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<MembershipV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/membership/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Update an Membership
   */
  static updateMembership(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
      /**  */
      body?: MembershipV3_0
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/membership/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options)

      let data = params['body']

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Delete an Membership
   */
  static deleteMembership(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/membership/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options)

      let data = null

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch all memberships
   */
  static viewMemberships(
    params: {
      /**  */
      orcid: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<MembershipsV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/memberships'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch an Membership summary
   */
  static viewMembershipSummary(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<MembershipSummaryV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/membership/summary/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Create an Membership
   */
  static createMembership(
    params: {
      /**  */
      orcid: string
      /**  */
      body?: MembershipV3_0
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/membership'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options)

      let data = params['body']

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch an Qualification
   */
  static viewQualification(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<QualificationV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/qualification/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Update an Qualification
   */
  static updateQualification(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
      /**  */
      body?: QualificationV3_0
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/qualification/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options)

      let data = params['body']

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Delete an Qualification
   */
  static deleteQualification(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/qualification/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options)

      let data = null

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch all qualifications
   */
  static viewQualifications(
    params: {
      /**  */
      orcid: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<QualificationsV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/qualifications'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch an Qualification summary
   */
  static viewQualificationSummary(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<QualificationSummaryV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/qualification/summary/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Create an Qualification
   */
  static createQualification(
    params: {
      /**  */
      orcid: string
      /**  */
      body?: QualificationV3_0
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/qualification'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options)

      let data = params['body']

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch an Service
   */
  static viewService(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<ServiceV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/service/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Update an Service
   */
  static updateService(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
      /**  */
      body?: ServiceV3_0
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/service/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options)

      let data = params['body']

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Delete an Service
   */
  static deleteService(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/service/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options)

      let data = null

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch all services
   */
  static viewServices(
    params: {
      /**  */
      orcid: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<ServicesV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/services'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch an Service summary
   */
  static viewServiceSummary(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<ServiceSummaryV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/service/summary/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Create an Service
   */
  static createService(
    params: {
      /**  */
      orcid: string
      /**  */
      body?: ServiceV3_0
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/service'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options)

      let data = params['body']

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch a Research Resource
   */
  static viewResearchResource(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<ResearchResourceV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/research-resource/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Update a Research Resource
   */
  static updateResearchResource(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
      /**  */
      body?: ResearchResourceV3_0
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/research-resource/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('put', 'application/json', url, options)

      let data = params['body']

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Delete an Research Resource
   */
  static deleteResearchResource(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/research-resource/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('delete', 'application/json', url, options)

      let data = null

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch all Research Resources
   */
  static viewResearchResources(
    params: {
      /**  */
      orcid: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<ResearchResourcesV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/research-resources'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Fetch a Research Resource summary
   */
  static viewResearchResourceSummary(
    params: {
      /**  */
      orcid: string
      /**  */
      putCode: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<ResearchResourceSummaryV3_0> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/research-resource/summary/{putCode}'
      url = url.replace('{orcid}', params['orcid'] + '')
      url = url.replace('{putCode}', params['putCode'] + '')

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Create a Research Resource
   */
  static createResearchResource(
    params: {
      /**  */
      orcid: string
      /**  */
      body?: ResearchResourceV3_0
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<string> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/{orcid}/research-resource'
      url = url.replace('{orcid}', params['orcid'] + '')

      const configs: IRequestConfig = getConfigs('post', 'application/json', url, options)

      let data = params['body']

      configs.data = data

      axios(configs, resolve, reject)
    })
  }
  /**
   * Search records
   */
  static searchByQuery1(
    params: {
      /**  */
      q?: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/csv-search'

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)
      configs.params = { q: params['q'] }

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
  /**
   * Search records
   */
  static searchByQuery2(
    params: {
      /**  */
      q?: string
    } = {} as any,
    options: IRequestOptions = {},
  ): Promise<any> {
    return new Promise((resolve, reject) => {
      let url = basePath + '/v3.0/expanded-search'

      const configs: IRequestConfig = getConfigs('get', 'application/json', url, options)
      configs.params = { q: params['q'] }

      /** 适配ios13，get请求不允许带body */

      axios(configs, resolve, reject)
    })
  }
}

export interface ClientSummary {
  /**  */
  name?: string

  /**  */
  description?: string
}

export interface ActivitiesSummaryV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  distinctions?: DistinctionsSummaryV3_0

  /**  */
  educations?: EducationsSummaryV3_0

  /**  */
  employments?: EmploymentsSummaryV3_0

  /**  */
  fundings?: FundingsV3_0

  /**  */
  'invited-positions'?: InvitedPositionsV3_0

  /**  */
  memberships?: MembershipsV3_0

  /**  */
  'peer-reviews'?: PeerReviewsV3_0

  /**  */
  qualifications?: QualificationsV3_0

  /**  */
  'research-resources'?: ResearchResourcesV3_0

  /**  */
  services?: ServicesV3_0

  /**  */
  works?: WorksSummaryV3_0

  /**  */
  path?: string
}

export interface AffiliationGroupV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  'external-ids'?: ExternalIDsV3_0

  /**  */
  summaries?: AffiliationSummaryV3_0[]
}

export interface AffiliationGroupV3_0DistinctionSummaryV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  'external-ids'?: ExternalIDsV3_0

  /**  */
  summaries?: DistinctionSummaryV3_0[]
}

export interface AffiliationGroupV3_0EducationSummaryV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  'external-ids'?: ExternalIDsV3_0

  /**  */
  summaries?: EducationSummaryV3_0[]
}

export interface AffiliationGroupV3_0EmploymentSummaryV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  'external-ids'?: ExternalIDsV3_0

  /**  */
  summaries?: EmploymentSummaryV3_0[]
}

export interface AffiliationGroupV3_0InvitedPositionSummaryV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  'external-ids'?: ExternalIDsV3_0

  /**  */
  summaries?: InvitedPositionSummaryV3_0[]
}

export interface AffiliationGroupV3_0MembershipSummaryV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  'external-ids'?: ExternalIDsV3_0

  /**  */
  summaries?: MembershipSummaryV3_0[]
}

export interface AffiliationGroupV3_0QualificationSummaryV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  'external-ids'?: ExternalIDsV3_0

  /**  */
  summaries?: QualificationSummaryV3_0[]
}

export interface AffiliationGroupV3_0ServiceSummaryV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  'external-ids'?: ExternalIDsV3_0

  /**  */
  summaries?: ServiceSummaryV3_0[]
}

export interface AffiliationSummaryV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  source?: SourceV3_0

  /**  */
  'put-code'?: number

  /**  */
  'department-name'?: string

  /**  */
  'role-title'?: string

  /**  */
  'start-date'?: FuzzyDateV3_0

  /**  */
  'end-date'?: FuzzyDateV3_0

  /**  */
  organization?: OrganizationV3_0

  /**  */
  url?: UrlV3_0

  /**  */
  'external-ids'?: ExternalIDsV3_0

  /**  */
  'display-index'?: string

  /**  */
  visibility?: EnumAffiliationSummaryV3_0Visibility

  /**  */
  path?: string
}

export interface CreatedDateV3_0 {
  /**  */
  value?: Date
}

export interface DayV3_0 {
  /**  */
  value?: string
}

export interface DisambiguatedOrganizationV3_0 {
  /**  */
  'disambiguated-organization-identifier': string

  /**  */
  'disambiguation-source': string
}

export interface DistinctionSummaryV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  source?: SourceV3_0

  /**  */
  'put-code'?: number

  /**  */
  'department-name'?: string

  /**  */
  'role-title'?: string

  /**  */
  'start-date'?: FuzzyDateV3_0

  /**  */
  'end-date'?: FuzzyDateV3_0

  /**  */
  organization?: OrganizationV3_0

  /**  */
  url?: UrlV3_0

  /**  */
  'external-ids'?: ExternalIDsV3_0

  /**  */
  'display-index'?: string

  /**  */
  visibility?: EnumDistinctionSummaryV3_0Visibility

  /**  */
  path?: string
}

export interface DistinctionsSummaryV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  'affiliation-group'?: AffiliationGroupV3_0DistinctionSummaryV3_0[]

  /**  */
  path?: string
}

export interface EducationSummaryV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  source?: SourceV3_0

  /**  */
  'put-code'?: number

  /**  */
  'department-name'?: string

  /**  */
  'role-title'?: string

  /**  */
  'start-date'?: FuzzyDateV3_0

  /**  */
  'end-date'?: FuzzyDateV3_0

  /**  */
  organization?: OrganizationV3_0

  /**  */
  url?: UrlV3_0

  /**  */
  'external-ids'?: ExternalIDsV3_0

  /**  */
  'display-index'?: string

  /**  */
  visibility?: EnumEducationSummaryV3_0Visibility

  /**  */
  path?: string
}

export interface EducationsSummaryV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  'affiliation-group'?: AffiliationGroupV3_0EducationSummaryV3_0[]

  /**  */
  path?: string
}

export interface EmploymentSummaryV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  source?: SourceV3_0

  /**  */
  'put-code'?: number

  /**  */
  'department-name'?: string

  /**  */
  'role-title'?: string

  /**  */
  'start-date'?: FuzzyDateV3_0

  /**  */
  'end-date'?: FuzzyDateV3_0

  /**  */
  organization?: OrganizationV3_0

  /**  */
  url?: UrlV3_0

  /**  */
  'external-ids'?: ExternalIDsV3_0

  /**  */
  'display-index'?: string

  /**  */
  visibility?: EnumEmploymentSummaryV3_0Visibility

  /**  */
  path?: string
}

export interface EmploymentsSummaryV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  'affiliation-group'?: AffiliationGroupV3_0EmploymentSummaryV3_0[]

  /**  */
  path?: string
}

export interface ExternalIDV3_0 {
  /**  */
  'external-id-type': string

  /**  */
  'external-id-value': string

  /**  */
  'external-id-normalized'?: TransientNonEmptyString

  /**  */
  'external-id-normalized-error'?: TransientError

  /**  */
  'external-id-url'?: UrlV3_0

  /**  */
  'external-id-relationship'?: EnumExternalIDV3_0ExternalIdRelationship
}

export interface ExternalIDsV3_0 {
  /**  */
  'external-id'?: ExternalIDV3_0[]
}

export interface FundingGroupV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  'external-ids'?: ExternalIDsV3_0

  /**  */
  'funding-summary'?: FundingSummaryV3_0[]
}

export interface FundingSummaryV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  source?: SourceV3_0

  /**  */
  title: FundingTitleV3_0

  /**  */
  'external-ids'?: ExternalIDsV3_0

  /**  */
  url?: UrlV3_0

  /**  */
  type: EnumFundingSummaryV3_0Type

  /**  */
  'start-date'?: FuzzyDateV3_0

  /**  */
  'end-date'?: FuzzyDateV3_0

  /**  */
  organization: OrganizationV3_0

  /**  */
  visibility?: EnumFundingSummaryV3_0Visibility

  /**  */
  'put-code'?: number

  /**  */
  path?: string

  /**  */
  'display-index'?: string
}

export interface FundingTitleV3_0 {
  /**  */
  title?: TitleV3_0

  /**  */
  'translated-title'?: TranslatedTitleV3_0
}

export interface FundingsV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  group?: FundingGroupV3_0[]

  /**  */
  path?: string
}

export interface FuzzyDateV3_0 {
  /**  */
  year: YearV3_0

  /**  */
  month?: MonthV3_0

  /**  */
  day?: DayV3_0
}

export interface InvitedPositionSummaryV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  source?: SourceV3_0

  /**  */
  'put-code'?: number

  /**  */
  'department-name'?: string

  /**  */
  'role-title'?: string

  /**  */
  'start-date'?: FuzzyDateV3_0

  /**  */
  'end-date'?: FuzzyDateV3_0

  /**  */
  organization?: OrganizationV3_0

  /**  */
  url?: UrlV3_0

  /**  */
  'external-ids'?: ExternalIDsV3_0

  /**  */
  'display-index'?: string

  /**  */
  visibility?: EnumInvitedPositionSummaryV3_0Visibility

  /**  */
  path?: string
}

export interface InvitedPositionsV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  'affiliation-group'?: AffiliationGroupV3_0InvitedPositionSummaryV3_0[]

  /**  */
  path?: string
}

export interface LastModifiedDateV3_0 {
  /**  */
  value?: Date
}

export interface MembershipSummaryV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  source?: SourceV3_0

  /**  */
  'put-code'?: number

  /**  */
  'department-name'?: string

  /**  */
  'role-title'?: string

  /**  */
  'start-date'?: FuzzyDateV3_0

  /**  */
  'end-date'?: FuzzyDateV3_0

  /**  */
  organization?: OrganizationV3_0

  /**  */
  url?: UrlV3_0

  /**  */
  'external-ids'?: ExternalIDsV3_0

  /**  */
  'display-index'?: string

  /**  */
  visibility?: EnumMembershipSummaryV3_0Visibility

  /**  */
  path?: string
}

export interface MembershipsV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  'affiliation-group'?: AffiliationGroupV3_0MembershipSummaryV3_0[]

  /**  */
  path?: string
}

export interface MonthV3_0 {
  /**  */
  value?: string
}

export interface OrganizationAddressV3_0 {
  /**  */
  city: string

  /**  */
  region?: string

  /**  */
  country: EnumOrganizationAddressV3_0Country
}

export interface OrganizationV3_0 {
  /**  */
  name: string

  /**  */
  address: OrganizationAddressV3_0

  /**  */
  'disambiguated-organization'?: DisambiguatedOrganizationV3_0
}

export interface PeerReviewDuplicateGroupV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  'external-ids'?: ExternalIDsV3_0

  /**  */
  'peer-review-summary'?: PeerReviewSummaryV3_0[]
}

export interface PeerReviewGroupV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  'external-ids'?: ExternalIDsV3_0

  /**  */
  'peer-review-group'?: PeerReviewDuplicateGroupV3_0[]
}

export interface PeerReviewSummaryV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  source?: SourceV3_0

  /**  */
  'reviewer-role'?: EnumPeerReviewSummaryV3_0ReviewerRole

  /**  */
  'external-ids'?: ExternalIDsV3_0

  /**  */
  'review-url'?: UrlV3_0

  /**  */
  'review-type'?: EnumPeerReviewSummaryV3_0ReviewType

  /**  */
  'completion-date'?: FuzzyDateV3_0

  /**  */
  'review-group-id': string

  /**  */
  'convening-organization'?: OrganizationV3_0

  /**  */
  visibility?: EnumPeerReviewSummaryV3_0Visibility

  /**  */
  'put-code'?: number

  /**  */
  path?: string

  /**  */
  'display-index'?: string
}

export interface PeerReviewsV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  group?: PeerReviewGroupV3_0[]

  /**  */
  path?: string
}

export interface PublicationDateV3_0 {
  /**  */
  year: YearV3_0

  /**  */
  month?: MonthV3_0

  /**  */
  day?: DayV3_0
}

export interface QualificationSummaryV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  source?: SourceV3_0

  /**  */
  'put-code'?: number

  /**  */
  'department-name'?: string

  /**  */
  'role-title'?: string

  /**  */
  'start-date'?: FuzzyDateV3_0

  /**  */
  'end-date'?: FuzzyDateV3_0

  /**  */
  organization?: OrganizationV3_0

  /**  */
  url?: UrlV3_0

  /**  */
  'external-ids'?: ExternalIDsV3_0

  /**  */
  'display-index'?: string

  /**  */
  visibility?: EnumQualificationSummaryV3_0Visibility

  /**  */
  path?: string
}

export interface QualificationsV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  'affiliation-group'?: AffiliationGroupV3_0QualificationSummaryV3_0[]

  /**  */
  path?: string
}

export interface ResearchResourceGroupV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  'external-ids'?: ExternalIDsV3_0

  /**  */
  'research-resource-summary'?: ResearchResourceSummaryV3_0[]
}

export interface ResearchResourceHostsV3_0 {
  /**  */
  organization?: OrganizationV3_0[]
}

export interface ResearchResourceProposalV3_0 {
  /**  */
  title?: ResearchResourceTitleV3_0

  /**  */
  hosts?: ResearchResourceHostsV3_0

  /**  */
  'external-ids'?: ExternalIDsV3_0

  /**  */
  'start-date'?: FuzzyDateV3_0

  /**  */
  'end-date'?: FuzzyDateV3_0

  /**  */
  url?: UrlV3_0
}

export interface ResearchResourceSummaryV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  source?: SourceV3_0

  /**  */
  proposal?: ResearchResourceProposalV3_0

  /**  */
  visibility?: EnumResearchResourceSummaryV3_0Visibility

  /**  */
  'put-code'?: number

  /**  */
  path?: string

  /**  */
  'display-index'?: string
}

export interface ResearchResourceTitleV3_0 {
  /**  */
  title?: TitleV3_0

  /**  */
  'translated-title'?: TranslatedTitleV3_0
}

export interface ResearchResourcesV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  group?: ResearchResourceGroupV3_0[]

  /**  */
  path?: string
}

export interface ServiceSummaryV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  source?: SourceV3_0

  /**  */
  'put-code'?: number

  /**  */
  'department-name'?: string

  /**  */
  'role-title'?: string

  /**  */
  'start-date'?: FuzzyDateV3_0

  /**  */
  'end-date'?: FuzzyDateV3_0

  /**  */
  organization?: OrganizationV3_0

  /**  */
  url?: UrlV3_0

  /**  */
  'external-ids'?: ExternalIDsV3_0

  /**  */
  'display-index'?: string

  /**  */
  visibility?: EnumServiceSummaryV3_0Visibility

  /**  */
  path?: string
}

export interface ServicesV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  'affiliation-group'?: AffiliationGroupV3_0ServiceSummaryV3_0[]

  /**  */
  path?: string
}

export interface SourceClientIdV3_0 {
  /**  */
  uri?: string

  /**  */
  path?: string

  /**  */
  host?: string
}

export interface SourceNameV3_0 {
  /**  */
  value?: string
}

export interface SourceOrcidV3_0 {
  /**  */
  uri?: string

  /**  */
  path?: string

  /**  */
  host?: string
}

export interface SourceV3_0 {
  /**  */
  'source-orcid'?: SourceOrcidV3_0

  /**  */
  'source-client-id'?: SourceClientIdV3_0

  /**  */
  'source-name'?: SourceNameV3_0

  /**  */
  'assertion-origin-orcid'?: SourceOrcidV3_0

  /**  */
  'assertion-origin-client-id'?: SourceClientIdV3_0

  /**  */
  'assertion-origin-name'?: SourceNameV3_0
}

export interface SubtitleV3_0 {
  /**  */
  value?: string
}

export interface TitleV3_0 {
  /**  */
  value?: string
}

export interface TransientError {
  /**  */
  'error-code': string

  /**  */
  'error-message': string

  /**  */
  transient: boolean
}

export interface TransientNonEmptyString {
  /**  */
  value?: string

  /**  */
  transient?: boolean
}

export interface TranslatedTitleV3_0 {
  /**  */
  value?: string

  /**  */
  'language-code': EnumTranslatedTitleV3_0LanguageCode
}

export interface UrlV3_0 {
  /**  */
  value?: string
}

export interface WorkGroupV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  'external-ids'?: ExternalIDsV3_0

  /**  */
  'work-summary'?: WorkSummaryV3_0[]
}

export interface WorkSummaryV3_0 {
  /**  */
  'put-code'?: number

  /**  */
  'created-date'?: CreatedDateV3_0

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  source?: SourceV3_0

  /**  */
  title?: WorkTitleV3_0

  /**  */
  'external-ids'?: ExternalIDsV3_0

  /**  */
  url?: UrlV3_0

  /**  */
  type?: EnumWorkSummaryV3_0Type

  /**  */
  'publication-date'?: PublicationDateV3_0

  /**  */
  'journal-title'?: TitleV3_0

  /**  */
  visibility?: EnumWorkSummaryV3_0Visibility

  /**  */
  path?: string

  /**  */
  'display-index'?: string
}

export interface WorkTitleV3_0 {
  /**  */
  title?: TitleV3_0

  /**  */
  subtitle?: SubtitleV3_0

  /**  */
  'translated-title'?: TranslatedTitleV3_0
}

export interface WorksSummaryV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  group?: WorkGroupV3_0[]

  /**  */
  path?: string
}

export interface YearV3_0 {
  /**  */
  value?: string
}

export interface ContributorAttributesV3_0 {
  /**  */
  'contributor-sequence': EnumContributorAttributesV3_0ContributorSequence

  /**  */
  'contributor-role': EnumContributorAttributesV3_0ContributorRole
}

export interface ContributorEmailV3_0 {
  /**  */
  value?: string
}

export interface ContributorOrcidV3_0 {
  /**  */
  uri?: string

  /**  */
  path?: string

  /**  */
  host?: string
}

export interface ContributorV3_0 {
  /**  */
  'contributor-orcid'?: ContributorOrcidV3_0

  /**  */
  'credit-name'?: CreditNameV3_0

  /**  */
  'contributor-email'?: ContributorEmailV3_0

  /**  */
  'contributor-attributes'?: ContributorAttributesV3_0
}

export interface CountryV3_0 {
  /**  */
  value?: EnumCountryV3_0Value
}

export interface CreditNameV3_0 {
  /**  */
  value?: string
}

export interface WorkContributorsV3_0 {
  /**  */
  contributor?: ContributorV3_0[]
}

export interface WorkV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  source?: SourceV3_0

  /**  */
  'put-code'?: number

  /**  */
  path?: string

  /**  */
  title?: WorkTitleV3_0

  /**  */
  'journal-title'?: TitleV3_0

  /**  */
  'short-description'?: string

  /**  */
  citation?: Citation

  /**  */
  type?: EnumWorkV3_0Type

  /**  */
  'publication-date'?: PublicationDateV3_0

  /**  */
  'external-ids'?: ExternalIDsV3_0

  /**  */
  url?: UrlV3_0

  /**  */
  contributors?: WorkContributorsV3_0

  /**  */
  'language-code'?: EnumWorkV3_0LanguageCode

  /**  */
  country?: CountryV3_0

  /**  */
  visibility?: EnumWorkV3_0Visibility
}

export interface WorkBulkV3_0 {
  /**  */
  bulk?: BulkElement[]
}

export interface AmountV3_0 {
  /**  */
  value?: string

  /**  */
  'currency-code': Currency
}

export interface Currency {
  /**  */
  currencyCode?: string

  /**  */
  defaultFractionDigits?: number

  /**  */
  numericCode?: number

  /**  */
  numericCodeAsString?: string

  /**  */
  displayName?: string

  /**  */
  symbol?: string
}

export interface FundingContributorAttributesV3_0 {
  /**  */
  'contributor-role': EnumFundingContributorAttributesV3_0ContributorRole
}

export interface FundingContributorV3_0 {
  /**  */
  'contributor-orcid'?: ContributorOrcidV3_0

  /**  */
  'credit-name'?: CreditNameV3_0

  /**  */
  'contributor-email'?: ContributorEmailV3_0

  /**  */
  'contributor-attributes'?: FundingContributorAttributesV3_0
}

export interface FundingContributorsV3_0 {
  /**  */
  contributor?: FundingContributorV3_0[]
}

export interface FundingV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  source?: SourceV3_0

  /**  */
  'put-code'?: number

  /**  */
  path?: string

  /**  */
  type: EnumFundingV3_0Type

  /**  */
  'organization-defined-type'?: OrganizationDefinedFundingSubTypeV3_0

  /**  */
  title: FundingTitleV3_0

  /**  */
  'short-description'?: string

  /**  */
  amount?: AmountV3_0

  /**  */
  url?: UrlV3_0

  /**  */
  'start-date'?: FuzzyDateV3_0

  /**  */
  'end-date'?: FuzzyDateV3_0

  /**  */
  'external-ids'?: ExternalIDsV3_0

  /**  */
  contributors?: FundingContributorsV3_0

  /**  */
  organization: OrganizationV3_0

  /**  */
  visibility?: EnumFundingV3_0Visibility
}

export interface OrganizationDefinedFundingSubTypeV3_0 {
  /**  */
  value?: string
}

export interface EducationV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  source?: SourceV3_0

  /**  */
  'put-code'?: number

  /**  */
  path?: string

  /**  */
  'department-name'?: string

  /**  */
  'role-title'?: string

  /**  */
  'start-date': FuzzyDateV3_0

  /**  */
  'end-date'?: FuzzyDateV3_0

  /**  */
  organization: OrganizationV3_0

  /**  */
  url?: UrlV3_0

  /**  */
  'external-ids'?: ExternalIDsV3_0

  /**  */
  'display-index'?: string

  /**  */
  visibility?: EnumEducationV3_0Visibility
}

export interface EmploymentV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  source?: SourceV3_0

  /**  */
  'put-code'?: number

  /**  */
  path?: string

  /**  */
  'department-name'?: string

  /**  */
  'role-title'?: string

  /**  */
  'start-date': FuzzyDateV3_0

  /**  */
  'end-date'?: FuzzyDateV3_0

  /**  */
  organization: OrganizationV3_0

  /**  */
  url?: UrlV3_0

  /**  */
  'external-ids'?: ExternalIDsV3_0

  /**  */
  'display-index'?: string

  /**  */
  visibility?: EnumEmploymentV3_0Visibility
}

export interface PeerReviewV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  source?: SourceV3_0

  /**  */
  'reviewer-role'?: EnumPeerReviewV3_0ReviewerRole

  /**  */
  'review-identifiers'?: ExternalIDsV3_0

  /**  */
  'review-url'?: UrlV3_0

  /**  */
  'review-type'?: EnumPeerReviewV3_0ReviewType

  /**  */
  'review-completion-date'?: FuzzyDateV3_0

  /**  */
  'review-group-id': string

  /**  */
  'subject-external-identifier'?: ExternalIDV3_0

  /**  */
  'subject-container-name'?: TitleV3_0

  /**  */
  'subject-type'?: EnumPeerReviewV3_0SubjectType

  /**  */
  'subject-name'?: SubjectNameV3_0

  /**  */
  'subject-url'?: UrlV3_0

  /**  */
  'convening-organization'?: OrganizationV3_0

  /**  */
  visibility?: EnumPeerReviewV3_0Visibility

  /**  */
  'put-code'?: number

  /**  */
  path?: string
}

export interface SubjectNameV3_0 {
  /**  */
  title?: TitleV3_0

  /**  */
  subtitle?: SubtitleV3_0

  /**  */
  'translated-title'?: TranslatedTitleV3_0
}

export interface AuthorizationUrlV3_0 {
  /**  */
  uri: string

  /**  */
  path: string

  /**  */
  host: string
}

export interface ItemV3_0 {
  /**  */
  'put-code'?: string

  /**  */
  'item-type': EnumItemV3_0ItemType

  /**  */
  'item-name': string

  /**  */
  'external-id': ExternalIDV3_0
}

export interface ItemsV3_0 {
  /**  */
  item: ItemV3_0[]
}

export interface NotificationPermissionV3_0 {
  /**  */
  'put-code'?: number

  /**  */
  'notification-type': EnumNotificationPermissionV3_0NotificationType

  /**  */
  'authorization-url': AuthorizationUrlV3_0

  /**  */
  'notification-subject'?: string

  /**  */
  'notification-intro'?: string

  /**  */
  items: ItemsV3_0

  /**  */
  'created-date'?: Date

  /**  */
  'sent-date'?: Date

  /**  */
  'read-date'?: Date

  /**  */
  'actioned-date'?: Date

  /**  */
  'archived-date'?: Date

  /**  */
  source?: SourceV3_0
}

export interface ResearcherUrlV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  source?: SourceV3_0

  /**  */
  'url-name'?: string

  /**  */
  url?: UrlV3_0

  /**  */
  visibility?: EnumResearcherUrlV3_0Visibility

  /**  */
  path?: string

  /**  */
  'put-code'?: number

  /**  */
  'display-index'?: number
}

export interface OtherNameV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  source?: SourceV3_0

  /**  */
  content?: string

  /**  */
  visibility?: EnumOtherNameV3_0Visibility

  /**  */
  path?: string

  /**  */
  'put-code'?: number

  /**  */
  'display-index'?: number
}

export interface BiographyV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  content?: string

  /**  */
  visibility?: EnumBiographyV3_0Visibility

  /**  */
  path?: string
}

export interface FamilyNameV3_0 {
  /**  */
  value?: string
}

export interface GivenNamesV3_0 {
  /**  */
  value?: string
}

export interface NameV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  'given-names'?: GivenNamesV3_0

  /**  */
  'family-name'?: FamilyNameV3_0

  /**  */
  'credit-name'?: CreditNameV3_0

  /**  */
  source?: SourceV3_0

  /**  */
  visibility?: EnumNameV3_0Visibility

  /**  */
  path?: string
}

export interface OtherNamesV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  'other-name'?: OtherNameV3_0[]

  /**  */
  path?: string
}

export interface PersonalDetailsV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  name?: NameV3_0

  /**  */
  'other-names'?: OtherNamesV3_0

  /**  */
  biography?: BiographyV3_0

  /**  */
  path?: string
}

export interface PersonExternalIdentifierV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  source?: SourceV3_0

  /**  */
  'external-id-type': string

  /**  */
  'external-id-value': string

  /**  */
  'external-id-url'?: UrlV3_0

  /**  */
  'external-id-relationship'?: EnumPersonExternalIdentifierV3_0ExternalIdRelationship

  /**  */
  visibility?: EnumPersonExternalIdentifierV3_0Visibility

  /**  */
  path?: string

  /**  */
  'put-code'?: number

  /**  */
  'display-index'?: number
}

export interface KeywordV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  source?: SourceV3_0

  /**  */
  content?: string

  /**  */
  visibility?: EnumKeywordV3_0Visibility

  /**  */
  path?: string

  /**  */
  'put-code'?: number

  /**  */
  'display-index'?: number
}

export interface AddressV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  source?: SourceV3_0

  /**  */
  country: CountryV3_0

  /**  */
  visibility?: EnumAddressV3_0Visibility

  /**  */
  path?: string

  /**  */
  'put-code'?: number

  /**  */
  'display-index'?: number
}

export interface AddressesV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  address?: AddressV3_0[]

  /**  */
  path?: string
}

export interface CompletionDateV3_0 {
  /**  */
  value?: Date
}

export interface DeactivationDateV3_0 {
  /**  */
  value?: Date
}

export interface EmailV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  source?: SourceV3_0

  /**  */
  email?: string

  /**  */
  path?: string

  /**  */
  visibility?: EnumEmailV3_0Visibility

  /**  */
  verified?: boolean

  /**  */
  primary?: boolean

  /**  */
  'put-code'?: number
}

export interface EmailsV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  email?: EmailV3_0[]

  /**  */
  path?: string
}

export interface HistoryV3_0 {
  /**  */
  'creation-method'?: EnumHistoryV3_0CreationMethod

  /**  */
  'completion-date'?: CompletionDateV3_0

  /**  */
  'submission-date'?: SubmissionDateV3_0

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  claimed?: boolean

  /**  */
  source?: SourceV3_0

  /**  */
  'deactivation-date'?: DeactivationDateV3_0

  /**  */
  'verified-email'?: boolean

  /**  */
  'verified-primary-email'?: boolean
}

export interface KeywordsV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  keyword?: KeywordV3_0[]

  /**  */
  path?: string
}

export interface OrcidIdentifierV3_0 {
  /**  */
  uri?: string

  /**  */
  path?: string

  /**  */
  host?: string
}

export interface PersonExternalIdentifiersV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  'external-identifier'?: PersonExternalIdentifierV3_0[]

  /**  */
  path?: string
}

export interface PersonV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  name?: NameV3_0

  /**  */
  'other-names'?: OtherNamesV3_0

  /**  */
  biography?: BiographyV3_0

  /**  */
  'researcher-urls'?: ResearcherUrlsV3_0

  /**  */
  emails?: EmailsV3_0

  /**  */
  addresses?: AddressesV3_0

  /**  */
  keywords?: KeywordsV3_0

  /**  */
  'external-identifiers'?: PersonExternalIdentifiersV3_0

  /**  */
  path?: string
}

export interface PreferencesV3_0 {
  /**  */
  locale?: EnumPreferencesV3_0Locale
}

export interface RecordV3_0 {
  /**  */
  'orcid-identifier'?: OrcidIdentifierV3_0

  /**  */
  preferences?: PreferencesV3_0

  /**  */
  history?: HistoryV3_0

  /**  */
  person?: PersonV3_0

  /**  */
  'activities-summary'?: ActivitiesSummaryV3_0

  /**  */
  path?: string
}

export interface ResearcherUrlsV3_0 {
  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  'researcher-url'?: ResearcherUrlV3_0[]

  /**  */
  path?: string
}

export interface SubmissionDateV3_0 {
  /**  */
  value?: Date
}

export interface ResultV3_0 {
  /**  */
  'orcid-identifier'?: OrcidIdentifierV3_0
}

export interface SearchV3_0 {
  /**  */
  result?: ResultV3_0[]

  /**  */
  'num-found'?: number
}

export interface DistinctionV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  source?: SourceV3_0

  /**  */
  'put-code'?: number

  /**  */
  path?: string

  /**  */
  'department-name'?: string

  /**  */
  'role-title'?: string

  /**  */
  'start-date': FuzzyDateV3_0

  /**  */
  'end-date'?: FuzzyDateV3_0

  /**  */
  organization: OrganizationV3_0

  /**  */
  url?: UrlV3_0

  /**  */
  'external-ids'?: ExternalIDsV3_0

  /**  */
  'display-index'?: string

  /**  */
  visibility?: EnumDistinctionV3_0Visibility
}

export interface InvitedPositionV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  source?: SourceV3_0

  /**  */
  'put-code'?: number

  /**  */
  path?: string

  /**  */
  'department-name'?: string

  /**  */
  'role-title'?: string

  /**  */
  'start-date': FuzzyDateV3_0

  /**  */
  'end-date'?: FuzzyDateV3_0

  /**  */
  organization: OrganizationV3_0

  /**  */
  url?: UrlV3_0

  /**  */
  'external-ids'?: ExternalIDsV3_0

  /**  */
  'display-index'?: string

  /**  */
  visibility?: EnumInvitedPositionV3_0Visibility
}

export interface MembershipV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  source?: SourceV3_0

  /**  */
  'put-code'?: number

  /**  */
  path?: string

  /**  */
  'department-name'?: string

  /**  */
  'role-title'?: string

  /**  */
  'start-date': FuzzyDateV3_0

  /**  */
  'end-date'?: FuzzyDateV3_0

  /**  */
  organization: OrganizationV3_0

  /**  */
  url?: UrlV3_0

  /**  */
  'external-ids'?: ExternalIDsV3_0

  /**  */
  'display-index'?: string

  /**  */
  visibility?: EnumMembershipV3_0Visibility
}

export interface QualificationV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  source?: SourceV3_0

  /**  */
  'put-code'?: number

  /**  */
  path?: string

  /**  */
  'department-name'?: string

  /**  */
  'role-title'?: string

  /**  */
  'start-date': FuzzyDateV3_0

  /**  */
  'end-date'?: FuzzyDateV3_0

  /**  */
  organization: OrganizationV3_0

  /**  */
  url?: UrlV3_0

  /**  */
  'external-ids'?: ExternalIDsV3_0

  /**  */
  'display-index'?: string

  /**  */
  visibility?: EnumQualificationV3_0Visibility
}

export interface ServiceV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  source?: SourceV3_0

  /**  */
  'put-code'?: number

  /**  */
  path?: string

  /**  */
  'department-name'?: string

  /**  */
  'role-title'?: string

  /**  */
  'start-date': FuzzyDateV3_0

  /**  */
  'end-date'?: FuzzyDateV3_0

  /**  */
  organization: OrganizationV3_0

  /**  */
  url?: UrlV3_0

  /**  */
  'external-ids'?: ExternalIDsV3_0

  /**  */
  'display-index'?: string

  /**  */
  visibility?: EnumServiceV3_0Visibility
}

export interface ResearchResourceItemV3_0 {
  /**  */
  'resource-name'?: string

  /**  */
  'resource-type'?: EnumResearchResourceItemV3_0ResourceType

  /**  */
  hosts?: ResearchResourceHostsV3_0

  /**  */
  'external-ids'?: ExternalIDsV3_0

  /**  */
  url?: UrlV3_0
}

export interface ResearchResourceV3_0 {
  /**  */
  'created-date'?: CreatedDateV3_0

  /**  */
  'last-modified-date'?: LastModifiedDateV3_0

  /**  */
  source?: SourceV3_0

  /**  */
  proposal?: ResearchResourceProposalV3_0

  /**  */
  'resource-item'?: ResearchResourceItemV3_0[]

  /**  */
  'display-index'?: string

  /**  */
  visibility?: EnumResearchResourceV3_0Visibility

  /**  */
  'put-code'?: number

  /**  */
  path?: string
}
export enum EnumAffiliationSummaryV3_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE',
}
export enum EnumDistinctionSummaryV3_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE',
}
export enum EnumEducationSummaryV3_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE',
}
export enum EnumEmploymentSummaryV3_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE',
}
export enum EnumExternalIDV3_0ExternalIdRelationship {
  'part-of' = 'part-of',
  'self' = 'self',
  'version-of' = 'version-of',
}
export enum EnumFundingSummaryV3_0Type {
  'GRANT' = 'GRANT',
  'CONTRACT' = 'CONTRACT',
  'AWARD' = 'AWARD',
  'SALARY_AWARD' = 'SALARY_AWARD',
}
export enum EnumFundingSummaryV3_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE',
}
export enum EnumInvitedPositionSummaryV3_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE',
}
export enum EnumMembershipSummaryV3_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE',
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
  'XK' = 'XK',
}
export enum EnumPeerReviewSummaryV3_0ReviewerRole {
  'REVIEWER' = 'REVIEWER',
  'EDITOR' = 'EDITOR',
  'MEMBER' = 'MEMBER',
  'CHAIR' = 'CHAIR',
  'ORGANIZER' = 'ORGANIZER',
}
export enum EnumPeerReviewSummaryV3_0ReviewType {
  'REVIEW' = 'REVIEW',
  'EVALUATION' = 'EVALUATION',
}
export enum EnumPeerReviewSummaryV3_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE',
}
export enum EnumQualificationSummaryV3_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE',
}
export enum EnumResearchResourceSummaryV3_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE',
}
export enum EnumServiceSummaryV3_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE',
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
  'zu' = 'zu',
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
  'UNDEFINED' = 'UNDEFINED',
}
export enum EnumWorkSummaryV3_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE',
}
export enum EnumContributorAttributesV3_0ContributorSequence {
  'first' = 'first',
  'additional' = 'additional',
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
  'support-staff' = 'support-staff',
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
  'XK' = 'XK',
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
  'undefined' = 'undefined',
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
  'zu' = 'zu',
}
export enum EnumWorkV3_0Visibility {
  'limited' = 'limited',
  'registered-only' = 'registered-only',
  'public' = 'public',
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
  'support-staff' = 'support-staff',
}
export enum EnumFundingV3_0Type {
  'grant' = 'grant',
  'contract' = 'contract',
  'award' = 'award',
  'salary-award' = 'salary-award',
}
export enum EnumFundingV3_0Visibility {
  'limited' = 'limited',
  'registered-only' = 'registered-only',
  'public' = 'public',
}
export enum EnumEducationV3_0Visibility {
  'limited' = 'limited',
  'registered-only' = 'registered-only',
  'public' = 'public',
}
export enum EnumEmploymentV3_0Visibility {
  'limited' = 'limited',
  'registered-only' = 'registered-only',
  'public' = 'public',
}
export enum EnumPeerReviewV3_0ReviewerRole {
  'reviewer' = 'reviewer',
  'editor' = 'editor',
  'member' = 'member',
  'chair' = 'chair',
  'organizer' = 'organizer',
}
export enum EnumPeerReviewV3_0ReviewType {
  'review' = 'review',
  'evaluation' = 'evaluation',
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
  'undefined' = 'undefined',
}
export enum EnumPeerReviewV3_0Visibility {
  'limited' = 'limited',
  'registered-only' = 'registered-only',
  'public' = 'public',
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
  'research-resource' = 'research-resource',
}
export enum EnumNotificationPermissionV3_0NotificationType {
  'custom' = 'custom',
  'institutional-connection' = 'institutional-connection',
  'permission' = 'permission',
  'amended' = 'amended',
  'service-anouncement' = 'service-anouncement',
  'administrative' = 'administrative',
  'tip' = 'tip',
  'find-my-stuff' = 'find-my-stuff',
}
export enum EnumResearcherUrlV3_0Visibility {
  'limited' = 'limited',
  'registered-only' = 'registered-only',
  'public' = 'public',
}
export enum EnumOtherNameV3_0Visibility {
  'limited' = 'limited',
  'registered-only' = 'registered-only',
  'public' = 'public',
}
export enum EnumBiographyV3_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE',
}
export enum EnumNameV3_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE',
}
export enum EnumPersonExternalIdentifierV3_0ExternalIdRelationship {
  'part-of' = 'part-of',
  'self' = 'self',
  'version-of' = 'version-of',
}
export enum EnumPersonExternalIdentifierV3_0Visibility {
  'limited' = 'limited',
  'registered-only' = 'registered-only',
  'public' = 'public',
}
export enum EnumKeywordV3_0Visibility {
  'limited' = 'limited',
  'registered-only' = 'registered-only',
  'public' = 'public',
}
export enum EnumAddressV3_0Visibility {
  'limited' = 'limited',
  'registered-only' = 'registered-only',
  'public' = 'public',
}
export enum EnumEmailV3_0Visibility {
  'LIMITED' = 'LIMITED',
  'REGISTERED_ONLY' = 'REGISTERED_ONLY',
  'PUBLIC' = 'PUBLIC',
  'PRIVATE' = 'PRIVATE',
}
export enum EnumHistoryV3_0CreationMethod {
  'API' = 'API',
  'DIRECT' = 'DIRECT',
  'MEMBER_REFERRED' = 'MEMBER_REFERRED',
  'WEBSITE' = 'WEBSITE',
  'INTEGRATION_TEST' = 'INTEGRATION_TEST',
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
  'XX' = 'XX',
}
export enum EnumDistinctionV3_0Visibility {
  'limited' = 'limited',
  'registered-only' = 'registered-only',
  'public' = 'public',
}
export enum EnumInvitedPositionV3_0Visibility {
  'limited' = 'limited',
  'registered-only' = 'registered-only',
  'public' = 'public',
}
export enum EnumMembershipV3_0Visibility {
  'limited' = 'limited',
  'registered-only' = 'registered-only',
  'public' = 'public',
}
export enum EnumQualificationV3_0Visibility {
  'limited' = 'limited',
  'registered-only' = 'registered-only',
  'public' = 'public',
}
export enum EnumServiceV3_0Visibility {
  'limited' = 'limited',
  'registered-only' = 'registered-only',
  'public' = 'public',
}
export enum EnumResearchResourceItemV3_0ResourceType {
  'infrastructures' = 'infrastructures',
  'collections' = 'collections',
  'equipment' = 'equipment',
  'services' = 'services',
}
export enum EnumResearchResourceV3_0Visibility {
  'limited' = 'limited',
  'registered-only' = 'registered-only',
  'public' = 'public',
}
