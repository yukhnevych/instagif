import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Counter = ({
    current,
    total
}) => <>{ `${current} / ${total}` }</>;

const mapStateToProps = ({ gifs }) => ({
    total: gifs.total,
    current: gifs.current
});

Counter.propTypes = {
    total: PropTypes.number,
    current: PropTypes.number
}

export const ConnectedCounter = connect(mapStateToProps)(Counter);
