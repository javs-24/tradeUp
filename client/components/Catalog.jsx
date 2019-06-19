import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';
import Item from './Item';

const mapStateToProps = store => ({
  items: store.items.items
  //map our state to props
});
const mapDispatchtoProps = dispatch => ({
  fetchItems: () => dispatch(actions.fetchItems()),
  addToFavorites: item_id => dispatch(actions.addToFavorites(item_id))
});

class Catalog extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }

  render() {
    //console.log(this.props.products);
    // let productsArr = [];
    // // only map products in case the fetch is successfull
    // if (this.props.fetchProductsStatus === 'success') {
    //   productsArr = this.props.products.map((product,i) => <div className='product' key={i}>{product.product_name}</div>);
    // }
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
