import { defineSlotRecipe } from '@pandacss/dev';
export const Windows = defineSlotRecipe({
  className: '7-Windows',
  slots: [
    'window',
    'body',
    'footer',
    'titleBar',
    'titleBarText',
    'titleBarControls',
    'statusBar',
    'statusBarField',
  ],
  base: {
    window: {
      border: '1px solid rgba(0, 0, 0, 0.7)',
      borderRadius: '6px',
      boxShadow: '2px 2px 10px 1px rgba(0, 0, 0, 0.7), inset 0 0 0 1px #fffa',
      font: '9pt Segoe UI, SegoeUI, Noto Sans, sans-serif',
      position: 'relative',
      zIndex: 0,
      overflow: 'hidden',
      boxSizing: 'border-box',

      _before: {
        background:
          'linear-gradient(transparent 20%,#ffffffb3 40%,transparent 41%),linear-gradient(90deg,#ffffff66,#0000001a,#ffffff33),#4580c4',
        borderRadius: '6px',
        boxShadow: 'inset 0 0 0 1px #fffd',
        content: '""',
        height: '100%',
        left: '0',
        position: 'absolute',
        top: '0',
        width: '100%',
        zIndex: '-1',
      },
      '&.glass': {
        _before: {
          opacity: '0.6',
        },
        _after: {
          WebkitBackdropFilter: 'blur(4px)',
          backdropFilter: 'blur(4px)',
          border: 'none',
          borderRadius: '6px',
          content: "''",
          height: '100%',
          left: '0',
          position: 'absolute',
          top: '0',
          width: '100%',
          zIndex: -10,
        },
      },
      '& fieldset': {
        marginBottom: '9px',
      },
      "&[role='dialog']": {
        left: '50%',
        position: 'fixed',
        top: '50%',
        transform: 'translate(-50%, -50%)',
        transitionDuration: '0.2s',
        transitionProperty: 'visibility, opacity',
        zIndex: 999,
      },
      '& > 7-Windows__titleBar': {
        border: '0',
        boxShadow:
          'inset 0 1px 0 #fffd,inset 1px 0 0 #fffd,inset -1px 0 0 #fffd',
      },
    },
    body: {
      background: '#f0f0f0',
      border: '1px solid rgba(0, 0, 0, 0.7)',
      boxShadow: '0 0 0 1px #fff9',
      margin: '0 6px 6px',
      padding: '6px',
      boxSizing: 'border-box',
      overflow: 'hidden',
      'overflow-y': 'scroll',
    },
    footer: {
      background: '#f0f0f0',
      border: '1px solid rgba(0, 0, 0, 0.7)',
      borderTop: '0',
      boxShadow: '0 0.5px 1px 0.5px #fff',
      margin: '-7px 6px 6px',
      padding: '6px',
      position: 'relative',
      _before: {
        boxShadow: 'inset 0 1px rgba(0, 0, 0, 0.3), inset 0 -1px #fff',
        content: "''",
        height: '2px',
        left: '0',
        position: 'absolute',
        top: '0',
        width: '100%',
      },
    },
    titleBar: {
      border: '0',
      boxShadow:
        'inset 0 1px 0 #fffd, inset 1px 0 0 #fffd, inset -1px 0 0 #fffd',
      background:
        'linear-gradient(90deg, #ffffff66, #0000001a, #ffffff33), #4580c4',
      borderRadius: '6px 6px 0 0',
      display: 'flex',
      font: '9pt Segoe UI, SegoeUI, Noto Sans, sans-serif',
      padding: '6px',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    titleBarText: {
      color: '#000',
      letterSpacing: '0',
      lineHeight: '15px',
      textShadow:
        '0 0 10px #fff, 0 0 10px #fff, 0 0 10px #fff, 0 0 10px #fff,    0 0 10px #fff, 0 0 10px #fff, 0 0 10px #fff, 0 0 10px #fff',
    },
    titleBarControls: {
      background: '#fff3',
      border: '1px solid rgba(0, 0, 0, 0.3)',
      borderRadius: '0 0 5px 5px',
      borderTop: '0',
      boxShadow: '0 1px 0 #fffa, 1px 0 0 #fffa, -1px 0 0 #fffa',
      display: 'flex',
      marginTop: '-6px',
      '& button': {
        background: 'none',
        border: '0',
        borderRadius: '0',
        borderRight: '1px solid rgba(0, 0, 0, 0.3)',
        boxShadow: 'none',
        boxSizing: 'border-box',
        minHeight: '19px',
        minWidth: '29px',
        padding: '0',
        position: 'relative',
        _after: {
          content: 'none',
        },
        _before: {
          borderRadius: '0',
          bottom: '0',
          boxShadow: 'inset 0 0 0 1px #fff5',
          content: "''",
          left: '0',
          opacity: 1,
          position: 'absolute',
          right: '0',
          top: '0',
        },
        _disabled: {
          _before: {
            opacity: 0.4,
          },
        },
        _firstChild: {
          _before: {
            borderBottomLeftRadius: '5px',
          },
        },
        _lastChild: {
          _before: {
            border: '0',
            borderBottomRightRadius: '5px',
          },
        },
        _focus: {
          animation: 'none',
          outline: 'none',
        },
        _active: {
          _hover: {
            background: 'none',
          },
        },
      },
      '& button:not(hover):before': {
        opacity: 1,
        transition: 'none',
      },
      '& button[aria-label="Minimize"]': {
        background:
          "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAFCAYAAABxeg0vAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA7SURBVHgBlY+xDQAgDMNaiQ9B8AHcxAlI/NYtKwj6QOohUzxYc+1HAqQ3e03qXNpwwcyE5QsAaEGjDRf8ZAza6Bz6VQAAAABJRU5ErkJggg==')      no-repeat center 10px,    linear-gradient(      hsla(0, 0%, 100%, 0.5),      hsla(0, 0%, 100%, 0.3) 45%,      rgba(0, 0, 0, 0.1) 50%,      rgba(0, 0, 0, 0.1) 75%,      hsla(0, 0%, 100%, 0.5)    )",

        _before: {
          background:
            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAFCAYAAABxeg0vAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA7SURBVHgBlY+xDQAgDMNaiQ9B8AHcxAlI/NYtKwj6QOohUzxYc+1HAqQ3e03qXNpwwcyE5QsAaEGjDRf8ZAza6Bz6VQAAAABJRU5ErkJggg==')      no-repeat center 10px,    radial-gradient(circle at bottom, #2aceda, transparent 65%),    linear-gradient(#b6d9ee 50%, #1a6ca1 0)",
          borderBottomLeftRadius: '5px',
          boxShadow: '0 0 7px 3px #5dc4f0, inset 0 0 0 1px #fffa',
          content: "''",
          opacity: 0,
          transition: 'opacity 0.3s linear',
        },
        _hover: {
          _before: {
            opacity: 1,
            transition: 'opacity 0.1s linear',
          },
        },
        _active: {
          _before: {
            background:
              "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAFCAYAAABxeg0vAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA7SURBVHgBlY+xDQAgDMNaiQ9B8AHcxAlI/NYtKwj6QOohUzxYc+1HAqQ3e03qXNpwwcyE5QsAaEGjDRf8ZAza6Bz6VQAAAABJRU5ErkJggg==')      no-repeat center 10px,    radial-gradient(circle at bottom, #0bfdfa, transparent 65%),    linear-gradient(#86a7bc 50%, #092747 0)",
          },
        },
      },
      '& button[aria-label="Maximize"]': {
        background:
          "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAYAAACALL/6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABsSURBVHgBlZHBCYAwDEVT6YaKbqArOILgBLqBosP1VkhAaQ6S1lKad+ihPy8kxLT9+IACG57r2KqKu2GCBpTYtEMOOQELzrnv4z53I4vDjjJnwXsPJWTOAiJGHVNB5pGwLjPk+AlEBLUY7eFebCosBHOR7vYAAAAASUVORK5CYII=')      no-repeat 50%,    linear-gradient(      hsla(0, 0%, 100%, 0.5),      hsla(0, 0%, 100%, 0.3) 45%,      rgba(0, 0, 0, 0.1) 50%,      rgba(0, 0, 0, 0.1) 75%,      hsla(0, 0%, 100%, 0.5)    )",
        _before: {
          background:
            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAYAAACALL/6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABsSURBVHgBlZHBCYAwDEVT6YaKbqArOILgBLqBosP1VkhAaQ6S1lKad+ihPy8kxLT9+IACG57r2KqKu2GCBpTYtEMOOQELzrnv4z53I4vDjjJnwXsPJWTOAiJGHVNB5pGwLjPk+AlEBLUY7eFebCosBHOR7vYAAAAASUVORK5CYII=')      no-repeat 50%,    radial-gradient(circle at bottom, #2aceda, transparent 65%),    linear-gradient(#b6d9ee 50%, #1a6ca1 0)",
          boxShadow: '0 0 7px 3px #5dc4f0, inset 0 0 0 1px #fffa',
          content: "''",
          opacity: 0,
          transition: 'opacity 0.3s linear',
        },
        _hover: {
          _before: {
            opacity: 1,
            transition: 'opacity 0.1s linear',
          },
        },
        _active: {
          _before: {
            background:
              "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAYAAACALL/6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABsSURBVHgBlZHBCYAwDEVT6YaKbqArOILgBLqBosP1VkhAaQ6S1lKad+ihPy8kxLT9+IACG57r2KqKu2GCBpTYtEMOOQELzrnv4z53I4vDjjJnwXsPJWTOAiJGHVNB5pGwLjPk+AlEBLUY7eFebCosBHOR7vYAAAAASUVORK5CYII=')      no-repeat 50%,    radial-gradient(circle at bottom, #0bfdfa, transparent 65%),    linear-gradient(#86a7bc 50%, #092747 0)",
          },
        },
      },
      '& button[aria-label="Restore"]': {
        background:
          "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACVSURBVHgBlVDLCoMwENwU/7ClvRYK7b2lCIJHEQQ/QEHwqujfBXJIQMnihg34iHPJ7GNm2AhYcL2/JwhAxIuhq3aXb48PiFBna2YFERVHzoQLnAQmSCmxeL5+3rBtSsdpBwVKKTcY+1rY197G+8RRoLVejed94igwxrgB/zXeJ+4Jijz2Erjg+8/WE7ZAt6EgSUsIxQwaJEWv7G6SSgAAAABJRU5ErkJggg==')      no-repeat 50%,    linear-gradient(      hsla(0, 0%, 100%, 0.5),      hsla(0, 0%, 100%, 0.3) 45%,      rgba(0, 0, 0, 0.1) 50%,      rgba(0, 0, 0, 0.1) 75%,      hsla(0, 0%, 100%, 0.5)    )",
        _before: {
          background:
            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACVSURBVHgBlVDLCoMwENwU/7ClvRYK7b2lCIJHEQQ/QEHwqujfBXJIQMnihg34iHPJ7GNm2AhYcL2/JwhAxIuhq3aXb48PiFBna2YFERVHzoQLnAQmSCmxeL5+3rBtSsdpBwVKKTcY+1rY197G+8RRoLVejed94igwxrgB/zXeJ+4Jijz2Erjg+8/WE7ZAt6EgSUsIxQwaJEWv7G6SSgAAAABJRU5ErkJggg==')      no-repeat 50%,    radial-gradient(circle at bottom, #2aceda, transparent 65%),    linear-gradient(#b6d9ee 50%, #1a6ca1 0)",
          boxShadow: '0 0 7px 3px #5dc4f0, inset 0 0 0 1px #fffa',
          content: "''",
          opacity: 0,
          transition: 'opacity 0.3s linear',
        },
        _hover: {
          _before: {
            opacity: 1,
            transition: 'opacity 0.1s linear',
          },
        },
        _active: {
          _before: {
            background:
              "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACVSURBVHgBlVDLCoMwENwU/7ClvRYK7b2lCIJHEQQ/QEHwqujfBXJIQMnihg34iHPJ7GNm2AhYcL2/JwhAxIuhq3aXb48PiFBna2YFERVHzoQLnAQmSCmxeL5+3rBtSsdpBwVKKTcY+1rY197G+8RRoLVejed94igwxrgB/zXeJ+4Jijz2Erjg+8/WE7ZAt6EgSUsIxQwaJEWv7G6SSgAAAABJRU5ErkJggg==')      no-repeat 50%,    radial-gradient(circle at bottom, #0bfdfa, transparent 65%),    linear-gradient(#86a7bc 50%, #092747 0)",
          },
        },
      },
      '& button[aria-label="Close"]': {
        width: '3rem',
        background:
          "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACUSURBVHgBlZFNCoQwDIVbmRvOMHOAAd0K/uDGlYKiCG4VPICi9yu0oCSQoFUXFtKEl6+voZXvr7sKay1TL690FOexY+Hz87i2decOuDKQsNGVe8AGYTRJIh0Y+orBvxszCPllOymlxN06jNE26Qnwg4zdHQLrMhFaawwAqAadDPE1ijwUxhiMKCmxCZk06OMYTz5lAx3xWDeXkLNAAAAAAElFTkSuQmCC')      no-repeat 50%,    linear-gradient(      hsla(0, 0%, 100%, 0.5),      hsla(0, 0%, 100%, 0.3) 45%,      rgba(0, 0, 0, 0.1) 50%,      rgba(0, 0, 0, 0.1) 75%,      hsla(0, 0%, 100%, 0.5)    ),    radial-gradient(circle at -60% 50%, #0007 5% 10%, #0000 50%),    radial-gradient(circle at 160% 50%, #0007 5% 10%, #0000 50%),    linear-gradient(#e0a197e5, #cf796a 25% 50%, #d54f36 50%)",
        boxShadow: 'inset 0 0 0 1px #fffa',
        _before: {
          background:
            "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACUSURBVHgBlZFNCoQwDIVbmRvOMHOAAd0K/uDGlYKiCG4VPICi9yu0oCSQoFUXFtKEl6+voZXvr7sKay1TL690FOexY+Hz87i2decOuDKQsNGVe8AGYTRJIh0Y+orBvxszCPllOymlxN06jNE26Qnwg4zdHQLrMhFaawwAqAadDPE1ijwUxhiMKCmxCZk06OMYTz5lAx3xWDeXkLNAAAAAAElFTkSuQmCC')      no-repeat 50%,    linear-gradient(      hsla(0, 0%, 100%, 0.5),      hsla(0, 0%, 100%, 0.3) 45%,      rgba(0, 0, 0, 0.1) 50%,      rgba(0, 0, 0, 0.1) 75%,      hsla(0, 0%, 100%, 0.5)    ),    radial-gradient(circle at 50% 170%, #f4e676 10% 20%, #0000 60%),    radial-gradient(circle at -60% 50%, #000a 5% 10%, #0000 50%),    radial-gradient(circle at 160% 50%, #000a 5% 10%, #0000 50%),    linear-gradient(#fb9d8b, #ee6d56 25% 50%, #d42809 50%)",
          borderBottom: '5px',
          boxShadow: '0 0 7px 3px #e68e75, inset 0 0 0 1px #fffa',
          content: '""',
          opacity: 0,
          transition: 'opacity 0.3s linear',
        },
        _hover: {
          _before: {
            opacity: 1,
            transition: 'opacity 0.1s linear',
          },
        },
        _active: {
          _before: {
            background:
              "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAKCAYAAABi8KSDAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACUSURBVHgBlZFNCoQwDIVbmRvOMHOAAd0K/uDGlYKiCG4VPICi9yu0oCSQoFUXFtKEl6+voZXvr7sKay1TL690FOexY+Hz87i2decOuDKQsNGVe8AGYTRJIh0Y+orBvxszCPllOymlxN06jNE26Qnwg4zdHQLrMhFaawwAqAadDPE1ijwUxhiMKCmxCZk06OMYTz5lAx3xWDeXkLNAAAAAAElFTkSuQmCC')      no-repeat 50%,    linear-gradient(      hsla(0, 0%, 100%, 0.5),      hsla(0, 0%, 100%, 0.3) 45%,      rgba(0, 0, 0, 0.1) 50%,      rgba(0, 0, 0, 0.1) 75%,      hsla(0, 0%, 100%, 0.5)    ),    radial-gradient(circle at 50% 170%, #dcc03f 10% 20%, #0000 60%),    radial-gradient(circle at -60% 50%, #000 5% 10%, #0000 50%),    radial-gradient(circle at 160% 50%, #000 5% 10%, #0000 50%),    linear-gradient(#d1a894, #b67562 25% 50%, #7d0d01 50%)",
          },
        },
      },
    },
    statusBar: {
      background: '#f0f0f0',
      border: '1px solid rgba(0,0,0,.7)',
      borderTop: '0',
      boxShadow: '0 1px 0 #fff9,1px 0 0 #fff9,-1px 0 0 #fff9',
      display: 'flex',
      margin: '-6px 6px 6px',
    },
    statusBarField: {
      borderLeft: '1px solid #cfcfcf',
      flexGrow: '1',
      margin: '0',
      padding: '2px 3px',
      _lastChild: {
        borderRight: '0',
      },
    },
  },
  variants: {
    isBright: {
      true: {
        window: {
          background: '#fff',
        },
        body: {
          background: '#fff',
        },
        footer: {
          background: '#eee',
          boxShadow:
            'inset 0 1px 3px #ddd, 0 1px 0 #fff9, 1px 1px 0 #fff9,-1px 1px 0 #fff9',
          _before: {
            content: 'none',
          },
        },
      },
    },
    hasSpace: {
      true: {
        body: {
          padding: '6px',
          "& > [data-part='menubar']": {
            padding: '0',
          },
        },
      },
    },
    pre: {
      true: {
        body: {
          margin: '-6px',
        },
      },
    },
    glass: {
      true: {},
    },
  },
  jsx: [
    'div',
    'Window',
    'Body',
    'TitleBar',
    'titleBarText',
    'Footer',
    'statusBar',
    'statusBarField',
    'StatusBarChild',
    'window',
    'body',
    'p',
  ],
});
