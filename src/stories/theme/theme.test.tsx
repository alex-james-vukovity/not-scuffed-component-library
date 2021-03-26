import { render, screen } from "@testing-library/react"
import { Theme } from "stories"

test("should render the component", () => {
  render(<Theme>Test</Theme>)

  const component = screen.getByText("Test")

  expect(component).toBeInTheDocument()
})
