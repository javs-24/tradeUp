import React from 'react';
import Header from './Header';
import MainDisplay from './MainDisplay';
import Footer from './Footer';
import PurchaseModal from './PurcasheModal';


export default function MainContainer({ onCheckoutPage }) {
  return (
    <div>
      <Header />
      <MainDisplay />
      <Footer />
      {onCheckoutPage && <PurchaseModal />}
    </div>
  )
}
