import { defineRecipe } from '@pandacss/dev';

export const Taskbar = defineRecipe({
  className: '7-Taskbar',
  base: {
    position: 'absolute',
    right: '0',
    bottom: '0',
    width: '100%',
    left: '0',
    display: 'block',
    height: '40px',
    borderTop: 'solid 1px rgba(255, 255, 255, 0.5)',
    WebkitBoxShadow: '0 -1px 0 0 #00506b',
    boxShadow: '0 -1px 0 0 #00506b',
    zIndex: 1,
    background:
      'linear-gradient(to right,rgba(0, 0, 0, 0.5) 0%,rgba(0, 0, 0, 0.5) 10%,rgba(0, 0, 0, 0.25) 15%,rgba(0, 0, 0, 0.25) 75%,rgba(0, 0, 0, 0.6) 85%,rgba(0, 0, 0, 0.6) 100%  )',
  },
  jsx: ['Task', 'div'],
});
