/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest'
import type { OpenAPIConfig } from './core/OpenAPI'
import { AxiosHttpRequest } from './core/AxiosHttpRequest'

import { DevelopmentMemberApiV30Service } from './services/DevelopmentMemberApiV30Service'

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest

export class OrcidClient {
  public readonly orcid: DevelopmentMemberApiV30Service

  public readonly request: BaseHttpRequest

  constructor(
    config?: Partial<OpenAPIConfig>,
    HttpRequest: HttpRequestConstructor = AxiosHttpRequest,
  ) {
    this.request = new HttpRequest({
      BASE: config?.BASE ?? 'https://pub.orcid.org',
      VERSION: config?.VERSION ?? 'Latest',
      WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
      CREDENTIALS: config?.CREDENTIALS ?? 'include',
      TOKEN: config?.TOKEN,
      USERNAME: config?.USERNAME,
      PASSWORD: config?.PASSWORD,
      HEADERS: config?.HEADERS,
      ENCODE_PATH: config?.ENCODE_PATH,
    })

    this.orcid = new DevelopmentMemberApiV30Service(this.request)
  }
}