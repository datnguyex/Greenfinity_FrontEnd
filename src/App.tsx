import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OPTSending from './component/Auth/OPTSending/OPTSending';
import Login from './component/Auth/Login/Login';
import Signup from './component/Auth/Signup/Signup';
import HomePage from './Page/Home/Home';
import GreezStation from './Page/GreezStation/GreezStation';
import Map from './Page/Map/Map';
import WorldRebirth from './Page/WorldRebirth/WorldRebirth';
import ContributeRanking from './Page/ContributeRanking/ContributeRanking';
import Profile from './Page/Profile/Profile';

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/opt" element={<OPTSending />} />
                <Route path="/tram-greez" element={<GreezStation />} />
                <Route path="/ban-do" element={<Map />} />
                <Route path="/the-gioi-tai-sinh" element={<WorldRebirth />} />
                <Route path="/thang-dong-gop" element={<ContributeRanking />} />
                <Route path="/trang-ca-nhan" element={<Profile />} />
            </Routes>
        </Router>
    );
}
