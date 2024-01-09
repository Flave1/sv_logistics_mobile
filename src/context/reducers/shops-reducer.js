import {GET_ALL_SHOPS, GET_POPULAR_SHOPS, GET_SHOP_CATEGORIES, GET_SHOP_MENU} from '../actions';

const initialState = {
  shops: [],
  popularShops: [],
  isLoading: false,
  shopCategories: [],
  shopMenu: [],
  favouritePlaces: [{name: '_________________', id: -1, type: '________', rating: '', distance: '', }],
  favouriteDishies: [],
};

export const shopReducer = (state = initialState, action) => {
  if (action.type == GET_POPULAR_SHOPS) {
    return {
      ...state,
      popularShops: action.payload,
    };
  }
  if (action.type == GET_ALL_SHOPS) {
    return {
      ...state,
      shops: action.payload,
    };
  }
  if (action.type == GET_SHOP_CATEGORIES) {
    return {
      ...state,
      shopCategories: action.payload,
    };
  }
  if (action.type == GET_SHOP_MENU) {
    return {
      ...state,
      shopMenu: action.payload,
    };
  }

  return state;
};
