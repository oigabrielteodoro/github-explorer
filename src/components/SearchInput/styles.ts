import styled from 'styled-components'

import { theme } from '../../styles/theme'

export const Container = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
  background: ${theme.colors.white};
  border-radius: ${theme.radius.input};

  button {
    border: 0;
    color: ${theme.colors.white};
    padding: ${theme.spacing[4]} 3rem;
    background: ${theme.colors.green[500]};
    font-size: ${theme.font.sizes.subtitle};
    font-weight: ${theme.font.weights.medium};
    border-radius: 0 ${theme.radius.input} ${theme.radius.input} 0;
    transition: ${theme.transition.default};
    min-width: 21rem;

    &:hover {
      filter: brightness(0.9);
    }
  }

  input {
    border: 0;
    background: transparent;
    color: ${theme.colors.neutral[900]};
    font-size: ${theme.font.sizes.subtitle};
    padding: ${theme.spacing[4]} 3rem;
    border-radius: ${theme.radius.input} 0 0 ${theme.radius.input};
    width: 50rem;

    &::placeholder {
      color: ${theme.colors.neutral[500]};
    }
  }
`
