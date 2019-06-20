import actionTypes from '../constants/actionTypes';

// const initialState = {
//   products: [{ name: 'dummy' }, { name: 'shoe' }],
//   totalItemsInCart: 0,
//   fetchProductsStatus: '',
//   fetchProductsError: '',
//   cart: {},
//   currentCategory: '',
//   onCheckoutPage: false,
//   onAddItemPage: true,
//   sendPurchaseStatus: '',
//   sendPurchaseError: '',
//   formControls: {
//     itemName: 'test_item',
//     userID: 'test_user',
//     description: 'test_descript'
//   },
//   userName: ''
// };

const initialState = {
  items: [],
  favorites: [],
  formControls: {
    itemName: 'test_item',
    userID: 'test_user',
    description: 'test_descript'
  },
  userInfo: { username: 'bob', user_id: 1 },
  onFavoritesPage: false,
  onAddItemPage: false,
  fetchItemsStatus: '',
  fetchFavoritesStatus: ''
};

const itemsReducer = (state = initialState, action) => {
  // console.log(state);
  switch (action.type) {
    case actionTypes.REQUEST_ITEMS:
      return { ...state, fetchItemsStatus: 'pending' };
    case actionTypes.RECEIVE_ITEMS:
      // console.log(action.payload);
      // action.payload.forEach(item => {
      //   item.isFavoritedByUser = false;
      // });
      return {
        ...state,
        fetchItemsStatus: 'success',
        items: action.payload[0],
        favorites: action.payload[1]
      };
    case actionTypes.REQUEST_ITEMS_FAILURE:
      return {
        ...state,
        fetchItemsStatus: 'failure',
        fetchItemsError: action.payload
      };
    case actionTypes.PROCEED_TO_FAVORITES:
      return {
        ...state,
        onFavoritesPage: true
      };
    case actionTypes.EXIT_FAVORITES:
      return {
        ...state,
        onFavoritesPage: false
      };

    case actionTypes.ADD_TO_FAVORITES:
      // console.log('payload', action.payload);
      const newFaves = Array.from(state.favorites);
      const newItems = Array.from(state.items);
      action.payload.item.favoritedByUser = true;
      newItems[action.payload.item_index].favoritedByUser = true;
      newFaves.push(action.payload.item);
      fetch('/api/favorites', {
        method: 'POST',
        body: JSON.stringify({
          user_id: state.userInfo.user_id,
          item_id: action.payload.item.item_id
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(res => console.log(res));
      return {
        ...state,
        items: newItems,
        favorites: newFaves
      };
    case actionTypes.FORM_ONCHANGE:
      const event = action.payload;
      const name = event.target.name;
      const value = event.target.value;

      return {
        ...state,
        formControls: {
          ...state.formControls,
          [name]: value
        }
      };

    case actionTypes.CREATE_ACCOUNT_STORE:
      return {
        ...state,
        userInfo: action.payload
      };

    default:
      return state;
  }
};

export default itemsReducer;
