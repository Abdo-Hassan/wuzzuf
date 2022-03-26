import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => {
  return (
    <div className='header' data-testid='header-wrapper'>
      <Link className='title' to='/jobs'>
        JobsNow
      </Link>
      <div data-testid='pages-wrapper'>
        <Link className='pages' to='/jobs'>
          Home
        </Link>
        <Link className='pages' to='/search'>
          Search
        </Link>
        <Link className='pages' to='/jobs'>
          History
        </Link>
      </div>
    </div>
  );
};

export default Header;
