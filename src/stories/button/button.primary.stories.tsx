import { Meta } from "@storybook/react/types-6-0"
import { ButtonPrimary } from "stories/button/button.primary"
import { Theme } from "stories/theme/theme"

export default {
  title: "Button/ButtonPrimary",
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
} as Meta

export const Small = () => (
  <ButtonPrimary variant="small">small button</ButtonPrimary>
)

export const Medium = () => (
  <ButtonPrimary variant="medium">medium button</ButtonPrimary>
)

export const Large = () => (
  <ButtonPrimary variant="large">large button</ButtonPrimary>
)

export const Disabled = () => (
  <ButtonPrimary disabled>disabled button</ButtonPrimary>
)
