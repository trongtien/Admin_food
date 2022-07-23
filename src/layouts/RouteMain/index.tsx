import { Routes, Route } from 'react-router-dom';
import Dashboard from '../../pages/dashboard';
import Product from '../../pages/product';

const RouteMain = () => {
    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/products" element={<Product />} />
        </Routes>
    )
}

export default RouteMain;