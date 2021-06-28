import { useStyles } from './icon.styles'

export const Icon = ({ svg }: { svg: string }) => {
  const classes = useStyles()
  return <img className={classes.imagesStyles} src={svg} />
}
