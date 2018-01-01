import React from "react";
import WordsByLength from "./statsD3/WordsByLength/WordsByLength";
import WordsByDifficulty from "./statsD3/WordsByDifficulty/WordsByDifficulty";
import WordsByCategory from "./statsD3/WordsByCategory/WordsByCategory";
import CategoryCompletion from "./statsD3/CategoryCompletion/CategoryCompletion";
import "./Statsboard.css";

const Statsboard = props => {
  console.log(props.stats);
  console.log(props.currentBoard);
  const boardsArray = props.stats.statsBoards;
  const board = props.currentBoard;
  const catCompletion = boardsArray[board].percentCategoryComplete;
  return (
    <div className="statsBoardContainer">
      <div name="SPACER DIV" style={{ width: "100%", height: "12%" }} />

      <div className="statsCurrentFilter">
        <p>
          {statBoard == 0 && "All Time"}
          {statBoard == 1 && "Today"}
          {statBoard == 2 && "This Week"}
          {statBoard == 3 && "This Month"}
        </p>
      </div>
      <div className="statsBoxContainer">
        <div className="statsBox">
          <p>Total Points:</p> <h1>{stat[statBoard].totalPoints}</h1>
        </div>
        <div className="statsBox">
          <p>Highest Score:</p> <h1>{stat[statBoard].highestScore}</h1>
        </div>
        <div className="statsBox">
          <p>Average Score:</p> <h1>{stat[statBoard].averageScore}</h1>
        </div>
        <div className="statsBox">
          <p>Games Played:</p> <h1>{stat[statBoard].totalNumber}</h1>
        </div>
        <div className="statsBox">
          <p>
            Average # Games Played {statBoard == 0 && "All Time"}
            {statBoard == 1 && "Today"}
            {statBoard == 2 && "This Week"}
            {statBoard == 3 && "This Month"}:
          </p>{" "}
          <h1>{stat[statBoard].averageNumber}</h1>
        </div>
        <div className="statsBox">
          <p>Words Guessed Using No Hints:</p>{" "}
          <h1>{stat[statBoard].numberOfWordsGuessedWithNoHintsUsed}</h1>
        </div>
        <div className="statsBox">
          <p>Longest Win Streak:</p> <h1>{stat[statBoard].longestWinStreak}</h1>
        </div>
        <div className="statsBox">
          <p>Longest Lose Streak:</p>{" "}
          <h1>{stat[statBoard].longestLostStreak}</h1>
        </div>
      </div>
      <WordsByLength data={stat[statBoard].numberOfWordsGuessedByLength} />
      <WordsByDifficulty
        data={stat[statBoard].numberOfWordsGuessedByDifficulty}
      />
      <WordsByCategory data={stat[statBoard].numberOfWordsGuessedByCategory} />

      <p className="categoryCompletionHeader">Category Completion</p>

      {catCompletion.map((val, idx) => (
        <div className="categoryCompletionBox" key={idx}>
          <CategoryCompletion data={[val]} />
        </div>
      ))}
      <div name="SPACER DIV" style={{ width: "100%", height: "10%" }} />
    </div>
  );
};

export default Statsboard;
