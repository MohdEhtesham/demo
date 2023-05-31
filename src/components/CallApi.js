// api.js

import axios from 'axios';

const API = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Replace with your API base URL
  timeout: 5000, // Set the timeout for requests (optional)
});

const callApi = async (method, endpoint, data) => {
  try {
    const response = await API.request({
      method,
      url: endpoint,
      data,
    });

    return response.data;
  } catch (error) {
    console.error(`API ${method} request failed:`, error);
    throw error;
  }
};

export default callApi;






