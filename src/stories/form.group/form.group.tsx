import styled from "styled-components/macro"
import { typography, TypographyProps } from "styled-system"
import { __DEV__, COMPONENT_PROPS, COMMON_PROPS, COMMON_TYPES } from "utils"
import { Box } from "stories/box/box"

const FormGroupStyled = styled(Box)`
  margin: ${({ theme }) => theme.space[3]} ${({ theme }) => theme.space[0]};
`

const FormGroupLabel = styled.label<COMMON_TYPES & TypographyProps>`
  display: block;
  margin-bottom: ${({ theme }) => theme.space[1]};
  font-size: ${({ theme }) => theme.fontSizes[1]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  ${COMMON_PROPS}
  ${typography}
`

if (__DEV__) {
  FormGroupStyled.displayName = "FormGroup"
}

export type FormGroupProps = COMPONENT_PROPS<typeof FormGroupStyled>
export type FormGroupLabelProps = COMPONENT_PROPS<typeof FormGroupLabel>
const FormGroup = Object.assign(FormGroupStyled, { Label: FormGroupLabel })
export { FormGroup }
