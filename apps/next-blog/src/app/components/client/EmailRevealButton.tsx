'use client'
// React button which first shows an icon and then something else which is revealed on click
// you can  provide the icon and the revealed content as children
// it's fully accessible and keyboard navigable
// it's also fully responsive
//  and typed with typescript

import React, { useState } from 'react'
import { FaEnvelope } from 'react-icons/fa/index'

type Props = {
  email: string
  subject?: string
  body?: string
  classNameIcon?: string
  classNameRevealed?: string
}

export const EmailRevealButton: React.FC<Props> = ({
  email,
  classNameIcon,
  classNameRevealed,
  subject,
  body,
}) => {
  const [revealed, setRevealed] = useState(false)

  const reveal = () => {
    setRevealed(true)
  }

  const emailLink = `mailto:${email}?subject=${subject || ''}&body=${body || ''}`

  return revealed ? (
    <a href={emailLink} className={classNameRevealed}>
      {email}
      <span className="sr-only">Email, click to reveal</span>
    </a>
  ) : (
    <FaEnvelope className={classNameIcon} onClick={revealed ? undefined : reveal} />
  )
}
