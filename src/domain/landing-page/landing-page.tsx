import { useStyles } from './landing-page.styles'
import tapeImage from '../assets/measure-everything.png'

export const LandingPage = () => {
  const classes = useStyles()
  return (
    <>
      <section className={classes.firstSectionContainer}>
        <div className={classes.firstSectionContent}>
          <h1 className={classes.titleContent}>
            Measure
            <br /> Everything
          </h1>
          <img src={tapeImage} />
        </div>
      </section>

      <section className={classes.secondSectionContainer}>
        <div className={classes.secondSectionContent}>
          <h1 className={classes.secondTitleContent}>We are Leader
            <br /> in Measure Tapes
            </h1>
          <p className={classes.subTextContent}>There are 5x the
            <br /> circumference of planet
            <br /> earth in metric tapes.
            </p>
        </div>
      </section>
    </>
  )
}
