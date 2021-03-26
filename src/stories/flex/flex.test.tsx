import { render, screen } from "@testing-library/react"
import { Flex, Theme } from "stories"

test("should render the component", () => {
  render(
    <Theme>
      <Flex>Test</Flex>
    </Theme>
  )

  const component = screen.getByText("Test")

  expect(component).toBeInTheDocument()
  expect(component).toContainHTML("div")
})
