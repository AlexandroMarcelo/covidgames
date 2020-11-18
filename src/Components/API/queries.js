export const listQuestions = /* GraphQL */ `
  query ListQuestions(
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuestions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        question
        answer
        options
        topic
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;