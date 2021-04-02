import styled from "styled-components/macro"
import { __DEV__, ComponentProps } from "utils"
import { ButtonBase } from "stories/button/button.base"
import { darken } from "polished"

const ButtonDanger = styled(ButtonBase)`
  color: ${({ theme }) => theme.colors.white};
  border-color: ${({ theme }) => theme.colors.red};
  background-color: ${({ theme }) => theme.colors.red};

  &:hover {
    border-color: ${({ theme }) => darken(0.08, theme.colors.red)};
    background-color: ${({ theme }) => darken(0.08, theme.colors.red)};
  }

  &:focus {
    border-color: ${({ theme }) => darken(0.08, theme.colors.red)};
    background-color: ${({ theme }) => darken(0.08, theme.colors.red)};
  }

  &:disabled {
    border-color: ${({ theme }) => theme.colors.gray};
    background-color: ${({ theme }) => theme.colors.gray};
  }
`

if (__DEV__) {
  ButtonDanger.displayName = "ButtonDanger"
}

export type ButtonDangerProps = ComponentProps<typeof ButtonDanger>
export { ButtonDanger }
