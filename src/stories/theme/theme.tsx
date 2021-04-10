import { FC, VFC } from "react"
import {
  ThemeProvider as SCThemeProvider,
  createGlobalStyle,
} from "styled-components/macro"
import { theme } from "stories/theme.definition"

const GlobalStyle = createGlobalStyle<VFC>`
html {
  font-family: ${theme.fonts.normal};
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}
code {
  font-family: ${theme.fonts.mono};
}
`

const Theme: FC = ({ children }) => (
  <SCThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </SCThemeProvider>
)

export { Theme }
