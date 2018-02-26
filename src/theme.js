export const colors = {
  mainColor: '#035E65',
  secondaryColor: '#03464B',
  thirdColor: '#32D4D4',
  white: '#FFF',
  grey: {
    light: '#F6F8FA',
  },
  text: {
    main: '#212b35',
    secondary: '#637280',
  },
};

export const fonts = {
  family: {
    main: 'Montserrat',
    secondary: 'Open Sans',
  },
  size: {
    xxxs: 12,
    xxs: 14,
    xs: 18,
    s: 24,
    m: 30,
    l: 48,
    xl: 96,
    xxl: 108,
    xxxl: 120,
  },
  weight: {
    thin: 100,
    light: 200,
    normal: 400,
    medium: 600,
    bold: 700,
  },
};

export const dimensions = {
  maxWidth: 964,
  padding: {
    vertical: 40,
    horizontal: 20,
  },
  media: {
    // main breakpoints
    mobile: '@media (max-width: 799px)',
    desktop: '@media (min-width: 800px)',

    // precise
    xsmall: '@media (max-width: 479px)',
    small: '@media (min-width: 480px) and (max-width: 799px)',
    medium: '@media (min-width: 800px) and (max-width: 1199px)',
    large: '@media (min-width: 1200px) and (max-width: 1439px)',
    xlarge: '@media (min-width: 1440px)',
  },
};

export default colors;
