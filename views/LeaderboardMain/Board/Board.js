import React from "react";
import "./Board.css";

class Board extends React.Component {
  render() {
    const boardData = this.props.boardData;
    const scoreTimeFilter = this.props.currentBoard;
    return (
      <div className="boardTable">
        <div>
          {boardData[scoreTimeFilter].map((d, idx) => {
            return (
              <div key={idx} className="userData">
                <p className="boardPlace">{d.place}</p>
                <img className="userAvatar" src={d.avatar} />
                <p className="boardUser">{d.name}</p>
                <p className="boardScore">{d.avg_score - idx}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Board;
