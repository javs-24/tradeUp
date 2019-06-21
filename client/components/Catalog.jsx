import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Item from './Item';
import io from 'socket.io-client';
const socket = io.connect('http://localhost:3000/');

const mapStateToProps = store => ({
  items: store.items.items,
  userInfo: store.items.userInfo
  //map our state to props
});
const mapDispatchtoProps = dispatch => ({
  fetchItems: user_id => dispatch(actions.fetchItems(user_id)),
  addToFavorites: (item, item_index) =>
    dispatch(actions.addToFavorites(item, item_index)),
  chatWithItemOwner: item_owner_id =>
    dispatch(actions.chatWithItemOwner(item_owner_id))
});

class Catalog extends Component {
  componentDidMount() {
    socket.on('addedItemFromServer', () => {
      console.log('SERVER TOLD ME THAT AN ITEM WAS ADDED');
      this.props.fetchItems(this.props.userInfo.user_id);
    });
    this.props.fetchItems(this.props.userInfo.user_id);
  }

  render() {
    return (
      <div id="catalogview">
        <Item
          addToFavorites={this.props.addToFavorites}
          items={this.props.items}
          chatWithItemOwner={this.props.chatWithItemOwner}
        />
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchtoProps
)(Catalog);
