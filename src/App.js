import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Home } from './components/pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { User } from './components/pages/User';

function App() {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Home />}/>
            <Route path="/user" element={ <User />}/>
        </Routes>
        </BrowserRouter>
    )
}

export default App;
