import React from 'react';
import Header from './Header';
import MainDisplay from './MainDisplay'
import Footer from './Footer'
import PurchaseModal from './PurcasheModal';
import { connect } from "react-redux";
import AddItemModal from './AddItemModal'

const mapStateToProps = store => ({
  onAddItemPage: store.products.onAddItemPage,
  onCheckoutPage: store.products.onCheckoutPage,
})

function App({ onCheckoutPage, onAddItemPage }) {
  return (
    <div>
      <Header />
      <MainDisplay />
      <Footer />
      {onCheckoutPage && <PurchaseModal />}
      {onAddItemPage && <AddItemModal />}
    </div>
  );
}

export default connect(mapStateToProps)(App);