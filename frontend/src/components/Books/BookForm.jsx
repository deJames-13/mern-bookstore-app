import PropTypes from 'prop-types';
import { makeRefs } from './../../utils/form-utils';
import { FormInput } from './../Form/index';

const propTypes = {
  data: PropTypes.object,
  onSubmit: PropTypes.func,
  setData: PropTypes.func,
};

function makeFields(data) {
  const fields = [
    {
      type: 'floating-text',
      name: 'title',
      id: 'title',
      label: 'Book Title',
      defaultValue: data.title ?? '',
    },
    {
      type: 'floating-text',
      name: 'author',
      id: 'author',
      label: 'Book Author',
      defaultValue: data.author ?? '',
    },
    {
      type: 'floating-text',
      name: 'publishedYear',
      id: 'publishedYear',
      label: 'Publish Year',
      defaultValue: `${data.publishedYear ?? ''}`,
    },
  ];

  const optional = data._id
    ? [
        { disabled: true, type: 'floating-text', name: 'id', id: 'bookId', label: 'Book ID', defaultValue: `${data._id ?? ''}` },
        { disabled: true, type: 'floating-text', name: 'createdAt', id: 'createdAt', label: 'Created At', defaultValue: `${data.createdAt ?? ''}` },
        { disabled: true, type: 'floating-text', name: 'updatedAt', id: 'updatedAt', label: 'Updated At', defaultValue: `${data.updatedAt ?? ''}` },
      ]
    : [];

  fields.push(...optional);
  return fields;
}

function BookForm({ data = {}, onSubmit = () => {} }) {
  const fields = makeFields(data);
  const refs = makeRefs(fields);

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
      {fields.map((field, idx) => (
        <FormInput refer={refs[field['name']]} key={idx} {...field} onChange={handleChange} />
      ))}
      <div className='divider'></div>
      <div className='flex flex-wrap items-center gap-4'>
        <div className='flex-grow'></div>
        <button type='submit' className='btn btn-primary'>
          Save
        </button>
        <button type='reset' className='btn btn-secondary'>
          Cancel
        </button>
      </div>
    </form>
  );
}

BookForm.propTypes = propTypes;

export default BookForm;
