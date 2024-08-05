import { HiMiniSquares2X2 } from 'react-icons/hi2';
import { IoListSharp } from 'react-icons/io5';
import LinkButton from '../components/LinkButton';

function Header() {
  return (
    <header>
      <div className='w-full flex flex-col items-center justify-center p-8'>
        <h1 className='font-extrabold text-4xl text-center text-primary'>
          Books
        </h1>
        <div className='flex'>
          <LinkButton>
            <IoListSharp />
          </LinkButton>
          <div className='divider divider-horizontal m-0'></div>
          <LinkButton>
            <HiMiniSquares2X2 />
          </LinkButton>
        </div>
      </div>
    </header>
  );
}

export default Header;
