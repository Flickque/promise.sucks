import { Button } from '@/components/ui/Button';
import { ReactNode } from 'react';
import styles from './RetroButton.module.css';
import { twMerge } from '@/helpers/tw-merge';

interface Props {
  children: ReactNode;
  className?: string;
}
export function RetroButton({ children, className }: Props): ReactNode {
  return (
    <Button
      className={twMerge(
        styles.retroButton,
        'flex flex-row gap-2 items-center justify-center',
        className,
      )}
    >
      {children}
    </Button>
  );
}
