import { colors, fonts, dimensions } from '../../theme';

export default {
  container: {
    height: 90,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: colors.secondaryColor,
    padding: `0 ${dimensions.padding.horizontal}px`,
  },
  mobileNavContainer: {
    diplay: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    zIndex: 2,
    backgroundColor: colors.secondaryColor,
    width: '100%',
    maxWidth: dimensions.maxWidth,
    paddingLeft: dimensions.padding.horizontal,
  },
  contentContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 'auto',
    width: '100%',
    maxWidth: dimensions.maxWidth,
  },
  logo: {
    display: 'inline',
    color: colors.white,
  },
  navContainer: {
    display: 'flex',
  },
  navLinkContainer: {
    margin: 20,
    marginLeft: 0,
  },
  navLink: {
    textTransform: 'uppercase',
    color: 'white',
    fontFamily: 'Montserrat',
    fontSize: fonts.size.xxs,
  },
  menuIcon: {
    cursor: 'pointer',
  },
};
