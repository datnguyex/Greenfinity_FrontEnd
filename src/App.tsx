import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import OPTSending from './component/Auth/OPTSending/OPTSending';
import Login from './component/Auth/Login/Login';
import Signup from './component/Auth/Signup/Signup';
import Header from './component/Layout/Header/Header';
import Footer from './component/Layout/Footer/Footer';
import HomePage from './Page/Home/Home';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/opt" element={<OPTSending />} />
            </Routes>
        </Router>
    );
}
