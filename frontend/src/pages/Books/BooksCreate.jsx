import BackButton from './../../components/BackButton';
import BooksForm from './BooksForm';

function BooksCreate() {
  return (
    <>
      <div className='flex items-center justify-between'>
        <h1 className='text-2xl'>Create</h1>
        <BackButton />
      </div>
      <div className='divider'></div>
      <BooksForm />
    </>
  );
}

export default BooksCreate;
