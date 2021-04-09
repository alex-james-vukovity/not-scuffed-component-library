import { render, screen } from "@testing-library/react"
import { Heading, Theme } from "stories"

test("should render h2 component", () => {
  render(
    <Theme>
      <Heading>Test</Heading>
    </Theme>
  )

  const component = screen.getByText("Test")

  expect(component).toBeInTheDocument()
  expect(component).toContainHTML("h2")
})

test("should render h1 component", () => {
  render(
    <Theme>
      <Heading as="h1">Test</Heading>
    </Theme>
  )

  const component = screen.getByText("Test")

  expect(component).toBeInTheDocument()
  expect(component).toContainHTML("h1")
})
