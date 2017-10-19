# GraphQL-React-Apollo
A GraphQL implementation in React using Apollo.

This repo is a client side implementation of GraphQL and is connected to a server side implementation [repo](https://github.com/kimobrian/GraphQL-Express). Setup the server before setting up the client.

Branch matching:

| Client   |      Server      |
|----------|:-------------:|
| develop |  master |
| subscriptions |    subscriptions   |
| update | master |
| subs-b <For subscriptions part in article> | subscriptions |

Articles:
- [Implementing GraphQL in React using Apollo](https://scotch.io/tutorials/implementing-graphql-in-react-using-apollo) - Use branch develop(default)
- Realtime GraphQL UI Updates in React with Apollo(Yet to be published) - Use branch subscriptions for [refetch](https://scotch.io/@johnkariuki/realtime-graphql-ui-updates-in-react-with-apollo#toc-refetch) part, subscriptions for [update](https://scotch.io/@johnkariuki/realtime-graphql-ui-updates-in-react-with-apollo#toc-updating-the-store) part and subs-b for (subscriptions)[https://scotch.io/@johnkariuki/realtime-graphql-ui-updates-in-react-with-apollo#toc-subscriptions] part.
### Setup

```
git clone git@github.com:kimobrian/GraphQL-React-Apollo.git

cd GraphQL-React-Apollo

yarn  # alternatively npm install

yarn start # Start the Application.

```
