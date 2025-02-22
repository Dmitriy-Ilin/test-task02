import React, { createContext, useContext, useState } from 'react';
import { Vacancy } from '../types/types';

type ContextType = {
  vacancies: Vacancy[];
  addVacancy: (newVacancy: Vacancy) => void;
};

const VacanciesContext = createContext<ContextType>({
  vacancies: [],
  addVacancy: () => {},
});

export const VacanciesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);

  const addVacancy = (newVacancy: Vacancy) => {
    setVacancies((prev) => [
      ...prev,
      {
        ...newVacancy,
        id: Date.now().toString(),
      },
    ]);
  };

  return (
    <VacanciesContext.Provider value={{ vacancies, addVacancy }}>
      {children}
    </VacanciesContext.Provider>
  );
};

export const useVacancies = () => useContext(VacanciesContext);
