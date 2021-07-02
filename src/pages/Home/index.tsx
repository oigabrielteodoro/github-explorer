import React from 'react'

import { Header } from '../../components/Header'

import * as S from './styles'

export function Home() {
  return (
    <S.Container>
      <Header />

      <h1>Github Explorer</h1>
    </S.Container>
  )
}
