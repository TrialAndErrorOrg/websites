import AzureAdOAuth2Strategy from 'passport-azure-ad-oauth2'
import { decode } from 'jsonwebtoken'

export default ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c0b47f9208b27587591171747a858bc8'),
    providers: [
      {
        uid: 'azure_ad_oauth2',
        displayName: 'Microsoft',
        icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/480px-Microsoft_logo.svg.png',
        createStrategy: (strapi: {
          admin: { services: { passport: { getStrategyCallbackURL: (arg0: string) => any } } }
        }) =>
          new AzureAdOAuth2Strategy(
            {
              clientID: env('MICROSOFT_CLIENT_ID', ''),
              clientSecret: env('MICROSOFT_CLIENT_SECRET', ''),
              scope: ['user:profile'],
              tenant: env('MICROSOFT_TENANT_ID', ''),
              callbackURL: strapi.admin.services.passport.getStrategyCallbackURL('azure_ad_oauth2'),
            },
            (
              accessToken: string,
              refreshToken: any,
              params: { id_token: string },
              profile: any,
              done: (
                arg0: any,
                arg1: { email: any; username: any; firstname: any; lastname: any },
              ) => void,
            ) => {
              const waadProfile = decode(params.id_token)
              const prof = decode(accessToken, { json: true })
              done(null, {
                email: prof.upn,
                username: prof.upn,
                firstname: prof.given_name || prof.name,
                lastname: prof.family_name || !prof.given_name ? prof.name : undefined,
              })
            },
          ),
      },
    ],
  },
  url: '/admin',
})
