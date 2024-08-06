import { useNavigate } from 'react-router-dom';
import BackButton from '../../components/BackButton';
import { createBook } from '../../services/BookService';
import BookForm from './BookForm';

function BookCreate() {
  const goto = useNavigate();
  const handleSubmit = (data) => {
    createBook(data, (data) => {
      console.log('Book created: ', data);
      goto('/books');
    });
  };
  return (
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
