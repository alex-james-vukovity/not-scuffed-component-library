import { FC } from "react"
import { ThemeProvider } from "styled-components/macro"
import { theme } from "theme"

export const Theme: FC = ({ children }) => <ThemeProvider theme={theme}>{children}</ThemeProvider>
