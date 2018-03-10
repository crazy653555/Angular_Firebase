// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDtkDHbfydpWpLnCIYxoTYwr4BoZIca-YU',
    authDomain: 'my-firebase-first-app-be3b8.firebaseapp.com',
    databaseURL: 'https://my-firebase-first-app-be3b8.firebaseio.com',
    projectId: 'my-firebase-first-app-be3b8',
    storageBucket: '',
    messagingSenderId: '124601522153'
  }
};
