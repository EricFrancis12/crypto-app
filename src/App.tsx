import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import { DataProvider } from './contexts/DataContext';
import { Layout as L } from './Layout';
import HomePage from './pages/HomePage';
import PortfolioPage from './pages/PortfolioPage';
import CoinPage from './pages/CoinPage';

function App() {
    return (
        <DataProvider>
            <Router>
                <Routes>
                    <Route path='/' element={<L><HomePage /></L>} />
                    <Route path='/portfolio' element={<L><PortfolioPage /></L>} />
                    <Route path='/coin/:cryptoCoinName' element={<L><CoinPage /></L>} />
                </Routes>
            </Router>
        </DataProvider>
    );
}

export default App;
