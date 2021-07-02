import React, { InputHTMLAttributes } from 'react'

import * as S from './styles'

type SearchInputProps = {
  onClick: () => void
} & InputHTMLAttributes<HTMLInputElement>

export function SearchInput({ onClick, ...rest }: SearchInputProps) {
  return (
    <S.Container>
      <input {...rest} />
      <button type="button" onClick={onClick}>
        Pesquisar
      </button>
    </S.Container>
  )
}
