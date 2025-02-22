import './scss/main.scss';

import Header from './components/header/header';
import Form from './components/form/form';
import AllRequests from './components/requests/all-requests';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <Routes>
          <Route path='/' element={<Form />} />
          <Route path='/vacancies' element={<AllRequests />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

