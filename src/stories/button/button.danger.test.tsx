import { render, screen } from "@testing-library/react"
import { ButtonDanger, Theme } from "stories"

test("should render the component", () => {
  render(
    <Theme>
      <ButtonDanger>button danger</ButtonDanger>
    </Theme>
  )

  const component = screen.getByText("button danger")

  expect(component).toBeInTheDocument()
  expect(component).toContainHTML("button")
})
