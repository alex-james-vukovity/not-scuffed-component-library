import { FC, VFC } from "react"
import { ThemeProvider, createGlobalStyle } from "styled-components/macro"
import { theme } from "theme"

const GlobalStyle = createGlobalStyle<VFC>`
body {
  margin: 0;
    box-sizing: border-box;
  }
`

export const Theme: FC = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)
