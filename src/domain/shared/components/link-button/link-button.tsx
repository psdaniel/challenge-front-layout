import { useStyles } from './link-button.styles'

interface LinkButtonProps {
  label: string
  linkTo: string
}

export const LinkButton = ({ label, linkTo }: LinkButtonProps) => {
  const classes = useStyles()
  return (
    <a className={classes.linkStyle} href={linkTo}>
      {label}
    </a>
  )
}
