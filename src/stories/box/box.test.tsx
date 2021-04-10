import { render, screen } from "@testing-library/react"
import { Box, ThemeProvider } from "stories"

test("should render the component", () => {
  render(
    <ThemeProvider>
      <Box>Test</Box>
    </ThemeProvider>
  )

  const component = screen.getByText("Test")

  expect(component).toBeInTheDocument()
  expect(component).toContainHTML("div")
})
