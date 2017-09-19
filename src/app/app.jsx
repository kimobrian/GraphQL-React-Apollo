import React from 'react';
import { render } from 'react-dom';
import '../style/app.scss';
import ChannelList from './components/ChannelList/ChannelList';
import CreateChannel from './components/CreateChannel/CreateChannel';
import {
 ApolloClient,
 ApolloProvider,
 createNetworkInterface
} from 'react-apollo';

const networkInterface = createNetworkInterface({
  uri: 'http://localhost:7700/graphql',
});

networkInterface.use([{
  applyMiddleware(req, next) {
    setTimeout(next, 1000);
  },
}]);

const client = new ApolloClient({
   networkInterface,
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
