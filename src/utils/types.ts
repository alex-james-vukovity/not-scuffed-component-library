import {
  SpaceProps,
  LayoutProps,
  ColorProps,
  BorderProps,
  PositionProps,
  ShadowProps,
  BackgroundProps,
} from "styled-system"

export type COMMON_TYPES = SpaceProps &
  LayoutProps &
  ColorProps &
  BorderProps &
  PositionProps &
  ShadowProps &
  BackgroundProps

export type COMPONENT_PROPS<T> = T extends React.ComponentType<infer Props>
  ? Props extends object
    ? Props
    : never
  : never
