import graphql from 'babel-plugin-relay/macro';

const fragmentQuery = graphql`
  fragment IssuesList_repository on Repository
    @argumentDefinitions(
      count: { type: "Int", defaultValue: 30 }
      cursor: { type: "String" }
    ) {
    issues(first: $count, after: $cursor)  @connection(key: "Repository_issues") {
      totalCount
      edges {
        node {
          id
          ...IssueListItem
        }
      }
    }
  }
`;

export const fragmentSpec = {
    repository: fragmentQuery,
};

export const query = graphql`
  query IssuesListQuery(
    $name: String!
    $owner: String!
    $count: Int!
    $cursor: String
  ) {
    repository(
      name: $name
      owner: $owner
    ) {
      ...IssuesList_repository
        @arguments(
          count: $count
          cursor: $cursor
        )
    }
  }
`;
