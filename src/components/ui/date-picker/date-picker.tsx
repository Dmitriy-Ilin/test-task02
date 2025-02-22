import './date-picker.scss';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ru } from 'date-fns/locale/ru';
import clsx from 'clsx';
import CustomInput from './cutom-input';

const ruLocale = {
  ...ru,
  options: {
    ...ru.options,

    weekStartsOn: 1,
  },
  localize: {
    ...ru.localize,
    month: (index: number) =>
      [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
      ][index],
    day: (index: number) => ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'][index],
  },
};
registerLocale('ru-custom', ruLocale);

const DatePickerField = ({
  name,
  label,
  value,
  required,
  onChange,
  error,
  errorMessage,
}: {
  name: string;
  label: string;
  value: Date | null;
  required?: boolean;
  onChange: (name: string, date: Date | null) => void;
  error: boolean;
  errorMessage?: string;
}) => {
  return (
    <div className={clsx('date-picker')}>
      {label && (
        <label className='area-label'>
          {label}
          {required && <span className='input-required'>*</span>}
        </label>
      )}
      <DatePicker
        locale='ru-custom'
        selected={value}
        onChange={(date) => onChange(name, date)}
        dateFormat='dd.MM.yyyy'
        customInput={<CustomInput />}
        placeholderText='дд.мм.гггг'
        className={clsx('input', {
          'area--error': error,
        })}
      />
      {error && errorMessage && (
        <div className='area-error'>{errorMessage}</div>
      )}
    </div>
  );
};

export default DatePickerField;
