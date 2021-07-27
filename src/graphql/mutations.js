/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCommodityTable = /* GraphQL */ `
  mutation CreateCommodityTable(
    $input: CreateCommodityTableInput!
    $condition: ModelCommodityTableConditionInput
  ) {
    createCommodityTable(input: $input, condition: $condition) {
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
export const updateCommodityTable = /* GraphQL */ `
  mutation UpdateCommodityTable(
    $input: UpdateCommodityTableInput!
    $condition: ModelCommodityTableConditionInput
  ) {
    updateCommodityTable(input: $input, condition: $condition) {
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
export const deleteCommodityTable = /* GraphQL */ `
  mutation DeleteCommodityTable(
    $input: DeleteCommodityTableInput!
    $condition: ModelCommodityTableConditionInput
  ) {
    deleteCommodityTable(input: $input, condition: $condition) {
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
