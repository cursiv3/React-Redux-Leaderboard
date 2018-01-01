import { connect } from "react-redux";
import InitApp from "./InitApp";
import { fetchInitData } from "../../state/actions";

const mapDispatchToProps = dispatch => {
  return {
    fetchData: () => {
      dispatch(fetchInitData());
    }
  };
};

export default connect(null, mapDispatchToProps)(InitApp);
