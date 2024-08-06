import { useEffect, useState } from 'react';
import { FaPlus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { getBooks } from '../../actions/bookActions.js';
import BooksCard from '../../components/Books/BooksCard.jsx';
import Spinner from './../../components/Spinner';

function Books() {
  // eslint-disable-next-line no-unused-vars
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getBooks((data) => {
      setBooks(data);
      setLoading(false);
    });
  }, []);

  return (
    <div className='h-full'>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <div className='flex items-center justify-between'>
            <h1 className='text-2xl'>Lists</h1>
            <Link to='/books/create' className='btn btn-primary'>
              <FaPlus />
              Create
            </Link>
          </div>
          <div className='divider'></div>
          <BooksCard books={books} setBooks={setBooks} />
        </>
      )}
    </div>
  );
}

export { default as BookCreate } from './BookCreate';
export { default as BookEdit } from './BookEdit';
export { default as BookShow } from './BookShow';
export default Books;
