import { defineRecipe } from '@pandacss/dev';

export const Slider = defineRecipe({
  className: '7-Slider',
  base: {
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    appearance: 'none',
    background: 'transparent',
    padding: '10px 1px',
    width: '100%',
    _focusVisible: {
      outline: '1px dotted #000',
    },
    '&::-webkit-slider-thumb': {
      WebkitAppearance: 'none',
      background:
        "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAASCAYAAABit09LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAC7SURBVHgBlZLBCYQwEEVj9CDYgRfbswF7sRAbsArPdhBICDmEzPoDE9CdXeKH0eHP48fINOrSPM+k/mhd16YDtCyLmqZJhM7zxIs6PAF570WQAzJIRLkksd89DUl939eB1Ym3b0wpiQBmIYSXiTFGZYwRgWEY6o8uIPQLZGlu2rYtP54L3g3c912N45gHSEahh4dZERZj2zZyztFxHLnQw/vaLIattbmeULkMdg6XxLFaa3WB7MlCirTIHxVUkxicbwSEAAAAAElFTkSuQmCC')",
      height: '18px',
      transform: 'translateY(-7px)',
      width: '10px',
      _active: {
        background:
          "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAASCAYAAABit09LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACsSURBVHgB3ZKxCoMwEIYvJWOn0r10LHTuVDp1KIU+RN+gT9FZ6AP0LYqDY+nQWXAScXMQdRYh+ouRqEF0cPGHHJfcl7sbfkaFroYlqEefx5lxQK/blu6rjRZ6R34RLcFxAWSkmRZEbUkeLWigZgVymZhuoid264lGjwMvTkhmtYsqvKEGMQQY43jYNwoy//7t0j31b8DPXyBOcVYe5Kr9mDpKdoY6ndoCrDNyDnRZRNbxQWFyAAAAAElFTkSuQmCC')",
      },
    },
    '&::-webkit-slider-runnable-track': {
      background: '#f0f0f0',
      boxShadow: 'inset 1px 1px 1px #999, inset -1px 0 #999, 0 1px #fff',
      boxSizing: 'border-box',
      height: '3px',
      width: '100%',
    },
    '&.has-box-indicator::-webkit-slider-thumb': {
      background:
        "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAASCAYAAABit09LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABrSURBVHgB7dLNCcAgDAXgWASjm9TJ3Egns8N4SGv6c2gbyQA+kED40IPPwJGUEsEgpRRjO8o5i6i11gfZe7HVCojIJ4QA6D3vnXM8F1DmBUkL1TdOOIRGC2X7hcIvPu1ZY/wFV83OhzTF3QGRrxiDB3GCSQAAAABJRU5ErkJggg==')",
      _active: {
        background:
          "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAASCAYAAABit09LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABmSURBVHgB7dKxCYAwEAXQfyEKYhrBThdwCwsLyRKukFGcRiyyh0tY2kcT0fJIn/zijg+v/IQnerUOTDYzkfToWkbOQcM6+ZX5OMNvVIVeFehqEbopXyIQmQzTgf969qFlIfkTM9wbGH4SS8YdBX4AAAAASUVORK5CYII=')",
      },
    },

    // '.isVertical': {
    //   display: 'inline-block',
    //   height: '150px',
    //   transform: 'translateY(50%)',
    //   width: '4px',
    // },
    // '.isVertical > &': {
    //   height: '4px',
    //   margin: 'undefined',
    //   transform: 'rotate(270deg) translateX(calc(-50% + 8px))',
    //   transformOrigin: 'left',
    //   width: '150px',
    // },
    // '.is-vertical > &::-webkit-slider-thumb': {
    //   transform: 'translateY(-8px) scaleX(-1)',
    // },
    // '.is-vertical > &.has-box-indicator::-webkit-slider-thumb': {
    //   transform: 'translateY(-9px) scaleX(-1)',
    // },
  },
});
