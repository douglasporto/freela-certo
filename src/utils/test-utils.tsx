import { ReactElement } from 'react'

import { render } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'

import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'

import muiTheme from 'styles/muiTheme'
import theme from 'styles/theme'

const customRender = (ui: ReactElement) =>
  render(
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider theme={{ ...muiTheme, ...theme } as const}>
        {ui}
      </ThemeProvider>
    </MuiThemeProvider>
  )

export * from '@testing-library/react'
export { customRender as render }
