import { colors, fonts, dimensions } from '../../theme';

export default {
  container: {
    height: 90,
    display: 'flex',
    alignItems: 'center',
    backgroundColor: colors.secondaryColor,
  },
  mobileNavContainer: {
    diplay: 'flex',
    flexDirection: 'column',
    position: 'fixed',
    zIndex: 1,
    backgroundColor: colors.secondaryColor,
    width: '100%',
    maxWidth: dimensions.maxWidth,
    marginTop: 0,
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
    margin: 10,
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
