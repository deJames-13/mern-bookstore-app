import { propTypes } from './config';
import FloatingInput from './FloatingInput';
import Input from './Input';

function InputError({ error }) {
  return <span className='text-xs italic text-red-500'>{error}</span>;
}

export function FormInput(props) {
  let template = null;
  const { error } = props;

  switch (props.type) {
    case 'floating-text':
      template = <FloatingInput {...props} />;
      break;
    default:
      template = <Input {...props} />;
  }

  return (
    <div className='form-control'>
      {template}
      {error && <InputError error={error} />}
    </div>
  );
}

InputError.propTypes = {
  error: propTypes.error,
};
FormInput.propTypes = propTypes;

export default FormInput;
