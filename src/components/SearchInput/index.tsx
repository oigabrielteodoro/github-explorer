import React, { InputHTMLAttributes } from 'react'

import * as S from './styles'

type SearchInputProps = InputHTMLAttributes<HTMLInputElement>

export function SearchInput(props: SearchInputProps) {
  return (
    <S.Container>
      <input {...props} />
      <button type="button">Pesquisar</button>
    </S.Container>
  )
}
