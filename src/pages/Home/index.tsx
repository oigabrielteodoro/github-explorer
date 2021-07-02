import React from 'react'

import { Header } from '../../components/Header'

import * as S from './styles'

export function Home() {
  return (
    <S.Container>
      <Header />

      <S.Content>
        <h1>Github Explorer</h1>
      </S.Content>

      <img src="/img/github.svg" alt="Github" />
    </S.Container>
  )
}
