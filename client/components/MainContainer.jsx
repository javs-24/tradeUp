import React from 'react';
import Header from './Header';
import MainDisplay from './MainDisplay';
import Footer from './Footer';
import FavoritesModal from './FavoritesModal';
import AddItemModal from './AddItemModal';
import Chat from './Chat';

export default function MainContainer({
  onFavoritesPage,
  onAddItemPage,
  inChat
}) {
  return (
    <div>
      <Header />
      <MainDisplay />
      <Footer />
      {onFavoritesPage && <FavoritesModal />}
      {onAddItemPage && <AddItemModal />}
      {inChat && <Chat />}
    </div>
  );
}
