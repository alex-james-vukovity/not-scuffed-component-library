import { Meta } from "@storybook/react/types-6-0"
import { FormGroup, Theme } from "stories"

export default {
  title: "Form/FormGroup",
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
} as Meta

export const Default = () => (
  <FormGroup>
    <FormGroup.Label>Hey im label</FormGroup.Label>
  </FormGroup>
)
