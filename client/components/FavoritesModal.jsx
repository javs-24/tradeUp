import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';

import * as actions from '../actions/actions';

const mapStateToProps = store => ({
  favorites: store.items.favorites
});

const mapDispatchToProps = dispatch => ({
  exitFavorites: () => dispatch(actions.exitFavorites()),
  addToFavorites: () => dispatch(actions.addToFavorites())
});

function FavoritesModal(props) {
  return (
    <div className="overlay">
      <div className="modal">
        <div id="favoritesModal">
          <button onClick={props.exitFavorites}>exit favorites</button>
          <div id="favoritesSummary">
            <ul>
              <li className="purchaseHeader">
                <span>favorites!</span>
                <span>here they are</span>
                <span>they're cool</span>
              </li>
              <Item
                items={props.favorites}
                addToFavorites={props.addToFavorites}
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoritesModal);
