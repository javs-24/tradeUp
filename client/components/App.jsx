import React from 'react';
import UserPage from './UserPage';
import MainContainer from './MainContainer';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const mapStateToProps = store => ({
  onAddItemPage: store.items.onAddItemPage,
  onFavoritesPage: store.items.onFavoritesPage
});

function App(props) {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Login</Link>
            </li>
            <li>
              <Link to="/home/">Home</Link>
            </li>
          </ul>
        </nav>
        <Route path="/" exact component={UserPage} />
        <Route path="/home/" render={() => <MainContainer {...props} />} />
      </div>
    </Router>
  );
}

export default connect(mapStateToProps)(App);
