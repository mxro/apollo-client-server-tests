# apollo-client-server-tests

Shows how to write tests for Apollo applications (Node.js backend/ React frontend)

## Build

```
git clone git@github.com:mxro/ apollo-client-server-tests.git
cd apollo-client-server-tests
lerna bootstrap
```

## Development Environment

To spin up a local development server with hot reload, run:

```
yarn build
yarn watch
```

This will perform hot reloads on the main server component `server-main` and React app `client-main`. To enable hot reloading on other components, also run the following in a different terminal window:

```
yarn watch-componentss
```

## Run Tests

To run all tests, run:

```
yarn test
```

## Deploy

To run production version

```
yarn build
PORT=8081 yarn serve
```

## Based on

- [Extensive GraphQL Testing in 3 minutes](https://hackernoon.com/extensive-graphql-testing-57e8760f1c25)
- [Effective Testing a GraphQL Server with Jest and Apolle](https://medium.com/@nzaghini/properly-test-a-graphql-server-d178241464e7)
- [Apollo Server Getting Started](https://www.apollographql.com/docs/apollo-server/getting-started.html)
- [create-react-app](https://github.com/facebook/create-react-app)
- [How to get create-react-app to work with a Node.js back-end API](https://medium.freecodecamp.org/how-to-make-create-react-app-work-with-a-node-backend-api-7c5c48acb1b0)
