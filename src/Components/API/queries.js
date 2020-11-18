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
export const listSeasons = /* GraphQL */ `
  query ListSeasons(
    $filter: ModelSeasonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSeasons(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        number
        startDate
        endDate
        leaderboard {
          id
          name
          email
          createdAt
          updatedAt
        }
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listSeasonsByDate = /* GraphQL */ `
  query ListSeasonsByDate(
    $type: String
    $startDate: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSeasonFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSeasonsByDate(
      type: $type
      startDate: $startDate
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        number
        startDate
        endDate
        leaderboard {
          id
          name
          email
          createdAt
          updatedAt
        }
        type
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listSeasonsByPoints = /* GraphQL */ `
  query ListSeasonsByPoints(
    $seasonId: ID
    $points: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSeasonPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSeasonsByPoints(
      seasonId: $seasonId
      points: $points
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        points
        season {
          number
        }
        seasonId
        player {
          name
        }
      }
      nextToken
    }
  }
`;
export const getUserByEmail = /* GraphQL */ `
  query GetUserByEmail(
    $email: String
    $sortDirection: ModelSortDirection
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getUserByEmail(
      email: $email
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        email
        currentSeason {
          id
          points
          seasonId
          playerId
          createdAt
          updatedAt
        }
        allSeasons {
          id
          points
          seasonId
          playerId
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const listQuesionsByTopic = /* GraphQL */ `
  query ListQuesionsByTopic(
    $topic: String
    $sortDirection: ModelSortDirection
    $filter: ModelQuestionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listQuesionsByTopic(
      topic: $topic
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        question
        answer
        options
      }
      nextToken
    }
  }
`;