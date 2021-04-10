import styled from "styled-components/macro"
import {
  __DEV__,
  COMPONENT_PROPS,
  COMMON_PROPS,
  COMMON_TYPES,
  TYPOGRAPHY_PROPS,
  TYPOGRAPHY_TYPES,
} from "utils"
import { lighten, darken } from "polished"

const TextInput = styled.input.attrs((props) => ({
  type: props.type || "textbox",
}))<COMMON_TYPES & TYPOGRAPHY_TYPES>`
  width: 320px;
  min-height: 34px;
  padding: 6px 12px;
  box-sizing: border-box;
  font-family: inherit;
  background-color: transparent;
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: ${({ theme }) => theme.lineHeight[0]};
  color: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.radius[1]};
  box-shadow: ${({ theme }) => theme.shadow.medium};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.green};
  }

  &:disabled {
    background-color: ${({ theme }) => lighten(0.15, theme.colors.gray)};
    color: ${({ theme }) => darken(0.2, theme.colors.gray)};
  }

  ${COMMON_PROPS}
  ${TYPOGRAPHY_PROPS}
`

if (__DEV__) {
  TextInput.displayName = "TextInput"
}

export type TextInputProps = COMPONENT_PROPS<typeof TextInput>
export { TextInput }
