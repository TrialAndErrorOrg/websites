import { OAuthUserConfig, OAuthConfig } from 'next-auth/providers'

export interface OrcidProfile extends Record<string, any> {
  family_name: string
  given_name: string
  name: string
  auth_time: string
  iss: string
  sub: string
}

export default function OrcidProvider<P extends OrcidProfile>(
  options: OAuthUserConfig<P>,
): OAuthConfig<P> {
  return {
    id: 'orcid',
    name: 'ORCID',
    type: 'oauth',
    wellKnown: 'https://orcid.org/.well-known/openid-configuration',
    authorization: { params: { scope: 'openid ' } },
    idToken: true,
    checks: ['pkce', 'state'],
    profile(profile) {
      return {
        id: profile.sub,
        name: profile.name,
        orcid: profile.orcid,
        family_name: profile.family_name,
        given_name: profile.given_name,
      }
    },
    options,
  }
}
