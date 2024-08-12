import { defineConfig } from '@pandacss/dev';
export default defineConfig({
  globalVars: {
    '--tab-border': '1px solid #888',
    '--tab-border-color': '#888',
    '--tab-bg': '#fff',
    '--font': '9pt "Segoe UI", "SegoeUI", "Noto Sans", sans-serif',
    '--surface': '#f0f0f0',
    '--button-highlight': '#fff',
    '--button-face': '#f2f2f2',
    '--button-face-hover': '#eaf6fd',
    '--button-face-active': '#c4e5f6',
    '--button-face-disabled': '#f4f4f4',
    '--button-shade-light': '#ebebeb',
    '--button-shade-light-default': '#c3dcea',
    '--button-shade-light-hovered': '#bee6fd',
    '--button-shade-light-active': '#98d1ef',
    '--button-shade-dark': '#cfcfcf',
    '--button-shadow': 'inset 0 0 0 1px #fffc',
    '--button-shadow-active': 'inset 1px 1px 0 #0003, inset -1px 1px 0 #0001',
    '--button-border': '1px solid',
    '--button-border-color': '#8e8f8f',
    '--button-border-color-default': '#5586a3',
    '--button-border-color-hovered': '#3c7fb1',
    '--button-border-color-active': '#6d91ab',
    '--button-border-color-disabled': '#aeb2b5',
    '--button-text-color-disabled': '#838383',
    '--button-gradient':
      'linear-gradient(   to bottom,   var(--button-face) 45%,   var(--button-shade-light) 45%,   var(--button-shade-dark) )',
    '--button-gradient-hovered':
      'linear-gradient(   to bottom,   var(--button-face-hover) 45%,   var(--button-shade-light-hovered) 45%,   #a7d9f5 )',
    '--button-gradient-active':
      'linear-gradient(   to bottom,   #e5f4fc,   var(--button-face-active) 30% 50%,   var(--button-shade-light-active) 50%,   #68b3db )',
    '--element-spacing': '8px',
    '--grouped-element-spacing': '6px',
    '--border-radius': '3px',
    '--border-width': '1px',
    '--link-color': '#0066cc',
    '--link-color-hovered': '#3399ff',
    '--primary-color': '#003399',
    '--secondary-color': '#000000',
    '--window-spacing': '6px',
    '--window-border': '1px solid',
    '--window-border-radius': '6px',
    '--window-border-color': 'rgba(0, 0, 0, 0.7)',
    '--window-background-color': '#4580c4',
    '--window-background-glass-stripes':
      'linear-gradient(      135deg,      #fff5 70px,      transparent 100px    ),    linear-gradient(225deg, #fff5 70px, transparent 100px),    linear-gradient(        54deg,                  #0002 0 4%,        #6661 6% 6%,        #0002 8% 10%,                  #0002 15% 16%,        #aaa1 17% 18%,        #0002 23% 24%,                  #bbb2 25% 26%,        #0002 31% 33%,                  #0002 34% 34.5%,        #bbb2 36% 40%,                  #0002 41% 41.5%,        #bbb2 44% 45%,                  #bbb2 46% 47%,        #0002 48% 49%,        #0002 50% 50.5%,                  #0002 56% 56.5%,        #bbb2 57% 63%,        #0002 67% 69%,                  #bbb2 69.5% 70%,        #0002 73.5% 74%,                  #bbb2 74.5% 79%,        #0002 80% 84%,                  #aaa2 85% 86%,        #0002 87%,        #bbb1 90%      )      left center/100vw 100vh no-repeat fixed',
    '--window-background':
      'linear-gradient(      to right,      #ffffff66,      #0000001a,      #ffffff33    ),    var(--window-background-color)',
    '--control-border-color': 'rgba(0, 0, 0, 0.3)',
    '--control-border-radius': '5px',
    '--control-inset-shadow': 'inset 0 0 0 1px #fffa',
    '--control-background':
      'linear-gradient(    rgba(255, 255, 255, 0.5),    rgba(255, 255, 255, 0.3) 45%,    rgba(0, 0, 0, 0.1) 50%,    rgba(0, 0, 0, 0.1) 75%,    rgba(255, 255, 255, 0.5)  )',
    '--control-background-hovered':
      'radial-gradient(      circle at bottom,      #2aceda,      transparent 65%    ),    linear-gradient(#b6d9ee 50%, #1a6ca1 50%)',
    '--control-background-active':
      'radial-gradient(      circle at bottom,      #0bfdfa,      transparent 65%    ),    linear-gradient(#86a7bc 50%, #092747 50%)',
    '--control-background-close':
      'radial-gradient(      circle at -60% 50%,      #0007 5% 10%,      #0000 50%    ),    radial-gradient(circle at 160% 50%, #0007 5% 10%, #0000 50%),    linear-gradient(#e0a197e5, #cf796a 25% 50%, #d54f36 50%)',
    '--control-background-close-hovered':
      'radial-gradient(      circle at 50% 170%,      #f4e676 10% 20%,      #0000 60%    ),    radial-gradient(circle at -60% 50%, #000a 5% 10%, #0000 50%),    radial-gradient(circle at 160% 50%, #000a 5% 10%, #0000 50%),    linear-gradient(#fb9d8b, #ee6d56 25% 50%, #d42809 50%)',
    '--control-background-close-active':
      'radial-gradient(      circle at 50% 170%,      #dcc03f 10% 20%,      #0000 60%    ),    radial-gradient(circle at -60% 50%, #000 5% 10%, #0000 50%),    radial-gradient(circle at 160% 50%, #000 5% 10%, #0000 50%),    linear-gradient(#d1a894, #b67562 25% 50%, #7d0d01 50%)',
    '--menu-padding': '2px',
    '--item-offset-left': '30px',
    '--item-hover-background':
      'linear-gradient(   to bottom,   #fff9,   #e6ecf5cc 90%,   #fffc )',
  },
});
