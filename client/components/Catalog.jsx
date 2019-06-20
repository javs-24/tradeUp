import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Item from './Item';

const mapStateToProps = store => ({
  items: store.items.items,
  userInfo: store.items.userInfo
  //map our state to props
});
const mapDispatchtoProps = dispatch => ({
  fetchItems: user_id => dispatch(actions.fetchItems(user_id)),
  addToFavorites: (item, item_index) =>
    dispatch(actions.addToFavorites(item, item_index))
});

class Catalog extends Component {
  componentDidMount() {
    this.props.fetchItems(this.props.userInfo.user_id);
  }

  render() {
    return (
      <div id="catalogview">
        <Item
          addToFavorites={this.props.addToFavorites}
          items={this.props.items}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Catalog);
