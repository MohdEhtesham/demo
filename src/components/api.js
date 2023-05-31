import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com'; // Replace with your API base URL

const apiService = axios.create({
  baseURL: BASE_URL,
});

export const get = async (endpoint, params) => {
  try {
    const response = await apiService.get(endpoint, { params });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const post = async (endpoint, data) => {
  try {
    const response = await apiService.post(endpoint, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const put = async (endpoint, data) => {
  try {
    const response = await apiService.put(endpoint, data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const del = async (endpoint) => {
  try {
    const response = await apiService.delete(endpoint);
    return response.data;
  } catch (error) {
    throw error;
  }
};
