import { connect } from "react-redux";
import {
  viewAlltimeScores,
  viewDayScores,
  viewWeekScores,
  viewMonthScores
} from "../../../state/actions";
import Footer from "./Footer";

const mapDispatchToProps = dispatch => {
  return {
    viewAllTime: () => dispatch(viewAlltimeScores(0)),
    viewDay: () => dispatch(viewDayScores(1)),
    viewWeek: () => dispatch(viewWeekScores(2)),
    viewMonth: () => dispatch(viewMonthScores(3))
  };
};

export default connect(null, mapDispatchToProps)(Footer);
