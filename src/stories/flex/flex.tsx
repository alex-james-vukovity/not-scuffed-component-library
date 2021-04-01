import styled from "styled-components/macro"
import {
  space,
  layout,
  color,
  border,
  position,
  shadow,
  flexbox,
} from "styled-system"
import { __DEV__, ComponentProps } from "utils"

const Flex = styled.div`
  display: flex;

  ${space};
  ${layout};
  ${color};
  ${border};
  ${position};
  ${shadow};
  ${flexbox};
`

if (__DEV__) {
  Flex.displayName = "Flex"
}

export type FlexProps = ComponentProps<typeof Flex>
export { Flex }
