import React, { CSSProperties } from 'react'
import Button from 'react-bootstrap/Button'


import Colors from 'utils/colors'

interface Props {
  title?: string,
  style?: CSSProperties,
  onClick?: () => any
}

export default function Donate({ title, style, onClick }: Props) {
  return (
    <Button onClick={onClick} style={{
      borderRadius: 20,
      backgroundColor: Colors.orange,
      color: 'white',
      textTransform: "uppercase",
      paddingLeft: 24,
      paddingRight: 24,
      ...style
    }}>{title || "Faire un don"}</Button>

  )
}