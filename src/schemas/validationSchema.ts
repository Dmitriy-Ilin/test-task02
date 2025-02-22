import { date, object, string } from 'yup';

export const validationSchema = object({
  id: string(),
  position: string(),
  vacancyTitle: string().required('Укажите наименование'),
  department: string().required('Укажите отдел'),
  openingDate: date().required('Выберите дату открытия'),
  closingDate: date().required('Выберите дату закрытия'),
  gender: string().required('Выберите пол'),
  education: string().required('Укажите образование'),
  salary: string(),
  from: string(),
  to: string(),
  region: string().required('Укажите регион'),
  address: string().required(
    'Введите полный адрес. Например, Походный проезд, 3с1',
  ),
  metroStation: string(),
  expirience: string().required('Укажите опыт работы'),
  schedule: string().required('Укажите график работы'),
  employmentType: string().required('Выберите тип занятости'),
  responsibilities: string(),
  wishes: string(),
  advantages: string(),
});
