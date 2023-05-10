import { ThemeProvider } from 'styled-components'

import { defaultTheme, darkTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { useState } from 'react'
import { Home } from './pages/Home';

export function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeProvider theme={theme === 'light' ? defaultTheme : darkTheme}>
      <Home 
        theme={theme}
        setTheme={setTheme}
      />
      <GlobalStyle />
    </ThemeProvider>
  )
}
