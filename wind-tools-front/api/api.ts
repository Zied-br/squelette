// api.ts

import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'https://api.example.com', // Replace with your API base URL
  timeout: 5000, // Set a timeout for requests
  headers: {
    'Content-Type': 'application/json',
    // Add any other headers you need
  },
});

export default instance;
