import { ComponentPropsWithoutRef, ReactNode } from 'react';

interface Props extends ComponentPropsWithoutRef<'button'> {
  children: ReactNode;
  className?: string;
}
export function Button({ children, className, ...props }: Props) {
  return (
    <button {...props} className={className}>
      {children}
    </button>
  );
}
