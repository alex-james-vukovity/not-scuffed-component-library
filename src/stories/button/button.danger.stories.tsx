import { Meta } from "@storybook/react/types-6-0"
import { ButtonDanger } from "stories/button/button.danger"
import { Theme } from "stories/theme/theme"

export default {
  title: "Button/ButtonDanger",
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
} as Meta

export const Small = () => (
  <ButtonDanger variant="small">small button</ButtonDanger>
)

export const Medium = () => (
  <ButtonDanger variant="medium">medium button</ButtonDanger>
)

export const Large = () => (
  <ButtonDanger variant="large">large button</ButtonDanger>
)

export const Disabled = () => (
  <ButtonDanger disabled>disabled button</ButtonDanger>
)
