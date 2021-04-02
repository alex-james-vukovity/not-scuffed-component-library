// import original module declarations
import "styled-components"

type colors = {
  gray: string
  grayDark: string
  grayLight: string
  blue: string
  green: string
  yellow: string
  orange: string
  red: string
  purple: string
}

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: string[]
    colors: {
      light: colors & { white: string }
      dark: colors & { black: string }
    }
    space: string[]
    fonts: {
      mono: string
      normal: string
    }
    fontWeights: {
      light: number
      normal: number
      semibold: number
      bold: number
    }
    borderWidths: (string | number)[]
    radii: string[]
    fontSizes: string[]
  }
}
