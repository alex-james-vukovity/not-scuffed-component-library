import { FC } from "react"
import styled from "styled-components/macro"
import { __DEV__ } from "utils"

export const Flex = styled.div<FC>`
  display: flex;
`

if (__DEV__) {
  Flex.displayName = "Flex"
}
