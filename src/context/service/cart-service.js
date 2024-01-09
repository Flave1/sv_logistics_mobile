import axiosInstance from './axios-instance';

export async function createUpdateMenuOrder(payload) {
  return await axiosInstance.post(`/customer/save-to-cart`, payload);
}
export async function removeMenuOrder(payload) {
  return await axiosInstance.post(`/customer/remove-from-cart`, payload);
}
export async function clearMenuOrder() {
  return await axiosInstance.post(``);
}

export async function fetchMenuOrder() {
  return await axiosInstance.get(``);
}

export async function getCartList(customerId, temporalId) {
  return await axiosInstance.get(`/customer/cart-list?customerId=${customerId}&temporalId=${temporalId}`);
}

export async function getCheckoutMenuList(payload) {
  return await axiosInstance.post(`/customer/get-checkout-final-menu`, payload);
}
