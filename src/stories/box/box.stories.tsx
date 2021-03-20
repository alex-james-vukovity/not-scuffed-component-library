import { VFC } from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Box, Theme } from 'stories'

export default {
  title: 'Box',
  component: Box
} as Meta

export const Default: VFC = () => (
  <Theme>
    <Box>Hey im default div element</Box>
  </Theme>
)

export const Section: VFC = () => (
  <Theme>
    <Box as="section">Hey im proped section element</Box>
  </Theme>
)
