import { PropTypes } from 'prop-types';
import { FaInfoCircle, FaPen, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import BookDelete from './BookDelete';

const propTypes = {
  book: PropTypes.object,
  onDelete: PropTypes.func,
};

function BookCard({ book = {}, onDelete = () => {} }) {
  return (
    <div className='flex flex-col gap-2 p-4 rounded-lg border border-gray-400/40 bg-primary/10 hover:scale-105 hover:z-[10] hover:bg-primary/30 hover:border-primary/50  transition-all ease-in group text-base-content'>
      <div className='flex justify-between'>
        <p>
          Book ID: <span className='text-gray-400 '> {book._id}</span>
        </p>
        <span className='p-1 px-2 rounded-full text-neutral bg-secondary'>{book.publishedYear}</span>
      </div>
      <div className='divider'></div>
      <h2 className='flex items-center gap-2 font-semibold'>
        <span className='text-lg'></span>
        {book.title}
      </h2>
      <p className='flex items-center gap-2 text-sm'>
        <FaUserCircle /> {book.author}
      </p>
      <div className='divider'></div>
      <div className='flex items-center justify-around gap-4 mt-auto'>
        <Link to={`/books/${book._id}`} className='btn btn-sm btn-outline btn-secondary'>
          <FaInfoCircle />
        </Link>
        <Link to={`/books/${book._id}/edit`} className='btn btn-sm btn-outline btn-primary'>
          <FaPen />
        </Link>
        <BookDelete noIcon={true} book={book} onDelete={() => onDelete(book._id)} />
      </div>
    </div>
  );
}

BookCard.propTypes = propTypes;
export default BookCard;
