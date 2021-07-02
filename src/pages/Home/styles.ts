import styled from 'styled-components'

import { Link } from 'react-router-dom'

import { theme } from '../../styles/theme'

export const Container = styled.div`
  margin: 0 auto;
  position: relative;
  max-width: ${theme.grid.container};

  > img {
    position: absolute;
    top: -4rem;
    right: 0;
    z-index: -1;
  }
`

export const Content = styled.main`
  display: flex;
  flex-direction: column;
  margin-top: 10rem;

  h1 {
    font-size: ${theme.font.sizes.headline};
    color: ${theme.colors.neutral[900]};
    line-height: ${theme.spacing[8]};
    margin-bottom: ${theme.spacing[6]};
  }
`

export const RepositoriesList = styled.ul`
  display: grid;
  grid-gap: ${theme.spacing[3]};
  margin-top: ${theme.spacing[7]};
  padding-bottom: ${theme.spacing[7]};
  max-width: 71rem;
`

export const RepositoryArea = styled.li`
  display: flex;
  align-items: center;
  background: ${theme.colors.white};
  border-radius: ${theme.radius.input};
  transition: transform ${theme.transition.fast};
  padding: ${theme.spacing[3]};

  &:hover {
    transform: translateX(0.5rem);
  }

  a {
    transition: filter ${theme.transition.default};

    &:hover {
      filter: brightness(0.8);
    }
  }
`

export const RepositoryBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: ${theme.spacing[4]};

  strong {
    color: ${theme.colors.neutral[900]};
    font-size: ${theme.font.sizes.subtitle};
  }

  span {
    color: ${theme.colors.neutral[500]};
    margin-top: ${theme.spacing[1]};
  }
`

export const RepositoryLink = styled(Link)`
  margin-left: auto;
  color: ${theme.colors.neutral[200]};
`
