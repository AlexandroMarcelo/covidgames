/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
        seasonPlayer {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getSeason = /* GraphQL */ `
  query GetSeason($id: ID!) {
    getSeason(id: $id) {
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
        allSeasons {
          nextToken
        }
      }
      type
      createdAt
      updatedAt
      seasonPlayer {
        items {
          id
          points
          seasonId
          playerId
          type
          active
          createdAt
          updatedAt
        }
        nextToken
      }
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
        seasonPlayer {
          nextToken
        }
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
      seasonId
      playerId
      type
      active
      createdAt
      updatedAt
      season {
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
        seasonPlayer {
          nextToken
        }
      }
      player {
        id
        name
        email
        createdAt
        updatedAt
        allSeasons {
          nextToken
        }
      }
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
        seasonId
        playerId
        type
        active
        createdAt
        updatedAt
        season {
          id
          number
          startDate
          endDate
          type
          createdAt
          updatedAt
        }
        player {
          id
          name
          email
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const listSeasonByPlayer = /* GraphQL */ `
  query ListSeasonByPlayer(
    $seasonId: ID
    $playerId: ModelIDKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSeasonPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSeasonByPlayer(
      seasonId: $seasonId
      playerId: $playerId
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
        seasonId
        playerId
        type
        active
        createdAt
        updatedAt
        season {
          id
          number
          startDate
          endDate
          type
          createdAt
          updatedAt
        }
        player {
          id
          name
          email
          createdAt
          updatedAt
        }
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
        seasonId
        playerId
        type
        active
        createdAt
        updatedAt
        season {
          id
          number
          startDate
          endDate
          type
          createdAt
          updatedAt
        }
        player {
          id
          name
          email
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const listPlayerSeasonByPoints = /* GraphQL */ `
  query ListPlayerSeasonByPoints(
    $playerId: ID
    $seasonIdPoints: ModelSeasonPlayerPlayerSeasonByPointsCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSeasonPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayerSeasonByPoints(
      playerId: $playerId
      seasonIdPoints: $seasonIdPoints
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
        seasonId
        playerId
        type
        active
        createdAt
        updatedAt
        season {
          id
          number
          startDate
          endDate
          type
          createdAt
          updatedAt
        }
        player {
          id
          name
          email
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const listSeasonsByUser = /* GraphQL */ `
  query ListSeasonsByUser(
    $playerId: ID
    $type: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSeasonPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSeasonsByUser(
      playerId: $playerId
      type: $type
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
        seasonId
        playerId
        type
        active
        createdAt
        updatedAt
        season {
          id
          number
          startDate
          endDate
          type
          createdAt
          updatedAt
        }
        player {
          id
          name
          email
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const listPlayersBySeason = /* GraphQL */ `
  query ListPlayersBySeason(
    $seasonId: ID
    $type: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelSeasonPlayerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlayersBySeason(
      seasonId: $seasonId
      type: $type
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
        seasonId
        playerId
        type
        active
        createdAt
        updatedAt
        season {
          id
          number
          startDate
          endDate
          type
          createdAt
          updatedAt
        }
        player {
          id
          name
          email
          createdAt
          updatedAt
        }
      }
      nextToken
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
        name
        email
        createdAt
        updatedAt
        allSeasons {
          nextToken
        }
      }
      nextToken
    }
  }
`;
export const getPlayer = /* GraphQL */ `
  query GetPlayer($id: ID!) {
    getPlayer(id: $id) {
      id
      name
      email
      createdAt
      updatedAt
      allSeasons {
        items {
          id
          points
          seasonId
          playerId
          type
          active
          createdAt
          updatedAt
        }
        nextToken
      }
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
        createdAt
        updatedAt
        allSeasons {
          nextToken
        }
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
