import { render, screen } from "@testing-library/react"
import { Flex, ThemeProvider } from "stories"

test("should render the component", () => {
  render(
    <ThemeProvider>
      <Flex>Test</Flex>
    </ThemeProvider>
  )

  const component = screen.getByText("Test")

  expect(component).toBeInTheDocument()
  expect(component).toContainHTML("div")
})
