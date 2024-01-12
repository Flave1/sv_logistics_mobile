import {getAllRestaurants, getPopularRestaurants, getRestaurantByCategoryMenu, getRestaurantCategories, getRestaurantMenu} from '../service';

export const GET_ALL_SHOPS = '[GET_ALL_SHOPS] Get all restaurants';
export const GET_POPULAR_SHOPS = '[GET_POPULAR_SHOPS] Get all restaurants by one menu';
export const GET_SHOP_CATEGORIES = '[GET_SHOP_CATEGORIES] Get all restaurants categories';
export const GET_SHOP_MENU = '[GET_SHOP_MENU] Get all restaurants menu';

export const GetPopularShopsAction = async () => {
  return dispatch =>
    getPopularRestaurants()
      .then(response => {
        dispatch({
          type: GET_POPULAR_SHOPS,
          payload: response.data,
        });
      })
      .catch(error => {
        const errorMessage = error.response.data.message;
        console.log('errorMessage', errorMessage);
      });
};
export const GetAllShopsAction = async () => {
  return dispatch =>
    getAllRestaurants()
      .then(response => {
        dispatch({
          type: GET_ALL_SHOPS,
          payload: response.data,
        });
      })
      .catch(error => {
        const errorMessage = error.response.data.message;
        console.log('errorMessage', errorMessage);
      });
};

export const GetRestaurantCategoriesAction = async (restaurantId: number, setAllCategory) => {
  return dispatch =>
    getRestaurantCategories(restaurantId)
      .then(response => {
        const categories = [{id: -1, name: 'All Dishies'}, ...response.data];
        setAllCategory(categories);
        dispatch({
          type: GET_SHOP_CATEGORIES,
          payload: categories,
        });
      })
      .catch(error => {
        const errorMessage = error.response.data.message;
        console.log('errorMessage', errorMessage);
      });
};

export const GetRestaurantMenuAction = async (restaurantId: number, setAllMenu) => {
  return async dispatch =>
    getRestaurantMenu(restaurantId)
      .then(response => {
        setAllMenu(response.data);
        dispatch({
          type: GET_SHOP_MENU,
          payload: response.data,
        });
      })
      .catch(error => {
        const errorMessage = error.response.data.message;
        console.log('errorMessage', errorMessage);
      });
};

export const GetRestaurantMenuByCategoryAction = async (categoryId: number, setAllMenu) => {
  return dispatch =>
    getRestaurantByCategoryMenu(categoryId)
      .then(response => {
        setAllMenu(response.data);
        dispatch({
          type: GET_SHOP_MENU,
          payload: response.data,
        });
      })
      .catch(error => {
        const errorMessage = error.response.data.message;
        console.log('errorMessage', errorMessage);
      });
};
