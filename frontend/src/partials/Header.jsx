import { HiMiniSquares2X2 } from 'react-icons/hi2';
import { IoListSharp } from 'react-icons/io5';
import { useDispatch, useSelector } from 'react-redux';
import LinkButton from '../components/LinkButton';
import { setBookViewer } from '../store/bookViewer';

function Header() {
  const activeButton = useSelector((state) => state.bookViewer.activeButton);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    dispatch(setBookViewer(e.currentTarget.id));
  };
  return (
    <header>
      <div className='flex flex-col items-center justify-center w-full p-8'>
        <h1 className='text-4xl font-extrabold text-center text-primary'>Books</h1>
        <div className='flex'>
          <LinkButton id={'list'} onClick={handleClick} className={activeButton === 'list' ? 'text-primary' : ''}>
            <IoListSharp />
          </LinkButton>
          <div className='m-0 divider divider-horizontal'></div>
          <LinkButton id={'grid'} onClick={handleClick} className={activeButton === 'grid' ? 'text-primary' : ''}>
            <HiMiniSquares2X2 />
          </LinkButton>
        </div>
      </div>
    </header>
  );
}

export default Header;
