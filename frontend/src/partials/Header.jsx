import { HiMiniSquares2X2 } from 'react-icons/hi2';
import { IoListSharp } from 'react-icons/io5';
import LinkButton from '../components/LinkButton';

function Header() {
  return (
    <header>
      <div className='flex flex-col items-center justify-center w-full p-8'>
        <h1 className='text-4xl font-extrabold text-center text-primary'>Books</h1>
        <div className='flex'>
          <LinkButton>
            <IoListSharp />
          </LinkButton>
          <div className='m-0 divider divider-horizontal'></div>
          <LinkButton>
            <HiMiniSquares2X2 />
          </LinkButton>
        </div>
      </div>
    </header>
  );
}

export default Header;
