import './App.css'
import CartPage from './pages/cart';
import CatalogPage from './pages/catalog';
import { CartProvider } from './utils/cartContext';
import { CatalogProvider } from './utils/catalogContext';


function App() {
  return (
    <CatalogProvider>
      <CartProvider>
        <CatalogPage />
        <CartPage />
      </CartProvider>
    </CatalogProvider>
  )
}

export default App
