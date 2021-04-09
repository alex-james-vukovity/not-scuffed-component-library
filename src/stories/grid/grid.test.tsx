import { render, screen } from "@testing-library/react"
import { Grid, Theme } from "stories"

test("should render the component", () => {
  render(
    <Theme>
      <Grid>Test</Grid>
    </Theme>
  )

  const component = screen.getByText("Test")

  expect(component).toBeInTheDocument()
  expect(component).toContainHTML("grid")
})
