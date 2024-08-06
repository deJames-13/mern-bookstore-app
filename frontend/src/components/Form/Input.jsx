import { propTypes } from './config';
function Input(props) {
  return (
    <label className='flex items-center gap-2 input input-bordered'>
      <span className='text-gray-400 text-opacity-60'>{props.label ?? ''}</span>
      <input type='text' className='grow' placeholder={props.placeholder ?? ''} />
    </label>
  );
}
Input.propTypes = propTypes;
export default Input;
