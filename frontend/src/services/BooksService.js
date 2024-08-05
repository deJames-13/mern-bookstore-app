import axiosClient from '../axios-client';

export const getBooks = async (callback = () => {}) => {
  axiosClient
    .get('/books')
    .then((response) => {
      const books = response.data || [];
      callback(books);
    })
    .catch((error) => {
      console.error('Error fetching data: ', error);
    });
};

export const getBookById = async (id, callback = () => {}) => {
  axiosClient
    .get(`/books/${id}`)
    .then((response) => {
      const book = response.data || {};
      callback(book);
    })
    .catch((error) => {
      console.error('Error fetching data: ', error);
    });
};
