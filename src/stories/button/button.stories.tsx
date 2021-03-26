import { VFC } from "react"
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

export const Default: VFC = () => <Button>Hey im default button</Button>

export const Submit: VFC = () => (
  <Button type="submit">Hey im submit button</Button>
)

export const Disabled: VFC = () => (
  <Button disabled>Hey im disabled button</Button>
)
