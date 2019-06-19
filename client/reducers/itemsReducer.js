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
  items: [
    {
      item_id: 1,
      item_name: 'dummy',
      user_id: 1,
      description: 'dope',
      pic_url: '../../server/public/1.jpg'
    },
    {
      item_id: 2,
      item_name: 'other dummy',
      user_id: 1,
      description: 'dope',
      pic_url: '../../server/public/1.jpg'
    }
  ],
  favorites: [{ name: 'dummy' }, { name: 'shoe' }],
  formControls: {
    itemName: 'test_item',
    userID: 'test_user',
    description: 'test_descript'
  },
  userInfo: { name: 'bob', id: 1 },
  onFavoritesPage: false,
  onAddItemPage: false,
  fetchItemsStatus: '',
  fetchFavoritesStatus: ''
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_ITEMS:
      return { ...state, fetchItemsStatus: 'pending' };
    case actionTypes.RECEIVE_ITEMS:
      return {
        ...state,
        fetchItemsStatus: 'success',
        items: action.payload
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
      return {
        ...state,
        favorites: action.payload
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
