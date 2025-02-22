// RadioButton.tsx
import { ChangeEvent, FC, InputHTMLAttributes } from 'react';
import clsx from 'clsx';
import './radio-button.scss';

export type RadioSize = 'small' | 'medium' | 'large';

type RadioButtonProps = {
  size?: RadioSize;
  label?: string;
  name?: string;
  checked?: boolean;
  className?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
} & InputHTMLAttributes<HTMLInputElement>;

const RadioButton: FC<RadioButtonProps> = ({
  size = 'medium',
  label,
  className,
  name,
  checked,
  onChange,
  disabled,
  ...props
}) => {
  const radioClasses = clsx(
    'radio',
    `radio--size-${size}`,
    {
      'radio--disabled': disabled,
    },
    className,
  );

  return (
    <label className={radioClasses}>
      <input
        checked={checked}
        type='radio'
        name={name}
        className='radio__input'
        onChange={onChange}
        disabled={disabled}
        {...props}
      />
      <span className='radio__checkmark' />
      {label && <span className='radio__label'>{label}</span>}
    </label>
  );
};

export default RadioButton;
