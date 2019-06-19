import * as types from '../constants/actionTypes';

export const requestProducts = () => ({
  type: types.REQUEST_PRODUCTS,
})

export const receiveProducts = (json) => ({
  type: types.RECEIVE_PRODUCTS,
  payload: json,
})

/**
 * Dispatch this in case of receiving invalid data or the request fails
 * @param {*} err error object
 */
export const requestProductsFailure = (err) => ({
  type: types.REQUEST_PRODUCTS_FAILURE,
  payload: err,
})

export const fetchProducts = () => dispatch => {
  console.log('fetchProducts');
  dispatch(requestProducts());
  return fetch('/api/products')
    .then(res => res.json())
    .then(res => {
      if (!isValidProducts(res)) throw new Error('something went wrong')
      return dispatch(receiveProducts(res))
    })
    .catch(err => dispatch(requestProductsFailure(err)))
}

function isValidProducts(res) {
  return Array.isArray(res);
}

export const addToCart = (id) => ({
  type: types.ADD_TO_CART,
  payload: id,
});

export const proceedToCheckout = () => ({
  type: types.PROCEED_TO_CHECKOUT,
});

export const exitCheckout = () => ({
  type: types.EXIT_CHECKOUT,
});

export const sendPurchase = (cart) => dispatch => {
  console.log('requestPurchase');
  dispatch(requestProducts());
  return fetch('/api/purchase', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(cart), // data can be `string` or {object}!
      headers:{
      'Content-Type': 'application/json'
      },
    })
    .then(res => res.json())
    .then(res => {
      // if (!isValidProducts(res)) throw new Error('something went wrong')
      return dispatch(acceptPurchase(res))
    })
    .catch(err => console.error(err));
}

export const requestPurchase = () => ({
  type: types.REQUEST_PURCHASE,
});

export const acceptPurchase = (resMsg) => dispatch => {
  dispatch(fetchProducts())
  return dispatch({
    type: types.ACCEPT_PURCHASE,
    payload: resMsg,
  });
}

export const createAccount = userInfo => (dispatch) => {
  // console.log('testing action', userInfo);
  return fetch('/signup', {
    method: 'POST',
    body: JSON.stringify(userInfo),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then((res) => {
      return dispatch(createAccountStore(res));
    })
    .catch(err => console.error(err));

  // used to check route without async from above
  // return dispatch(createAccountStore(userInfo.userName));
};

export const createAccountStore = res => ({
  type: types.CREATE_ACCOUNT_STORE,
  payload: res,
});
