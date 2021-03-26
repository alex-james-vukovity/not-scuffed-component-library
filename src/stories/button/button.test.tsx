import { render, screen } from "@testing-library/react"
import { Button, Theme } from "stories"

test("should render the component", () => {
  render(
    <Theme>
      <Button>Test</Button>
    </Theme>
  )

  const component = screen.getByText("Test")

  expect(component).toBeInTheDocument()
  expect(component).toContainHTML("button")
})
