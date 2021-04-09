import styled from "styled-components/macro"
import { grid, GridProps as GridPropTypes } from "styled-system"
import { __DEV__, COMPONENT_PROPS } from "utils"
import { Box } from "stories/box/box"

const Grid = styled(Box)<GridPropTypes>`
  display: grid;

  ${grid};
`

if (__DEV__) {
  Grid.displayName = "Grid"
}

export type GridProps = COMPONENT_PROPS<typeof Grid>
export { Grid }
