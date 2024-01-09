import {createUpdateMenuOrder, getCartList, getCheckoutMenuList, removeMenuOrder} from '../service';

export const ADD_TO_CART = '[ADD_TO_CART] Add to cart';
export const UPDATE_CART_LIST = '[UPDATE_CART_LIST] Update cart list';
export const REMOVE_FROM_CART = '[REMOVE_FROM_CART] Remove from cart';
export const CLEAR_CART = '[CLEAR_CART] Clear cart';

export const GetCartListAction = ({customerId, temporalId}: any) => {
  console.log('customerId, temporalId', customerId, temporalId);
  return (dispatch: any) =>
    getCartList(customerId, temporalId)
      .then(response => {
        console.log('response.data', response.data);
        
        dispatch({
          type: UPDATE_CART_LIST,
          payload: response.data,
        });
      })
      .catch(error => {
        const errorMessage = error.response.data.message;
        console.log('errorMessage', errorMessage);
      });
};

export const AddToCartAction = ({customerId, restaurantId, menuId, quantity, price, temporalId}: any) => {
  const menuOrder = {
    customerId,
    restaurantId,
    menuId,
    quantity,
    price,
    temporalId,
  };

  return (dispatch: any) => {
    dispatch({
      type: ADD_TO_CART,
      payload: menuOrder,
    });
    createUpdateMenuOrder(menuOrder)
      .then(response => {
        console.log('response.data', response.data);
        
        return response.data;
      })
      .catch(error => {
        const errorMessage = error.response.data.message;
        RemoveFromCartOnServerErrorAction(menuId, customerId, temporalId)(dispatch);
      });
  };
};

export const RemoveFromCartAction = (menuId: number, customerId: number, temporalId: string) => {
  const menuOrder = {
    menuId,
    customerId,
    temporalId,
  };
  return (dispatch: any) =>
    removeMenuOrder(menuOrder)
      .then(() => {
        dispatch({
          type: REMOVE_FROM_CART,
          payload: menuOrder,
        });
      })
      .catch(error => {
        const errorMessage = error.response.data.message;
        console.log('errorMessage', errorMessage);
      });
};

export const RemoveFromCartOnServerErrorAction = (menuId: number, customerId: number, temporalId: string) => {
  const menuOrder = {
    menuId,
    customerId,
    temporalId,
  };
  return (dispatch: any) =>
    dispatch({
      type: REMOVE_FROM_CART,
      payload: menuOrder,
    });
};

export const ClearCartAction = () => {
  return (dispatch: any) => {
    dispatch({
      type: CLEAR_CART,
    });
  };
};
