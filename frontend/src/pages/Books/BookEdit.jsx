import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { getBookById, updateBook } from '../../actions/bookActions';
import BackButton from '../../components/BackButton';
import BookForm from '../../components/Books/BookForm';
import Spinner from '../../components/Spinner';

function BookEdit() {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();

  const confirmSave = () => {
    Swal.fire({
      title: 'Save Changes?',
      text: 'Do you want to save the changes?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        handleSubmit();
      }
    });
  };

  const handleSubmit = (data) => {
    setLoading(true);
    updateBook(book._id, data, (data) => {
      console.log('Book updated: ', data);
      data._id && setBook(data);
    }).then(() => setLoading(false));
  };

  useEffect(() => {
    getBookById(params.id, (data) => {
      setBook(data);
    }).then(() => setLoading(false));
  }, [params.id]);
  return loading ? (
    <Spinner />
  ) : (
    <div className='relative'>
      <div className='sticky top-0 z-[100] bg-base-100'>
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl'>Edit Book: {book._id}</h1>
          <BackButton />
        </div>
        <div className='divider'></div>
      </div>
      <BookForm data={book} onSubmit={confirmSave} />
    </div>
  );
}

export default BookEdit;
