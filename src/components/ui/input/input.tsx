import { FC } from 'react';
import clsx from 'clsx';
import '../input-area/input-area.scss';

export type InputProps = {
  label?: string;
  value: string;
  name?: string;
  required?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  className?: string;
  inlineLabel?: boolean;
  type?: string;
};

const Input: FC<InputProps> = ({
  label,
  value,
  name,
  onChange,
  required,
  placeholder = '',
  disabled = false,
  error = false,
  onBlur,
  errorMessage,
  className,
  inlineLabel,
  type = 'text',
}) => {
  return (
    <div
      className={clsx('input-container', className, {
        'input-container--inline': inlineLabel,
      })}
    >
      {label && (
        <label className='area-label'>
          {label}
          {required && <span className='input-required'>*</span>}
        </label>
      )}
      <input
        type={type}
        className={clsx('input', {
          'area--error': error,
          'area--disabled': disabled,
        })}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        disabled={disabled}
      />
      {error && errorMessage && (
        <div className='area-error'>{errorMessage}</div>
      )}
    </div>
  );
};

export default Input;
