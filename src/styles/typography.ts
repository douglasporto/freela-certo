import { Theme } from '@material-ui/core/styles'

import theme from './theme'

export const setResponsiveSize = (size: number) => size - (size * 20) / 100

export const setCustomTypography = (muiTheme: Theme): Theme => {
  muiTheme.typography.h1 = {
    fontSize: `${setResponsiveSize(theme.font.sizes.huge)}rem`,
    fontWeight: 600,
    [muiTheme.breakpoints.up('md')]: {
      fontSize: `${theme.font.sizes.huge}rem`
    }
  }

  muiTheme.typography.h2 = {
    fontSize: `${setResponsiveSize(theme.font.sizes.xxlarge)}rem`,
    fontWeight: 600,
    [muiTheme.breakpoints.up('md')]: {
      fontSize: `${theme.font.sizes.xxlarge}rem`
    }
  }

  muiTheme.typography.h3 = {
    fontSize: `${setResponsiveSize(theme.font.sizes.xlarge)}rem`,
    fontWeight: 600,
    [muiTheme.breakpoints.up('md')]: {
      fontSize: `${theme.font.sizes.xlarge}rem`
    }
  }

  muiTheme.typography.h4 = {
    fontSize: `${setResponsiveSize(theme.font.sizes.large)}rem`,
    fontWeight: 600,
    [muiTheme.breakpoints.up('md')]: {
      fontSize: `${theme.font.sizes.large}rem`
    }
  }

  muiTheme.typography.h5 = {
    fontSize: `${setResponsiveSize(theme.font.sizes.medium)}rem`,
    fontWeight: 600,
    [muiTheme.breakpoints.up('md')]: {
      fontSize: `${theme.font.sizes.medium}rem`
    }
  }

  muiTheme.typography.h6 = {
    fontSize: `${setResponsiveSize(theme.font.sizes.small)}rem`,
    fontWeight: 600,
    [muiTheme.breakpoints.up('md')]: {
      fontSize: `${theme.font.sizes.small}rem`
    }
  }

  muiTheme.typography.body1 = {
    fontSize: `${setResponsiveSize(theme.font.sizes.medium)}rem`,
    [muiTheme.breakpoints.up('md')]: {
      fontSize: `${theme.font.sizes.medium}rem`
    }
  }

  muiTheme.typography.body2 = {
    fontSize: `${setResponsiveSize(theme.font.sizes.small)}rem`,
    fontFamily: theme.font.family,
    [muiTheme.breakpoints.up('md')]: {
      fontSize: `${theme.font.sizes.small}rem`
    }
  }

  return muiTheme
}
