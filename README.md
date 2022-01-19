# Getting Started with React 🌠

At first this project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# About this repo 📝

You will find a lot of projects build while learning React & Hooks such as `youtube api`, `wikipedia api` and more. feel free to take a look 😉

for live demo
- [![vercel](https://img.shields.io/badge/-vercel-05122A?style=plastic&logo=vercel)][vercel-live]
- [![Netlify Status](https://api.netlify.com/api/v1/badges/21e3e34a-6bf1-47f8-839e-de5099f9ce24/deploy-status)][netlify-live]

[vercel-live]: https://react-projects-udemy.vercel.app/
[netlify-live]: https://react-projects-udemy.netlify.app/

## Some topic

- Custom Dropdown
- Custom Accordion
- Custom Route & Link Component
- Weather App
- Season Detect With GeoLocation API
- Wikipedia API App
- Youtube API App

## Used tools

- [`Fontawesome v5.15`](https://fontawesome.com/)
- [`Bootstrap v5.1`](https://getbootstrap.com/)
- [`Axios`](https://axios-http.com/)
- [`Tajawal Arabic Font`](https://fonts.google.com/specimen/Tajawal)
- [`Unsplash API`](https://unsplash.com/documentation#search)
- [`Google Translate API`](https://cloud.google.com/translate/docs/reference/rest/v2/translate)
- [`Youtube API`](https://developers.google.com/youtube/v3/docs/search/list)
- [`Wikipedia API`](https://en.wikipedia.org/w/api.php)

## Important Updates

- Due to unbelievable what happen to `faker.js` i create a folder call `static` with `data.js` file to be use as dummy data
- For **`Google Translate App`** the key of this API can only be used when your browser is at `http://localhost:3000`. If you try to make a request to the API from any other address, the request will fail.

## Want To Use On localhost

### First Step

Download the files from [releases](https://github.com/Mohammed-Taysser/react-learn-projects/releases) or clone it with **git** version control:

```shell
git clone https://github.com/Mohammed-Taysser/react-learn-projects.git
```

### Second Step

install dependencies by

```shell
npm install
```

### Last Step 

to start just run

```shell
npm start
```

## Analyzing the Bundle Size

```shell
npm install --save source-map-explorer
```

Then in `package.json`, add the following line to `scripts`:

```js
// ...
"analyze": "source-map-explorer 'build/static/js/*.js'",
// ...
```

Then to analyze the bundle run the production build then run the analyze script.

```shell
npm run build

npm run analyze
```

## Using HTTPS in Development

**Note** that the server will use a self-signed certificate, so your web browser will almost definitely display a warning upon accessing the page.

```shell
# Windows (cmd.exe)
set HTTPS=true&&npm start

# Windows (Powershell)
($env:HTTPS = "true") -and (npm start)

# Linux, macOS (Bash)
HTTPS=true npm start
```

## Adding Bootstrap

```shell
npm install bootstrap
```

Import Bootstrap CSS and optionally Bootstrap theme CSS in the beginning of your `src/index.js` file:

```js
import 'bootstrap/dist/css/bootstrap.css';
// Put any other imports below so that CSS from your
// components takes precedence over default styles.
```

### Using a Custom Theme

To enable `scss` in Create React App you will need to install `sass`.

```shell
npm install sass
```

To customize Bootstrap, create a file called `src/custom.scss` (or similar) and import the Bootstrap source stylesheet. Add any overrides before the imported file(s). You can reference [Bootstrap's documentation](https://getbootstrap.com/docs/4.6/getting-started/theming/#variable-defaults) for the names of the available variables.

```scss
// Override default variables before the import
$body-bg: #000;

// Import Bootstrap and its default variables
@import '~bootstrap/scss/bootstrap.scss';
```

Finally, import the newly created `.scss` file instead of the default Bootstrap `.css` in the beginning of your `src/index.js` file, for example:

```js
import './custom.scss';
```

## Available Scripts

In the **project directory**, you can run:

- **`npm start`** Runs the app in the development mode. <http://localhost:3000> .The page will automatically reload if you make changes to the code. You will see the build errors and lint warnings in the console.
- **`npm test`** Runs the test watcher in an interactive mode. By **default**, runs tests related to files changed since the last commit.
- **`npm run build`** Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance. The build is minified and the filenames include the **hashes**.
- **`vercel`** Deploy the current directory
- **`vercel --prod`** Create a production deployment

## More Topics

- [`Making a Progressive Web App`](https://create-react-app.dev/docs/making-a-progressive-web-app/)
- [`progressive-web-apps`](https://web.dev/progressive-web-apps/)
- [`Title and Meta Tags`](https://create-react-app.dev/docs/title-and-meta-tags/)
- [`Redux Documentation`](https://redux.js.org/introduction/getting-started)
- [`React-Context`](https://reactjs.org/docs/context.html)
- [`React-Hooks`](https://duckduckgo.com/?q=react+hooks&t=ffab&atb=v281-1&ia=web)
- [`Running Tests`](https://create-react-app.dev/docs/running-tests)
