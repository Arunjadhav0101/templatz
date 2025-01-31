import {google} from "googleapis";

const {OAuth2} = google.auth

const apiKey = process.env.REMIX_GMAIL_API_KEY
const clientId = process.env.REMIX_GMAIL_CLIENT_ID
console.log(apiKey, clientId)

const oauth2Client = new google.auth.OAuth2(
  clientId,
  apiKey,
  'https://remixtutorial-flwf--5173--d20a0a75.local-credentialless.webcontainer.io/success'
);

// Generate the URL for user consent
const authUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline', // Important to get the refresh token
  scope: ['https://www.googleapis.com/auth/gmail.send'], // Add scopes as required
});

console.log('Authorize this app by visiting this URL:', authUrl);

// After user authorizes, they will be redirected to your redirect URI with a code query parameter.
// Exchange the code for tokens


///https://remixtutorial-flwf--5173--d20a0a75.local-credentialless.webcontainer.io/success?code=4/0ASVgi3KQZa0VP7RyiaRpwvaVu44zLXkIvvyQHvZHX4-5gLM1jh7xTmttNJWYgFWp1_9mYw&scope=https://www.googleapis.com/auth/gmail.send