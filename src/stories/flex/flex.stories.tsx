import { Meta } from "@storybook/react/types-6-0"
import { Flex, Theme } from "stories"

export default {
  title: "Flex",
  component: Flex,
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
} as Meta

export const Default = () => <Flex>Hey im default div element</Flex>
