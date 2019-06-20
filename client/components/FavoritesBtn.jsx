import React from 'react';

function FavoritesBtn(props) {
  return (
    <button id="favorites-btn" onClick={props.proceedToFavorites}>
      <p>show favorites</p>
    </button>
  );
}

export default FavoritesBtn;
