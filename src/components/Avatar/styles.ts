import styled, { css } from 'styled-components'

import { theme } from '../../styles/theme'

import { AvatarProps } from '.'

type ContainerProps = Pick<AvatarProps, 'size'>

export const Container = styled.div<ContainerProps>`
  ${({ size }) => css`
    display: flex;
    align-items: center;
    border-radius: ${theme.radius.rounded};
    justify-content: center;
    background: ${theme.colors.neutral[100]};
    height: ${theme.avatar[size!]};
    width: ${theme.avatar[size!]};

    img {
      width: 100%;
      height: 100%;
      border-radius: ${theme.radius.rounded};
      object-fit: cover;
    }
  `}
`
export const Initials = styled.strong`
  font-size: ${theme.font.sizes.small};
  color: ${theme.colors.neutral[200]};
`
