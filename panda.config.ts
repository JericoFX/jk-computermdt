import { defineConfig } from '@pandacss/dev';
import theme from './src/recipes/source/theme';
import config from './src/recipes/source/config';
export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],
  globalVars: config.globalVars,
  // Useful for theme customization
  theme: theme.theme,
  importMap: 'styled-system',
  jsxFramework: 'solid',
  // The output directory for your css system
  outdir: 'styled-system',
});
