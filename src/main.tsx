import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { VacanciesProvider } from './context/vacancy-context.tsx';
import { HashRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <VacanciesProvider>
        <App />
      </VacanciesProvider>
    </HashRouter>
  </StrictMode>,
);

