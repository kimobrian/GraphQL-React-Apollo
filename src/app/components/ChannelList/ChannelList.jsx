import React, { Component } from 'react';
import {
  gql,
  graphql
} from 'react-apollo';

const ChannelsList = ({ data: {loading, error, channels }}) => {
   if (loading) {
     return <p>Loading ...</p>;
   }
   if (error) {
     return <p>{error.message}</p>;
   }

   return <ul className="list-group">
     { channels.map( ch => <li className="list-group-item"key={ch.id}>{ch.name}</li> ) }
   </ul>;
 };

const channelsListQuery = gql`
   query ChannelsListQuery {
     channels {
       id
       name
     }
   }
 `;
const ChannelsListWithData = graphql(channelsListQuery)(ChannelsList);
export default ChannelsListWithData;
