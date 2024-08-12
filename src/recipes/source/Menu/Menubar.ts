import { defineRecipe } from '@pandacss/dev';

export const Menu = defineRecipe({
  className: '7-Menubar',
  base: {
    '&': {
      cursor: 'default',
      listStyle: 'none',
      margin: '0',
      padding: '0',
    },
    '&[role="menubar"]': {
      background:
        'linear-gradient(#fff 20%,#f1f4fa 25%,#f1f4fa 43%,#d4dbee 48%,#e6eaf6  )',
      display: 'flex',
    },
    "&[role='menubar']": {
      background:
        'linear-gradient(#fff 20%,#f1f4fa 25%,#f1f4fa 43%,#d4dbee 48%,#e6eaf6  )',
      display: 'flex',
    },
    "&[role='menubar'] > [role='menuitem']": {
      padding: '6px 10px',
      position: 'relative',
    },
    "&[role='menubar'] > [role='menuitem']:focus, &[role='menubar'] > [role='menuitem']:focus-within,&[role='menubar'] > [role='menuitem']:hover":
      {
        background: '#39f',
        color: '#fff',
        outline: 'none',
      },
    "&[role='menubar'] > [role='menuitem']:focus-within ~ [role='menuitem']:focus, &[role='menubar']  > [role='menuitem']:focus-within  ~ [role='menuitem']:focus-within, &[role='menubar'] > [role='menuitem']:focus ~ [role='menuitem']:focus, &[role='menubar'] > [role='menuitem']:focus ~ [role='menuitem']:focus-within, &[role='menubar'] > [role='menuitem']:hover ~ [role='menuitem']:focus, &[role='menubar'] > [role='menuitem']:hover ~ [role='menuitem']:focus-within":
      {
        background: 'transparent',
        color: 'inherit',
      },
    "&[role='menubar'] > [role='menuitem']:focus-within:has(~ [role='menuitem']:hover),&[role='menubar'] > [role='menuitem']:focus:has(~ [role='menuitem']:hover),&[role='menubar'] > [role='menuitem']:hover:has(~ [role='menuitem']:hover)":
      {
        background: 'transparent',
        color: 'inherit',
      },
  },
});
