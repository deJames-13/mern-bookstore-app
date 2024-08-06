import PropTypes from 'prop-types';
import FormInput from '../../components/Form';

const propTypes = {
  data: PropTypes.object,
};

function makeFields(data) {
  const fields = [
    { type: 'floating-text', name: 'title', id: 'title', label: 'Book Title', value: data.title ?? '' },
    { type: 'floating-text', name: 'author', id: 'author', label: 'Book Author', value: data.author ?? '' },
    { type: 'floating-text', name: 'publishedYear', id: 'publishedYear', label: 'Publish Year', value: `${data.publishedYear ?? ''}` },
  ];

  const optional = data._id
    ? [
        { disabled: true, type: 'floating-text', name: 'id', id: 'bookId', label: 'Book ID', value: data._id ?? '' },
        { disabled: true, type: 'floating-text', name: 'createdAt', id: 'createdAt', label: 'Created At', value: data.createdAt ?? '' },
        { disabled: true, type: 'floating-text', name: 'updatedAt', id: 'updatedAt', label: 'Updated At', value: data.updatedAt ?? '' },
      ]
    : [];

  fields.push(...optional);
  return fields;
}

function BookForm({ data = {} }) {
  return (
    <div className='flex-wrap gap-4 form-control'>
      {makeFields(data).map((field, idx) => (
        <FormInput key={idx} {...field} />
      ))}
    </div>
  );
}

BookForm.propTypes = propTypes;

export default BookForm;
