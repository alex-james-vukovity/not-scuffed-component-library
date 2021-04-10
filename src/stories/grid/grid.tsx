import styled from "styled-components/macro"
import { __DEV__, COMPONENT_PROPS, GRID_PROPS, GRID_TYPES } from "utils"
import { Box } from "stories/box/box"

const Grid = styled(Box)<GRID_TYPES>`
  display: grid;

  ${GRID_PROPS};
`

if (__DEV__) {
  Grid.displayName = "Grid"
}

export type GridProps = COMPONENT_PROPS<typeof Grid>
export { Grid }
