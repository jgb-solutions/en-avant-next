import React, { CSSProperties } from 'react'
import { makeStyles } from "@material-ui/core/styles"

export const useStyles = makeStyles({
  container: {
    maxWidth: 1140,
    margin: '0 auto',
    paddingLeft: 15,
    paddingRight: 15
  },
})

export default function Container({
  children,
  style
}: {
  children: React.ReactNode,
  style?: CSSProperties
}) {
  const styles = useStyles()

  return (
    <div className={`${styles.container}`} style={style}>
      {children}
    </div>
  )
}