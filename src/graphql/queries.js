/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSeason = /* GraphQL */ `
  query GetSeason($id: ID!) {
    getSeason(id: $id) {
      id
      number
      startDate
      endDate
      leaderboard {
        id
        email
        name
        currentSeasons {
          id
          points
          seasonId
          createdAt
          updatedAt
        }
        allSeasons {
          id
          points
          seasonId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      type
      createdAt
      updatedAt
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
          email
          name
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
export const getSeasonPlayer = /* GraphQL */ `
  query GetSeasonPlayer($id: ID!) {
    getSeasonPlayer(id: $id) {
      id
      points
      answeredQuestions {
        question {
          id
          question
          answer
          options
          topic
          createdAt
          updatedAt
        }
        givenAnswer
        correct
        bet
        timeToAnswer
      }
      season {
        id
        number
        startDate
        endDate
        leaderboard {
          id
          email
          name
          createdAt
          updatedAt
        }
        type
        createdAt
        updatedAt
      }
      seasonId
      player {
        id
        email
        name
        currentSeasons {
          id
          points
          seasonId
          createdAt
          updatedAt
        }
        allSeasons {
          id
          points
          seasonId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listSeasonPlayers = /* GraphQL */ `
  query ListSeasonPlayers(
    $filter: ModelSeasonPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSeasonPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        points
        answeredQuestions {
          givenAnswer
          correct
          bet
          timeToAnswer
        }
        season {
          id
          number
          startDate
          endDate
          type
          createdAt
          updatedAt
        }
        seasonId
        player {
          id
          email
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
      id
      email
      name
      currentSeasons {
        id
        points
        answeredQuestions {
          givenAnswer
          correct
          bet
          timeToAnswer
        }
        season {
          id
          number
          startDate
          endDate
          type
          createdAt
          updatedAt
        }
        seasonId
        player {
          id
          email
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      allSeasons {
        id
        points
        answeredQuestions {
          givenAnswer
          correct
          bet
          timeToAnswer
        }
        season {
          id
          number
          startDate
          endDate
          type
          createdAt
          updatedAt
        }
        seasonId
        player {
          id
          email
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPlayers = /* GraphQL */ `
  query ListPlayers(
    $filter: ModelPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        name
        currentSeasons {
          id
          points
          seasonId
          createdAt
          updatedAt
        }
        allSeasons {
          id
          points
          seasonId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getQuestion = /* GraphQL */ `
  query GetQuestion($id: ID!) {
    getQuestion(id: $id) {
      id
      question
      answer
      options
      topic
      createdAt
      updatedAt
    }
  }
`;
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
          email
          name
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
        answeredQuestions {
          givenAnswer
          correct
          bet
          timeToAnswer
        }
        season {
          id
          number
          startDate
          endDate
          type
          createdAt
          updatedAt
        }
        seasonId
        player {
          id
          email
          name
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
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
        email
        name
        currentSeasons {
          id
          points
          seasonId
          createdAt
          updatedAt
        }
        allSeasons {
          id
          points
          seasonId
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
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
        topic
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
