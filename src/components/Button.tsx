import React, { CSSProperties } from 'react'
import {
  Button as ButtonBase,
} from 'react-bootstrap'

import Colors from 'utils/colors'

interface Props {
  title: string,
  style?: CSSProperties,
  onClick?: () => any
}

export default function Button({ title, style, onClick }: Props) {
  return (
    <ButtonBase style={{
      fontSize: 11,
      borderRadius: 20,
      textTransform: "uppercase",
      paddingLeft: 24,
      paddingRight: 24,
      border: 0,
      ...style
    }}
      onClick={onClick}>{title}</ButtonBase>

  )
}