import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Template from './Template';
import Home from './pages/home';
import PaginaProduto from './pages/paginaProduto';
import Carrinho from './pages/carrinho';

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Template />}>
                    <Route index element={<Home />} />
                    <Route path='/produto/:id' element={<PaginaProduto />} />
                    <Route path='/carrinho' element={<Carrinho />} />
                </Route>
            </Routes>
        </Router>
    );
}