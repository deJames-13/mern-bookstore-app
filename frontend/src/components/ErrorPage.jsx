import { PropTypes } from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  status: PropTypes.number,
  message: PropTypes.string,
};

function ErrorPage({ status, message }) {
  return (
    <div className='w-screen h-screen flex flex-col gap-4 items-center justify-center'>
      <div className='text-center'>
        <h1 className='text-4xl font-bold'>Error {status || ''}</h1>
        <p className='text-2xl'>{message || 'Something went wrong.'}</p>
      </div>
      <Link
        to={'/'}
        className='flex items-center hover:text-primary hover:ml-2 transition-all ease-in group'
      >
        <i className='group-hover:block fas fa-arrow-right hidden mx-2'></i>
        <span className='group-hover:underline'>Go Back to Home Page</span>
      </Link>
    </div>
  );
}

ErrorPage.propTypes = propTypes;

export default ErrorPage;
