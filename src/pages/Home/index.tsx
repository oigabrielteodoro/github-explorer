import React from 'react'

import { SearchInput } from '../../components/SearchInput'

import { Header } from '../../components/Header'

import * as S from './styles'

export function Home() {
  return (
    <S.Container>
      <Header />

      <S.Content>
        <h1>
          Explore repositórios
          <br /> no Github.
        </h1>

        <SearchInput placeholder="Digite aqui" />
      </S.Content>

      <img src="/img/github.svg" alt="Github" />
    </S.Container>
  )
}
