import React from "react";
import {QueryRenderer} from 'react-relay';
import graphql from 'babel-plugin-relay/macro';
import environment from "../relay.js";
import Issues from "./Issues.js";

const issuesCount = 10;

const query = graphql`
  query RepositoryQuery(
    $name: String!
    $owner: String!
    $issuesCount: Int!
  ) { 
    repository(name: $name, owner: $owner) {
      name
      ...IssuesList_repository @arguments(count: $issuesCount)
    }
  }`

export default function Repository({name, owner}) {
  return <QueryRenderer
    environment={environment}
    query={query}
    variables={{name, owner, issuesCount}}
    render={({error, props}) => {
      if (error) {
        return <div>Error!</div>;
      }
      if (!props) {
        return <div>Loading...</div>;
      }

      return <div>
        <h1>{props.repository.name}</h1>

        <Issues repository={props.repository} count={issuesCount} />
      </div>
    }}
  />
}

