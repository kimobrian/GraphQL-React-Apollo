import React, { Component } from 'react';
import {
  gql,
  graphql
} from 'react-apollo';

 class ChannelsList extends Component {

 componentWillMount() {
   this.props.data.subscribeToMore({
     document: channelSubscription,  // Use the subscription
     updateQuery: (prev, {subscriptionData}) => {
       if (!subscriptionData.data) {
         return prev;
       }

       const newChannel = subscriptionData.data.channelAdded;
       // Add check to prevent double adding of channels.
       if (!prev.channels.find((channel) => channel.name === newChannel.name)) {
         let updatedChannels = Object.assign({}, prev, { channels :[...prev.channels, newChannel ] });
         return updatedChannels;
       } else {
         return prev;
       }
     }
   });
 }

  render() {
    const { data: {loading, error, channels }, match } = this.props;

    if (loading) {
      return <p>Loading ...</p>;
    }
    if (error) {
      return <p>{error.message}</p>;
    }

    return (
        <ul className="list-group">
            { channels.map( ch => <li className="list-group-item"key={ch.id}>{ch.name}</li> ) }
        </ul>
    );
  }
}

export const channelsListQuery = gql`
   query ChannelsListQuery {
     channels {
       id
       name
     }
   }
 `;

 const channelSubscription = gql`
    subscription Channels {
     channelAdded {
       id
       name
     }
    }
`
const ChannelsListWithData = graphql(channelsListQuery)(ChannelsList);
export default ChannelsListWithData;
