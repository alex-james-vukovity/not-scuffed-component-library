import { FC } from "react"
import styled from "styled-components/macro"
import { __DEV__ } from "utils"

export const Box = styled.div<FC>``

if (__DEV__) {
  Box.displayName = "Box"
}
