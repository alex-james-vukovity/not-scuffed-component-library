import { VFC } from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Box, Theme } from 'stories'

export default {
  title: 'Box',
  component: Box,
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    )
  ]
} as Meta

export const Default: VFC = () => <Box>Hey im default div element</Box>
