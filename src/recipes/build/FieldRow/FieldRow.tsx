import { styled } from '../../../../styled-system/jsx';
const FieldRow = styled('div', {
  base: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gap: '10px', // Ajusta este valor según tus necesidades
    marginBottom: '10px', // Espacio entre los grupos de formulario
    '& > label': {
      justifySelf: 'start',
    },
    '& > input': {
      width: '100%', // Para que el input ocupe todo el espacio disponible
    },
    '&.Stacked': {
      display: 'flex',
      flexDirection: 'column',
      '& * + *': {
        marginTop: '6px',
      },
    },
  },
  variants: {
    readOnly: {
      true: {
        '& > input': {
          cursor: 'default',
          opacity: 0.8,
          pointerEvents: 'none',
        },
      },
    },
  },
  defaultVariants: {
    readOnly: false,
  },
  jsx: ['div'],
});

export default FieldRow;
