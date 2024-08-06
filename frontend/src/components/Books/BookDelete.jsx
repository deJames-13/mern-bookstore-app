import { PropTypes } from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import { deleteBook } from '../../actions/bookActions.js';

const propTypes = {
  book: PropTypes.object,
  onDelete: PropTypes.func,
  noIcon: PropTypes.bool,
};

function BookDelete({ book = {}, onDelete, noIcon = false }) {
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
        {noIcon ? '' : 'Delete'}
      </button>
    </>
  );
}

BookDelete.propTypes = propTypes;

export default BookDelete;
