import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import Spinner from '../../components/Spinner';
import { getBookById, updateBook } from '../../services/BookService';
import BookForm from './BookForm';

function BookEdit() {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();

  const handleSubmit = (data) => {
    updateBook(book._id, data, (data) => {
      console.log('Book updated: ', data);
      data._id && setBook(data);
    });
  };

  useEffect(() => {
    getBookById(params.id, (data) => {
      setBook(data);
      setLoading(false);
    });
  }, [params.id]);
  return loading ? (
    <Spinner />
  ) : (
    <div>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl'>Edit Book: {book._id}</h1>
        <BackButton />
      </div>
      <div className='divider'></div>
      <BookForm data={book} onSubmit={handleSubmit} />
    </div>
  );
}

export default BookEdit;
