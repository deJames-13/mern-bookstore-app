import { createBrowserRouter, Navigate } from 'react-router-dom';
import ErrorPage from './components/ErrorPage';
import DefaultLayout from './layouts/DefaultLayout';

import Books, { BookCreate, BookEdit, BookShow } from './pages/Books';

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
        element: <BookCreate />,
      },
      {
        path: '/books/:id',
        element: <BookShow />,
      },
      {
        path: '/books/:id/edit',
        element: <BookEdit />,
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage status={404} message='Not Found.' />,
  },
]);

export default router;
