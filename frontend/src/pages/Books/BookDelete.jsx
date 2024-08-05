import { PropTypes } from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import { deleteBook } from '../../services/BookService';

const propTypes = {
  book: PropTypes.object,
  onDelete: PropTypes.func,
};

function BookDelete({ book = {}, onDelete }) {
  const handleClick = () => {
    deleteBook(book._id, (data) => {
      console.log(data);
      onDelete(book._id);
    });
  };
  return (
    <>
      <button onClick={handleClick} className='btn btn-sm btn-error'>
        <FaTrash />
        Delete
      </button>
    </>
  );
}

BookDelete.propTypes = propTypes;

export default BookDelete;
