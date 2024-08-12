import { defineRecipe } from '@pandacss/dev';

export const Select = defineRecipe({
  className: '7-Select',
  base: {
    appearance: 'none',
    height: '23px',
    marginLeft: '6px',
    width: '100%',
    background:
      "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik0xMSA2SDR2MWgxdjFoMXYxaDF2MWgxVjloMVY4aDFWN2gxVjZaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+'),\n    linear-gradient(180deg, #f2f2f2 45%, #ebebeb 0, #cfcfcf)",
    backgroundPosition: '100%',
    backgroundRepeat: 'no-repeat',
    border: '1px solid #8e8f8f',
    borderRadius: '3px',
    boxShadow: 'inset 0 0 0 1px #fffc',
    boxSizing: 'border-box',
    color: '#222',
    font: '9pt Segoe UI, SegoeUI, Noto Sans, sans-serif',
    padding: '2px 30px 2px 3px',
    position: 'relative',
    _hover: {
      backgroundImage:
        "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik0xMSA2SDR2MWgxdjFoMXYxaDF2MWgxVjloMVY4aDFWN2gxVjZaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+'),\n    linear-gradient(180deg, #eaf6fd 45%, #bee6fd 0, #a7d9f5)",
      borderColor: '#3c7fb1',
    },
    _active: {
      backgroundImage:
        "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IGlkPSJhIiB4MT0iMCUiIHkxPSIwJSIgeDI9IjEwMCUiIHkyPSIwJSI+PHN0b3Agb2Zmc2V0PSIwJSIgc3R5bGU9InN0b3AtY29sb3I6IzMzMztzdG9wLW9wYWNpdHk6MSIvPjxzdG9wIG9mZnNldD0iMTAwJSIgc3R5bGU9InN0b3AtY29sb3I6I2FhYTtzdG9wLW9wYWNpdHk6MSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGQ9Ik0xMSA2SDR2MWgxdjFoMXYxaDF2MWgxVjloMVY4aDFWN2gxVjZaIiBmaWxsPSJ1cmwoI2EpIi8+PC9zdmc+'),\n    linear-gradient(180deg, #e5f4fc, #c4e5f6 30% 50%, #98d1ef 50%, #68b3db)",
      borderColor: '#6d91ab',
      boxShadow: 'inset 1px 1px 0 #0003, inset -1px 1px 0 #0001',
      outline: 'none',
    },
    _focus: {
      boxShadow: 'inset 0 0 0 2px #98d1ef',
      outline: '1px dotted #000',
      outlineOffset: '-4px',
    },
  },
  jsx: ['Dropwdown', 'select', 'options'],
});
