import { theme, ThemeProvider, CSSReset } from '@chakra-ui/core'

const breakpoints = ['360px', '768px', '1024px', '1440px']
breakpoints.sm = breakpoints[0]
breakpoints.md = breakpoints[1]
breakpoints.lg = breakpoints[2]
breakpoints.xl = breakpoints[3]

const newTheme = {
  ...theme,
  breakpoints,
}

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={newTheme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
