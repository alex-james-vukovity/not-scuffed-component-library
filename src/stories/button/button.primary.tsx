import styled from "styled-components/macro"
import { __DEV__, COMPONENT_PROPS } from "utils"
import { ButtonBase } from "stories/button/button.base"
import { darken } from "polished"

const ButtonPrimary = styled(ButtonBase)`
  color: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.colors.green};
  background-color: ${({ theme }) => theme.colors.green};

  &:hover {
    border-color: ${({ theme }) => darken(0.04, theme.colors.green)};
    background-color: ${({ theme }) => darken(0.04, theme.colors.green)};
  }

  &:focus {
    border-color: ${({ theme }) => darken(0.04, theme.colors.green)};
    background-color: ${({ theme }) => darken(0.04, theme.colors.green)};
  }

  &:disabled {
    border-color: ${({ theme }) => theme.colors.gray};
    background-color: ${({ theme }) => theme.colors.gray};
  }
`

if (__DEV__) {
  ButtonPrimary.displayName = "ButtonPrimary"
}

export type ButtonPrimaryProps = COMPONENT_PROPS<typeof ButtonPrimary>
export { ButtonPrimary }
