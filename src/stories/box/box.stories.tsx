import { Meta } from "@storybook/react/types-6-0"
import { Box, ThemeProvider } from "stories"

export default {
  title: "Layout/Box",
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta

export const Default = () => <Box>Hey im default div element</Box>
