import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OPTSending from './Page/Auth/OPTSending/OPTSending';
import Login from './Page/Auth/Login/Login';
import Signup from './Page/Auth/Signup/Signup';
import HomePage from './Page/Home/Home';
import GreezStation from './Page/GreezStation/GreezStation';
import Map from './Page/Map/Map';
import WorldRebirth from './Page/WorldRebirth/WorldRebirth';
import ContributeRanking from './Page/ContributeRanking/ContributeRanking';
import Profile from './Page/Profile/Profile';
import UpdateProfile from './Page/UpdateProfile/UpdateProfile';
import Item from './Page/Item/Item';
import DonationHistory from './Page/DonationHistory/DonationHistory';
import CoinHistory from './Page/CoinHistory/CoinHistory';
import NotFound from './Page/NotFound/NotFound';
import Rules from './Page/Rules/Rules';
import Cart from './Page/Cart/Cart';
import ShippingInfomation from './Page/Cart/ShippingInfomation/ShippingInfomation';
import Deposit from './Page/Deposit/deposit';
import PaymentMethod from './Page/Deposit/PaymentMethod/PaymentMethod';
import TransactionResult from './Page/Deposit/TransactionResult/TransactionResult';
export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/opt" element={<OPTSending />} />
                {/* // */}
                <Route path="/tram-greez" element={<GreezStation />} />
                <Route path="/ban-do" element={<Map />} />
                <Route path="/the-gioi-tai-sinh" element={<WorldRebirth />} />
                <Route path="/thang-dong-gop" element={<ContributeRanking />} />
                <Route path="/trang-ca-nhan" element={<Profile />} />
                <Route path="/sua-trang-ca-nhan" element={<UpdateProfile />} />
                <Route path="/vat-pham" element={<Item />} />
                <Route path="/lich-su-quyen-gop" element={<DonationHistory />} />
                <Route path="/lich-su-greecoin" element={<CoinHistory />} />
                <Route path="/the-le" element={<Rules />} />
                <Route path="*" element={<NotFound />} />
                {/* // */}
                <Route path="gio-hang" element={<Cart />} />
                <Route path="thong-tin-van-chuyen" element={<ShippingInfomation />} />
                <Route path="nap-tien" element={<Deposit />} />
                {/* // */}
                <Route path="phuong-thuc-thanh-toan" element={<PaymentMethod />} />
                <Route path="ket-qua-nap-tien" element={<TransactionResult />} />
            </Routes>
        </Router>
    );
}
