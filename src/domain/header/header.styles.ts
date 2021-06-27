import { makeStyles } from "@material-ui/core";
import { ColorsConstants, FontsConstants } from "../shared/styles/main-styles";

export const useStyles = makeStyles({
  headerContainer: {
    width: '56.25vw',
    height: '11vh',
    minWidth: '100%',
    backgroundColor: '#fff',
    padding: '20px 53px',
    display: 'flex',
    justifyContent: 'space-between'
  },
  logoBox: {
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    fontFamily: FontsConstants.fontFamily,
    fontWeight: 'bold',
    fontSize: '41.2px',
    lineHeight: '48px',
    color: ColorsConstants.darkYellow
  },
  subTitle: {
    color: ColorsConstants.darkYellow,
    fontFamily: FontsConstants.fontFamily,
    fontSize: '16.2px',
    lineHeight: '19px',
    letterSpacing: '5.4px'
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'column'
  },
  logoContainer: {
    marginRight: '23px',
  },
  navContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  }
})