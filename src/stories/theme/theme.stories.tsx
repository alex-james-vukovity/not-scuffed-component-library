import { Story, Meta } from '@storybook/react/types-6-0'
import { Theme } from 'stories'

export default {
  title: 'Theme',
  component: Theme
} as Meta

const Template: Story = (args) => <Theme {...args} />

export const Default = Template.bind({})
Default.args = {
  children: 'Hey I am Theme Provider'
}
