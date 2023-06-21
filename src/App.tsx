import { ThemeProvider } from 'styled-components'

import { Router } from './routes/index.routes'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'
import { CoffeeProvider } from './context/CoffeeContext'


function App() {

  return (
    <CoffeeProvider>
      <ThemeProvider theme={defaultTheme}>
        <Router />
        <GlobalStyle />
      </ThemeProvider>
    </CoffeeProvider>
  )
}

export default App
