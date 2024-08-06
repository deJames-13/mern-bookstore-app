import { PropTypes } from 'prop-types';
import BookCard from './BookCard';

const propTypes = {
  books: PropTypes.array.isRequired,
  setBooks: PropTypes.func.isRequired,
};

function BooksCard({ books = [], setBooks = () => {} }) {
  const handleBookDelete = (id) => {
    setBooks(books.filter((b) => b._id !== id));
  };

  return (
    <div className='grid w-full gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {books.map((book, idx) => {
        return <BookCard key={idx} book={book} onDelete={handleBookDelete} />;
      })}
    </div>
  );
}

BooksCard.propTypes = propTypes;
export default BooksCard;
