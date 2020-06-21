module.exports = {
  corePlugins: {
    container: false
  },
  theme: {
    fontFamily: {
      display: ['proxima-nova', 'sans-serif'],
      body: ['proxima-nova', 'sans-serif']
    },
    colors: {
      white: 'white',
      grey: {
        '100': '#f7fafc',
        '200': '#edf2f7',
        '300': '#e2e8f0',
        '400': '#cbd5e0',
        '500': '#a0aec0',
        '600': '#718096',
        '700': '#4a5568',
        '800': '#2d3748',
        '900': '#1a202c'
      },
      blue: {
        '100': '#f0fbff',
        '200': '#ccf2ff',
        '300': '#66d9ff',
        '400': '#1ac6ff',
        '500': '#00b3ef',
        '600': '#008abd',
        '700': '#005380',
        '800': '#003366',
        '900': '#0a2857'
      },
      red: {
        '100': '#fff5f5',
        '200': '#fed7d7',
        '300': '#feb2b2',
        '400': '#eb6f7a',
        '500': '#e62f46',
        '600': '#d71e42',
        '700': '#ab1735',
        '800': '#7e1127',
        '900': '#510b19'
      },
      pink: {
        '100': '#fef5f8',
        '200': '#feecf1',
        '300': '#fdd8e3',
        '400': '#f9b9ca',
        '500': '#f589a6',
        '600': '#f25a82',
        '700': '#e22d5d',
        '800': '#b41844',
        '900': '#6e1938'
      },
      orange: {
        '100': '#fffaf0',
        '200': '#feebc8',
        '300': '#fbd38d',
        '400': '#f6ad55',
        '500': '#ed8936',
        '600': '#dd6b20',
        '700': '#c05621',
        '800': '#9c4221',
        '900': '#7b341e'
      },
      yellow: {
        '100': '#fffff0',
        '200': '#fefcbf',
        '300': '#faf089',
        '400': '#f6e05e',
        '500': '#ecc94b',
        '600': '#d69e2e',
        '700': '#b7791f',
        '800': '#975a16',
        '900': '#744210'
      },
      green: {
        '100': '#f0fff4',
        '200': '#c6f6d5',
        '300': '#9ae6b4',
        '400': '#68d391',
        '500': '#48bb78',
        '600': '#38a169',
        '700': '#2f855a',
        '800': '#276749',
        '900': '#22543d'
      }
    },
    boxShadow: {
      default: '0 2px 5px 0 rgba(0, 83, 128, 0.1)',
      md: '0 4px 10px 0 rgba(0, 83, 128, 0.14)',
      lg: '0 5px 15px 0 rgba(0, 83, 128, 0.15)',
      reverse: '0 -2px 10px 0 rgba(45, 55, 72, 0.08)',
      inner: 'inset 0 2px 4px 0 rgba(89, 106, 115, 0.06)',
      outline: '0 0 2px 2px #00b3ef',
      none: 'none'
    },
    fontSize: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
      '2xl': '24px',
      '3xl': '30px',
      '4xl': '36px',
      '5xl': '48px'
    },
    borderRadius: {
      none: '0',
      sm: '2px',
      default: '5px',
      md: '8px',
      large: '10px',
      xl: '12px',
      xxl: '20px',
      full: '9999px'
    }
  },
  variants: {},
  plugins: []
}
