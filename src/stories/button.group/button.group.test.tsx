import { render, screen } from "@testing-library/react"
import { ButtonGroup, ButtonPrimary, ButtonDanger, Theme } from "stories"

test("should render the component", () => {
  render(
    <Theme>
      <ButtonGroup>
        <ButtonPrimary>Button primary</ButtonPrimary>
        <ButtonDanger>Button danger</ButtonDanger>
      </ButtonGroup>
    </Theme>
  )

  const primary = screen.getByText("Button primary")
  expect(primary).toContainHTML("button")

  const danger = screen.getByText("Button danger")
  expect(danger).toContainHTML("button")
})
