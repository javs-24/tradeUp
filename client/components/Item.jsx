import React, { Component } from 'react';

class Item extends Component {
  render() {
    let itemsArr = [];
    itemsArr = this.props.items.map((item, i) => (
      <div className="item" key={i}>
        <img src={`${item.pic_url}`} width="45%" height="45%" />
        <div id="description">name: {item.item_name} </div>
        <div className="text">
          <div> description: {item.description}</div>
        </div>
        <button
          id="add-to-favorites"
          onClick={() => this.props.addToFavorites(item.item_id)}>
          {' '}
          add 2 favorites
        </button>
      </div>
    ));

    return <div id="catalog">{itemsArr}</div>;
  }
}

export default Item;
