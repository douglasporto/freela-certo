import { CssBaseline } from '@material-ui/core'
import { ThemeProvider } from '@material-ui/core/styles'

import { addDecorator } from '@storybook/react'
import theme from 'styles/theme'

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {story()}
  </ThemeProvider>
))
