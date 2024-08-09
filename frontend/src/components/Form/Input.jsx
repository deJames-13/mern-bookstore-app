import { propTypes } from './config';
function Input({ label, refer, ...inputProps }) {
  return (
    <label className='flex items-center gap-2 input input-bordered'>
      <span className='text-gray-400 text-opacity-60'>{label ?? ''}</span>
      <input type='text' className='grow' ref={refer} {...inputProps} />
    </label>
  );
}
Input.propTypes = propTypes;
export default Input;
