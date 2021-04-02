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

const variants = variant({
  variants: {
    small: {
      padding: "4px 12px",
      fontSize: 0,
    },
    medium: {
      fontSize: 1,
    },
    large: {
      padding: "10px 20px",
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
  padding: 6px 16px;
  font-family: inherit;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  user-select: none;
  appearance: none;
  text-decoration: none;
  text-align: center;


  &:hover {
    text-decoration: none;
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    cursor: default;
  }

  &:disabled svg {
    opacity: 0.6;
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
  ${variants}
`

if (__DEV__) {
  ButtonBase.displayName = "ButtonBase"
}

export type ButtonBaseProps = ComponentProps<typeof ButtonBase>
export { ButtonBase }
