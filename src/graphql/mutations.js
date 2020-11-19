/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSeason = /* GraphQL */ `
  mutation CreateSeason(
    $input: CreateSeasonInput!
    $condition: ModelSeasonConditionInput
  ) {
    createSeason(input: $input, condition: $condition) {
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
export const updateSeason = /* GraphQL */ `
  mutation UpdateSeason(
    $input: UpdateSeasonInput!
    $condition: ModelSeasonConditionInput
  ) {
    updateSeason(input: $input, condition: $condition) {
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
export const deleteSeason = /* GraphQL */ `
  mutation DeleteSeason(
    $input: DeleteSeasonInput!
    $condition: ModelSeasonConditionInput
  ) {
    deleteSeason(input: $input, condition: $condition) {
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
export const createSeasonPlayer = /* GraphQL */ `
  mutation CreateSeasonPlayer(
    $input: CreateSeasonPlayerInput!
    $condition: ModelSeasonPlayerConditionInput
  ) {
    createSeasonPlayer(input: $input, condition: $condition) {
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
export const updateSeasonPlayer = /* GraphQL */ `
  mutation UpdateSeasonPlayer(
    $input: UpdateSeasonPlayerInput!
    $condition: ModelSeasonPlayerConditionInput
  ) {
    updateSeasonPlayer(input: $input, condition: $condition) {
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
export const deleteSeasonPlayer = /* GraphQL */ `
  mutation DeleteSeasonPlayer(
    $input: DeleteSeasonPlayerInput!
    $condition: ModelSeasonPlayerConditionInput
  ) {
    deleteSeasonPlayer(input: $input, condition: $condition) {
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
export const createPlayer = /* GraphQL */ `
  mutation CreatePlayer(
    $input: CreatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    createPlayer(input: $input, condition: $condition) {
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
export const updatePlayer = /* GraphQL */ `
  mutation UpdatePlayer(
    $input: UpdatePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    updatePlayer(input: $input, condition: $condition) {
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
export const deletePlayer = /* GraphQL */ `
  mutation DeletePlayer(
    $input: DeletePlayerInput!
    $condition: ModelPlayerConditionInput
  ) {
    deletePlayer(input: $input, condition: $condition) {
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
export const createQuestion = /* GraphQL */ `
  mutation CreateQuestion(
    $input: CreateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    createQuestion(input: $input, condition: $condition) {
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
export const updateQuestion = /* GraphQL */ `
  mutation UpdateQuestion(
    $input: UpdateQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    updateQuestion(input: $input, condition: $condition) {
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
export const deleteQuestion = /* GraphQL */ `
  mutation DeleteQuestion(
    $input: DeleteQuestionInput!
    $condition: ModelQuestionConditionInput
  ) {
    deleteQuestion(input: $input, condition: $condition) {
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
