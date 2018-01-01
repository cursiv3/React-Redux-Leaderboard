import { connect } from "react-redux";
import Leaderboard from "./Leaderboard";

const mapStateToProps = state => ({
  isFetching: state.isFetching,
  isDataReceived: state.isDataReceived,
  currentBoard: state.currentBoard,
  boards: state.boards
});

export default connect(mapStateToProps, null)(Leaderboard);
