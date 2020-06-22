import React, { CSSProperties } from 'react'

import NavBar from "./NavBar"
import Colors from 'utils/colors'

interface Props {
  style?: CSSProperties
}

export default function WhiteNavBar({ style }: Props) {
  return (
    <NavBar style={{
      color: Colors.white,
      paddingLeft: 0,
      paddingRight: 0,
      ...style
    }} />
  )
}