import React, { Component } from 'react';
import {
  gql,
  graphql
} from 'react-apollo';

const CreateChannel = ({mutate}) => {
    const handleKeyUp = (evt) => {
      if (evt.keyCode === 13) {
        evt.persist();
        mutate({
          variables: { name: evt.target.value }
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
