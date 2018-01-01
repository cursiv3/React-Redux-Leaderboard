import React from "react";

const GameStats = () => (
  <div>
    <h3>Game Stats</h3>
    <ul>
      {props.statistics.map(stats => {
        return (
          <li id={stats.key} role="presentation">
            <a href="#">{stats.val}</a>
          </li>
        );
      })}
    </ul>
  </div>
);

export default GameStats;
