import { PropTypes } from 'prop-types';
import { FaEye, FaPen, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const propTypes = {
  books: PropTypes.array.isRequired,
};
function BooksList({ books = [] }) {
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
                <td>{book.publishYear}</td>
                <td>
                  <div className='flex flex-wrap items-center gap-2'>
                    <Link
                      to={`/books/${book._id}`}
                      className='btn btn-sm btn-primary'
                    >
                      <FaPen />
                      Show
                    </Link>
                    <Link
                      to={`/books/${book._id}/edit`}
                      className='btn btn-sm btn-secondary'
                    >
                      <FaEye />
                      Edit
                    </Link>
                    <Link
                      to={`/books/${book._id}`}
                      className='btn btn-sm btn-error'
                    >
                      <FaTrash />
                      Delete
                    </Link>
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
