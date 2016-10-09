import Time from './time';
import { connect } from 'react-redux';
import { updateTime } from '../../actions/actions';

const mapStateToProps = (state) => ({ 
    time: state.time.currentTime
});

const mapDispatchToProps = (dispatch) => {
    setInterval(() => {
        dispatch(updateTime());
    }, 10);

    return {};
};

const TimeContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Time);

export default TimeContainer;
