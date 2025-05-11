import { HashRouter } from 'react-router'
import AppRoutes from './routes'
import { CartProvider } from '../cart/providers/CartContext'


const App = () => {
  return (
    <HashRouter>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </HashRouter>
  )
}

export default App
