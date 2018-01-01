import { connect } from "react-redux";
import Board from "./Board";

const mapStateToProps = state => ({
  boardData: state.boards,
  currentBoard: state.currentBoard
});

export default connect(mapStateToProps, null)(Board);
