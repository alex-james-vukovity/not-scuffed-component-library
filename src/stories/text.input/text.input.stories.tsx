import { Meta } from "@storybook/react/types-6-0"
import { TextInput, FormGroup, ThemeProvider } from "stories"

export default {
  title: "Form/TextInput",
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta

export const Default = () => <TextInput />

export const Disabled = () => <TextInput disabled value="Example" />

export const WithLabel = () => (
  <FormGroup>
    <FormGroup.Label htmlFor="id">Label</FormGroup.Label>
    <TextInput id="id" />
  </FormGroup>
)
