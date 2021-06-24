import { rgba } from 'polished';
var formAccent = '#2765cf';
var critical = '#d0011b';
var positive = '#138a08';
var info = '#1e468c';
var promote = '#9556b7';
var caution = '#ffc600';
var brandAccent = '#e60278';
var focus = rgba('#1e90ff', 0.7);
var black = '#1c1c1c';
var white = '#fff';
var link = '#2765cf';
var linkVisited = '#733d90';
var secondary = '#1c1c1ca1';
var neutral = '#747474';
var tokens = {
  name: 'seekUnifiedBeta',
  displayName: 'SEEK Unified (Beta)',
  typography: {
    fontFamily: 'Roboto, "Helvetica Neue", HelveticaNeue, Helvetica, Arial, sans-serif',
    webFont: null,
    fontMetrics: {
      capHeight: 1456,
      ascent: 1900,
      descent: -500,
      lineGap: 0,
      unitsPerEm: 2048
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      strong: 700
    },
    heading: {
      weight: {
        weak: 'regular',
        regular: 'medium'
      },
      level: {
        '1': {
          mobile: {
            fontSize: 28,
            rows: 9
          },
          tablet: {
            fontSize: 42,
            rows: 11
          }
        },
        '2': {
          mobile: {
            fontSize: 21,
            rows: 8
          },
          tablet: {
            fontSize: 28,
            rows: 9
          }
        },
        '3': {
          mobile: {
            fontSize: 21,
            rows: 7
          },
          tablet: {
            fontSize: 21,
            rows: 7
          }
        },
        '4': {
          mobile: {
            fontSize: 18,
            rows: 7
          },
          tablet: {
            fontSize: 18,
            rows: 7
          }
        }
      }
    },
    text: {
      xsmall: {
        mobile: {
          fontSize: 12,
          rows: 5
        },
        tablet: {
          fontSize: 12,
          rows: 5
        }
      },
      small: {
        mobile: {
          fontSize: 14,
          rows: 5
        },
        tablet: {
          fontSize: 14,
          rows: 5
        }
      },
      standard: {
        mobile: {
          fontSize: 16,
          rows: 6
        },
        tablet: {
          fontSize: 16,
          rows: 6
        }
      },
      large: {
        mobile: {
          fontSize: 18,
          rows: 7
        },
        tablet: {
          fontSize: 18,
          rows: 7
        }
      }
    }
  },
  contentWidth: {
    xsmall: 400,
    small: 660,
    medium: 940,
    large: 1280
  },
  grid: 4,
  touchableSize: 11,
  space: {
    gutter: 6,
    xxsmall: 1,
    xsmall: 2,
    small: 3,
    medium: 5,
    large: 8,
    xlarge: 12,
    xxlarge: 24
  },
  transforms: {
    touchable: 'scale(0.95)'
  },
  transitions: {
    fast: 'transform .125s ease, opacity .125s ease',
    touchable: 'transform 0.2s cubic-bezier(0.02, 1.505, 0.745, 1.235)'
  },
  border: {
    radius: {
      standard: '2px'
    },
    width: {
      standard: 1,
      large: 2
    },
    color: {
      standard: '#d6d6d6',
      standardInverted: white,
      field: '#898989',
      focus: focus,
      formHover: formAccent,
      critical: critical,
      info: info,
      promote: promote,
      positive: positive,
      caution: caution,
      formAccent: formAccent,
      brandAccent: brandAccent
    }
  },
  shadows: {
    small: '0 2px 4px 0px rgba(28,28,28,.1), 0 2px 2px -2px rgba(28,28,28,.1), 0 4px 4px -4px rgba(28,28,28,.2)',
    medium: '0 2px 4px 0px rgba(28,28,28,.1), 0 8px 8px -4px rgba(28,28,28,.1), 0 12px 12px -8px rgba(28,28,28,.2)',
    large: '0 2px 4px 0px rgba(28,28,28,.1), 0 12px 12px -4px rgba(28,28,28,.1), 0 20px 20px -12px rgba(28,28,28,.2)'
  },
  color: {
    foreground: {
      link: link,
      linkHover: link,
      linkVisited: linkVisited,
      neutral: black,
      neutralInverted: white,
      formAccent: formAccent,
      brandAccent: brandAccent,
      critical: critical,
      caution: caution,
      positive: positive,
      info: info,
      promote: promote,
      secondary: secondary,
      secondaryInverted: 'hsla(0, 0%, 100%, 0.65)',
      rating: '#f57c00'
    },
    background: {
      body: '#eee',
      brand: '#0d3880',
      input: white,
      inputDisabled: '#eee',
      brandAccent: brandAccent,
      formAccent: formAccent,
      formAccentDisabled: '#ccc',
      selection: '#f1f7ff',
      card: white,
      critical: critical,
      caution: caution,
      positive: positive,
      neutral: neutral,
      info: info,
      promote: promote
    }
  }
};
export default tokens;