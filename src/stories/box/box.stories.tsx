import { Story, Meta } from '@storybook/react/types-6-0'

import { Box } from './box'
import { Theme } from '../theme'

export default {
  title: 'Box',
  component: Box
} as Meta

const Template: Story = (args) => (
  <Theme>
    <Box {...args} />
  </Theme>
)

export const Div = Template.bind({})
Div.args = {
  children: 'Hey I am Div'
}

export const Section = Template.bind({})
Section.args = {
  children: 'Hey I am Section',
  as: 'section'
}
