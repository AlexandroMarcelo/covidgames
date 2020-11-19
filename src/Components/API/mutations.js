export const createPlayer = /* GraphQL */ `
mutation CreatePlayer(
  $input: CreatePlayerInput!
  $condition: ModelPlayerConditionInput
) {
  createPlayer(input: $input, condition: $condition) {
    id
    email
  }
}
`;
export const updateSeasonPlayer = /* GraphQL */ `
  mutation UpdateSeasonPlayer(
    $input: UpdateSeasonPlayerInput!
    $condition: ModelSeasonPlayerConditionInput
  ) {
    updateSeasonPlayer(input: $input, condition: $condition) {
      id
      points
    }
  }
`;
export const createSeasonPlayer = /* GraphQL */ `
  mutation CreateSeasonPlayer(
    $input: CreateSeasonPlayerInput!
    $condition: ModelSeasonPlayerConditionInput
  ) {
    createSeasonPlayer(input: $input, condition: $condition) {
      id
    }
  }
`;