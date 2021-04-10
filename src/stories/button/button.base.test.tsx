import { render, screen } from "@testing-library/react"
import { ButtonBase, ThemeProvider } from "stories"

test("should render the component", () => {
  render(
    <ThemeProvider>
      <ButtonBase>button base</ButtonBase>
    </ThemeProvider>
  )

  const component = screen.getByText("button base")

  expect(component).toBeInTheDocument()
  expect(component).toContainHTML("button")
})
