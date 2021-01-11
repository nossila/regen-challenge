import React from "react";
import graphql from 'babel-plugin-relay/macro';
import {createFragmentContainer} from "react-relay";
import {ListItemText} from "@material-ui/core";
import ListItemLink from "../components/ListItemLink.js";

const fragmentSpec = {
  issue: graphql`
    fragment IssueListItem on Issue {
      number
      title
      url
    }
  `
}

function IssueListItem({issue}) {
  return <ListItemLink href={issue.url}>
    <ListItemText>#{issue.number} {issue.title}</ListItemText>
  </ListItemLink>;
}

export default createFragmentContainer(IssueListItem, fragmentSpec);
