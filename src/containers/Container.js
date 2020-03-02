import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { STATUS } from '../constants';
import { fetchGifs, loadMoreGifs } from '../store/actions';
import { List } from '../components/List';
import { Loader } from '../components/Loader';
import { Empty } from '../components/Empty';
import { Error } from '../components/Error';

export class Container extends Component {
    componentDidMount() {
        this.props.fetchGifs(this.props.query);

        window.onscroll = () => {
            const el = document.documentElement;
            const scrollTop = window.innerHeight + el.scrollTop;

            if (scrollTop === el.offsetHeight && this.props.gifs.status !== STATUS.LOADING) {
                this.props.loadMoreGifs(this.props.query, this.props.gifs.current);
            }
        };
    }

    render() {
        const gifs = this.props.gifs;
        const { current, status } = gifs;

        if (status === STATUS.ERROR) {
            return <Error />
        }

        if (current === 0) {
            if (status === STATUS.LOADING) {
                return <Loader />;
            }

            return <Empty />
        }

        return <Fragment>
            <List gifs={ gifs } />
            { status === STATUS.LOADING && <Loader small={ true } /> }
        </Fragment>;
    }
}

const mapStateToProps = ({ gifs, search }) => ({
    gifs,
    query: search.query
});

const mapDispatchToProps = {
    fetchGifs,
    loadMoreGifs
};

Container.propTypes = {
    fetchGifs: PropTypes.func,
    loadMoreGifs: PropTypes.func,
    query: PropTypes.string,
    gifs: PropTypes.object
};

export const ConnectedContainer = connect(mapStateToProps, mapDispatchToProps)(Container);
