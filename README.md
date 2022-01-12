This project was bootstrapped with
[Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br /> Open
[http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br /> You will also see any lint errors
in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br /> See the section
about
[running tests](https://facebook.github.io/create-react-app/docs/running-tests)
for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br /> It correctly bundles
React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br /> Your app is
ready to be deployed!

See the section about
[deployment](https://facebook.github.io/create-react-app/docs/deployment) for
more information.


To run the application in dev, create a .env.local file with the following variables
NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY=xxx
MAGIC_SECRET_KEY=xxx
SECRET_COOKIE_PASSWORD=xxx
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=xxx
RECAPTCHA_SECRET_KEY=xxx
SENDGRID_API_KEY=xxx
CONTACT_EMAIL=xxx

The NEXT_PUBLIC_MAGIC_PUBLISHABLE_KEY and MAGIC_SECRET_KEY variables are used for the authentication. You need to create an account on https://magic.link to get them
SECRET_COOKIE_PASSWORD is the value used to encrypt the iron session cookie
NEXT_PUBLIC_RECAPTCHA_SITE_KEY and RECAPTCHA_SECRET_KEY are the values provided by Google to setup the react-google-recaptcha component (https://www.google.com/recaptcha/admin/create)
SENDGRID_API_KEY is the key provided by Sendgrid to use their API. It is used to send emails from the contact page. You need to create an account on https://sendgrid.com/
CONTACT_EMAIL is the account used in sendgrid to send the emails