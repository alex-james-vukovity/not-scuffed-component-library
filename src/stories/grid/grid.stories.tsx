import { Meta } from "@storybook/react/types-6-0"
import { Grid, ThemeProvider } from "stories"

export default {
  title: "Layout/Grid",
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
} as Meta

export const Default = () => <Grid>Hey im default grid element</Grid>
