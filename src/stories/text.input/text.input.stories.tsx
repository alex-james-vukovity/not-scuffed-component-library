import { Meta } from "@storybook/react/types-6-0"
import { TextInput, FormGroup, Theme } from "stories"

export default {
  title: "Form/TextInput",
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
} as Meta

export const Default = () => <TextInput />

export const Small = () => <TextInput variant="small" />

export const Large = () => <TextInput variant="large" />

export const Disabled = () => <TextInput disabled />

export const WithLabel = () => (
  <FormGroup>
    <FormGroup.Label htmlFor="id">Label</FormGroup.Label>
    <TextInput id="id" />
  </FormGroup>
)
