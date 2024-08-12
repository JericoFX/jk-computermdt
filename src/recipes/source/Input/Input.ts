import { defineRecipe } from '@pandacss/dev';
export const Input = defineRecipe({
  className: '7-Input',
  base: {
    "&[type='email'], &[type='number'], &[type='password'], &[type='text']": {
      height: '23px',
      marginLeft: '6px',
      width: '100%',
    },
    "&[type='email'], &[type='number'], &[type='password'], &[type='text'], textarea":
      {
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '2px',
        borderTopColor: '#8e8f8f',
        boxSizing: 'border-box',
        font: '9pt Segoe UI, SegoeUI, Noto Sans, sans-serif',
        padding: '3px 4px 5px',
      },
    "&[type='email']:focus, &[type='number']:focus, &[type='password']:focus, &[type='text']:focus, textarea:focus":
      {
        borderColor: '#98d1ef #bee6fd #bee6fd',
        outline: 'none',
      },
  },
  jsx: ['input', 'TextArea', 'Input', 'Email', 'password', 'textarea'],
});
