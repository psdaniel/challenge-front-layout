import { useStyles } from './header.styles'
import logo from '../assets/logo.png'
import { LinkButton } from '../shared/components/link-button/link-button'

export const Header = () => {
  const classes = useStyles()

  return (
    <>
      <header className={classes.headerContainer}>
        <div className={classes.logoBox}>
          <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            <div className={classes.logoContainer}>
              <img src={logo} />
            </div>
            <div className={classes.titleContainer}>
              <h1 className={classes.title}>zutterman</h1>
              <span className={classes.subTitle}>Measure Tapes</span>
            </div>
          </div>
        </div>

        <nav className={classes.navContainer}>
          <LinkButton label="ABOUT US" linkTo="about-us" />
          <LinkButton label="MODELS" linkTo="models" />
          <LinkButton label="GUARANTEE" linkTo="guarantee" />
        </nav>
      </header>
    </>
  )
}
