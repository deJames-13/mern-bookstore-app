import { PropTypes } from 'prop-types';

const propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  label: PropTypes.string,
  borderColor: PropTypes.string,
  activeTextColor: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
};

function FormInputFilled({ name, id, value, label, disabled, onChange }) {
  const handleChange = (e) => {
    const { value } = e.target;
    onChange && onChange(value);
  };

  return (
    <div className='relative'>
      <input
        onChange={handleChange}
        type='text'
        id={id ?? 'floating__filled'}
        name={name}
        value={value ?? ''}
        className='block rounded-lg px-2.5 pb-2.5 pt-5 w-full text-sm text-gray-900 bg-gray-50 dark:bg-gray-700 border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary/70 focus:outline-none focus:ring-0 focus:border-primary/80 peer'
        placeholder=' '
        autoComplete='off'
        disabled={disabled}
      />
      <label
        htmlFor={id ?? 'floating__filled'}
        className='absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-primary/80 peer-focus:dark:text-primary/70 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto'
      >
        {label}
      </label>
    </div>
  );
}

FormInputFilled.propTypes = propTypes;

export default FormInputFilled;
