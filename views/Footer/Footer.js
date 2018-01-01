import React from "react";
import "./Footer.css";

class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      active: ["#004242", null, null, null]
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
    const { viewAllTime, viewDay, viewWeek, viewMonth } = this.props;
    return (
      <div className="filterFooter">
        <div className="filterBtnRow">
          <div
            className="filterBtn"
            onClick={e => {
              viewAllTime();
              this.clickHandler(0);
            }}
            style={{ backgroundColor: this.state.active[0] }}
          >
            <div className="btnTxt">All Time</div>
          </div>
          <div
            className="filterBtn"
            onClick={e => {
              viewDay();
              this.clickHandler(1);
            }}
            style={{ backgroundColor: this.state.active[1] }}
          >
            <div className="btnTxt">Day</div>
          </div>
          <div
            className="filterBtn"
            onClick={e => {
              viewWeek();
              this.clickHandler(2);
            }}
            style={{ backgroundColor: this.state.active[2] }}
          >
            <div className="btnTxt">Week</div>
          </div>
          <div
            className="filterBtn"
            onClick={e => {
              viewMonth();
              this.clickHandler(3);
            }}
            style={{ backgroundColor: this.state.active[3] }}
          >
            <div className="btnTxt">Month</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
