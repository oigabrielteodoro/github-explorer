import React, { useState, ChangeEvent, useEffect } from 'react'

import { Link } from 'react-router-dom'

import { RepositoryDTO } from '../../dtos/RepositoryDTO'

import { Avatar } from '../../components/Avatar'
import { Header } from '../../components/Header'
import { SearchInput } from '../../components/SearchInput'

import { api } from '../../services/api'

import * as S from './styles'
import { FiArrowRight } from 'react-icons/fi'

export function Home() {
  const [inputValue, setInputValue] = useState('')

  const [repositories, setRepositories] = useState<RepositoryDTO[]>([])
  const [filteredRepositories, setFilteredRepositories] = useState<
    RepositoryDTO[]
  >([])

  useEffect(() => {
    async function loadRepositories() {
      const response = await api.get<RepositoryDTO[]>('repositories')

      const allRepositories = response.data.map((repository) => ({
        ...repository,
        description:
          repository.description?.length > 50
            ? repository.description.slice(0, 50) + '...'
            : repository.description,
      }))

      setRepositories(allRepositories)
      setFilteredRepositories(allRepositories.slice(0, 3))
    }

    loadRepositories()
  }, [])

  function handleSearch() {
    setFilteredRepositories(
      repositories
        .filter((repository) =>
          repository.full_name.toLowerCase().includes(inputValue.toLowerCase())
        )
        .slice(0, 10)
    )
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

        <S.RepositoriesList>
          {filteredRepositories.map((repository) => (
            <S.RepositoryArea key={repository.node_id}>
              <a
                href={repository.owner.html_url}
                target="_blank"
                rel="noreferrer"
              >
                <Avatar
                  size="large"
                  src={repository.owner.avatar_url}
                  name={repository.owner.name}
                />
              </a>

              <S.RepositoryBody>
                <strong>{repository.full_name}</strong>
                <span>{repository.description}</span>
              </S.RepositoryBody>

              <S.RepositoryLink to={`/repositories/${repository.node_id}`}>
                <FiArrowRight size={24} />
              </S.RepositoryLink>
            </S.RepositoryArea>
          ))}
        </S.RepositoriesList>
      </S.Content>

      <img src="/img/github.svg" alt="Github" />
    </S.Container>
  )
}
