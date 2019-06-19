import actionTypes from '../constants/actionTypes';

export const requestItems = () => ({
  type: actionTypes.REQUEST_ITEMS
});

export const receiveItems = json => ({
  type: actionTypes.RECEIVE_ITEMS,
  payload: json
});

/**
 * Dispatch this in case of receiving invalid data or the request fails
 * @param {*} err error object
 */
export const requestItemsFailure = err => ({
  type: actionTypes.REQUEST_ITEMS_FAILURE,
  payload: err
});

export const fetchItems = () => dispatch => {
  console.log('fetchItems');
  dispatch(requestItems());
  return fetch('/api/items')
    .then(res => res.json())
    .then(res => {
      console.log(res);
      if (!isValidItems(res))
        throw new Error('something went wrong in fetchItems');
      return dispatch(receiveItems(res));
    })
    .catch(err => dispatch(requestItemsFailure(err)));
};

function isValidItems(res) {
  return Array.isArray(res);
}

export const proceedToFavorites = () => ({
  type: actionTypes.PROCEED_TO_FAVORITES
});

export const exitFavorites = () => ({
  type: actionTypes.EXIT_FAVORITES
});

export const addToFavorites = id => ({
  type: types.ADD_TO_FAVORITES,
  payload: id // NEED TO ADD FETCH TO THIS !!!
});

//new action: formOnChange
export const formOnChange = event => ({
  type: actionTypes.FORM_ONCHANGE,
  payload: event
});
export const createAccount = userInfo => dispatch => {
  return fetch('/signup', {
    method: 'POST',
    body: JSON.stringify(userInfo),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(res => {
      return dispatch(createAccountStore(res));
    })
    .catch(err => console.error(err));

  // used to check route without async from above
  // return dispatch(createAccountStore(userInfo.userName));
};

export const createAccountStore = res => ({
  type: actionTypes.CREATE_ACCOUNT_STORE,
  payload: res
});
