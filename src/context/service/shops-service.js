import axiosInstance from './axios-instance';

export async function getPopularRestaurants() {
  return await axiosInstance.get(`/customer-mobile/popular-restaurant-menu`);
}
export async function getAllRestaurants() {
  return await axiosInstance.get(`/customer-mobile/restaurants`);
}
export async function getRestaurantCategories(restaurantId) {
  return await axiosInstance.get(`/customer-mobile/restaurant-categories/${restaurantId}`);
}
export async function getRestaurantMenu(restaurantId) {
  return await axiosInstance.get(`/customer-mobile/all-restaurant-menu/${restaurantId}`);
}
export async function getRestaurantByCategoryMenu(categoryId) {
  return await axiosInstance.get(`/customer-mobile/restaurant-menu/category/${categoryId}`);
}

