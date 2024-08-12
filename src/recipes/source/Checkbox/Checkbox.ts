import { defineRecipe } from '@pandacss/dev';
export const Checkbox = defineRecipe({
  className: '7-Checkbox',

  base: {
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    background: 'none',
    border: 'none',
    font: '9pt Segoe UI, SegoeUI, Noto Sans, sans-serif',
    margin: '0',
    opacity: 0,
    '& + label': {
      alignItems: 'center',
      display: 'inline-flex',
      font: '9pt Segoe UI, SegoeUI, Noto Sans, sans-serif',
      marginLeft: '0',
      position: 'relative',
    },
    _hover:{
      cursor:"pointer",
    },
    '& + label:before': {
      background: '#f6f6f6',
      border: '1px solid #8e8f8f',
      boxShadow:
        'inset 0 0 0 1px #f4f4f4, inset 1px 1px 0 1px #aeaeae, inset -1px -1px 0 1px #ddd, inset 3px 3px 6px #ccc',
      boxSizing: 'border-box',
      content: "''",
      display: 'inline-block',
      height: '14px',
      marginRight: '6px',
      transition: '0.4s',
      width: '14px',
    },
    '& + label:hover:before': {
      background: '#e9f7fe',
      borderColor: '#3c7fb1',
      boxShadow:
        'inset 0 0 0 1px #def9fa, inset 1px 1px 0 1px #79c6f9,   inset -1px -1px 0 1px #c6e9fc, inset 3px 3px 6px #b1dffd',
    },
    '&:focus-visible + label': {
      outline: '1px dotted #000',
    },
    '&:checked + label:after': {
      color: '#4a5f97',
      content: "'\\2714'",
      display: 'block',
      fontWeight: 700,
      left: '2px',
      position: 'absolute',
      top: '0',
    },
    '&:disabled + label': { opacity: 0.6 },
  },
});
