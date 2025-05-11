import { HashRouter } from 'react-router'
import AppRoutes from './routes'
import { CartProvider } from '../cart/providers/CartContext'


const App = () => {
  return (
    <HashRouter basename="/Dawid_Pawliczek_Web_Wroclaw">
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </HashRouter>
  )
}

export default App
