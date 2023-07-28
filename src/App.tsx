import './App.css'
import CatalogPage from './pages/catalog';
import { CartProvider } from './utils/cartContext';


function App() {
  return (
    <CartProvider>
      <CatalogPage />
    </CartProvider>
  )
}

export default App
