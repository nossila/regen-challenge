import React, {useState} from "react";
import {createPaginationContainer} from "react-relay";
import {List} from "@material-ui/core";
import IssueListItem from "./IssueListItem.js";
import {fragmentSpec, query} from "./Issues.query.js";
import ButtonLoading from "../components/ButtonLoading.js";

function Issues({repository, relay, count}) {
  const [isLoading, setLoading] = useState(false);
  const hasMore = relay.hasMore();

  function handleLoadMore() {
    if (!hasMore || relay.isLoading()) {
      return;
    }

    setLoading(true);
    relay.loadMore(count, (error) => {
      if (error) console.error(error);
      setLoading(false);
    });
  }

  return <div>
    <h2>Total issues found: {repository.issues.totalCount}</h2>
    <List>
      {repository.issues.edges.map(issue => (
        <IssueListItem
          key={issue.node.id}
          issue={issue.node}
        />
      ))}
    </List>
    <ButtonLoading
      variant="outlined"
      color="primary"
      disabled={!hasMore || isLoading}
      onClick={handleLoadMore}
			isLoading={isLoading}
    >
      {!hasMore ? "the end!" : "load more"}
    </ButtonLoading>
  </div>;
}

Issues.defaultProps = {
  count: 30
}

export default createPaginationContainer(
  Issues,
  fragmentSpec,
  {
    direction: "forward",
    query: query,
    getConnectionFromProps(props) {
      return props.repository.issues;
    },
    getVariables(props, paginationInfo, fragmentVariables) {
      return {
        count: props.count,
        ...fragmentVariables,
        ...paginationInfo,
      };
    },
  }
);
