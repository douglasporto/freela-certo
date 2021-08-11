import { createTheme, responsiveFontSizes } from '@material-ui/core/styles'

import theme from './theme'
import { setCustomTypography } from './typography'

const muiTheme = responsiveFontSizes(
  createTheme({
    props: {
      MuiTypography: {
        variantMapping: {
          body1: 'span',
          body2: 'span'
        }
      }
    },
    palette: {
      type: 'dark',
      primary: {
        main: theme.colors.primary
      },
      secondary: {
        main: theme.colors.secondary
      },
      grey: theme.colors.gray,
      background: {
        default: theme.colors.background.default,
        paper: theme.colors.background.second
      }
    },
    typography: {
      fontFamily: theme.font.family,
      fontSize: 16,
      button: {
        textTransform: 'initial',
        color: '#7C4DFF'
      }
    }
  })
)

export default setCustomTypography(muiTheme)
