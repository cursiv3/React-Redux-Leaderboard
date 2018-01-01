import React from "react";
import "./TopBoard.css";

const TopBoard = ({}) => {
  return (
    <div className="userPositionContainer">
      <div className="userPositionTable">
        <div className="userRowDiv">
          <p className="topBoardPlace">243</p>
          <p className="topBoardUser">bigKahuna23</p>
          <p className="topBoardScore">2.34</p>
        </div>
        <div className="userRowDiv">
          <p className="topBoardPlace">244</p>
          <p className="topBoardUser">PLAYER NAME</p>
          <p className="topBoardScore">2.31</p>
        </div>
        <div className="userRowDiv">
          <p className="topBoardPlace">245</p>
          <p className="topBoardUser">fruitVendor</p>
          <p className="topBoardScore">2.25</p>
        </div>
      </div>
    </div>
  );
};

export default TopBoard;
