import { render, screen } from "@testing-library/react"
import { ButtonBase, Theme } from "stories"

test("should render the component", () => {
  render(
    <Theme>
      <ButtonBase>button base</ButtonBase>
    </Theme>
  )

  const component = screen.getByText("button base")

  expect(component).toBeInTheDocument()
  expect(component).toContainHTML("button")
})