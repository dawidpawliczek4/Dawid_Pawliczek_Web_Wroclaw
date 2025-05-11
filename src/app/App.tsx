import { HashRouter } from 'react-router'
import AppRoutes from './routes'
import { CartProvider } from '../cart/providers/CartContext'
import { ToastContainer } from 'react-toastify'


const App = () => {
  return (
    <HashRouter>
      <CartProvider>
        <AppRoutes />
      </CartProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar        
        closeOnClick
        theme="dark"        
        />
    </HashRouter>
  )
}

export default App
