import React from 'react'
import { ImgHTMLAttributes, useState } from 'react'

import { getInitials } from '../../utils'

import * as S from './styles'

export type AvatarProps = {
  name?: string
  size?: 'small' | 'large'
  src?: string | undefined
} & ImgHTMLAttributes<HTMLElement>

export function Avatar({
  name = '',
  src,
  size = 'small',
  ...rest
}: AvatarProps) {
  const [error, setError] = useState(false)

  return (
    <S.Container size={size} aria-label="avatar">
      {error && <S.Initials>{getInitials(name)}</S.Initials>}
      {!error && <img src={src} onError={() => setError(true)} {...rest} />}
    </S.Container>
  )
}
