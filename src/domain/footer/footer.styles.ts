import { makeStyles } from "@material-ui/core";
import { ColorsConstants, FontsConstants } from "../shared/styles/main-styles";

export const useStyles = makeStyles({
  footerContainer: {
    width: '56.25vw',
    height: '24.8vh',
    minWidth: '100%',
    backgroundColor: ColorsConstants.gray,
    display: 'flex',
  },
  socialNetworksContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '47px',
    marginLeft: '151px'
  },
  contactContainer: {
    marginLeft: '270px',
    marginTop: '47px'
  },
  footerText: {
    marginBottom: '17.2px',
    fontFamily: FontsConstants.fontFamily,
    fontWeight: 'bold',
    fontSize: '27.2px',
    lineHeight: '32px',
    color: ColorsConstants.darkGray
  },
  addressText: {
    fontFamily: FontsConstants.fontFamily,
    fontSize: '16.2px',
    lineHeight: '19px',
    color: ColorsConstants.darkGray,
    marginTop: '8px'
  }
})