import {
  compose,
  space,
  layout,
  color,
  border,
  position,
  shadow,
  background,
  typography,
  flexbox,
  grid,
} from "styled-system"

export const COMMON_PROPS = compose(
  space,
  layout,
  position,
  color,
  shadow,
  border,
  background
)

export const TYPOGRAPHY_PROPS = typography

export const FLEX_PROPS = flexbox

export const GRID_PROPS = grid
