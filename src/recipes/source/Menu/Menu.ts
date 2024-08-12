import { defineSlotRecipe } from '@pandacss/dev';

export const Menu = defineSlotRecipe({
  className: '7-Menu',
  slots: ['menu', 'menubar', 'menuitem'],
  base: {
    menu: {
      "&[data-part='menu']": {
        background: '#f0f0f0',
        border: '1px solid rgba(0, 0, 0, 0.4)',
        boxShadow: '4px 4px 3px -2px rgba(0, 0, 0, 0.5)',
        color: 'initial',
        minWidth: '150px',
        padding: '2px',
        position: 'relative',
        userSelect: 'none',
        _before: {
          boxShadow: 'inset 1px 0 rgba(0, 0, 0, 0.15), inset -1px 0 #fff',
          content: '""',
          height: 'calc(100% - 4px)',
          left: '30px',
          pointerEvents: 'none',
          position: 'absolute',
          width: '2px',
        },
      },
      "[data-part='menuitem'] &[data-part='menu']": {
        display: 'none',
        left: '0',
        position: 'absolute',
        top: '100%',
        zIndex: 99,
      },
      "&[data-part='menu'] [data-part='menuitem'] > &[data-part='menu']": {
        left: '100%',
        top: '-4px',
      },
      "&[data-part='menu'] > [data-part='menuitem'] > a, &[data-part='menu'] > [data-part='menuitem'] > button, &[data-part='menu'] > [data-part='menuitem'] > label, &[data-part='menu'] > [data-part='menuitem'][aria-haspopup='true']":
        {
          all: 'unset',
          border: '1px solid transparent',
          borderRadius: '3px',
          boxSizing: 'border-box',
          display: 'flex',
          justifyContent: 'space-between',
          padding: '4px 10px 4px 32px',
          position: 'relative',
          whiteSpace: 'nowrap',
          width: '100%',
          _hover: {
            background: 'linear-gradient(180deg, #fff9, #e6ecf5cc 90%, #fffc)',
            borderColor: '#b8d6fb',
          },
          _focusVisible: {
            background: 'linear-gradient(180deg, #fff9, #e6ecf5cc 90%, #fffc)',
            borderColor: '#b8d6fb',
          },
        },
      "&[data-part='menu'] > [data-part='menuitem'][aria-haspopup='true']:hover":
        {
          background: 'linear-gradient(180deg, #fff9, #e6ecf5cc 90%, #fffc)',
          borderColor: '#b8d6fb',
        },
      "&[data-part='menu'] > [data-part='menuitem'][aria-haspopup='true']:focus-visible":
        {
          background: 'linear-gradient(180deg, #fff9, #e6ecf5cc 90%, #fffc)',
          borderColor: '#b8d6fb',
        },
      "&[data-part='menu'] > [data-part='menuitem'] > button:after, &[data-part='menu'] > [data-part='menuitem'] > button:hover:before":
        {
          content: 'none',
        },
      "&[data-part='menu'] > [data-part='menuitem'][aria-haspopup='true']:after":
        {
          border: '4px solid transparent',
          borderLeftColor: 'currentcolor',
          content: '""',
          position: 'absolute',
          right: '2px',
          top: '50%',
          transform: 'translateY(-50%)',
        },
    },
    menubar: {
      '&[data-part]': {
        cursor: 'default',
        listStyle: 'none',
        margin: '0',
        padding: '0',
      },
      "&[data-part='menubar']": {
        background:
          'linear-gradient(#fff 20%,#f1f4fa 25%,#f1f4fa 43%,#d4dbee 48%,#e6eaf6  )',
        display: 'flex',
      },

      "&[data-part='menubar'] > [data-part='menuitem']": {
        padding: '6px 10px',
        position: 'relative',
      },
      "&[data-part='menubar'] > [data-part='menuitem']:focus, &[data-part='menubar'] > [data-part='menuitem']:focus-within, &[data-part='menubar'] > [data-part='menuitem']:hover":
        {
          background: '#39f',
          color: '#fff',
          outline: 'none',
        },
      "&[data-part='menubar'] > [data-part='menuitem']:focus-within ~ [data-part='menuitem']:focus, &[data-part='menubar']  > [data-part='menuitem']:focus-within  ~ [data-part='menuitem']:focus-within, &[data-part='menubar'] > [data-part='menuitem']:focus ~ [data-part='menuitem']:focus, &[data-part='menubar'] > [data-part='menuitem']:focus ~ [data-part='menuitem']:focus-within, &[data-part='menubar'] > [data-part='menuitem']:hover ~ [data-part='menuitem']:focus, &[data-part='menubar'] > [data-part='menuitem']:hover ~ [data-part='menuitem']:focus-within":
        {
          background: 'transparent',
          color: 'inherit',
        },
      "&[data-part='menubar'] > [data-part='menuitem']:focus-within:has(~ [data-part='menuitem']:hover), &[data-part='menubar'] > [data-part='menuitem']:focus:has(~ [data-part='menuitem']:hover), &[data-part='menubar'] > [data-part='menuitem']:hover:has(~ [data-part='menuitem']:hover)":
        {
          background: 'transparent',
          color: 'inherit',
        },
    },
    menuitem: {
      "&[data-part='menuitem']": { position: 'relative' },
      "&[data-part='menuitem'] > input[type]": { display: 'none' },
      "&[data-part='menuitem'] > input[type] + label": {
        display: 'block',
        position: 'relative',
      },
      "&[data-part='menuitem'] > input[type] + label:before": {
        all: 'unset',
        background: 'linear-gradient(180deg, #fff9, #e6ecf5cc 90%, #fffc)',
        borderRadius: 'inherit',
        boxShadow: '0 0 0 1px #b3d3f9',
        boxSizing: 'border-box',
        height: '22px',
        left: '0',
        position: 'absolute',
        top: '0',
        width: '22px',
      },
      "&[data-part='menuitem'] > input[type]:checked + label:before": {
        content: '""',
      },
      "&[data-part='menuitem'] > input[type][type='radio']:checked + label:after":
        {
          background: 'radial-gradient(circle at 75% 25%, #d5d4ea, #333583)',
          border: '1px solid #1a1490',
          boxShadow: 'none',
          left: '8px',
          top: '50%',
          transform: 'translateY(-50%)',
        },
      "&[data-part='menuitem'] > input[type][type='checkbox']:checked + label:after":
        {
          color: '#0c12a1',
          fontSize: '10pt',
          left: '6px',
          top: '50%',
          transform: 'translateY(-52%)',
        },
      "&[data-part='menuitem']:focus-within > [data-part='menu'], &[data-part='menuitem']:focus > [data-part='menu']":
        {
          display: 'block',
        },
      "&[data-part='menuitem']:focus-within:has(~ &[data-part='menuitem']:hover) > [data-part='menu'], &[data-part='menuitem']:focus:has(~ &[data-part='menuitem']:hover) > [data-part='menu']":
        {
          display: 'none',
        },
      "&[data-part='menuitem'][aria-disabled]": {
        opacity: 0.5,
        pointerEvents: 'none',
      },
      "&[data-part='menuitem'] img": {
        left: '2px',
        pointerEvents: 'none',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1,
      },
      "&[data-part='menuitem'] span": { marginLeft: '32px' },
      "&[data-part='menuitem']:hover > [data-part='menu']": {
        display: 'block',
      },
      "&[data-part='menuitem']:hover ~ &[data-part='menuitem']:focus, &[data-part='menuitem']:hover ~ &[data-part='menuitem']:focus-within":
        {
          background: 'transparent',
          color: 'inherit',
        },
      "&[data-part='menuitem']:hover ~ &[data-part='menuitem']:focus-within > [data-part='menu'], &[data-part='menuitem']:hover ~ &[data-part='menuitem']:focus > [data-part='menu']":
        {
          display: 'none',
        },
    },
  },
  variants: {
    hasDivider: {
      true: {
        menuitem: {
          _after: {
            boxShadow: 'inset 0 1px #00000026, inset 0 -1px #fff',
            content: '""',
            display: 'block',
            height: '2px',
            margin: '3px 0 2px 30px',
            pointerEvents: 'none',
          },
        },
      },
    },
  },
  defaultVariants: {
    hasDivider: false,
  },
  jsx: ['a', 'li', 'Menu', 'menu', 'Item', 'MenuRoot', 'MenuBar'],
});
