import React, { ComponentPropsWithoutRef } from 'react';
import calendar from '../../../assets/Calendar.svg';
import clsx from 'clsx';

interface CustomInputProps extends ComponentPropsWithoutRef<'input'> {
  onClick?: () => void;
  onChange?: () => void;
  placeholderText?: string;
  value?: string;
}

const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  ({ value, onClick, className, placeholderText }, ref) => (
    <div className='custom-datepicker-input'>
      <input
        type='text'
        value={value}
        onClick={onClick}
        ref={ref}
        className={clsx('custom-input', className)}
        placeholder={placeholderText}
        readOnly
      />
      <img src={calendar} alt='Calendar' className='calendar-icon' />
    </div>
  ),
);

export default CustomInput;
