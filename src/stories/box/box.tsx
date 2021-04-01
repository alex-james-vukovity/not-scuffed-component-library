import styled from "styled-components/macro"
import { space, layout, color, border, position, shadow } from "styled-system"
import { __DEV__, ComponentProps } from "utils"

const Box = styled.div`
  ${space};
  ${layout};
  ${color};
  ${border};
  ${position};
  ${shadow};
`

if (__DEV__) {
  Box.displayName = "Box"
}

export type BoxProps = ComponentProps<typeof Box>
export { Box }
