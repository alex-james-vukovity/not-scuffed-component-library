import { render, screen } from "@testing-library/react"
import { ButtonPrimary, ThemeProvider } from "stories"

test("should render the component", () => {
  render(
    <ThemeProvider>
      <ButtonPrimary>button primary</ButtonPrimary>
    </ThemeProvider>
  )

  const component = screen.getByText("button primary")

  expect(component).toBeInTheDocument()
  expect(component).toContainHTML("button")
})
