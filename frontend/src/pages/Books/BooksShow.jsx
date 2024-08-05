import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import { getBookById } from '../../services/BookService';
import Spinner from './../../components/Spinner';

function BooksShow() {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();
  useEffect(() => {
    getBookById(params.id, (data) => {
      setBook(data);
      setLoading(false);
    });
  }, [params.id]);
  return loading ? (
    <Spinner />
  ) : (
    <>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl font-bold capitalize'>{book.title}</h1>
        <BackButton />
      </div>
      <div className='divider'></div>
      <div className='mt-4'>
        <p className='text-gray-600 dark:text-gray-400'>
          <span className='font-semibold'>Author:</span> {book.author}
        </p>
        <p className='text-gray-600 dark:text-gray-400'>
          <span className='font-semibold'>Published In:</span>{' '}
          {book.publishedYear}
        </p>
        <p className='text-gray-600 dark:text-gray-400'>
          <span className='font-semibold'>Created At:</span> {book.createdAt}
        </p>
        <p className='text-gray-600 dark:text-gray-400'>
          <span className='font-semibold'>Updated At:</span> {book.updatedAt}
        </p>
      </div>
    </>
  );
}

export default BooksShow;
