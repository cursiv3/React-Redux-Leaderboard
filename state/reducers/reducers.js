import * as actionTypes from "../actionTypes";

export const isFetching = (state = false, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_INIT_DATA:
      return true;
    case actionTypes.RECEIVED_INIT_DATA:
      return false;
    default:
      return state;
  }
};

export const isDataReceived = (state = false, action) => {
  switch (action.type) {
    case actionTypes.RECEIVED_INIT_DATA:
      return true;
    default:
      return state;
  }
};

export const boards = (state = [], action) => {
  switch (action.type) {
    case actionTypes.RECEIVED_INIT_DATA:
      return action.payload.leaderboard;
    default:
      return state;
  }
};

export const stats = (state = [], action) => {
  switch (action.type) {
    case actionTypes.RECEIVED_INIT_DATA:
      return action.payload.stats;
    default:
      return state;
  }
};

export const currentBoard = (state = 0, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_BOARD_TO_ALLTIME:
      return 0;
    case actionTypes.CHANGE_BOARD_TO_DAY:
      return 1;
    case actionTypes.CHANGE_BOARD_TO_WEEK:
      return 2;
    case actionTypes.CHANGE_BOARD_TO_MONTH:
      return 3;
    default:
      return state;
  }
};
