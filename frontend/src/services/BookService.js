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

export const createBook = async (data, callback = () => {}) => {
  axiosClient
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
  axiosClient
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
  axiosClient
    .delete(`/books/${id}`)
    .then((response) => {
      const book = response.data || {};
      callback(book);
    })
    .catch((error) => {
      console.error('Error fetching data: ', error);
    });
};
