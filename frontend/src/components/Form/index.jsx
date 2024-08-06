import { PropTypes } from 'prop-types';
import { propTypes } from './config';
import FloatingInput from './FloatingInput';
import Input from './Input';

function InputError({ error }) {
  return <span className='text-xs italic text-red-500'>{error}</span>;
}

export function FormInput(props) {
  let template = null;

  switch (props.type) {
    case 'floating-text':
      template = <FloatingInput {...props} />;
      break;
    default:
      template = <Input {...props} />;
  }

  return <div className='form-control'>{template}</div>;
}

InputError.propTypes = {
  error: PropTypes.string,
};
FormInput.propTypes = propTypes;

export default FormInput;
