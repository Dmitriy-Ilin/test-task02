import './text.scss';
import clsx from 'clsx';

type FontSize = 'xl' | 'lg2' | 'lg' | 'md' | 'base' | 'sm' | 'xs';
type LineHeight = 'xl2' | 'xl1' | 'xl' | 'lg' | 'md' | 'sm';
type FontWeight = 'black' | 'lg2' | 'bold' | 'regular' | 'light';

type TextProps = {
  children: React.ReactNode;
  size?: FontSize;
  lineHeight?: LineHeight;
  weight?: FontWeight;
  className?: string;
};

const Text = ({
  children,
  size = 'base',
  lineHeight,
  weight = 'regular',
  className,
}: TextProps) => {
  const classes = clsx(
    'text',
    `text-size-${size}`,
    `text-weight-${weight}`,
    lineHeight && `text-line-${lineHeight}`,
    className,
  );

  return <span className={classes}>{children}</span>;
};

export default Text;
