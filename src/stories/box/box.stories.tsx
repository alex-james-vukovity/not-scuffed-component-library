import { Story, Meta } from '@storybook/react/types-6-0'
import { Box, Theme } from 'stories'

export default {
  title: 'Box',
  component: Box
} as Meta

const Template: Story = (args) => (
  <Theme>
    <Box {...args} />
  </Theme>
)

export const Default = Template.bind({})
Default.args = {
  children: 'Hey I am Default div element'
}

export const Section = Template.bind({})
Section.args = {
  children: 'Hey I am proped Section element',
  as: 'section'
}
