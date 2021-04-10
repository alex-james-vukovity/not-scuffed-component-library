import { render, screen } from "@testing-library/react"
import {
  ButtonGroup,
  ButtonPrimary,
  ButtonDanger,
  ThemeProvider,
} from "stories"

test("should render the component", () => {
  render(
    <ThemeProvider>
      <ButtonGroup>
        <ButtonPrimary>Button primary</ButtonPrimary>
        <ButtonDanger>Button danger</ButtonDanger>
      </ButtonGroup>
    </ThemeProvider>
  )

  const primary = screen.getByText("Button primary")
  expect(primary).toContainHTML("button")

  const danger = screen.getByText("Button danger")
  expect(danger).toContainHTML("button")
})
