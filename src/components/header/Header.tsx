import React from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className='header' data-testId='header-wrapper'>
      <h3 className='title'>JobsNow</h3>
      <div data-testId='pages-wrapper'>
        <span className='pages' onClick={() => navigate('/')}>
          Home
        </span>
        <span className='pages'>Search</span>
        <span className='pages'>History</span>
      </div>
    </div>
  );
};

export default Header;
