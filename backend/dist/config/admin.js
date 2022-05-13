"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_azure_ad_oauth2_1 = __importDefault(require("passport-azure-ad-oauth2"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.default = ({ env }) => ({
    auth: {
        secret: env('ADMIN_JWT_SECRET', 'c0b47f9208b27587591171747a858bc8'),
        providers: [
            {
                uid: 'azure_ad_oauth2',
                displayName: 'Microsoft',
                icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/480px-Microsoft_logo.svg.png',
                createStrategy: (strapi) => new passport_azure_ad_oauth2_1.default({
                    clientID: env('MICROSOFT_CLIENT_ID', ''),
                    clientSecret: env('MICROSOFT_CLIENT_SECRET', ''),
                    scope: ['user:profile'],
                    tenant: env('MICROSOFT_TENANT_ID', ''),
                    callbackURL: strapi.admin.services.passport.getStrategyCallbackURL('azure_ad_oauth2'),
                }, (accessToken, refreshToken, params, profile, done) => {
                    var waadProfile = jsonwebtoken_1.default.decode(params.id_token, '', true);
                    const prof = jsonwebtoken_1.default.decode(accessToken, '', true);
                    done(null, {
                        email: prof.upn,
                        username: prof.upn,
                        firstname: prof.given_name || prof.name,
                        lastname: prof.family_name || !prof.given_name ? prof.name : undefined,
                    });
                }),
            },
        ],
    },
    url: '/admin',
});
