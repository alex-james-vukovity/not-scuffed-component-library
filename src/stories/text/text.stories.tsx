import { Meta } from "@storybook/react/types-6-0"
import { Text, Theme } from "stories"

export default {
  title: "Typography/Text",
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
} as Meta

export const Default = () => <Text>Hey im default text element</Text>

export const Paragraph = () => <Text as="p">Hey im paragraph element</Text>
