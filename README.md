# Cosmos SDK's issues

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run

1. make sure you have node version 14 or higher, if you got [nvm](https://github.com/nvm-sh/nvm) installed you can just use `nvm use`

2. make sure you have [yarn](https://yarnpkg.com) installed, if not: `npm install -g yarn` 

3. install dependencies with `yarn install`

4. get a [Github Developers' Token](https://github.com/settings/tokens) at `Settings > Developer settings > Personal access tokens` if you don't have one you need to create one, no scopes are needed.

5. edit file `.env` and set the variable `REACT_APP_GITHUB_TOKEN` with the token you got in the precious step.

6. run the app `yarn start`

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn relay`

Relay uses the Relay Compiler to convert graphql literals into generated files that live alongside your source files.

See the section about [relay compiler](https://relay.dev/docs/en/graphql-in-relay.html#relay-compiler) for more information.

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)
