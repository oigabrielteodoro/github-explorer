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
