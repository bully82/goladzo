/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTeams = /* GraphQL */ `
  query GetTeams($id: ID!) {
    getTeams(id: $id) {
      Id
      Name
      id
      createdAt
      updatedAt
    }
  }
`;
export const listTeams = /* GraphQL */ `
  query ListTeams(
    $filter: ModelTeamsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTeams(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        Id
        Name
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
