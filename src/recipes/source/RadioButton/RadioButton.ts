import { defineRecipe } from '@pandacss/dev';

export const Radio = defineRecipe({
  className: '7-Radio',
  base: {
    height: '23px',
    backgroundColor: '#fff',
    border: '1px solid #ccc',
    borderRadius: '2px',
    borderTopColor: '#8e8f8f',
    boxSizing: 'border-box',
    font: '9pt Segoe UI, SegoeUI, Noto Sans, sans-serif',
    padding: '3px 4px 5px',
    '& + label': {
      alignItems: 'center',
      display: 'inline-flex',
      font: '9pt Segoe UI, SegoeUI, Noto Sans, sans-serif',
      marginLeft: '20px',
      position: 'relative',
      _before: {
        background: '#f6f6f6',
        border: '1px solid #8e8f8f',
        borderRadius: '50%',
        boxShadow: 'inset 0 0 0 1.5px #f4f4f4, inset 1px 1px 0 1.5px #aeaeae',

        boxSizing: 'border-box',
        content: '""',
        display: 'inline-block',
        height: '14px',
        left: '-20px',
        marginRight: '6px',
        position: 'absolute',
        top: 0,
        transition: '0.4s',
        width: '14px',
      },
      _hover: {
        _before: {
          borderColor: '#3c7fb1',
          boxShadow: 'inset 0 0 0 1.5px #def9fa, inset 1px 1px 0 1.5px #79c6f9',
          inset: '-1px -1px 0 1.5px #c6e9fc, inset 3px 3px 6px #b1dffd',
        },
      },
    },
    '&:checked + label:after': {
      background: '#7cd3eb',
      border: '1.5px solid #27506d',
      borderRadius: '50%',
      boxShadow: 'inset -1px -1px 0 .5px #16638f,inset -1px -1px 0 1px #1985c0',
      boxSizing: 'border-box',
      content: '""',
      display: 'block',
      height: '8px',
      left: '-17px',
      position: 'absolute',
      top: '3px',
      width: '8px',
    },
    '&:focus-visible + label': {
      outline: '1px dotted #000',
    },
    '&:disabled + label': {
      opacity: 0.6,
    },
  },
  jsx: ['input', 'RadioButton', 'label'],
});
