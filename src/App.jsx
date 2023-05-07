import 'bootstrap/dist/css/bootstrap.min.css';
import { NavigationBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter as Router, Routes, Navigate, Route } from "react-router-dom";
import { CartProvider } from './context/CartContext';
import { CartCheckout } from './components/CartCheckout/CartCheckout';
import { Paywall } from './components/Paywall/Paywall';

const App = () => {
    
    return (
        <CartProvider>
            <div className="container-fluid p-0">
                <Router>
                    <NavigationBar />
                    <Routes>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/category/:categoryId" element={<ItemListContainer />} />
                        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                        <Route path="/checkout" element={<CartCheckout />} />
                        <Route path="/paywall" element={<Paywall />} />

                        <Route path="*" element={<Navigate to="/" />} />
                    </Routes>
                </Router>
            </div>
        </CartProvider>
    );
};

export default App;
