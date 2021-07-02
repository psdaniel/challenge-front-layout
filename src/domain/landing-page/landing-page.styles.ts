import { makeStyles } from "@material-ui/core";
import { ColorsConstants, FontsConstants } from "../shared/styles/main-styles";
import measureTape from '../assets/measure-tape2.png'

export const useStyles = makeStyles({
  firstSectionContainer: {
    maxWidth: '56.25vw',
    minWidth: '100%',
    height: '112vh',
    backgroundColor: ColorsConstants.gray,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  firstSectionContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleContent: {
    fontFamily: FontsConstants.fontFamily,
    fontWeight: 'bold',
    fontSize: '82.2px',
    lineHeight: '96px',
    color: ColorsConstants.darkGray,
  },
  secondSectionContainer: {
    maxWidth: '56.25vw',
    minWidth: '100%',
    height: '112vh',
    backgroundImage: `url(${measureTape})`,
    background: 'linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5))',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
    backgroundColor: ColorsConstants.blue,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  secondSectionContent: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: '440px',
    marginTop: '366px'
  },
  secondTitleContent: {
    fontFamily: FontsConstants.fontFamily,
    fontWeight: 'bold',
    fontSize: '69.2px',
    lineHeight: '81px',
    color: '#FFFFFF'
  },
  subTextContent: {
    fontFamily: FontsConstants.fontFamily,
    fontSize: '48.2px',
    lineHeight: '56px',
    color: '#FFFFFF'
  }
})