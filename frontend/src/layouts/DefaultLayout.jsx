import { Outlet } from 'react-router-dom';
import Header from './../partials/Header';
function DefaultLayout() {
  return (
    <div id='default-layout' className='h-screen'>
      <Header />

      <div className='relative container mx-auto h-full border rounded-lg shadow-lg p-8 overflow-clip'>
        <Outlet />
      </div>

      <div className='divider'></div>
    </div>
  );
}

export default DefaultLayout;
