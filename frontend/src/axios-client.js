import axios from 'axios';

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false,
});

// Interceptors
// axiosClient.interceptors.request.use((config) => {
//   const ACCEST_TOKEN = localStorage.getItem('ACCESS_TOKEN');
//   config.headers.Authorization = `Bearer ${ACCEST_TOKEN}`;
//   return config;
// });

// axiosClient.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   (error) => {
//     const { response } = error;
//     if (response && response.status === 401) {
//       localStorage.removeItem('ACCESS_TOKEN');
//       window.location.href = '/login';
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosClient;
