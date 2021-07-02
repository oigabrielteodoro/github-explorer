import React from 'react'

import { Link, useLocation } from 'react-router-dom'

import { FiArrowLeft } from 'react-icons/fi'

import * as S from './styles'

export function Header() {
  const location = useLocation()

  return (
    <S.Container>
      <img src="/img/logo.svg" alt="Logo" />

      {location.pathname !== '/' && (
        <Link to="/">
          <FiArrowLeft size={18} strokeWidth={2.5} />
          Voltar
        </Link>
      )}
    </S.Container>
  )
}
