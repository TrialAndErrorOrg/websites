// @ts-expect-error no declaration file for this
import AzureAdOAuth2Strategy from 'passport-azure-ad-oauth2'
import { decode } from 'jsonwebtoken'

export type Env = {
  int: (key: string, defaultValue?: number) => number
  array: (key: string, defaultValue?: string[]) => string[]
  float: (key: string, defaultValue?: number) => number
  bool: (key: string, defaultValue?: boolean) => boolean
  json: (key: string, defaultValue?: any) => any
  date: (key: string, defaultValue?: Date) => Date
} & ((key: string, defaultValue?: string) => string) &
  ((key: string, defaultValue?: number) => number)

export default ({ env }: { env: Env }) => ({
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
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
              if (!prof) return
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
