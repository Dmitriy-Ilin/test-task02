import './select.scss';

import { FC, useState, useRef, useEffect } from 'react';
import clsx from 'clsx';

export type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

type SelectProps = {
  label?: string;
  options: SelectOption[];
  value: string | null;
  name?: string;
  required?: boolean;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  className?: string;
};

const Select: FC<SelectProps> = ({
  label,
  options,
  value,
  name,
  required,
  onChange,
  placeholder = 'Select...',
  disabled = false,
  error = false,
  errorMessage,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((opt) => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectRef.current &&
        !selectRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (value: string) => {
    onChange(value);
    setIsOpen(false);
  };

  return (
    <div className={clsx('select-container', className)} ref={selectRef}>
      {label && (
        <label htmlFor={name} className='select-label'>
          {label}
          {required && <span className='input-required'>*</span>}
        </label>
      )}

      <div
        className={clsx('select', {
          'select--open': isOpen,
          'select--disabled': disabled,
          'select--error': error,
        })}
        onClick={() => !disabled && setIsOpen(!isOpen)}
        role='button'
        tabIndex={0}
      >
        <div className='select__selected'>
          {selectedOption?.label || placeholder}
        </div>

        <div className='select__arrow' />

        {isOpen && (
          <div className='select-dropdown'>
            {options.map((option) => (
              <div
                key={option.value}
                className={clsx('select-option', {
                  'select-option--selected': option.value === value,
                  'select-option--disabled': option.disabled,
                })}
                onClick={() => !option.disabled && handleSelect(option.value)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
      {error && errorMessage && (
        <div className='select-error'>{errorMessage}</div>
      )}
    </div>
  );
};

export default Select;
