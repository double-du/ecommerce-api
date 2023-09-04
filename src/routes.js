import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Template from './Template';
import Home from './pages/home';
import PaginaProduto from './pages/paginaProduto';

export default function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Template />}>
                    <Route index element={<Home />} />
                    <Route path='/produto/:id' element={<PaginaProduto />} />
                    <Route path='/carrinho' element={<Home />} />
                </Route>
            </Routes>
        </Router>
    );
}