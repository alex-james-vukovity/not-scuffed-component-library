import styled from "styled-components/macro"
import { typography, TypographyProps } from "styled-system"
import { __DEV__, COMPONENT_PROPS, COMMON_TYPES, COMMON_PROPS } from "utils"

const Text = styled.span<COMMON_TYPES & TypographyProps>`
  ${COMMON_PROPS};
  ${typography};
`

if (__DEV__) {
  Text.displayName = "Text"
}

export type TextProps = COMPONENT_PROPS<typeof Text>
export { Text }
