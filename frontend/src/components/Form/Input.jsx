import { propTypes } from './config';
function Input(props) {
  // eslint-disable-next-line no-unused-vars
  const { label, refer, errorMessages, ...rest } = props;
  return (
    <label className='flex items-center gap-2 input input-bordered'>
      <span className='text-gray-400 text-opacity-60'>{label ?? ''}</span>
      <input type='text' className='grow' ref={refer} {...rest} />
    </label>
  );
}
Input.propTypes = propTypes;
export default Input;
