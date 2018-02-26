import Typography from 'typography';
import theme from 'typography-theme-grand-view';

const typography = new Typography({
  ...theme,
  baseFontSize: '18px',
  headerFontFamily: ['Montserrat', 'sans-serif'],
  bodyFontFamily: ['Open Sans', 'sans-serif'],
  googleFonts: [
    {
      name: 'Montserrat',
      styles: [
        '400',
        '600',
        '700',
      ],
    },
    {
      name: 'Open Sans',
      styles: [
        '400',
        '400i',
        '700',
        '700i',
      ],
    },
  ],
  baseLineHeight: 1.6,
  overrideThemeStyles: () => ({
    '*': {
      '-webkit-font-smoothing': 'antialiased',
      '-moz-osx-font-smoothing': 'grayscale',
    },
    a: {
      transition: 'opacity ease 0.5s',
    },
    'a:hover': {
      opacity: 0.5,
    },
  }),
});

export default typography;
