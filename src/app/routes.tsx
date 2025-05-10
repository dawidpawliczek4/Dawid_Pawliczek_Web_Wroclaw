import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router';

const ProductsPage = lazy(() => import('../products/components/ProductsPage'));
const CartPage = lazy(() => import('../cart/components/CartPage'));
const CheckoutPage = lazy(() => import('../checkout/components/CheckoutPage'));

const AppRoutes = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <Routes>            
            <Route path="/" element={<ProductsPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
    </Suspense>
)

export default AppRoutes;