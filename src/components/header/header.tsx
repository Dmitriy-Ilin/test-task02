import Text from '../ui/text/Text';
import './header.scss';

import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <div className='header-wrapper'>
      <header className='header'>
        <span className='header-left'></span>
        <div className='header-right'>
          <Link
            to='/vacancies'
            className={
              location.pathname === '/vacancies' ? 'link active-link' : 'link'
            }
          >
            <Text className='header-text' size='lg' lineHeight='xl'>
              Все заявки
            </Text>
          </Link>
          <Link
            to='/'
            className={
              location.pathname === '/create' || location.pathname === '/'
                ? 'link active-link'
                : 'link'
            }
          >
            <Text className='header-text' size='lg' lineHeight='xl'>
              Создание заявки
            </Text>
          </Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
