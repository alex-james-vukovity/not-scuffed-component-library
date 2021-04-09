import {
  compose,
  space,
  layout,
  color,
  border,
  position,
  shadow,
  background,
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
