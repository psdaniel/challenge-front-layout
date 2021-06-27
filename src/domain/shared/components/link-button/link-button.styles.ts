import { makeStyles } from '@material-ui/core';
import { ColorsConstants, FontsConstants } from '../../styles/main-styles';

export const useStyles = makeStyles({
  linkStyle: {
    fontFamily: FontsConstants.fontFamily,
    fontSize: '16.2px',
    fontWeight: 300,
    lineHeight: '19px',
    letterSpacing: '5.4px',
    marginRight: '137px',
    color: ColorsConstants.darkYellow
  }
})