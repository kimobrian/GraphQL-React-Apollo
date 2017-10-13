import React from 'react';
import { render } from 'react-dom';
import '../style/app.scss';
import ChannelList from './components/ChannelList/ChannelList';
import CreateChannel from './components/CreateChannel/CreateChannel';
import { SubscriptionClient, addGraphQLSubscriptions } from 'subscriptions-transport-ws';
import {
 ApolloClient,
 ApolloProvider,
 createNetworkInterface
} from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:7900/graphql',
});

const wsClient = new SubscriptionClient(`ws://localhost:7900/subscriptions`, {
  reconnect: true
});

// Extend the network interface with the WebSocket
const networkInterfaceWithSubscriptions = addGraphQLSubscriptions(
  networkInterface,
  wsClient
);

const client = new ApolloClient({
   networkInterface : networkInterfaceWithSubscriptions
});

let app = document.querySelector('#app');

render(
    <ApolloProvider client={client}>
      <div className="App">
        <h3 className="center">React , GraphQL , Apollo</h3>
        <div className="row">
            <div className="col-lg-4 col-lg-offset-4">
                <CreateChannel /><br/>
                <ChannelList />
            </div>
        </div>
      </div>
    </ApolloProvider>,
    app
)
