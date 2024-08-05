import { PropTypes } from 'prop-types';
import { FaEye, FaPen } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import BookDelete from './BookDelete';

const propTypes = {
  books: PropTypes.array.isRequired,
  setBooks: PropTypes.func.isRequired,
};
function BooksList({ books = [], setBooks = () => {} }) {
  const handleBookDelete = (id) => {
    setBooks(books.filter((b) => b._id !== id));
  };
  return (
    <>
      <div className='overflow-x-auto'>
        <table className='table'>
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Author</th>
              <th>Publish Year</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, idx) => (
              <tr key={idx} className='hover'>
                <td>{book._id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publishedYear}</td>
                <td>
                  <div className='flex flex-wrap items-center justify-end gap-2'>
                    <Link to={`/books/${book._id}`} className='btn btn-sm btn-primary'>
                      <FaPen />
                      Show
                    </Link>
                    <Link to={`/books/${book._id}/edit`} className='btn btn-sm btn-secondary'>
                      <FaEye />
                      Edit
                    </Link>
                    <BookDelete book={book} onDelete={() => handleBookDelete(book._id)} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
BooksList.propTypes = propTypes;

export default BooksList;
