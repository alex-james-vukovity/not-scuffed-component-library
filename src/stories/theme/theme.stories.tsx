import { VFC } from 'react'
import { Meta } from '@storybook/react/types-6-0'
import { Theme } from 'stories'

export default {
  title: 'Theme',
  component: Theme
} as Meta

export const Default: VFC = () => <Theme>Hey im theme provider</Theme>
