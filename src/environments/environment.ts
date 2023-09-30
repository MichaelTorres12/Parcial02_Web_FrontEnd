// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  HOST: 'http://localhost:9595',
  KEYCLOAK: 'http://localhost:9595',
  TOKEN_AUTH_USERNAME: 'michaelygarby@gmail.com',
  TOKEN_AUTH_PASSWORD: '123',
  REFRESH_TOKEN: 'refresh_token',
  CLIENT_ID: 'mediapp-backend',
  TOKEN_NAME: 'access_token',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
