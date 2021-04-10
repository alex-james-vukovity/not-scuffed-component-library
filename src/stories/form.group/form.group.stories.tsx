import { Meta } from "@storybook/react/types-6-0"
import { FormGroup, ThemeProvider } from "stories"

export default {
  title: "Form/FormGroup",
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta

export const Default = () => (
  <FormGroup>
    <FormGroup.Label>Hey im label</FormGroup.Label>
  </FormGroup>
)
