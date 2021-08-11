import type { AppProps } from 'next/app'
import Head from 'next/head'

import { ThemeProvider } from 'styled-components'

import { CssBaseline } from '@material-ui/core'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'

import muiTheme from 'styles/muiTheme'
import theme from 'styles/theme'

function DouglasPortoSignature() {
  const msg = `%c Hi 👋! Made by Douglas Porto!`
  const link = `%cwww.douglasporto.com.br`
  const link_style =
    'margin: 0;' +
    'padding: 18px 14px;' +
    'text-decoration: none;' +
    'color: #FFF;' +
    'background: #252A34;' +
    'letter-spacing: 1px;' +
    'font-family: Arial, sans-serif;' +
    'font-size: 11px;' +
    'font-weight: 300;' +
    'line-height: 50px'
  console.log(msg, 'color: white; font-size: 20px; background: #7C4DFF')
  console.log(link, link_style)
}

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Freela Certo</title>
        <link rel="shortcut icon" href="/img/brain-logo.png" />
        <link rel="apple-touch-icon" href="/img/brain-logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="A system to manager your projects" />
        {DouglasPortoSignature()}
      </Head>
      <MuiThemeProvider theme={muiTheme}>
        <ThemeProvider theme={{ ...muiTheme, ...theme } as const}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </MuiThemeProvider>
    </>
  )
}

export default App
