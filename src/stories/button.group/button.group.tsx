import styled from "styled-components/macro"
import { __DEV__, COMPONENT_PROPS } from "utils"
import { Box } from "stories/box/box"

const ButtonGroup = styled(Box)`
  button {
    margin-left: ${({ theme }) => theme.space[3]};

    &:first-child {
      margin-left: ${({ theme }) => theme.space[0]};
    }
  }
`

if (__DEV__) {
  ButtonGroup.displayName = "ButtonGroup"
}

export type ButtonGroupProps = COMPONENT_PROPS<typeof ButtonGroup>
export { ButtonGroup }
