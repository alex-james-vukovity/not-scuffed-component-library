import React from "react"
import styled, { css } from "styled-components/macro"
import { __DEV__, COMPONENT_PROPS } from "utils"
import { Box } from "stories/box/box"
import { variant } from "styled-system"
import { lighten } from "polished"

const sizeVariants = variant({
  variants: {
    small: {
      px: 1,
      py: 1,
      fontSize: 1,
      lineHeight: "17px",
    },
    large: {
      px: 3,
      py: 3,
      fontSize: 4,
      lineHeight: "25px",
    },
  },
})

type WrapperProps = { disabled?: boolean; variant?: "small" | "large" }

const Wrapper = styled(Box)<WrapperProps>`
  padding: 6px 12px;
  min-height: 34px;
  font-size: ${({ theme }) => theme.fontSizes[1]};
  line-height: ${({ theme }) => theme.lineHeight[0]};
  color: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.radius[1]};
  outline: none;
  box-shadow: ${({ theme }) => theme.shadow.medium};

  &:focus-within {
    border-color: ${({ theme }) => theme.colors.green};
  }

  ${(props) =>
    props.disabled &&
    css`
      border-color: ${({ theme }) => theme.colors.gray};
      background-color: ${({ theme }) => lighten(0.04, theme.colors.gray)};
    `}

  ${sizeVariants}
`

const Input = styled.input`
  border: 0;
  font-size: inherit;
  font-family: inherit;
  background-color: transparent;
  -webkit-appearance: none;
  color: inherit;
  width: 100%;

  &:focus {
    outline: 0;
  }
`

type Props = COMPONENT_PROPS<typeof Wrapper> & COMPONENT_PROPS<typeof Input>

const TextInput = React.forwardRef<HTMLInputElement, Props>(
  ({ disabled, id, type = "text", ...rest }, ref) => {
    return (
      <Wrapper disabled={disabled} {...rest}>
        <Input id={id} type={type} ref={ref} disabled={disabled} />
      </Wrapper>
    )
  }
)

if (__DEV__) {
  TextInput.displayName = "TextInput"
}

export type TextInputProps = COMPONENT_PROPS<typeof TextInput>
export { TextInput }
