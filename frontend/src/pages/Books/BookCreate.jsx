import BackButton from '../../components/BackButton';
import BookForm from './BookForm';

function BookCreate() {
  return (
    <>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl'>Create</h1>
        <BackButton />
      </div>
      <div className='divider'></div>
      <BookForm />
    </>
  );
}

export default BookCreate;
