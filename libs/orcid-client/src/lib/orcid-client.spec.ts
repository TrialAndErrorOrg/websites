import { orcidClient } from './orcid-client'

describe('orcidClient', () => {
  it('should work', () => {
    expect(orcidClient()).toEqual('orcid-client')
  })
})
