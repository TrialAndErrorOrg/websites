import { slugify } from './slugify'

describe('zkpSlugify', () => {
  it('should work', () => {
    expect(slugify('aashta_ashts')).toEqual('aashta-ashts')
  })
})
