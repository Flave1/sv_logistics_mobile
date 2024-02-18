import {ADD, ADD_TO_CART, CLEAR_CART, REMOVE_FROM_CART, UPDATE_CART_LIST} from '../actions';

const initialState = {
  menuCart: [],
  testData: 1
};

export const cartReducer = (state = initialState, action) => {
  if (action.type === ADD_TO_CART) {
    const existingMenu = state.menuCart.find(cart => cart.menuId === action.payload.menuId);
  
    if (!existingMenu) {
      return {
        ...state,
        menuCart: [action.payload, ...state.menuCart],
      };
    } else {
      const updatedCart = state.menuCart.map(cart =>
        cart.menuId === action.payload.menuId
          ? { ...cart, quantity: cart.quantity + 1 }
          : cart
      );
  
      return {
        ...state,
        menuCart: updatedCart,
      };
    }
  }

  if (action.type === REMOVE_FROM_CART) {
    const updatedCart = state.menuCart.map(cart => {
      if (cart.menuId === action.payload.menuId) {
        if (cart.quantity > 1) {
          return { ...cart, quantity: cart.quantity - 1 };
        } else {
          return null;
        }
      } else {
        return cart;
      }
    }).filter(Boolean);
  
    return {
      ...state,
      menuCart: updatedCart,
    };
  }

  if (action.type === UPDATE_CART_LIST) {
    return {
      ...state,
      menuCart: action.payload,
    };
  }

  if (action.type === CLEAR_CART) {
    return {
      ...state,
      menuCart: [],
    };
  }

  if (action.type === ADD) {
    return {
      ...state,
      testData: state.testData + 1,
    };
  }

  return state;
};
