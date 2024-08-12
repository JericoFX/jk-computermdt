import { defineRecipe } from '@pandacss/dev';

export const DesktopIcon = defineRecipe({
  className: '7-DesktopIcon',
  base: {
    position: 'absolute',
    display: 'block',
    width: '100px',
    height: '100px',
    color: 'white',
    backgroundSize: '100px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    border: 'solid 2px transparent',
    borderRadius: '2px',
    userSelect: 'none',
    zIndex: 2,
    fontSize: '14px',
    _hover: {
      backgroundColor: 'rgba(255,255,255,.3)',
      borderColor: 'rgba(255,255,255,.3)',
    },
    _after: {
      display: 'block',
      position: 'absolute',
      top: '55px',
      width: '100%',
      textAlign: 'center',

      content: 'attr(data-label)',
      textShadow: '0 2px 2px #000',
      userSelect: 'none',
    },
    _focus: {
      backgroundColor: 'rgba(255,245,245,.5)',
      borderColor: 'rgba(255,255,255,.5)',
    },
    _focusVisible: {
      backgroundColor: 'rgba(255,245,245,.5)',
      borderColor: 'rgba(255,255,255,.5)',
    },
    _active: {
      backgroundColor: 'rgba(255,245,245,.5)',
      borderColor: 'rgba(255,255,255,.5)',
    },
    '&.checked': {
      backgroundColor: 'rgba(255,245,245,.5)',
      borderColor: 'rgba(255,255,255,.5)',
    },
    '& > img': {
      userSelect: 'none',
    },
  },
});
