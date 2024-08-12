import { defineRecipe } from '@pandacss/dev';
export const FormGroup = defineRecipe({
  className: '7-FormGroup',
  base: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: '10px',
    marginBottom: '10px',
    '& > label': {
      justifySelf: 'end',
    },
    '& > input': {
      width: '100%',
    },
    '&.Stacked': {
      display: 'flex',
      flexDirection: 'column',
      '& * + *': {
        marginTop: '6px',
      },
    },
  },
  jsx: ['div'],
});

export default FormGroup;
