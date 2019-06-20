import React from 'react';
import FavoritesBtn from './FavoritesBtn';
import NavBar from './Navbar';
import { connect } from 'react-redux';

import * as actions from '../actions/actions';

const mapStateToProps = store => ({
  userInfo: store.items.userInfo
});

const mapDispatchToProps = dispatch => ({
  proceedToSell: () => dispatch(actions.proceedToSell()),
  proceedToFavorites: () => dispatch(actions.proceedToFavorites()),
});

function Header(props) {
  return (
    <header>
      <div className="header-left">
        <h1>tradeUp</h1>
      </div>
      <div className='header-right'>
        <NavBar proceedToSell={props.proceedToSell} />
        <FavoritesBtn proceedToFavorites={props.proceedToFavorites} />
      </div>
    </header>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
