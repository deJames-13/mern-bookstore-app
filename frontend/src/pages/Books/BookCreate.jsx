import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { createBook } from '../../actions/bookActions.js';
import BackButton from '../../components/BackButton';
import BookForm from '../../components/Books/BookForm.jsx';
import Spinner from '../../components/Spinner.jsx';

function BookCreate() {
  const goto = useNavigate();
  const [loading, setLoading] = useState(false);

  const afterCreate = (book) => {
    Swal.fire({
      title: 'Book Created',
      text: `${book.title} has been created successfully!`,
      icon: 'success',
      showConfirmButton: true,
      confirmButtonText: 'Show Books',
      showCancelButton: true,
      cancelButtonText: 'Ok',
    }).then((result) => {
      if (result.isConfirmed) goto('/books');
    });
  };

  const handleSubmit = (data) => {
    setLoading(true);
    createBook(data, (data) => {
      afterCreate(data);
    }).then(() => setLoading(false));
  };
  return loading ? (
    <Spinner />
  ) : (
    <>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl'>Create</h1>
        <BackButton />
      </div>
      <div className='divider'></div>
      <BookForm onSubmit={handleSubmit} />
    </>
  );
}

export default BookCreate;
