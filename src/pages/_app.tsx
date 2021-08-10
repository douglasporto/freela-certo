import type { AppProps } from 'next/app'
import Head from 'next/head'

import { ThemeProvider } from 'styled-components'

import { CssBaseline } from '@material-ui/core'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'

import theme from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Freela Certo</title>
        <link rel="shortcut icon" href="/img/brain-logo.png" />
        <link rel="apple-touch-icon" href="/img/brain-logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="description" content="A system to manager your projects" />
      </Head>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </MuiThemeProvider>
    </>
  )
}

export default App
