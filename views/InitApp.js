import React from "react";
import Leaderboard from "./LeaderboardMain";
import Statsboard from "./Statsboard";
import Header from "./Header/Header";
import Footer from "./Footer";

class InitApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLeaderboardActive: true,
      isStatsboardActive: false
    };
    this.headerClick = this.headerClick.bind(this);
  }

  headerClick(id) {
    if (id == "leaderboard") {
      this.setState({
        isLeaderboardActive: true,
        isStatsboardActive: false
      });
    } else {
      this.setState({
        isLeaderboardActive: false,
        isStatsboardActive: true
      });
    }
  }

  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div>
        <Header headerClick={this.headerClick} />
        {this.state.isLeaderboardActive && <Leaderboard />}
        {this.state.isStatsboardActive && <Statsboard />}
        <Footer />
      </div>
    );
  }
}

export default InitApp;
