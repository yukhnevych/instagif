import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchGifs, setSearchQuery } from '../store/actions';

export const Searchbox = ({
    query,
    fetchGifs,
    setSearchQuery
}) => <div className="field has-addons">
    <div className="control">
        <input className="input is-rounded"
            name="search"
            type="text"
            placeholder="Search Giphy"
            value={ query }
            onChange={ e => setSearchQuery(e.target.value) }
            onKeyPress={ e => e.key === 'Enter' && fetchGifs(query) }
        />
    </div>
    <div className="control">
        <button className="button is-grey is-rounded"
            type="button"
            onClick={ e => fetchGifs(query) }>
            Search
        </button>
    </div>
</div>;

const mapStateToProps = ({ search }) => ({
    query: search.query
});

const mapDispatchToProps = {
    fetchGifs,
    setSearchQuery
};

Searchbox.propTypes = {
    query: PropTypes.string,
    fetchGifs: PropTypes.func,
    setSearchQuery: PropTypes.func,
}

export const ConnectedSearchbox = connect(mapStateToProps, mapDispatchToProps)(Searchbox);
