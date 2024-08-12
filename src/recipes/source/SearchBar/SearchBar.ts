import { defineRecipe } from '@pandacss/dev';

export const SearchBar = defineRecipe({
  className: '7-SearchBar',
  base: {
    '& > input': {
      backgroundColor: '#fff',
      border: '1px solid transparent',
      borderRadius: '2px',
      boxShadow: 'inset 1px 1px 0 #8e8f8f, inset -1px -1px 0 #ccc',
      boxSizing: 'border-box',
      font: '9pt Segoe UI, SegoeUI, Noto Sans, sans-serif',
      padding: '3px 6px',
      paddingRight: '2px',
      position: 'relative',
      height: '23px',
      marginLeft: '6px',
      width: '100%',
      _placeholder: {
        backgroundPosition: 'calc(100% - 8px)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '14px',
        fontStyle: 'italic',
      },
      _focus: {
        outline: 'none',
      },
    },
    '&.searchbox': {
      height: '23px',
      marginLeft: '6px',
      width: '100%',
      paddingRight: '26px',
      display: 'inline-block',
      position: 'relative',
    },
    '&.searchbox > input + button': {
      background:
        "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggc3Ryb2tlPSIjMjA3MGI5IiBkPSJNMTAuNSAxQzguMDIgMSA2IDMuMDIgNiA1LjVhNC40NSA0LjQ1IDAgMCAwIDEgMi43OTNMMi4wMjMgMTMuMjdsLjcwNC43MUw3LjcwNyA5Yy43Ny42MTcgMS43MzQgMSAyLjc5MyAxIDIuNDggMCA0LjUtMi4wMiA0LjUtNC41UzEyLjk4IDEgMTAuNSAxWm0wIDFDMTIuNDM4IDIgMTQgMy41NjMgMTQgNS41IDE0IDcuNDM4IDEyLjQzNyA5IDEwLjUgOUEzLjQ5NCAzLjQ5NCAwIDAgMSA3IDUuNUM3IDMuNTYyIDguNTYzIDIgMTAuNSAyWiIvPjwvc3ZnPg==')\n      no-repeat 50%,\n    linear-gradient(180deg, #f2f2f2 45%, #ebebeb 0, #cfcfcf)",
      backgroundSize: '14px',
      borderRadius: '0',
      minHeight: '22px',
      minWidth: '26px',
      padding: '0',
      position: 'absolute',
      right: '1px',
      top: '1px',
      _before: {
        background:
          "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggc3Ryb2tlPSIjMjA3MGI5IiBkPSJNMTAuNSAxQzguMDIgMSA2IDMuMDIgNiA1LjVhNC40NSA0LjQ1IDAgMCAwIDEgMi43OTNMMi4wMjMgMTMuMjdsLjcwNC43MUw3LjcwNyA5Yy43Ny42MTcgMS43MzQgMSAyLjc5MyAxIDIuNDggMCA0LjUtMi4wMiA0LjUtNC41UzEyLjk4IDEgMTAuNSAxWm0wIDFDMTIuNDM4IDIgMTQgMy41NjMgMTQgNS41IDE0IDcuNDM4IDEyLjQzNyA5IDEwLjUgOUEzLjQ5NCAzLjQ5NCAwIDAgMSA3IDUuNUM3IDMuNTYyIDguNTYzIDIgMTAuNSAyWiIvPjwvc3ZnPg==')\n      no-repeat 50%,\n    linear-gradient(180deg, #eaf6fd 45%, #bee6fd 0, #a7d9f5)",
        backgroundSize: '14px',
        borderRadius: '0',
      },
      _after: {
        background:
          "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiI+PHBhdGggc3Ryb2tlPSIjMjA3MGI5IiBkPSJNMTAuNSAxQzguMDIgMSA2IDMuMDIgNiA1LjVhNC40NSA0LjQ1IDAgMCAwIDEgMi43OTNMMi4wMjMgMTMuMjdsLjcwNC43MUw3LjcwNyA5Yy43Ny42MTcgMS43MzQgMSAyLjc5MyAxIDIuNDggMCA0LjUtMi4wMiA0LjUtNC41UzEyLjk4IDEgMTAuNSAxWm0wIDFDMTIuNDM4IDIgMTQgMy41NjMgMTQgNS41IDE0IDcuNDM4IDEyLjQzNyA5IDEwLjUgOUEzLjQ5NCAzLjQ5NCAwIDAgMSA3IDUuNUM3IDMuNTYyIDguNTYzIDIgMTAuNSAyWiIvPjwvc3ZnPg==')\n      no-repeat 50%,\n    linear-gradient(180deg, #e5f4fc, #c4e5f6 30% 50%, #98d1ef 50%, #68b3db)",
        backgroundSize: '14px',
        borderRadius: '0',
      },
      _focusVisible: {
        outline: '1px dotted #000',
        outlineOffset: '-4px',
      },
    },
  },

  jsx: ['div', 'input', 'SearchBar', 'button', 'SearchBox', 'search'],
});
