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