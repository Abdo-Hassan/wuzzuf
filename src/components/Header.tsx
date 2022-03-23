import React from 'react';
import './header.css';

const Header = () => {
  return (
    <div className='header'>
      <h3 className='title'>JobsNow</h3>
      <div>
        <span className='pages'>Home</span>
        <span className='pages'>Search</span>
        <span className='pages'>History</span>
      </div>
    </div>
  );
};

export default Header;
