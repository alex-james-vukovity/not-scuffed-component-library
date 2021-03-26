import { FC } from "react"
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
import { __DEV__ } from "utils"

export const Flex = styled.div<FC>(
  {
    display: "flex",
  },
  space,
  layout,
  color,
  border,
  position,
  shadow,
  flexbox
)

if (__DEV__) {
  Flex.displayName = "Flex"
}
