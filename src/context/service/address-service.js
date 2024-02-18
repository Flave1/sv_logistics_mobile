import {formatError, formatSuccess} from '../../../vendor/utility';
import {LogUserOutAction} from '../actions';
import axiosInstance from './axios-instance';

export async function createAddress(payload) {
  try {
    const response = await axiosInstance.post(`/address`, payload);
    return formatSuccess(response.data);
  } catch (error) {
    return formatError(error);
  }
}

export async function getAddresses() {
  try {
    const response = (await axiosInstance.get(`/address`)).data;
    return response;
  } catch (error) {
    return [];
  }
}

export async function getAddress(id, dispatch) {
  const response = await axiosInstance.get(`/address/${id}`);
  if (response == 401) {
    await LogUserOutAction()(dispatch);
  }
  return response;
}

export async function updateAddress(id, payload) {
  try {
    const response = await axiosInstance.put(`/address/${id}`, payload);
    return formatSuccess(response.data);
  } catch (error) {
    return formatError(error);
  }
}

export async function deleteAddress(payload, dispatch) {
  const response = await axiosInstance.delete(`/address/${payload.id}`);
  if (response.status == 401) {
    await LogUserOutAction()(dispatch);
  }
  return response;
}

export async function setDefaultAddress(id) {
  try {
    const response = await axiosInstance.put(`/address/${id}/set-default`);
    return formatSuccess(response.data);
  } catch (error) {
    return formatError(error);
  }
}
