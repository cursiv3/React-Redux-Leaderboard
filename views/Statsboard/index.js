import { connect } from "react-redux";
import Statsboard from "./Statsboard";

const mapStateToProps = state => ({
  stats: state.stats,
  currentBoard: state.currentBoard
});

export default connect(mapStateToProps, null)(Statsboard);
