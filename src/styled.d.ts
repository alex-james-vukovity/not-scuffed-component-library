import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      white: string
      black: string
      gray: string
      blue: string
      green: string
      yellow: string
      orange: string
      red: string
      purple: string
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
    radius: string[]
    fontSizes: string[]
    lineHeight: string[]
    shadow: {
      small: string
      medium: string
      large: string
    }
  }
}
