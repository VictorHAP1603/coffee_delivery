import { ThemeProvider } from 'styled-components'

import { Router } from './routes/index.routes'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/theme/default'
import { CoffeeProvider } from './context/CoffeeContext'
import { CheckoutProvider } from './context/CheckoutContext'


function App() {

  return (
    <CheckoutProvider>
      <CoffeeProvider>
        <ThemeProvider theme={defaultTheme}>
          <Router />
          <GlobalStyle />
        </ThemeProvider>
      </CoffeeProvider>
    </CheckoutProvider>
  )
}

export default App
