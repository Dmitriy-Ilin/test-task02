import React, { createContext, useContext, useState } from 'react';
import { Vacancy } from '../types/types';

type ContextType = {
  vacancies: Vacancy[];
  addVacancy: (newVacancy: Vacancy) => void;
  getVacancyById: (id: string) => Vacancy | undefined;
  updateVacancy: (updatedVacancy: Vacancy) => void;
};

const VacanciesContext = createContext<ContextType>({
  vacancies: [],
  addVacancy: () => {},
  getVacancyById: () => undefined,
  updateVacancy: () => {},
});

export const VacanciesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);

  const addVacancy = (newVacancy: Vacancy) => {
    setVacancies((prev) => [
      ...prev,
      { ...newVacancy, id: Date.now().toString() },
    ]);
  };

  const getVacancyById = (id: string) => vacancies.find((v) => v.id === id);

  const updateVacancy = (updatedVacancy: Vacancy) => {
    setVacancies((prev) =>
      prev.map((v) => (v.id === updatedVacancy.id ? updatedVacancy : v)),
    );
  };

  return (
    <VacanciesContext.Provider
      value={{ vacancies, addVacancy, getVacancyById, updateVacancy }}
    >
      {children}
    </VacanciesContext.Provider>
  );
};

export const useVacancies = () => useContext(VacanciesContext);
