import styled from 'styled-components'

import { theme } from '../../styles/theme'

export const Container = styled.div`
  margin: 0 auto;
  position: relative;
  max-width: ${theme.grid.container};

  > img {
    position: absolute;
    top: -4rem;
    right: 0;
  }
`

export const Content = styled.main``
