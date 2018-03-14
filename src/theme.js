export const colors = {
  mainColor: '#035E65',
  secondaryColor: '#03464B',
  thirdColor: '#32D4D4',
  white: '#FFF',
  black: '#000',
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
    medium: 500,
    semiBold: 600,
    bold: 700,
  },
};

export const dimensions = {
  maxWidth: 964,
  padding: {
    vertical: 40,
    horizontal: 20,
  },
};

export const SIZES = {
  xsmall: { min: 0, max: 599 },
  small: { min: 600, max: 779 },
  medium: { min: 780, max: 979 },
  large: { min: 980, max: 1279 },
  xlarge: { min: 1280, max: 1339 },
  xxlarge: { min: 1340, max: Infinity },
};

export const media = {
  lessThan(key, options = { dropPrefix: false }) {
    return `${options.dropPrefix ? '' : '@media '}(max-width: ${
      SIZES[key].min - 1
    }px)`;
  },

  greaterThan(key, options = { dropPrefix: false }) {
    return `${options.dropPrefix ? '' : '@media '}(min-width: ${
      SIZES[key].min
    }px)`;
  },

  between(smallKey, largeKey, options = {
    excludeLarge: false,
    dropPrefix: false,
  }) {
    const { excludeLarge, dropPrefix } = options;
    const prefix = dropPrefix ? '' : '@media ';

    if (excludeLarge) {
      return `${prefix}(min-width: ${
        SIZES[smallKey].min
      }px) and (max-width: ${SIZES[largeKey].min - 1}px)`;
    }
    if (SIZES[largeKey].max === Infinity) {
      return `${prefix}(min-width: ${SIZES[smallKey].min}px)`;
    }

    return `${prefix}(min-width: ${SIZES[smallKey].min}px) and (max-width: ${
      SIZES[largeKey].max
    }px)`;
  },

  size(key, options = { dropPrefix: false }) {
    const size = SIZES[key];

    if (size.min == null) {
      return media.lessThan(key, options);
    }
    if (size.max == null) {
      return media.greaterThan(key, options);
    }

    return media.between(key, key, {
      ...options,
      excludeLarge: false,
    });
  },
};

export default colors;
