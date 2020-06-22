import React, { CSSProperties } from 'react'
import Link from 'next/link'

import Image from "react-bootstrap/Image"

import { APP_NAME, DOMAIN } from '../utils/constants'

interface Props {
  containerStyle?: CSSProperties
  style?: CSSProperties
  className?: string
  containerClassName?: string
  url?: string,
  transparent?: boolean
}

export default function Logo({
  containerStyle,
  style,
  className,
  containerClassName,
  url,
  transparent
}: Props) {
  const containerStyles: CSSProperties = {
    ...containerStyle
  }

  return (
    <div style={containerStyles} className={containerClassName}>
      <Link href="/">
        <span className="cursor-pointer">

          <Image src={`/assets/images/logo-${transparent ? 'white' : 'blue'}.png`}
            style={{
              width: 130,
              ...style
            }} />
        </span>
      </Link>
    </div>
  )
}