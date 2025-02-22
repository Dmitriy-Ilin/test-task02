import React from 'react';
import Text from '../ui/text/Text';
import './header.scss';
import Button from '../ui/button/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className='header'>
      <span className='header-left'></span>
      <div className='header-right'>
        <Link
          to='/vacancies'
          // variant={location.pathname === '/' ? 'primary' : 'default'}
        >
          <Text
            className='header-text'
            size='lg'
            weight={location.pathname === '/' ? 'black' : 'regular'}
            lineHeight='xl'
          >
            Все заявки
          </Text>
        </Link>
        <Link
          to='/'
          // variant={location.pathname === '/create' ? 'primary' : 'default'}
        >
          <Text
            className='header-text'
            size='lg'
            weight={location.pathname === '/create' ? 'black' : 'regular'}
            lineHeight='xl'
          >
            Создание заявки
          </Text>
        </Link>
      </div>
    </header>
  );
};

export default Header;
