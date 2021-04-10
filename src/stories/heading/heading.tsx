import styled from "styled-components/macro"
import {
  __DEV__,
  COMPONENT_PROPS,
  COMMON_PROPS,
  COMMON_TYPES,
  TYPOGRAPHY_PROPS,
  TYPOGRAPHY_TYPES,
} from "utils"

const Heading = styled.h2<COMMON_TYPES & TYPOGRAPHY_TYPES>`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes[5]};
  margin: ${({ theme }) => theme.space[0]};

  ${COMMON_PROPS};
  ${TYPOGRAPHY_PROPS};
`

if (__DEV__) {
  Heading.displayName = "Heading"
}

export type HeadingProps = COMPONENT_PROPS<typeof Heading>
export { Heading }
