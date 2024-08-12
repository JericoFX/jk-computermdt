import { defineRecipe } from '@pandacss/dev';

export const Modal = defineRecipe({
  className: '7-Modal',
  base: {
    font: 'var(--font)',
    color: 'var(--secondary-color)',
    fontWeight: 'normal',
    margin: '0 0 20px',
  },
  variants: {
    primary: {
      true: {
        fontSize: '12pt',
        color: 'var(--primary-color)',
      },
    },
  },
});
