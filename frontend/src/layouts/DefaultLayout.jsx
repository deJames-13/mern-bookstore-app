import { Outlet } from 'react-router-dom';
import Header from './../partials/Header';
function DefaultLayout() {
  return (
    <div id='default-layout' className='h-screen'>
      <Header />

      <div className='container relative h-full p-8 mx-auto border border-gray-400 rounded-lg shadow-lg border-opacity-30 overflow-clip'>
        <Outlet />
      </div>

      <div className='divider'></div>
    </div>
  );
}

export default DefaultLayout;
