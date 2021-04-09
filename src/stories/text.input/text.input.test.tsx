import { render, screen } from "@testing-library/react"
import { TextInput, Theme } from "stories"

test("should render the component", () => {
  render(
    <Theme>
      <TextInput />
    </Theme>
  )

  const component = screen.getByRole("textbox")

  expect(component).toBeInTheDocument()
  expect(component).toContainHTML("input")
})
