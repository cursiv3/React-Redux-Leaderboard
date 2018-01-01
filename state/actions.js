const axios = require("axios");
import * as actionTypes from "./actionTypes";

// mock account data, combining with json data
const statsMockData = require("./statsMock.js");

export const requestInitData = () => {
  return { type: actionTypes.FETCHING_INIT_DATA };
};

export const receiveInitData = json => {
  return {
    type: actionTypes.RECEIVED_INIT_DATA,
    payload: {
      leaderboard: [
        json.allTimeLeaderboard.data,
        json.dayLeaderboard.data,
        json.weekLeaderboard.data,
        json.monthLeaderboard.data
      ],
      stats: statsMockData
    }
  };
};

// todo: add functionality to view basic boards while not logged in
export const fetchInitData = () => {
  return dispatch => {
    dispatch(requestInitData());
    return axios.all([axios.get("https://localhost:4005/")]).then(res => {
      dispatch(receiveInitData(res[0].data.leaderboards));
    });
  };
};

export const viewAlltimeScores = board => {
  return { type: actionTypes.CHANGE_BOARD_TO_ALLTIME, payload: board };
};

export const viewDayScores = board => {
  return { type: actionTypes.CHANGE_BOARD_TO_DAY, payload: board };
};

export const viewWeekScores = board => {
  return { type: actionTypes.CHANGE_BOARD_TO_WEEK, payload: board };
};

export const viewMonthScores = board => {
  return { type: actionTypes.CHANGE_BOARD_TO_MONTH, payload: board };
};
