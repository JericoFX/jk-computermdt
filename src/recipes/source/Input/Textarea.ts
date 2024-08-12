import { defineRecipe } from '@pandacss/dev';

export const Textarea = defineRecipe({
  className: '7-Textarea',
  base: {
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '2px',
    borderTopColor: '#8e8f8f',
    boxSizing: 'border-box',
    font: '9pt Segoe UI, SegoeUI, Noto Sans, sans-serif',
    padding: '3px 4px 5px',
    scrollPaddingBlock: '3px',
    marginLeft: '6px',
    width: '100%',
    resize: 'none',
    _focus: {
      borderColor: '#98d1ef #bee6fd #bee6fd',
      outline: 'none',
    },
  },
  jsx: ['textarea', 'Textarea'],
});
