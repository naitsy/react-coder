import 'bootstrap/dist/css/bootstrap.min.css';
// import { Pika } from './components/Pika/Pika';
// import { ItemCounter } from './components/ItemCounter/ItemCounter';
// import "./App.css";
import { NavigationBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter as Router, Routes, Navigate, Route } from "react-router-dom";
import { CartContainer } from './components/CartContainer/CartContainer';

const App = () => {
    
    return (
        <div className="container-fluid p-0">
            <Router>
                <NavigationBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:categoryId" element={<ItemListContainer />} />
                    <Route path="/item/:itemId" element={<ItemDetailContainer />} />

                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
            <CartContainer />

        </div>
    );
};

export default App;
