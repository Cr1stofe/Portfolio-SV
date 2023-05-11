import { ThemeProvider } from 'styled-components'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

import { defaultTheme, darkTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { useState } from 'react'

export function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeProvider theme={theme === 'light' ? defaultTheme : darkTheme}>

      <BrowserRouter>
        <Router 
          theme={theme}
          setTheme={setTheme}
        />
      </BrowserRouter>

      <GlobalStyle />
      
    </ThemeProvider>
  )
}
