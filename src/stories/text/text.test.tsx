import { render, screen } from "@testing-library/react"
import { Text, Theme } from "stories"

test("should render the component", () => {
  render(
    <Theme>
      <Text as="p">Test</Text>
    </Theme>
  )

  const component = screen.getByText("Test")

  expect(component).toBeInTheDocument()
  expect(component).toContainHTML("p")
})
