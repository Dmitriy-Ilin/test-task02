import { Vacancy } from '../types/types';

export const initialValues: Vacancy = {
  position: '',
  vacancyTitle: '',
  department: '',
  openingDate: undefined,
  closingDate: undefined,
  gender: '',
  education: '',
  salary: '',
  from: '',
  to: '',
  region: '',
  address: '',
  metroStation: '',
  expirience: '',
  schedule: '',
  employmentType: '',
  responsibilities: '',
  wishes: '',
  advantages: '',
};

export const educationOptions = [
  { value: 'Высшее', label: 'Высшее' },
  { value: 'Среднее', label: 'Среднее' },
];

export const scheduleOptions = [
  { value: 'Полный день', label: 'Полный день' },
  { value: 'Сменный 5/2', label: 'Сменный 5/2' },
  { value: 'Сменный 2/2', label: 'Сменный 2/2' },
];

export const genderRadio = [
  { value: 'Мужской', label: 'Мужской' },
  { value: 'Женский', label: 'Женский' },
];

export const salaryRadio = [
  { value: 'На руки', label: 'На руки' },
  { value: 'До вычета налогов', label: 'До вычета налогов' },
];

export const employmentTypeRadio = [
  { value: 'Полная занятость', label: 'Полная занятость' },
  { value: 'Частичная занятость', label: 'Частичная занятость' },
  { value: 'Стажировка', label: 'Стажировка' },
];
