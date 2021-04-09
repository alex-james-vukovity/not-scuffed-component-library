import { Meta } from "@storybook/react/types-6-0"
import { Grid, Theme } from "stories"

export default {
  title: "Layout/Grid",
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
} as Meta

export const Default = () => <Grid>Hey im default grid element</Grid>
