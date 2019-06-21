import actionTypes from '../constants/actionTypes';

const initialState = {
  items: [],
  favorites: [],
  formControls: {
    itemName: '',
    userID: '',
    description: ''
  },
  userInfo: { username: 'bob', user_id: 1 },
  onFavoritesPage: false,
  onAddItemPage: false,
  inChat: false,
  currentChatPeer: null,
  fetchItemsStatus: '',
  fetchFavoritesStatus: '',
  searchBy: ''
};

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REQUEST_ITEMS:
      return { ...state, fetchItemsStatus: 'pending' };
    case actionTypes.RECEIVE_ITEMS:
      return {
        ...state,
        fetchItemsStatus: 'success',
        items: action.payload[0],
        favorites: action.payload[1]
      };
    case actionTypes.LOGIN:
      return {
        ...state,
        userInfo: action.payload
      };
    case actionTypes.UPDATE_ITEMS:
      return {
        ...state,
        items: action.payload
      };
    case actionTypes.SEARCH_BY:
      return {
        ...state,
        searchBy: action.payload
      };
    case actionTypes.SEARCH_BYCLICK:
      return {
        ...state,
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
      }).then(res => {});
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

    case actionTypes.PROCEED_TO_SELL:
      return {
        ...state,
        onAddItemPage: true
      };

    case actionTypes.EXIT_SELL:
      return {
        ...state,
        onAddItemPage: false
      };

    case actionTypes.CHAT_WITH_ITEM_OWNER:
      return {
        ...state,
        inChat: true,
        currentChatPeer: action.payload
      };
    default:
      return state;
  }
};

export default itemsReducer;
