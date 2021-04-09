import { Meta } from "@storybook/react/types-6-0"
import { Heading, Theme } from "stories"

export default {
  title: "Typography/Heading",
  decorators: [
    (Story) => (
      <Theme>
        <Story />
      </Theme>
    ),
  ],
} as Meta

export const Default = () => <Heading>Hey im default h2 element</Heading>

export const HeadingH1 = () => <Heading as="h1">Hey im h1 element</Heading>

export const HeadingH3 = () => <Heading as="h3">Hey im h3 element</Heading>

export const HeadingH4 = () => <Heading as="h4">Hey im h4 element</Heading>

export const HeadingH5 = () => <Heading as="h5">Hey im h5 element</Heading>

export const HeadingH6 = () => <Heading as="h6">Hey im h6 element</Heading>
