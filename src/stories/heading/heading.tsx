import styled from "styled-components/macro"
import { typography, TypographyProps } from "styled-system"
import { __DEV__, COMPONENT_PROPS, COMMON_PROPS, COMMON_TYPES } from "utils"

const Heading = styled.h2<COMMON_TYPES & TypographyProps>`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes[5]};
  margin: ${({ theme }) => theme.space[0]};

  ${COMMON_PROPS};
  ${typography};
`

if (__DEV__) {
  Heading.displayName = "Heading"
}

export type HeadingProps = COMPONENT_PROPS<typeof Heading>
export { Heading }
