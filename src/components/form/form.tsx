import { useEffect } from 'react';
import Text from '../ui/text/Text';
import './form.scss';
import { Formik } from 'formik';
import {
  educationOptions,
  employmentTypeRadio,
  genderRadio,
  initialValues,
  salaryRadio,
  scheduleOptions,
} from '../../mock/initialValues';
import { validationSchema } from '../../schemas/validationSchema';
import Input from '../ui/input/input';
import DatePickerField from '../ui/date-picker/date-picker';
import RadioButton from '../ui/radio-button/radio-button';
import Select from '../ui/select/select';
import Area from '../ui/input-area/input-area';
import Button from '../ui/button/button';
import { useVacancies } from '../../context/vacancy-context';
import { Vacancy } from '../../types/types';
import { useNavigate, useParams } from 'react-router-dom';

const Form = () => {
  const { addVacancy, updateVacancy, getVacancyById } = useVacancies();
  const navigate = useNavigate();
  const { id } = useParams();
  const vacancyToEdit = id ? getVacancyById(id) : null;

  useEffect(() => {
    if (id && !vacancyToEdit) navigate('/');
  }, [id, vacancyToEdit, navigate]);

  return (
    <div className='form-container'>
      <Text weight='regular' size='xl' lineHeight='xl2' className='form-text'>
        Форма размещения заявки
      </Text>
      <Formik
        validationSchema={validationSchema}
        enableReinitialize={true}
        initialValues={vacancyToEdit || initialValues}
        // onSubmit={(values) => console.log(values)}
        onSubmit={(values: Vacancy, { resetForm }) => {
          if (id) {
            updateVacancy(values);
          } else {
            addVacancy(values);
          }
          navigate('/vacancies');
          resetForm();
        }}
      >
        {({
          values,
          handleSubmit,
          handleChange,
          errors,
          touched,
          setFieldValue,
          resetForm,
        }) => (
          <form className='form' onSubmit={handleSubmit}>
            <div className='form-main'>
              <div className='form-first'>
                <Input
                  name='position'
                  label='Наименование должности'
                  value={values.position}
                  onChange={handleChange}
                  error={touched.position && !!errors.position}
                  errorMessage={errors.position}
                />
                <Input
                  name='vacancyTitle'
                  label='Наименование вакансии'
                  required
                  value={values.vacancyTitle}
                  onChange={handleChange}
                  error={touched.vacancyTitle && !!errors.vacancyTitle}
                  errorMessage={errors.vacancyTitle}
                />
                <Input
                  name='department'
                  label='Отдел'
                  required
                  value={values.department}
                  onChange={handleChange}
                  error={touched.department && !!errors.department}
                  errorMessage={errors.department}
                />
              </div>
              <div className='form-second'>
                <DatePickerField
                  name='openingDate'
                  label='Дата открытия'
                  required
                  value={values.openingDate}
                  onChange={setFieldValue}
                  selectsStart
                  startDate={values.openingDate}
                  endDate={values.closingDate}
                  error={!!(touched.openingDate && errors.openingDate)}
                  errorMessage={errors.openingDate}
                />
                <DatePickerField
                  name='closingDate'
                  label='Плановая дата закрытия'
                  required
                  value={values.closingDate || undefined}
                  onChange={setFieldValue}
                  selectsEnd
                  startDate={values.openingDate}
                  endDate={values.closingDate}
                  minDate={values.openingDate}
                  error={!!(touched.closingDate && errors.closingDate)}
                  errorMessage={errors.closingDate}
                />
              </div>
              <div className='form-third'>
                <div className='radio-group'>
                  <Text
                    className='radio-label'
                    weight='bold'
                    size='md'
                    lineHeight='sm'
                  >
                    Пол<span className='input-required'>*</span>
                  </Text>
                  {genderRadio.map((option) => (
                    <RadioButton
                      key={option.value}
                      name='gender'
                      value={option.value}
                      label={option.label}
                      checked={values.gender === option.value}
                      onChange={handleChange}
                    />
                  ))}
                  {touched.gender && errors.gender && (
                    <div className='area-error'>{errors.gender}</div>
                  )}
                </div>
                <Select
                  name='education'
                  label='Образование'
                  required
                  options={educationOptions}
                  value={values.education}
                  onChange={(value) => setFieldValue('education', value)}
                  placeholder='Выберите'
                  error={touched.education && !!errors.education}
                  errorMessage={errors.education}
                />
              </div>
            </div>

            <div className='form-main'>
              <Text
                className='radio-label'
                weight='bold'
                size='md'
                lineHeight='sm'
              >
                Зарплата
              </Text>
              <div className='radio-group'>
                {salaryRadio.map((option) => (
                  <RadioButton
                    key={option.value}
                    name='salary'
                    value={option.value}
                    label={option.label}
                    checked={values.salary === option.value}
                    onChange={handleChange}
                  />
                ))}
                {touched.salary && errors.salary && (
                  <div className='area-error'>{errors.salary}</div>
                )}
              </div>
              <div className='form-salary'>
                <Input
                  name='from'
                  label='от'
                  value={values.from}
                  onChange={handleChange}
                  error={touched.from && !!errors.from}
                  errorMessage={errors.from}
                  inlineLabel
                />
                <Input
                  name='to'
                  label='до'
                  value={values.to}
                  onChange={handleChange}
                  error={touched.to && !!errors.to}
                  errorMessage={errors.to}
                  inlineLabel
                />
              </div>
              <div className='form-region'>
                <Input
                  name='region'
                  label='Регион'
                  required
                  value={values.region}
                  onChange={handleChange}
                  error={touched.region && !!errors.region}
                  errorMessage={errors.region}
                />
                <Input
                  className='input-address'
                  name='address'
                  label='Адрес'
                  required
                  value={values.address}
                  onChange={handleChange}
                  error={touched.address && !!errors.address}
                  errorMessage={errors.address}
                />
                <Input
                  name='metroStation'
                  label='Станция метро, МЦД'
                  value={values.metroStation}
                  onChange={handleChange}
                  error={touched.metroStation && !!errors.metroStation}
                  errorMessage={errors.metroStation}
                />
              </div>
              <div className='form-expirience'>
                <Input
                  name='expirience'
                  label='Опыт работы'
                  required
                  value={values.expirience}
                  onChange={handleChange}
                  error={touched.expirience && !!errors.expirience}
                  errorMessage={errors.expirience}
                />
                <Select
                  name='schedule'
                  label='График работы'
                  required
                  options={scheduleOptions}
                  value={values.schedule}
                  onChange={(value) => setFieldValue('schedule', value)}
                  placeholder='Выберите'
                  error={touched.schedule && !!errors.schedule}
                  errorMessage={errors.schedule}
                />
                <div className='radio-group'>
                  <Text
                    className='radio-label'
                    weight='bold'
                    size='md'
                    lineHeight='sm'
                  >
                    Тип занятости<span className='input-required'>*</span>
                  </Text>
                  {employmentTypeRadio.map((option) => (
                    <RadioButton
                      key={option.value}
                      name='employmentType'
                      value={option.value}
                      label={option.label}
                      checked={values.employmentType === option.value}
                      onChange={handleChange}
                    />
                  ))}
                  {touched.employmentType && errors.employmentType && (
                    <div className='area-error'>{errors.employmentType}</div>
                  )}
                </div>
              </div>
            </div>

            <div className='form-main form-areas'>
              <div>
                <Text size='sm' weight='bold' lineHeight='sm'>
                  Функциональные обязанности
                </Text>
                <Area
                  placeholder='Какую работу будет выполнять сотрудник'
                  name='responsibilities'
                  value={values.responsibilities}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Text size='sm' weight='bold' lineHeight='sm'>
                  Пожелания к кандидату
                </Text>
                <Area
                  placeholder='Ключевые навыки, достижения'
                  name='wishes'
                  value={values.wishes}
                  onChange={handleChange}
                />
              </div>
              <div>
                <Text size='sm' weight='bold' lineHeight='sm'>
                  Преимуществом будет
                </Text>
                <Area
                  placeholder='Дополнительные специальные навыки'
                  name='advantages'
                  value={values.advantages}
                  onChange={handleChange}
                />
              </div>

              <div className='form-last'>
                <Text size='sm' weight='bold' lineHeight='sm'>
                  Мы предлагаем
                </Text>
                <ul className='form-list'>
                  <li>
                    <Text size='md' weight='light' lineHeight='sm'>
                      Дружный коллектив, интересные задачи и возможность быть
                      услышанным;
                    </Text>
                  </li>
                  <li>
                    <Text size='md' weight='light' lineHeight='sm'>
                      Приобретение навыков работы в большой, разветвлённой и
                      сложноподчинённой структуре, задействованной в сфере ИТ;
                    </Text>
                  </li>
                  <li>
                    <Text size='md' weight='light' lineHeight='sm'>
                      Оформление в соответствии с ТК РФ;
                    </Text>
                  </li>
                  <li>
                    <Text size='md' weight='light' lineHeight='sm'>
                      Полностью официальная заработная плата
                    </Text>
                  </li>
                </ul>
              </div>
            </div>

            <div className='form-btns'>
              <Button type='submit'>Отправить</Button>
              <Button type='button' variant='default' onClick={resetForm}>
                Сбросить
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Form;
