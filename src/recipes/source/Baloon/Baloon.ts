import { defineRecipe } from '@pandacss/dev';

export const tooltip = defineRecipe({
  className: '7-baloon',
  base: {
    background: 'linear-gradient(180deg, #fff, #ebebeb)',
    border: '1px solid rgba(0, 0, 0, 0.4)',
    borderRadius: '3px',
    boxShadow: '5px 5px 3px -3px rgba(0, 0, 0, 0.4)',
    padding: '0.5em 0.5em 0.5em 0.5em',
    position: 'relative',
    _before: {
      background:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='20' height='20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M.5 1.5v18h18l-18-18Z' fill='%23fff' stroke='%23fff'/%3E%3Cpath d='M1 19.5H.5v-18l18 18H18' stroke='%23939393'/%3E%3C/svg%3E\")",
      content: "''",
      height: '18px',
      left: '1em',
      position: 'absolute',
      top: '-18px',
      width: '18px',
    },
    '&[id]': {
      position: 'absolute',
    },
  },
  variants: {
    isTop: {
      true: {
        _before: {
          background:
            "url(\"data:image/svg+xml;charset=utf-8,%3Csvg width='20' height='20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M.5 1.5v18h18l-18-18Z' fill='%23ddd' stroke='%23ddd'/%3E%3Cpath d='M1 19.5H.5v-18l18 18H18' stroke='%23939393'/%3E%3C/svg%3E\")",
          bottom: '-18px',
          top: 'unset',
          transform: 'scale(-1)',
        },
      },
    },
    isRight: {
      true: {},
    },
    isLeft: {
      true: {
        _before: {
          left: 'unset',
          right: '1em',
        },
      },
    },
    isBottom: {
      true: {},
    },
  },
  compoundVariants: [
    {
      isTop: true,
      isRight: true,
      css: {
        _before: {
          transform: 'scaleY(-1)',
        },
      },
    },
    {
      isLeft: true,
      isBottom: true,
      css: {
        _before: {
          transform: 'scaleX(-1)',
        },
      },
    },
  ],
  jsx: ['div', 'Baloon', 'Tooltips'],
});
