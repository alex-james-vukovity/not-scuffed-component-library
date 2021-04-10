import { render, screen } from "@testing-library/react"
import { TextInput, ThemeProvider } from "stories"

test("should render the component", () => {
  render(
    <ThemeProvider>
      <TextInput />
    </ThemeProvider>
  )

  const component = screen.getByRole("textbox")

  expect(component).toBeInTheDocument()
  expect(component).toContainHTML("input")
})
