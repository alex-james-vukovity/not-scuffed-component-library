import styled from "styled-components/macro"
import { __DEV__, COMPONENT_PROPS, FLEX_PROPS, FLEX_TYPES } from "utils"
import { Box } from "stories/box/box"

const Flex = styled(Box)<FLEX_TYPES>`
  display: flex;

  ${FLEX_PROPS};
`

if (__DEV__) {
  Flex.displayName = "Flex"
}

export type FlexProps = COMPONENT_PROPS<typeof Flex>
export { Flex }
