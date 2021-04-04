import styled from "styled-components/macro"
import {
  compose,
  space,
  layout,
  position,
  color,
  display,
  shadow,
  border,
  background,
  typography,
  variant,
} from "styled-system"
import { __DEV__, ComponentProps } from "utils"

const sizes = variant({
  variants: {
    small: {
      padding: "4px 12px",
      fontSize: 0,
    },
    medium: {
      fontSize: 1,
    },
    large: {
      padding: "10px 24px",
      fontSize: 2,
    },
  },
})

interface Props {
  variant?: "small" | "medium" | "large"
}

const ButtonBase = styled.button.attrs(({ disabled, onClick }) => ({
  onClick: disabled ? undefined : onClick,
}))<Props>`
  position: relative;
  display: inline-block;
  font-family: inherit;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  appearance: none;
  text-decoration: none;
  text-align: center;
  border-style: solid;
  padding: ${({ theme }) => theme.space[2]} ${({ theme }) => theme.space[3]};
  border-width: ${({ theme }) => theme.borderWidths[1]};
  border-radius: ${({ theme }) => theme.radius[2]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  line-height: ${({ theme }) => theme.lineHeight[0]};
  box-shadow: ${({ theme }) => theme.shadow.medium};

  &:hover {
    text-decoration: none;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: default;
  }

  ${compose(
    space,
    layout,
    position,
    color,
    display,
    shadow,
    border,
    background,
    typography
  )}
  ${sizes}
`

if (__DEV__) {
  ButtonBase.displayName = "ButtonBase"
}

export type ButtonBaseProps = ComponentProps<typeof ButtonBase>
export { ButtonBase }
