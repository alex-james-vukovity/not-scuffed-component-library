import { render, screen } from "@testing-library/react"
import { ButtonBase, Theme } from "stories"

test("should render the component", () => {
  render(
    <Theme>
      <ButtonBase>Test</ButtonBase>
    </Theme>
  )

  const component = screen.getByText("Test")

  expect(component).toBeInTheDocument()
  expect(component).toContainHTML("button")
})
