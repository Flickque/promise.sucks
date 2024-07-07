import { Button } from '@/components/ui/Button';
import { ReactNode } from 'react';
import styles from './RetroButton.module.css';
import { twMerge } from '@/helpers/tw-merge';

interface Props {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}
export function RetroButton({
  children,
  className,
  onClick,
  type = 'button',
}: Props): ReactNode {
  return (
    <Button
      className={twMerge(
        styles.retroButton,
        'flex flex-row gap-2 items-center px-3 py-1 text-base justify-center',
        className,
      )}
      onClick={onClick}
      type={type}
    >
      {children}
    </Button>
  );
}
