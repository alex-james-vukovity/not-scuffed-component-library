import { render, screen } from "@testing-library/react"
import { Grid, ThemeProvider } from "stories"

test("should render the component", () => {
  render(
    <ThemeProvider>
      <Grid>Test</Grid>
    </ThemeProvider>
  )

  const component = screen.getByText("Test")

  expect(component).toBeInTheDocument()
  expect(component).toContainHTML("grid")
})
