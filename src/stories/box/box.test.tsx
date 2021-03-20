import { render, screen } from '@testing-library/react'
import { Box } from './box'
import { Theme } from '../theme'

test('should render the component', () => {
  render(
    <Theme>
      <Box>Test</Box>
    </Theme>
  )

  const component = screen.getByText('Test')

  expect(component).toBeInTheDocument()
  expect(component).toContainHTML('div')
})
