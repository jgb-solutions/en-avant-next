import React, { CSSProperties } from 'react'

import Colors from 'utils/colors'

interface Props {
  title?: string,
  style?: CSSProperties,
  onClick?: () => any
}

export default function Donate({ title, style, onClick }: Props) {
  return (
    <button onClick={onClick} style={{
      borderRadius: 20,
      backgroundColor: Colors.orange,
      color: 'white',
      textTransform: "uppercase",
      padding: "12px 24px",
      outline: "none",
      fontWeight: "bold",
      ...style
    }}>{title || "Faire un don"}</button>

  )
}