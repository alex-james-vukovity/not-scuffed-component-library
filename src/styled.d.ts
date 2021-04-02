import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    readonly colors: {
      readonly white: string
      readonly black: string
      readonly gray: string
      readonly blue: string
      readonly green: string
      readonly yellow: string
      readonly orange: string
      readonly red: string
      readonly purple: string
    }
    readonly space: string[]
    readonly fonts: {
      readonly mono: string
      readonly normal: string
    }
    readonly fontWeights: {
      readonly light: number
      readonly normal: number
      readonly semibold: number
      readonly bold: number
    }
    readonly borderWidths: (string | number)[]
    readonly radius: string[]
    readonly shadow: {
      readonly small: string
      readonly medium: string
      readonly large: string
    }
  }
}
