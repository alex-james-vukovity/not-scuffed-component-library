import { Meta } from "@storybook/react/types-6-0"
import { ButtonGroup } from "stories/button.group/button.group"
import { ButtonPrimary } from "stories/button/button.primary"
import { ButtonDanger } from "stories/button/button.danger"
import { Theme } from "stories/theme/theme"

export default {
  title: "Layout/ButtonGroup",
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
} as Meta

export const Default = () => (
  <ButtonGroup>
    <ButtonDanger>Button danger</ButtonDanger>
    <ButtonPrimary>Button primary</ButtonPrimary>
    <ButtonDanger>Button danger</ButtonDanger>
    <ButtonPrimary>Button primary</ButtonPrimary>
  </ButtonGroup>
)
