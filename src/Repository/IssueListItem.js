import React from "react";
import graphql from 'babel-plugin-relay/macro';
import {createFragmentContainer} from "react-relay";

const fragmentSpec = {
  issue: graphql`
    fragment IssueListItem on Issue {
      title
      closed
      resourcePath
    }
  `
}

function IssueListItem({issue}) {
  return <li><a href={`https://github.com/${issue.resourcePath}`}>{issue.title}</a> - {issue.closed ? "Closed" : "Openned"}</li>;
}

export default createFragmentContainer(IssueListItem, fragmentSpec);
