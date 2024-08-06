import axiosClient from '../axios-client';

export const getBooks = async (callback = () => {}) => {
  return axiosClient
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
  return axiosClient
    .get(`/books/${id}`)
    .then((response) => {
      const book = response.data || {};
      callback(book);
    })
    .catch((error) => {
      console.error('Error fetching data: ', error);
    });
};

export const createBook = async (data, callback = () => {}) => {
  return axiosClient
    .post('/books', data)
    .then((response) => {
      const book = response.data || {};
      callback(book);
    })
    .catch((error) => {
      console.error('Error fetching data: ', error);
    });
};

export const updateBook = async (id, data, callback = () => {}) => {
  return axiosClient
    .put(`/books/${id}`, data)
    .then((response) => {
      const book = response.data || {};
      callback(book);
    })
    .catch((error) => {
      console.error('Error fetching data: ', error);
    });
};

export const deleteBook = async (id, callback = () => {}) => {
  return axiosClient
    .delete(`/books/${id}`)
    .then((response) => {
      const book = response.data || {};
      callback(book);
    })
    .catch((error) => {
      console.error('Error fetching data: ', error);
    });
};
