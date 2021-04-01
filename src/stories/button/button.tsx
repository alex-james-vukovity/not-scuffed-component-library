import styled from "styled-components/macro"
import { space, layout, position } from "styled-system"
import { __DEV__ } from "utils"

export const Button = styled.button`
  padding: 8px 16px;
  background-color: white;
  border: 2px solid black;
  cursor: pointer;

  ::focus {
    outline: 2px solid black;
  }

  ::disabled {
    cursor: pointer;
    border: 2px solid #dedede;
  }

  ${space};
  ${layout};
  ${position};
`

if (__DEV__) {
  Button.displayName = "Button"
}
