import { defineRecipe } from '@pandacss/dev';

export const Field = defineRecipe({
  className: '7-Field',
  base: {
    border: '1px solid #cdd7db',
    borderRadius: '3px',
    boxShadow: 'inset 0 0 0 1px #fff',
    margin: 0,
    padding: '10px',
    WebkitPaddingBefore: '8px',
    paddingBlockStart: '8px',
    '& legend': {
      font: '9pt Segoe UI,SegoeUI,Noto Sans,sans-serif',
    },
  },
  jsx: ['fieldset', 'legend'],
});
