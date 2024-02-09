"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _uuid = require("uuid");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : String(i); }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var _default = exports["default"] = {
  state: {
    // slice: 'mirador' // Configure the top-level slice of state for mirador selectors
  },
  canvasNavigation: {
    // Set the height and width of canvas thumbnails in the  CanvasNavigation companion window
    height: 50,
    width: 50
  },
  selectedTheme: 'light',
  // dark also available
  themes: {
    dark: {
      palette: {
        mode: 'dark',
        primary: {
          main: '#4db6ac'
        },
        secondary: {
          main: '#4db6ac'
        },
        shades: {
          dark: '#000000',
          main: '#424242',
          light: '#616161'
        }
      }
    },
    light: {
      palette: {
        mode: 'light'
      }
    }
  },
  theme: {
    // Sets up a MaterialUI theme. See https://material-ui.com/customization/default-theme/
    palette: {
      mode: 'light',
      primary: {
        main: '#1967d2' // Controls the color of the Add button and current window indicator
      },
      secondary: {
        main: '#1967d2' // Controls the color of Selects and FormControls
      },
      shades: {
        // Shades that can be used to offset color areas of the Workspace / Window
        dark: '#eeeeee',
        main: '#ffffff',
        light: '#f5f5f5'
      },
      error: {
        main: '#b00020'
      },
      notification: {
        // Color used in MUI Badge dots
        main: '#ffa224'
      },
      hitCounter: {
        "default": '#bdbdbd'
      },
      highlights: {
        primary: '#ffff00',
        secondary: '#00BFFF'
      },
      section_divider: 'rgba(0, 0, 0, 0.25)',
      annotations: {
        chipBackground: '#e0e0e0',
        hidden: {
          globalAlpha: 0
        },
        "default": {
          strokeStyle: '#00BFFF',
          globalAlpha: 1
        },
        hovered: {
          strokeStyle: '#BF00FF',
          globalAlpha: 1
        },
        selected: {
          strokeStyle: '#ffff00',
          globalAlpha: 1
        }
      },
      search: {
        "default": {
          fillStyle: '#00BFFF',
          globalAlpha: 0.3
        },
        hovered: {
          fillStyle: '#00FFFF',
          globalAlpha: 0.3
        },
        selected: {
          fillStyle: '#ffff00',
          globalAlpha: 0.3
        }
      }
    },
    typography: {
      body1: {
        fontSize: "1rem",
        letterSpacing: "0em",
        lineHeight: "1.6em"
      },
      body2: {
        fontSize: "0.878rem",
        letterSpacing: "0.015em",
        lineHeight: "1.6em"
      },
      button: {
        fontSize: "0.878rem",
        letterSpacing: "0.09em",
        lineHeight: "2.25rem",
        textTransform: "uppercase"
      },
      caption: {
        fontSize: "0.772rem",
        letterSpacing: "0.033em",
        lineHeight: "1.6rem"
      },
      body1Next: {
        fontSize: "1rem",
        letterSpacing: "0em",
        lineHeight: "1.6em"
      },
      body2Next: {
        fontSize: "0.878rem",
        letterSpacing: "0.015em",
        lineHeight: "1.6em"
      },
      buttonNext: {
        fontSize: "0.878rem",
        letterSpacing: "0.09em",
        lineHeight: "2.25rem"
      },
      captionNext: {
        fontSize: "0.772rem",
        letterSpacing: "0.33em",
        lineHeight: "1.6rem"
      },
      overline: {
        fontSize: "0.678rem",
        fontWeight: 500,
        letterSpacing: "0.166em",
        lineHeight: "2em",
        textTransform: "uppercase"
      },
      h1: {
        fontSize: "2.822rem",
        letterSpacing: "-0.015em",
        lineHeight: "1.2em"
      },
      h2: {
        fontSize: "1.575rem",
        letterSpacing: "0em",
        lineHeight: "1.33em"
      },
      h3: {
        fontSize: "1.383rem",
        fontWeight: 300,
        letterSpacing: "0em",
        lineHeight: "1.33em"
      },
      h4: {
        fontSize: "1.215rem",
        letterSpacing: "0.007em",
        lineHeight: "1.45em"
      },
      h5: {
        fontSize: "1.138rem",
        letterSpacing: "0.005em",
        lineHeight: "1.55em"
      },
      h6: {
        fontSize: "1.067rem",
        fontWeight: 400,
        letterSpacing: "0.01em",
        lineHeight: "1.6em"
      },
      subtitle1: {
        fontSize: "0.937rem",
        letterSpacing: "0.015em",
        lineHeight: "1.6em",
        fontWeight: 300
      },
      subtitle2: {
        fontSize: "0.878rem",
        fontWeight: 500,
        letterSpacing: "0.02em",
        lineHeight: "1.75em"
      },
      useNextVariants: true // set so that console deprecation warning is removed
    },
    components: {
      MuiMenuItem: {
        variants: [{
          props: {
            variant: 'multiline'
          },
          style: {
            whiteSpace: 'normal'
          }
        }]
      },
      CompanionWindow: {
        styleOverrides: {
          closeButton: {
            order: 4
          },
          contents: {
            overflowY: 'auto',
            wordBreak: 'break-word'
          },
          controls: function controls(_ref) {
            var ownerState = _ref.ownerState;
            return {
              alignItems: 'center',
              display: 'flex',
              flexFlow: 'row wrap',
              flexGrow: 1,
              justifyContent: (ownerState === null || ownerState === void 0 ? void 0 : ownerState.position) === 'bottom' || (ownerState === null || ownerState === void 0 ? void 0 : ownerState.position) === 'far-bottom' ? 'flex-end' : 'flex-start',
              minHeight: 48,
              order: 3
            };
          },
          positionButton: {
            marginLeft: -16,
            order: -100,
            width: 24
          },
          resize: function resize(_ref2) {
            var ownerState = _ref2.ownerState;
            return {
              display: 'flex',
              flexDirection: 'column',
              minHeight: 50,
              minWidth: (ownerState === null || ownerState === void 0 ? void 0 : ownerState.position) === 'left' ? 235 : 100,
              position: 'relative'
            };
          },
          root: function root(_ref3) {
            var ownerState = _ref3.ownerState;
            return _objectSpread(_objectSpread(_objectSpread({
              boxShadow: 'none',
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'column',
              minHeight: 0
            }, (ownerState === null || ownerState === void 0 ? void 0 : ownerState.position) === 'right' && {
              borderLeft: '0.5px solid rgba(0, 0, 0, 0.125)'
            }), (ownerState === null || ownerState === void 0 ? void 0 : ownerState.position) === 'left' && {
              borderRight: '0.5px solid rgba(0, 0, 0, 0.125)'
            }), (ownerState === null || ownerState === void 0 ? void 0 : ownerState.position) === 'bottom' && {
              borderTop: '0.5px solid rgba(0, 0, 0, 0.125)'
            });
          },
          title: function title(_ref4) {
            var theme = _ref4.theme;
            return _objectSpread(_objectSpread({}, theme.typography.subtitle1), {}, {
              alignSelf: 'center',
              flexGrow: 1,
              width: 160
            });
          },
          toolbar: function toolbar(_ref5) {
            var theme = _ref5.theme;
            return {
              alignItems: 'flex-start',
              backgroundColor: theme.palette.shades.light,
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              minHeight: 'max-content',
              paddingInlineStart: '1rem'
            };
          }
        }
      },
      CompanionWindowSection: {
        styleOverrides: {
          root: {
            borderBlockEnd: '.5px solid rgba(0, 0, 0, 0.25)'
          }
        }
      },
      IIIFHtmlContent: {
        styleOverrides: {
          root: function root(_ref6) {
            var theme = _ref6.theme;
            return {
              '& a': {
                color: theme.palette.primary.main,
                textDecoration: 'underline'
              }
            };
          }
        }
      },
      IIIFThumbnail: {
        styleOverrides: {
          root: function root(_ref7) {
            var ownerState = _ref7.ownerState;
            return _objectSpread({}, (ownerState === null || ownerState === void 0 ? void 0 : ownerState.variant) === 'inside' && {
              display: 'inline-block',
              height: 'inherit',
              position: 'relative'
            });
          },
          label: function label(_ref8) {
            var ownerState = _ref8.ownerState;
            return _objectSpread(_objectSpread(_objectSpread({
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              lineHeight: '1.5em',
              wordBreak: 'break-word'
            }, (ownerState === null || ownerState === void 0 ? void 0 : ownerState.variant) === 'inside' && {
              color: '#ffffff',
              WebkitLineClamp: 1,
              whiteSpace: 'nowrap'
            }), (ownerState === null || ownerState === void 0 ? void 0 : ownerState.variant) === 'outside' && {
              display: '-webkit-box',
              maxHeight: '3em',
              MozBoxOrient: 'vertical',
              WebkitLineClamp: 2
            }), (ownerState === null || ownerState === void 0 ? void 0 : ownerState.variant) === 'inside' && {
              background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
              bottom: '5px',
              boxSizing: 'border-box',
              left: '0px',
              padding: '4px',
              position: 'absolute',
              width: '100%'
            });
          },
          image: function image(_ref9) {
            var ownerState = _ref9.ownerState;
            return _objectSpread({}, (ownerState === null || ownerState === void 0 ? void 0 : ownerState.border) && {
              border: '1px solid rgba(0, 0, 0, 0.125)'
            });
          }
        }
      },
      ThemeIcon: {
        styleOverrides: {
          icon: function icon(_ref10) {
            var ownerState = _ref10.ownerState;
            return {
              color: (ownerState === null || ownerState === void 0 ? void 0 : ownerState.value) === 'dark' ? '#000000' : undefined
            };
          }
        }
      },
      MuiAccordion: {
        variants: [{
          props: {
            variant: 'compact'
          },
          style: {
            '& .MuiAccordionSummary-root': {
              minHeight: 'unset',
              padding: 0
            },
            '& .MuiAccordionSummary-content': {
              margin: 0
            },
            '& .MuiAccordionDetails-root': {
              padding: 0
            }
          }
        }]
      },
      MuiButton: {
        styleOverrides: {
          inlineText: {
            lineHeight: '1.5em',
            padding: 0,
            textAlign: 'inherit',
            textTransform: 'none'
          },
          inlineTextSecondary: function inlineTextSecondary(_ref11) {
            var theme = _ref11.theme;
            return {
              color: theme.palette.secondary.main
            };
          }
        }
      },
      MuiButtonBase: {
        defaultProps: {
          disableTouchRipple: true
        }
      },
      MuiDialog: {
        variants: [{
          props: {
            variant: 'contained'
          },
          style: {
            position: 'absolute',
            '& .MuiBackdrop-root': {
              position: 'absolute'
            }
          }
        }]
      },
      MuiFab: {
        styleOverrides: {
          root: {
            transition: 'none'
          }
        }
      },
      MuiLink: {
        defaultProps: {
          underline: 'always'
        }
      },
      MuiListSubheader: {
        styleOverrides: {
          root: {
            '&[role="presentation"]:focus': {
              outline: 0
            }
          }
        }
      },
      MuiTooltip: {
        // Overridden from https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/Tooltip/Tooltip.js#L40-L70
        styleOverrides: {
          tooltipPlacementLeft: _defineProperty({}, '@media (min-width:600px)', {
            margin: '0 !important'
          }),
          tooltipPlacementRight: _defineProperty({}, '@media (min-width:600px)', {
            margin: '0 !important'
          }),
          tooltipPlacementTop: _defineProperty({}, '@media (min-width:600px)', {
            margin: '0 !important'
          }),
          tooltipPlacementBottom: _defineProperty({}, '@media (min-width:600px)', {
            margin: '0 !important'
          })
        }
      },
      MuiTouchRipple: {
        styleOverrides: {
          childPulsate: {
            animation: 'none'
          },
          rippleVisible: {
            animation: 'none'
          }
        }
      }
    }
  },
  language: 'en',
  // The default language set in the application
  availableLanguages: {
    // All the languages available in the language switcher
    ar: 'العربية',
    de: 'Deutsch',
    en: 'English',
    fa: 'فارسی',
    fr: 'Français',
    ja: '日本語',
    kr: '한국어',
    lt: 'Lietuvių',
    nl: 'Nederlands',
    'nb-NO': 'Norwegian Bokmål',
    pl: 'Polski',
    'pt-BR': 'Português do Brasil',
    vi: 'Tiếng Việt',
    'zh-CN': '中文(简体)',
    'zh-TW': '中文(繁體)',
    it: "Italiano",
    sr: 'Српски',
    sv: 'Svenska',
    bg: 'Български'
  },
  annotations: {
    htmlSanitizationRuleSet: 'iiif',
    // See src/lib/htmlRules.js for acceptable values
    filteredMotivations: ['oa:commenting', 'oa:tagging', 'sc:painting', 'commenting', 'tagging']
  },
  createGenerateClassNameOptions: {
    // Options passed directly to createGenerateClassName in Material-UI https://material-ui.com/styles/api/#creategenerateclassname-options-class-name-generator
    productionPrefix: 'mirador'
  },
  requests: {
    preprocessors: [// Functions that receive HTTP requests and manipulate them (e.g. to add headers)
      // (url, options) => (url.match('info.json') && { ...options, myCustomThing: 'blah' })
    ],
    postprocessors: [// Functions that receive HTTP responses and manipulates them before adding to store
      // An example of manipulating the response for an annotation request
      // (url, action) => {
      //   if (action.annotationId) {
      //     action.annotationJson = {};
      //   }
      // }
    ]
  },
  translations: {// Translations can be added to inject new languages or override existing labels
  },
  window: {
    //global window defaults
    allowClose: true,
    // Configure if windows can be closed or not
    allowFullscreen: false,
    // Configure to show a "fullscreen" button in the WindowTopBar
    allowMaximize: true,
    // Configure if windows can be maximized or not
    allowTopMenuButton: true,
    // Configure if window view and thumbnail display menu are visible or not
    allowWindowSideBar: true,
    // Configure if side bar menu is visible or not
    authNewWindowCenter: 'parent',
    // Configure how to center a new window created by the authentication flow. Options: parent, screen
    sideBarPanel: 'info',
    // Configure which sidebar is selected by default. Options: info, attribution, canvas, annotations, search
    defaultSidebarPanelHeight: 201,
    // Configure default sidebar height in pixels
    defaultSidebarPanelWidth: 235,
    // Configure default sidebar width in pixels
    defaultView: 'single',
    // Configure which viewing mode (e.g. single, book, gallery) for windows to be opened in
    forceDrawAnnotations: false,
    hideWindowTitle: false,
    // Configure if the window title is shown in the window title bar or not
    highlightAllAnnotations: false,
    // Configure whether to display annotations on the canvas by default
    showLocalePicker: false,
    // Configure locale picker for multi-lingual metadata
    sideBarOpen: false,
    // Configure if the sidebar (and its content panel) is open by default
    switchCanvasOnSearch: true,
    // Configure if Mirador should automatically switch to the canvas of the first search result
    panels: {
      // Configure which panels are visible in WindowSideBarButtons
      info: true,
      attribution: true,
      canvas: true,
      annotations: true,
      search: true,
      layers: true
    },
    views: [{
      key: 'single',
      behaviors: ['individuals']
    }, {
      key: 'book',
      behaviors: ['paged']
    }, {
      key: 'scroll',
      behaviors: ['continuous']
    }, {
      key: 'gallery'
    }],
    elastic: {
      height: 400,
      width: 480
    }
  },
  windows: [// Array of windows to be open when mirador initializes (each object should at least provide a manifestId key with the value of the IIIF presentation manifest to load)
    /**
    Example Window:
    {
      manifestId: 'https://iiif.harvardartmuseums.org/manifests/object/299843',
      canvasId: 'https://iiif.harvardartmuseums.org/manifests/object/299843/page_2',
      thumbnailNavigationPosition: 'far-bottom',
    }
    // ../state/actions/window.js `defaultOptions`
    // ../lib/MiradorViewer.js `windowAction`
    */
  ],
  thumbnails: {
    preferredFormats: ['jpg', 'png', 'webp', 'tif']
  },
  thumbnailNavigation: {
    defaultPosition: 'off',
    // Which position for the thumbnail navigation to be be displayed. Other possible values are "far-bottom" or "far-right"
    displaySettings: true,
    // Display the settings for this in WindowTopMenu
    height: 130,
    // height of entire ThumbnailNavigation area when position is "far-bottom"
    width: 100 // width of one canvas (doubled for book view) in ThumbnailNavigation area when position is "far-right"
  },
  workspace: {
    draggingEnabled: true,
    allowNewWindows: true,
    id: (0, _uuid.v4)(),
    isWorkspaceAddVisible: false,
    // Catalog/Workspace add window feature visible by default
    exposeModeOn: false,
    // unused?
    height: 5000,
    // height of the elastic mode's virtual canvas
    showZoomControls: false,
    // Configure if zoom controls should be displayed by default
    type: 'mosaic',
    // Which workspace type to load by default. Other possible values are "elastic". If "mosaic" or "elastic" are not selected no worksapce type will be used.
    viewportPosition: {
      // center coordinates for the elastic mode workspace
      x: 0,
      y: 0
    },
    width: 5000 // width of the elastic mode's virtual canvas
  },
  workspaceControlPanel: {
    enabled: true // Configure if the control panel should be rendered.  Useful if you want to lock the viewer down to only the configured manifests
  },
  galleryView: {
    height: 120,
    // height of gallery view thumbnails
    width: null // width of gallery view thumbnails (or null, to auto-calculate an aspect-ratio appropriate size)
  },
  osdConfig: {
    // Default config used for OpenSeadragon
    alwaysBlend: false,
    blendTime: 0.1,
    preserveImageSizeOnResize: true,
    preserveViewport: true,
    showNavigationControl: false
  },
  "export": {
    catalog: true,
    companionWindows: true,
    config: true,
    elasticLayout: true,
    layers: true,
    // filter out anything re-retrievable:
    manifests: {
      filter: function filter(_ref12) {
        var _ref13 = _slicedToArray(_ref12, 2),
          id = _ref13[0],
          value = _ref13[1];
        return !id.startsWith('http');
      }
    },
    viewers: true,
    windows: true,
    workspace: true
  },
  audioOptions: {
    // Additional props passed to <audio> element
    controls: true,
    crossOrigin: 'anonymous'
  },
  videoOptions: {
    // Additional props passed to <audio> element
    controls: true,
    crossOrigin: 'anonymous'
  },
  auth: {
    serviceProfiles: [{
      profile: 'http://iiif.io/api/auth/1/external',
      external: true
    }, {
      profile: 'http://iiif.io/api/auth/1/kiosk',
      kiosk: true
    }, {
      profile: 'http://iiif.io/api/auth/1/clickthrough'
    }, {
      profile: 'http://iiif.io/api/auth/1/login'
    }, {
      profile: 'http://iiif.io/api/auth/0/external',
      external: true
    }, {
      profile: 'http://iiif.io/api/auth/0/kiosk',
      kiosk: true
    }, {
      profile: 'http://iiif.io/api/auth/0/clickthrough'
    }, {
      profile: 'http://iiif.io/api/auth/0/login'
    }]
  }
};