import React from "react";
import {QueryRenderer} from "react-relay";
import graphql from 'babel-plugin-relay/macro';
import {Typography} from "@material-ui/core";
import environment from "../relay.js";
import Issues from "./Issues.js";
import PageLoading from "../components/PageLoading.js";

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

export default function Repository({classes, name, owner}) {
  return <QueryRenderer
    environment={environment}
    query={query}
    variables={{name, owner, issuesCount}}
    render={({error, props}) => {
      if (error) {
        return <div>Error while retrieving data from the server!</div>;
      }

      if (!props) {
        return <PageLoading />;
      }

      return <div>
        <Typography variant="h2" component="h1">{props.repository.name}</Typography>

        <Issues repository={props.repository} count={issuesCount} />
      </div>
    }}
  />
}
