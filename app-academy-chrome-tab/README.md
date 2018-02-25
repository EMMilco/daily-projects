# App Academy Chrome Tab

This is a browser extension to open a new tab with a page of links to commonly used resources, as well as App Academy repos. Used in combination with the [Progress Tracker][progress-tracker] to enforce checking in from assigned desk.

[progress-tracker]: https://github.com/appacademy/progress-tracker

## Installation

1. Git clone this repo locally
2. Go to the extensions pane in Chrome (chrome://extensions)
3. Enable the "Developer mode" checkbox
4. Click "Load unpacked extensions..."
5. Find the local copy of the repo and click "Select"
6. Go to the settings pane in Chrome (chrome://settings)
7. Choose the "Open the New Tab page" setting for "On startup"

## Github OAUTH

This extension uses Github's API with OAUTH authentication. Starting with the user clicking the `Authorize Github` link, the action `GET_GITHUB_CODE` is dispatched to the `github_auth.js` middleware. That starts the following chain of events.

1. In the `getCode()` function we make a request to GH's servers with the public API key to recieve a verificiation code.
2. We dispatch that code with the type `GET_GITHUB_TOKEN`.
3. In the `getToken()` function we then pass the verification code to an AWS Lambda function that wraps the private key. The Lambda source is as follows.

```
const request = require('request');

const clientId     = "OUR_PUBLIC_OAUTH_ID",
      clientSecret = "OUR_PRIVATE_OAUTH_KEY",
      url          = "https://github.com/login/oauth/access_token";

const data = code => ({
  client_id     : clientId,
  client_secret : clientSecret,
  code          : code
});


exports.handler = (event, context, callback) => {
  const code = event.code;

  const handleResponse = (err, res, body) => {
    const keyPairs = body.split("&"),
          resHash  = {};

    keyPairs.forEach(pair => {
      const pairArr = pair.split("=");

      resHash[pairArr[0]] = pairArr[1];
    })
    callback(null, resHash);
  }
  
  request.post({ url: url, form: data(code) }, handleResponse);
};
```

4. The Lambda function will make another request to the GH servers, verifying our identity using the private_key and sending the client back the actual API token.
5. This token is then passed to the curriculum middleware to get the daily curriculum.
6. Using settings in the `util\settings.js` file and the given day from the AA API, we make a request to GH's API again requesting the readme with today's content.
7. Then using a functional pipe, we apply a number of regex functions to the readme to parse it for today's content.

### Requirements

This process places a couple of requirements on our curriculum readmes.

1. The settings file must be maintained for pointing to the correct readme, see maintence below.
2. The Readme's must match the following format.

```
## w${thisWeek}d${thisDay}

All the markdown for this day...

## w${anyNum}d${anyNum}
```
* This applys to all days except those pointing to the full stack project, in which case we just output the entire readme.

### Maintence

The settings file needs to be maintained to point to the correct locations in our curriculum.

__Example Settings__

```
export const GITHUB = {
  oauthUrl  : "https://github.com/login/oauth/authorize",
  lambdaUrl : "LAMBDA_ENDPOINT",
  scope     : "repo",
  client_id : "OUR_PUBLIC_OAUTH_ID",

  readmeUrl : "https://api.github.com/repos/appacademy/curriculum/contents",

  ruby       : "/ruby/README.md",
  sql        : "/sql/README.md",
  rails      : "/rails/README.md",
  javascript : "/javascript/README.md",
  react      : "/react/README.md",
  fullStack  : "/full-stack-project/README.md"
};

export const READMES = {
  w1d1 : "ruby",
  ...
  w3d1 : "sql",
  w3d2 : "sql",
  ...
  w9d5 : "fullStack",
}
```

* If any of the days get shifted around in the curriculum, the README object needs to be updated to reflect that.
* If we add any readme files, those need to be added first to GITHUB object, and then that key needs to be added as the value to the appropriate days in the README object as well.
* If OAUTH keys get modified, we need to edit that here, as well as in the Lambda source.

## Timer
The timer rendering is built entirely on SVG and CSS. It is done using techniques introduced [here](https://css-tricks.com/svg-line-animation-works/)
