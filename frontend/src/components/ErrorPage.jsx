import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  status: PropTypes.number,
  message: PropTypes.string,
};

function ErrorPage({ status, message }) {
  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen gap-4'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>Error {status || ''}</h1>
        <p className='text-2xl'>{message || 'Something went wrong.'}</p>
      </div>
      <Link to={'/'} className='flex items-center transition-all ease-in hover:text-primary hover:ml-2 group'>
        <i className='hidden mx-2 group-hover:block fas fa-arrow-right'></i>
        <span className='group-hover:underline'>Go Back to Home Page</span>
      </Link>
    </div>
  );
}

ErrorPage.propTypes = propTypes;

export default ErrorPage;
