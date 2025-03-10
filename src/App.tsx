import React, { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import OPTSending from './Page/Auth/OPTSending/OPTSending';
import Login from './Page/Auth/Login/Login';
import Signup from './Page/Auth/Signup/Signup';
import HomePage from './Page/Home/Home';
import GreezStation from './Page/GreezStation/GreezStation';
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
import Store from './Page/Store/Store';
import ProductDetail from './Page/ProductDetail/ProductDetail';
import Forum from './Page/Forum/Forum';
import ForumProfile from './Page/ForumProfile/ForumProfile';
import AllOrder from './Page/Order/AllOrder/AllOrder';
import OrderDetail from './Page/Order/OrderDetail.tsx/OrderDetail';
import MyProduct from './Page/MyProduct/MyProduct';
import Story from './Page/Story/Story/Story';
import SingleProduct from './Page/Story/SingleProduct/SingleProduct';
import Collection from './Page/Story/Collection/Collection';
import LocationMap from './Page/LocationMap/LocationMap';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import { clearUserInfomation } from './Redux/UserInfomationSlice';
import { DeleteAuthCode } from './services';
import Testing from './Page/Testing/Testing';

function CurrentPageDisplay() {
    const location = useLocation();
    const dispatch = useDispatch();
    //delete infoSignUp session storage and authj_code that have a keyChecked correspond

    useEffect(() => {
        const infoSignUp = sessionStorage.getItem('infoSignUp');

        if (infoSignUp && location.pathname !== '/opt') {
            const parsedInfoSignUp = JSON.parse(infoSignUp);
            // const { keyChecked } = parsedInfoSignUp;

            const deleteAuthCode = async () => {
                DeleteAuthCode(infoSignUp);
            };

            deleteAuthCode();
        }

        //delete infomation user if accesstoken inspired

        const accessToken = Cookies.get('accessToken');
        if (!accessToken) {
            dispatch(clearUserInfomation());
            Cookies.remove('accessToken');
        }
    }, [location.pathname]);

    return null;
}

export default function App() {
    return (
        <Router>
            <CurrentPageDisplay />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />
                <Route path="/opt" element={<OPTSending />} />
                <Route path="/tram-greez" element={<GreezStation />} />
                <Route path="/ban-do" element={<LocationMap />} />
                <Route path="/the-gioi-tai-sinh" element={<WorldRebirth />} />
                <Route path="/thang-dong-gop" element={<ContributeRanking />} />
                <Route path="/trang-ca-nhan" element={<Profile />} />
                <Route path="/sua-trang-ca-nhan" element={<UpdateProfile />} />
                <Route path="/vat-pham" element={<Item />} />
                <Route path="/lich-su-quyen-gop" element={<DonationHistory />} />
                <Route path="/lich-su-greecoin" element={<CoinHistory />} />
                <Route path="/the-le" element={<Rules />} />
                <Route path="*" element={<NotFound />} />
                <Route path="gio-hang" element={<Cart />} />
                <Route path="thong-tin-van-chuyen" element={<ShippingInfomation />} />
                <Route path="nap-tien" element={<Deposit />} />
                <Route path="phuong-thuc-thanh-toan" element={<PaymentMethod />} />
                <Route path="ket-qua-nap-tien" element={<TransactionResult />} />
                <Route path="cua-hang" element={<Store />} />
                <Route path="chi-tiet-san-pham" element={<ProductDetail />} />
                <Route path="dien-dan" element={<Forum />} />
                <Route path="ho-so-dien-dan" element={<ForumProfile />} />
                <Route path="don-hang" element={<AllOrder />} />
                <Route path="chi-tiet-don-hang" element={<OrderDetail />} />
                <Route path="san-pham-cua-ban" element={<MyProduct />} />
                <Route path="cau-chuyen" element={<Story />} />
                <Route path="san-pham-don" element={<SingleProduct />} />
                <Route path="bo-suu-tap" element={<Collection />} />
                <Route path="testing" element={<Testing />} />
            </Routes>
        </Router>
    );
}
