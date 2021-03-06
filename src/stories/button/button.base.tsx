import styled from "styled-components/macro"
import { variant } from "styled-system"
import {
  __DEV__,
  COMPONENT_PROPS,
  COMMON_PROPS,
  COMMON_TYPES,
  TYPOGRAPHY_PROPS,
  TYPOGRAPHY_TYPES,
} from "utils"

const sizeVariants = variant({
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

type Props = {
  variant?: "small" | "medium" | "large"
} & COMMON_TYPES &
  TYPOGRAPHY_TYPES

const ButtonBase = styled.button.attrs(({ disabled, onClick, type }) => ({
  onClick: disabled ? undefined : onClick,
  type: type || "submit",
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

  ${COMMON_PROPS}
  ${TYPOGRAPHY_PROPS}
  ${sizeVariants}
`

if (__DEV__) {
  ButtonBase.displayName = "ButtonBase"
}

export type ButtonBaseProps = COMPONENT_PROPS<typeof ButtonBase>
export { ButtonBase }
