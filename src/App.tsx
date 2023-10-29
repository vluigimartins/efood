import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Footer from './components/Footer'
import { GlobalCss } from './styles'
import Rotas from './routes'
import { store } from './store/indesx'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
