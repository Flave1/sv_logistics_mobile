import axiosInstance from './axios-instance';

export async function getPopularRestaurants() {
  return await axiosInstance.get(`/customer/popular-restaurant-menu`);
}
export async function getAllRestaurants() {
  return await axiosInstance.get(`/customer/restaurants`);
}
export async function getRestaurantCategories(restaurantId) {
  return await axiosInstance.get(`/customer/restaurant-categories/${restaurantId}`);
}
export async function getRestaurantMenu(restaurantId) {
  return await axiosInstance.get(`/customer/all-restaurant-menu/${restaurantId}`);
}
export async function getRestaurantByCategoryMenu(categoryId) {
  return await axiosInstance.get(`/customer/restaurant-menu/category/${categoryId}`);
}

