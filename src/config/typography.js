import Typography from 'typography';
import theme from 'typography-theme-grand-view';

const typography = new Typography({
  ...theme,
  baseFontSize: '18px',
  headerFontFamily: ['Montserrat', 'sans-serif'],
  headerWeight: '600',
  bodyFontFamily: ['Montserrat', 'sans-serif'],
  bodyWeight: '400',
  googleFonts: [
    {
      name: 'Montserrat',
      styles: [
        '400',
        '500',
        '600',
      ],
    },
    {
      name: 'Open Sans',
      styles: [
        '400',
        '400i',
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
    img: {
      maxWidth: '',
    },
    'a:hover': {
      opacity: 0.5,
    },
  }),
});

export default typography;
