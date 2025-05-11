import { BrowserRouter } from 'react-router'
import AppRoutes from './routes'
import { CartProvider } from '../cart/providers/CartContext'


const App = () => {
  return (
    <BrowserRouter basename="/Dawid_Pawliczek_Web_Wroclaw">
      <CartProvider>
        <AppRoutes />
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
