import styled from 'styled-components'

import { theme } from '../../styles/theme'

export const Container = styled.header`
  display: flex;
  align-items: center;
  max-width: ${theme.grid.container};
  margin: ${theme.spacing[6]} auto 0;

  a {
    display: flex;
    align-items: center;
    font-weight: ${theme.font.weights.medium};
    transition: ${theme.transition.fast};
    color: ${theme.colors.neutral[500]};
    margin-left: auto;

    &:hover {
      filter: brightness(0.8);
    }

    svg {
      margin-right: 0.6rem;
    }
  }
`
