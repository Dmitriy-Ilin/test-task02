import { FC } from 'react';
import clsx from 'clsx';
import './input-area.scss';

export type AreaProps = {
  label?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  className?: string;
  rows?: number;
  name?: string;
};

const Area: FC<AreaProps> = ({
  label,
  value,
  onChange,
  placeholder = '',
  disabled = false,
  error = false,
  errorMessage,
  className,
  name,
  rows = 3,
}) => {
  return (
    <div className={clsx('area-container', className)}>
      {label && <label className='area-label'>{label}</label>}
      <textarea
        name={name}
        className={clsx('area', {
          'area--error': error,
          'area--disabled': disabled,
        })}
        value={value}
        onChange={(e) => onChange(e)}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
      />
      {error && errorMessage && (
        <div className='area-error'>{errorMessage}</div>
      )}
    </div>
  );
};

export default Area;
