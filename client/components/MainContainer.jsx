import React from 'react';
import Header from './Header';
import MainDisplay from './MainDisplay';
import Footer from './Footer';
import PurchaseModal from './PurchaseModal';


export default function MainContainer({ onCheckoutPage, userName }) {
  console.log('testing userName', userName)
  return (
    <div>
      <Header />
      <MainDisplay />
      <Footer />
      {onCheckoutPage && <PurchaseModal />}
    </div>
  )
}
