import Time from './time';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return { time: state.time.currentTime };
};

const TimeContainer = connect(
    mapStateToProps
)(Time);

export default TimeContainer;
