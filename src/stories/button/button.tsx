import styled from "styled-components/macro"
import { space, layout, position } from "styled-system"
import { __DEV__, ComponentProps } from "utils"

const Button = styled.button.attrs(({ disabled, onClick }) => ({
  onClick: disabled ? undefined : onClick,
}))`
  padding: 8px 16px;
  background-color: white;
  border: 2px solid black;
  cursor: pointer;

  ::focus {
    outline: 2px solid black;
  }

  ::disabled {
    cursor: not-allowed;
    border: 2px solid #dedede;
  }

  ${space};
  ${layout};
  ${position};
`

if (__DEV__) {
  Button.displayName = "Button"
}

export type ButtonProps = ComponentProps<typeof Button>
export { Button }
