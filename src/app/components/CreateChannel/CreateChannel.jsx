import React, { Component } from 'react';
import {
  gql,
  graphql
} from 'react-apollo';
import { channelsListQuery } from '../ChannelList/ChannelList';

const CreateChannel = ({mutate}) => {
    const handleKeyUp = (evt) => {
      if (evt.keyCode === 13) {
        evt.persist();
        mutate({
          variables: { name: evt.target.value },
          optimisticResponse: {
             addChannel: {
               name: evt.target.value,
               id: Math.round(Math.random() * -1000000), // Generate a random ID
               __typename: 'Channel',
             },
          },
          update: (store, { data: { addChannel } }) => {
            // Read the data from the cache for this query.
            const data = store.readQuery({query: channelsListQuery });
            // Add our channel from the mutation to the end.
            data.channels.push(addChannel);
            // Write the data back to the cache.
            store.writeQuery({ query: channelsListQuery, data });
          }
        })
        .then( res => {
          evt.target.value = '';
        });
      }
  };

  return (
    <input
      type="text"
      className="form-control"
      placeholder="New channel"
      onKeyUp={handleKeyUp}
    />
  );
};

const CreateChannelMutation = gql`
  mutation addChannel($name: String!) {
    addChannel(name: $name) {
      id
      name
    }
  }
`;

const CreateChannelWithMutation = graphql(
  CreateChannelMutation
)(CreateChannel);

export default CreateChannelWithMutation;
