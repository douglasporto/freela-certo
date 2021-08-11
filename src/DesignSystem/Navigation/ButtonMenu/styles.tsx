import styled, { css, DefaultTheme } from 'styled-components'

import { Button } from '@material-ui/core'

import { ButtonMenuProps } from './ButtonMenu'

const wrapperModifiers = {
  isActive: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.background.second} !important;
    color: ${theme.colors.primary} !important;
  `
}

export const Wrapper = styled(({ children, className }) => (
  <Button variant="text" className={className}>
    {children}
  </Button>
))<Pick<ButtonMenuProps, 'isActive'>>`
  ${({ theme, isActive }) => css`
    width: 100%;
    background-color: initial;
    color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    border: 0;
    padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
    font-size: ${theme.font.sizes.small}rem;
    font-weight: ${theme.font.bold};
    cursor: pointer;
    transition: ${theme.transition.default};
    :hover {
      background-color: ${theme.colors.background.second};
      color: ${theme.colors.primary};
    }
    ${isActive && wrapperModifiers.isActive(theme)}
  `}
`
