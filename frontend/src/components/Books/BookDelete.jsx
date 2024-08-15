import { PropTypes } from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { deleteBook } from '../../actions/bookActions.js';

const propTypes = {
  book: PropTypes.object,
  onDelete: PropTypes.func,
  noIcon: PropTypes.bool,
};

function BookDelete({ book = {}, onDelete, noIcon = false }) {
  const confirmDelete = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: `You want to delete ${book.title}?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        handleClick();
      }
    });
  };

  const handleClick = () => {
    deleteBook(book._id, (data) => {
      console.log(data);
      onDelete(book._id);
    });
  };
  return (
    <>
      <button onClick={confirmDelete} className='btn btn-sm btn-error'>
        <FaTrash />
        {noIcon ? '' : 'Delete'}
      </button>
    </>
  );
}

BookDelete.propTypes = propTypes;

export default BookDelete;
