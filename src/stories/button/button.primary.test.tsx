import { render, screen } from "@testing-library/react"
import { ButtonPrimary, Theme } from "stories"

test("should render the component", () => {
  render(
    <Theme>
      <ButtonPrimary>button primary</ButtonPrimary>
    </Theme>
  )

  const component = screen.getByText("button primary")

  expect(component).toBeInTheDocument()
  expect(component).toContainHTML("button")
})
