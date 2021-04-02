import { FC, VFC } from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components/macro"
import { theme } from "stories/theme.definition"

const GlobalStyle = createGlobalStyle<VFC>`
body {
  font-family: ${theme.fonts.normal};
  box-sizing: border-box;
}
input,
textarea,
button {
  font-family: inherit;
}
code {
  font-family: ${theme.fonts.mono};
}
`

export const Theme: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)
