import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import { getBookById } from '../../services/BooksService';
import BackButton from './../../components/BackButton';
import BooksForm from './BooksForm';

function BooksEdit() {
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
    <div>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl'>Edit Book: {book._id}</h1>
        <BackButton />
      </div>
      <div className='divider'></div>
      <BooksForm data={book} />
    </div>
  );
}

export default BooksEdit;
