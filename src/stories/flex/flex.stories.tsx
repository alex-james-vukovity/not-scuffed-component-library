import { Meta } from "@storybook/react/types-6-0"
import { Flex, ThemeProvider } from "stories"

export default {
  title: "Layout/Flex",
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta

export const Default = () => <Flex>Hey im default div element</Flex>
