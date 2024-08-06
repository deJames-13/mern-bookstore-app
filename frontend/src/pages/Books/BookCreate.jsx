import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createBook } from '../../actions/bookActions.js';
import BackButton from '../../components/BackButton';
import BookForm from '../../components/Books/BookForm.jsx';
import Spinner from '../../components/Spinner.jsx';

function BookCreate() {
  const goto = useNavigate();
  const [loading, setLoading] = useState(false);
  const handleSubmit = (data) => {
    setLoading(true);
    createBook(data, (data) => {
      console.log('Book created: ', data);
      goto('/books');
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
