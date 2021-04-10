import { render, screen } from "@testing-library/react"
import { Heading, ThemeProvider } from "stories"

test("should render h2 component", () => {
  render(
    <ThemeProvider>
      <Heading>Test</Heading>
    </ThemeProvider>
  )

  const component = screen.getByText("Test")

  expect(component).toBeInTheDocument()
  expect(component).toContainHTML("h2")
})

test("should render h1 component", () => {
  render(
    <ThemeProvider>
      <Heading as="h1">Test</Heading>
    </ThemeProvider>
  )

  const component = screen.getByText("Test")

  expect(component).toBeInTheDocument()
  expect(component).toContainHTML("h1")
})
