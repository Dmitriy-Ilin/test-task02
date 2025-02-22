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
  selectsStart,
  selectsEnd,
  startDate,
  endDate,
  minDate,
}: {
  name: string;
  label: string;
  value: Date | undefined;
  required?: boolean;
  onChange: (name: string, date: Date | null) => void;
  error: boolean;
  errorMessage?: string;

  selectsStart?: boolean;
  selectsEnd?: boolean;
  startDate?: Date | null;
  endDate?: Date;
  minDate?: Date;
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
        customInput={<CustomInput placeholderText='дд.мм.гггг' />}
        placeholderText='дд.мм.гггг'
        selectsStart={selectsStart}
        selectsEnd={selectsEnd}
        startDate={startDate}
        endDate={endDate}
        minDate={minDate}
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
