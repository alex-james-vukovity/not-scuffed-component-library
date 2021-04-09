import { render, screen } from "@testing-library/react"
import { FormGroup, Theme } from "stories"

test("should render the component", () => {
  render(
    <Theme>
      <FormGroup>
        <FormGroup.Label>Test</FormGroup.Label>
      </FormGroup>
    </Theme>
  )

  const label = screen.getByText("Test")
  expect(label).toContainHTML("label")
})
