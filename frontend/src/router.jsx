import { createBrowserRouter, Navigate } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import DefaultLayout from './layouts/DefaultLayout';

import Books, { BooksCreate, BooksEdit, BooksShow } from './pages/Books';

const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to='/books' />,
      },
      {
        path: '/books',
        element: <Books />,
      },
      {
        path: '/books/create',
        element: <BooksCreate />,
      },
      {
        path: '/books/:id',
        element: <BooksShow />,
      },
      {
        path: '/books/:id/edit',
        element: <BooksEdit />,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage status={404} message='Not Found.' />,
  },
]);

export default router;
