import { extendTailwindMerge, validators } from 'tailwind-merge';

export const twMerge = extendTailwindMerge<'text'>({
  extend: {
    classGroups: {
      text: [
        { 'text-primary': ['base', 'caption', validators.isTshirtSize] },
        { 'text-secondary': ['base', 'caption', validators.isTshirtSize] },
        'text-base',
        'text-caption',
        'text-universal',
      ],
    },
  },
});
