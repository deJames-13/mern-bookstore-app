import PropTypes from 'prop-types';
import FormInputFilled from './../../components/FormInputFilled';

const propTypes = {
  data: PropTypes.object,
};

function BooksForm({ data = {} }) {
  return (
    <div className='flex-wrap gap-4 form-control'>
      <FormInputFilled
        name='title'
        id='title'
        label='Book Title'
        value={data.title ?? ''}
      />

      <FormInputFilled
        name='author'
        id='author'
        label='Book Author'
        value={data.author ?? ''}
      />
      <FormInputFilled
        name='publishedYear'
        id='publishedYear'
        label='Publish Year'
        value={`${data.publishedYear}` ?? ''}
      />
      {data._id && (
        <>
          <FormInputFilled
            name='created_at'
            id='created_at'
            label='Create At'
            value={data.createdAt ?? ''}
            disabled
          />
          <FormInputFilled
            name='created_at'
            id='created_at'
            label='Updated At'
            value={data.updatedAt ?? ''}
            disabled
          />
        </>
      )}
    </div>
  );
}

BooksForm.propTypes = propTypes;

export default BooksForm;
