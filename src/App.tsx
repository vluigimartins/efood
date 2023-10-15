import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/Header'
import { GlobalCss } from './styles'
import Home from './pages/Home'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Home />
      </>
    )
  }
])

function App() {
  return (
    <>
      <GlobalCss />
      <Header />
      <RouterProvider router={rotas} />
      <Footer />
    </>
  )
}

export default App
