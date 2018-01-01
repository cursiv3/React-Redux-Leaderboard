import React from "react";
import "./Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: ["#004242", null]
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler(btnId) {
    const newActive = this.state.active.map((val, idx) => {
      if (btnId == idx) {
        return "#004242";
      } else {
        return null;
      }
    });
    this.setState({ active: newActive });
  }

  render() {
    return (
      <div className="leaderHeader">
        <div className="headerBtnRow">
          <div
            className="headerBtn"
            onClick={() => {
              this.clickHandler(0);
              this.props.headerClick("leaderboard");
            }}
            style={{ backgroundColor: this.state.active[0] }}
          >
            <div className="headerBtnTxt">Leaderboard</div>
          </div>
          <div
            className="headerBtn"
            onClick={() => {
              this.clickHandler(1);
              this.props.headerClick("statsboard");
            }}
            style={{ backgroundColor: this.state.active[1] }}
          >
            <div className="headerBtnTxt">Stats</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
