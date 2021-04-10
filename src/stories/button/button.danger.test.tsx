import { render, screen } from "@testing-library/react"
import { ButtonDanger, ThemeProvider } from "stories"

test("should render the component", () => {
  render(
    <ThemeProvider>
      <ButtonDanger>button danger</ButtonDanger>
    </ThemeProvider>
  )

  const component = screen.getByText("button danger")

  expect(component).toBeInTheDocument()
  expect(component).toContainHTML("button")
})
