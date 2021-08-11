import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from 'styled-components'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'

import muiTheme from 'styles/muiTheme'
import theme from 'styles/theme'

import { addDecorator } from '@storybook/react'


addDecorator((story) => (
  <MuiThemeProvider theme={muiTheme}>
    <ThemeProvider theme={{ ...muiTheme, ...theme }}>
      <CssBaseline />
      {story()}
    </ThemeProvider>
  </MuiThemeProvider>
))
