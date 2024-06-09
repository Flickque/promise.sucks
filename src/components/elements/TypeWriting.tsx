import styles from './TypeWriting.module.css';
import { twMerge } from '@/helpers/tw-merge';

export function TypeWriting() {
  return (
    <h1
      className={twMerge(
        styles.typewriterLine,
        styles.typewriterAnim,
        'text-primary-xs text-nowrap',
      )}
    >
      PROMISE. COMMIT. EARN.
    </h1>
  );
}
