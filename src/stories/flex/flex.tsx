import styled from "styled-components/macro"
import { flexbox, FlexboxProps } from "styled-system"
import { __DEV__, COMPONENT_PROPS } from "utils"
import { Box } from "stories/box/box"

const Flex = styled(Box)<FlexboxProps>`
  display: flex;

  ${flexbox};
`

if (__DEV__) {
  Flex.displayName = "Flex"
}

export type FlexProps = COMPONENT_PROPS<typeof Flex>
export { Flex }
