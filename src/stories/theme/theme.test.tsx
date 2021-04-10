import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "stories"

test("should render the component", () => {
  render(<ThemeProvider>Test</ThemeProvider>)

  const component = screen.getByText("Test")

  expect(component).toBeInTheDocument()
})
