import React from 'react';
import Header from './Header';
import MainDisplay from './MainDisplay';
import Footer from './Footer';
import PurchaseModal from './PurchaseModal';
import AddItemModal from './AddItemModal';



export default function MainContainer({ onCheckoutPage, onAddItemPage }) {
  return (
    <div>
      <Header />
      <MainDisplay />
      <Footer />
      {onCheckoutPage && <PurchaseModal />}
      {onAddItemPage && <AddItemModal />}
    </div>
  )
}
