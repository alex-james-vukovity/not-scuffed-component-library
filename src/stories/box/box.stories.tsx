import { Meta } from "@storybook/react/types-6-0"
import { Box, Theme } from "stories"

export default {
  title: "Layout/Box",
  component: Box,
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
} as Meta

export const Default = () => <Box>Hey im default div element</Box>
