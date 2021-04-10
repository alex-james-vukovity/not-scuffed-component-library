import { render, screen } from "@testing-library/react"
import { FormGroup, ThemeProvider } from "stories"

test("should render the component", () => {
  render(
    <ThemeProvider>
      <FormGroup>
        <FormGroup.Label>Test</FormGroup.Label>
      </FormGroup>
    </ThemeProvider>
  )

  const label = screen.getByText("Test")
  expect(label).toContainHTML("label")
})
