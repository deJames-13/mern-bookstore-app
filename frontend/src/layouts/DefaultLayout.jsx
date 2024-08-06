import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './../partials/Header';
function DefaultLayout() {
  const [activeButton, setActiveButton] = useState('list');
  return (
    <div id='default-layout' className='h-screen'>
      <Header activeButton={activeButton} setActiveButton={setActiveButton} />

      <div className='container relative p-8 mx-auto border border-gray-400 rounded-lg shadow-lg border-opacity-30 overflow-clip'>
        <Outlet />
      </div>

      <div className='divider'></div>
    </div>
  );
}

export default DefaultLayout;
