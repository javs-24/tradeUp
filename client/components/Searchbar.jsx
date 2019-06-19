import React from "react";
import { connect } from "react-redux";
import * as actions from "../actions/actions";

const mapStateToProps = store => ({
  store: store.products.searchBy
});

const mapDispatchToProps = dispatch => ({
  search_by: banana => dispatch(actions.search_by(banana)),
  search_byClick: s => dispatch(actions.search_byClick(s))
});

function Search({ search_by, search_byClick, store }) {
  return (
    <div>
      <input
        id="searchInput"
        placeholder="What category are you looking for?"
        onChange={event => search_by(event.target.value)}
      />
      <button onClick={e => search_byClick(store)} id="searchBtn">
        Search
      </button>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
