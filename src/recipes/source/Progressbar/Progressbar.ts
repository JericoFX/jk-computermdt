import { defineRecipe } from '@pandacss/dev';

export const ProgressBar = defineRecipe({
  className: '7-ProgressBar',
  base: {
    background:
      'radial-gradient(circle at 0 50%, #0000001f 10px, transparent 30px),radial-gradient(circle at 100% 50%, #0000001f 10px, transparent 30px),linear-gradient(180deg,#f3f3f3af,#fcfcfcaf 3px,#dbdbdbaf 6px,#cacacaaf 0,#d5d5d5af),#ddd',
    border: '1px solid #8e8f8f',
    borderRadius: '3px',
    boxShadow: 'inset 0 0 0 1px #f3f3f388, 0 0 0 1px #eaeaea88',
    height: '15px',
    margin: '2px 0',
    overflow: 'hidden',
    '& > div': {
      backgroundColor: '#0bd82c',
      backgroundImage:
        'linear-gradient(180deg,#f3f3f3af,#fcfcfcaf 3px,#dbdbdbaf 6px,transparent 0),radial-gradient(circle at 0 50%, #0000002f 10px, transparent 30px),radial-gradient(circle at 100% 50%, #0000002f 10px, transparent 30px),linear-gradient(180deg, transparent 65%, #ffffff55),linear-gradient(180deg, transparent 6px, #cacaca33 0, #d5d5d533)',
      boxShadow: 'inset 0 0 0 1px #ffffff1f',
      height: '100%',
      overflow: 'hidden',
    },
  },
  variants: {
    paused: {
      true: {
        '& > div': {
          backgroundColor: '#e6df1b',
        },
      },
    },
    error: {
      true: {
        '& > div': {
          backgroundColor: '#ef0000',
        },
      },
    },
    animate: {
      true: {
        '& > div': {
          _before: {
            animation: 'progressbar 3s linear infinite',
            background:
              'linear-gradient(90deg, transparent, #ffffff80, transparent 40%)',
            content: "''",
            display: 'block',
            height: '100%',
          },
        },
      },
    },
    marquee: {
      true: {
        _before: {
          background:
            'linear-gradient(90deg, transparent, #0bd82c, transparent 35%)',
          opacity: 0.5,
        },
      },
    },
  },
  compoundVariants: [
    {
      marquee: true,
      css: {
        _before: {
          animation: 'progressbar 3s linear infinite',
          background:
            'linear-gradient(90deg, transparent, #0bd82c, transparent 40%)',
          content: "''",
          display: 'block',
          height: '100%',
        },
      },
    },
  ],
  jsx: ['div', 'Progressbar'],
});
