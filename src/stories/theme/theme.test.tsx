import { render, screen } from '@testing-library/react'
import { Box, Theme } from 'stories'

test('should render the component', () => {
  render(
    <Theme>
      <Box>Test</Box>
    </Theme>
  )

  const component = screen.getByText('Test')

  expect(component).toBeInTheDocument()
})
