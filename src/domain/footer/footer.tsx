import { useStyles } from './footer.styles'
import youtube from '../assets/youtube.svg'
import facebook from '../assets/facebook.svg'
import twitter from '../assets/twitter.svg'
import { Icon } from '../shared/components/icon'

export const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footerContainer}>
      <div className={classes.socialNetworksContainer}>
        <span className={classes.footerText}>Follow Us</span>
        <div>
          <Icon svg={youtube} />
          <Icon svg={facebook} />
          <Icon svg={twitter} />
        </div>
      </div>
      <div className={classes.contactContainer}>
        <span className={classes.footerText}>Contact</span>
        <p className={classes.addressText}>
          2490 Leisure Lane
          <br />
          San Luis Obispo <br />
          California
        </p>
      </div>
    </footer>
  )
}
