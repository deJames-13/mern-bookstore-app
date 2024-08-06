import PropTypes from 'prop-types';
import FormInput from '../../components/Form';
import { makeRefs } from './../../utils/form-utils';

const propTypes = {
  data: PropTypes.object,
  onSubmit: PropTypes.func,
  setData: PropTypes.func,
};

function makeFields(data) {
  const fields = [
    { type: 'floating-text', name: 'title', id: 'title', label: 'Book Title', value: data.title ?? '' },
    { type: 'floating-text', name: 'author', id: 'author', label: 'Book Author', value: data.author ?? '' },
    { type: 'floating-text', name: 'publishedYear', id: 'publishedYear', label: 'Publish Year', value: `${data.publishedYear ?? ''}` },
  ];

  const optional = data._id
    ? [
        { disabled: true, type: 'floating-text', name: 'id', id: 'bookId', label: 'Book ID', value: `${data._id ?? ''}` },
        { disabled: true, type: 'floating-text', name: 'createdAt', id: 'createdAt', label: 'Created At', value: `${data.cratedAt ?? ''}` },
        { disabled: true, type: 'floating-text', name: 'updatedAt', id: 'updatedAt', label: 'Updated At', value: `${data.updatedAt ?? ''}` },
      ]
    : [];

  fields.push(...optional);
  return fields;
}

function BookForm({ data = {}, onSubmit = () => {} }) {
  const refs = makeRefs(makeFields(data));

  const handleChange = (e) => {
    const { name, value } = e.target;
    refs[name].current = value;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());
    onSubmit && onSubmit(payload);
  };

  return (
    <form onSubmit={handleSubmit} className='flex-wrap gap-4 form-control'>
      {makeFields(data).map((field, idx) => (
        <FormInput refer={refs[field['name']]} key={idx} {...field} onChange={handleChange} />
      ))}
      <div className='divider'></div>
      <button type='submit' className='btn btn-primary'>
        Save
      </button>
    </form>
  );
}

BookForm.propTypes = propTypes;

export default BookForm;
