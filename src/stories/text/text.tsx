import styled from "styled-components/macro"
import {
  __DEV__,
  COMPONENT_PROPS,
  COMMON_TYPES,
  COMMON_PROPS,
  TYPOGRAPHY_PROPS,
  TYPOGRAPHY_TYPES,
} from "utils"

const Text = styled.span<COMMON_TYPES & TYPOGRAPHY_TYPES>`
  ${COMMON_PROPS};
  ${TYPOGRAPHY_PROPS};
`

if (__DEV__) {
  Text.displayName = "Text"
}

export type TextProps = COMPONENT_PROPS<typeof Text>
export { Text }
