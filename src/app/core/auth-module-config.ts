import { OAuthModuleConfig } from 'angular-oauth2-oidc';

export const authModuleConfig: OAuthModuleConfig = {
  resourceServer: {
    allowedUrls: ['https://api.asgardeo.io/t/sanjula'],
    sendAccessToken: true,
  }
};
