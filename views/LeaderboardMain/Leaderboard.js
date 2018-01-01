import React from "react";
import Board from "./Board";
import TopBoard from "./TopBoard/TopBoard";
import "./Leaderboard.css";

const Leaderboard = ({ isFetching, isDataReceived, boards, currentBoard }) => {
  return (
    <div className="boardContainer">
      <div name="SPACER DIV" style={{ width: "100%", height: "12%" }} />

      {isDataReceived ? <TopBoard /> : <h3>...Loading</h3>}

      <div className="currentFilter">
        <p>
          {currentBoard == 0 && "All Time"}
          {currentBoard == 1 && "Today"}
          {currentBoard == 2 && "This Week"}
          {currentBoard == 3 && "This Month"}
        </p>
      </div>

      {isDataReceived ? <Board /> : <h1>Loading...</h1>}
      <div name="SPACER DIV" style={{ width: "100%", height: "10%" }} />
    </div>
  );
};

export default Leaderboard;
