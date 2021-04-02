import { DefaultTheme } from "styled-components"

export const theme: DefaultTheme = {
  colors: {
    white: "#fff",
    black: "#010409",
    gray: "#d4d1cb",
    blue: "#0366d6",
    green: "#28a745",
    yellow: "#ffd33d",
    orange: "#f66a0a",
    red: "#d73a49",
    purple: "#6f42c1",
  },
  space: ["0", "4px", "8px", "16px", "24px", "32px"],
  fonts: {
    normal: [
      "-apple-system",
      "BlinkMacSystemFont",
      "Segoe UI",
      "Helvetica",
      "Arial",
      "sans-serif",
      "Apple Color Emoji",
      "Segoe UI Emoji",
    ].join(", "),
    mono: [
      "SFMono-Regular",
      "Consolas",
      "Liberation Mono",
      "Menlo",
      "Courier",
      "monospace",
    ].join(", "),
  },
  fontWeights: {
    light: 300,
    normal: 400,
    semibold: 500,
    bold: 600,
  },
  borderWidths: [0, "1px", "2px"],
  radius: ["0", "3px", "6px"],
  fontSizes: ["12px", "14px", "16px", "20px", "24px", "32px", "40px", "48px"],
  lineHeight: ["20px"],
  shadow: {
    small: "0 1px 0 rgba(1,4,9, 0.04)",
    medium: "0 3px 6px rgba(149,157,165, 0.15)",
    large: "0 8px 24px rgba(149,157,165, 0.2)",
  },
}
