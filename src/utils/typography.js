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
});

export default typography;
