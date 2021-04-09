import styled from "styled-components/macro"
import { variant, typography, TypographyProps } from "styled-system"
import { __DEV__, COMPONENT_PROPS, COMMON_PROPS, COMMON_TYPES } from "utils"

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

type Props = COMMON_TYPES &
  TypographyProps & {
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

  ${COMMON_PROPS}
  ${sizes}
  ${typography}
`

if (__DEV__) {
  ButtonBase.displayName = "ButtonBase"
}

export type ButtonBaseProps = COMPONENT_PROPS<typeof ButtonBase>
export { ButtonBase }
