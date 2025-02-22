import './date-picker.scss';
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import clsx from 'clsx';

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
        selected={value}
        onChange={(date) => onChange(name, date)}
        dateFormat='dd.MM.yyyy'
        isClearable
        placeholderText='Выберите дату'
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
