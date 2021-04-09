import styled from "styled-components/macro"
import { __DEV__, COMPONENT_PROPS, COMMON_PROPS, COMMON_TYPES } from "utils"

const Box = styled.div<COMMON_TYPES>`
  ${COMMON_PROPS};
`

if (__DEV__) {
  Box.displayName = "Box"
}

export type BoxProps = COMPONENT_PROPS<typeof Box>
export { Box }
