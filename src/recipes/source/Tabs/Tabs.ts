import { defineSlotRecipe } from '@pandacss/dev';

export const Tabs = defineSlotRecipe({
  className: '7-Tabs',
  slots: ['tablist', 'tabpanel'],
  base: {
    tablist: {
      display: 'flex',
      listStyleType: 'none',
      margin: '0 0 -2px',
      paddingLeft: '3px',
      position: 'relative',
      textIndent: '0',
      boxSizing: 'border-box',
      '& button': {
        borderRadius: '0',
        color: '#222',
        display: 'block',
        minWidth: 'unset',
        padding: '2px 6px',
        textDecoration: 'none',
        zIndex: '1',
        _before: {
          borderRadius: '0',
        },
        _after: {
          content: 'none',
        },
        _disabled: {
          opacity: 0.6,
        },
      },
      '&.justified button': {
        flexGrow: 1,
        textAlign: 'center',
      },
      '& > button[aria-selected="true"]': {
        background: '#fff',
        borderBottom: '0',
        boxShadow: 'none',
        margin: '-2px 0 1px -3px',
        paddingBottom: '4px',
        position: 'relative',
        zIndex: '8',
        _after: {
          content: 'none',
        },
        _before: { content: 'none' },
        _hover: {
          borderColor: '#888',
        },
        _active: {
          animation: 'none',
          borderColor: '#888',
        },
        _focus: {
          animation: 'none',
          borderColor: '#888',
        },
        _focusVisible: {
          outline: '1px dotted #222',
          outlineOffset: '-4px',
        },
      },
    },
    tabpanel: {
      background: '#fff',
      border: '1px solid #888',
      clear: 'both',
      marginBottom: '9px',
      padding: '14px',
      position: 'relative',
      zIndex: 2,
      boxSizing: 'border-box',
    },
  },
  jsx: [
    'menu',
    'Tabs',
    'TabContent',
    'Root',
    'Menu',
    'Item',
    'Article',
    'article',
    'tabs',
    'tablist',
    'tabpanel',
  ],
});
