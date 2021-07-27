/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCommodityTable = /* GraphQL */ `
  query GetCommodityTable($id: ID!) {
    getCommodityTable(id: $id) {
      id
      commodity
      price
      om
      sm
      createdAt
      updatedAt
    }
  }
`;
export const listCommodityTables = /* GraphQL */ `
  query ListCommodityTables(
    $filter: ModelCommodityTableFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCommodityTables(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        commodity
        price
        om
        sm
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
