import './App.css'
import CartPage from './pages/cart';
import CatalogPage from './pages/catalog';
import { CartProvider } from './utils/cartContext';
import { CatalogProvider } from './utils/catalogContext';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <CatalogPage />,
    },
    {
      path: "/cart",
      element: <CartPage />,
    },
  ]);

  return (
    <CatalogProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </CatalogProvider>
  )
}

export default App
