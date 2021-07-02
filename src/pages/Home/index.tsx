import React, { useState, ChangeEvent } from 'react'

import { SearchInput } from '../../components/SearchInput'

import { Header } from '../../components/Header'

import * as S from './styles'

export function Home() {
  const [inputValue, setInputValue] = useState('')

  function handleSearch() {
    console.log('search')
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value)
  }

  return (
    <S.Container>
      <Header />

      <S.Content>
        <h1>
          Explore repositórios
          <br /> no Github.
        </h1>

        <SearchInput
          value={inputValue}
          placeholder="Digite aqui"
          onClick={handleSearch}
          onChange={handleChange}
        />
      </S.Content>

      <img src="/img/github.svg" alt="Github" />
    </S.Container>
  )
}
