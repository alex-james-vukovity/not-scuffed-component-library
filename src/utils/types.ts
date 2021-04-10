import {
  SpaceProps,
  LayoutProps,
  ColorProps,
  BorderProps,
  PositionProps,
  ShadowProps,
  BackgroundProps,
  TypographyProps,
  FlexboxProps,
  GridProps,
} from "styled-system"

export type COMMON_TYPES = SpaceProps &
  LayoutProps &
  ColorProps &
  BorderProps &
  PositionProps &
  ShadowProps &
  BackgroundProps

export type TYPOGRAPHY_TYPES = TypographyProps

export type FLEX_TYPES = FlexboxProps

export type GRID_TYPES = GridProps

export type COMPONENT_PROPS<T> = T extends React.ComponentType<infer Props>
  ? Props extends object
    ? Props
    : never
  : never
