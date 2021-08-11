import muiTheme from 'styles/muiTheme'
import theme from 'styles/theme'

const themeComplete = { ...muiTheme, ...theme } as const

// inferência de tipos
type Theme = typeof themeComplete

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {}
}
