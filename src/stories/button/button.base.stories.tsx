import { Meta } from "@storybook/react/types-6-0"
import { ButtonBase, Theme } from "stories"

export default {
  title: "ButtonBase",
  component: ButtonBase,
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
} as Meta

export const Small = () => (
  <ButtonBase variant="small">Hey am small button</ButtonBase>
)

export const Medium = () => (
  <ButtonBase variant="medium">Hey am medium button</ButtonBase>
)

export const Large = () => (
  <ButtonBase variant="large">Hey am large button</ButtonBase>
)

export const Disabled = () => (
  <ButtonBase disabled>Hey am disabled button</ButtonBase>
)
