import { render, screen } from "@testing-library/react"
import { Text, ThemeProvider } from "stories"

test("should render the component", () => {
  render(
    <ThemeProvider>
      <Text as="p">Test</Text>
    </ThemeProvider>
  )

  const component = screen.getByText("Test")

  expect(component).toBeInTheDocument()
  expect(component).toContainHTML("p")
})
