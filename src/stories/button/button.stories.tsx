import { Meta } from "@storybook/react/types-6-0"
import { Button, Theme } from "stories"

export default {
  title: "Button",
  component: Button,
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
} as Meta

export const Default = () => <Button>Hey im default button</Button>

export const Submit = () => <Button type="submit">Hey im submit button</Button>

export const Disabled = () => <Button disabled>Hey im disabled button</Button>
