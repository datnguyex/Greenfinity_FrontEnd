import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { EnglandIfomation, VietnameseInfomation } from './LanguageInfomation';
import HeaderENG from './Locales/Header/HeaderENG.json';
import HeaderVIE from './Locales/Header/HeaderVIE.json';
import FooterENG from './Locales/Footer/FooterENG.json';
import FooterVIE from './Locales/Footer/FooterVIE.json';
import GreezStationVIE from './Locales/GreezStation/GreezStationVIE.json';
import GreezStationENG from './Locales/GreezStation/GreezStationENG.json';
import WorldRebirthVIE from './Locales/WorldRebirth/WorldRebirthVIE.json';
import WorldRebirthENG from './Locales/WorldRebirth/WorldRebirthENG.json';
import ContributeRankingENG from './Locales/ContributeRanking/ContributeRankingENG.json';
import ContributeRankingVIE from './Locales/ContributeRanking/ContributeRankingVIE.json';
import MapVIE from './Locales/Map/MapVIE.json';
import MapENG from './Locales/Map/MapENG.json';
import profileVIE from './Locales/Profile/ProfileVIE.json';
import profileENG from './Locales/Profile/ProfileENG.json';
import updateProfileVIE from './Locales/UpdateProfile/UpdateProfileVIE.json';
import updateProfileENG from './Locales/UpdateProfile/UpdateProfileENG.json';
import CoinHistoryVIE from './Locales/CoinHistory/CoinHistoryVIE.json';
import CoinHistoryENG from './Locales/CoinHistory/CoinHistoryENG.json';
import NotFoundVIE from './Locales/NotFound/NotFoundVIE.json';
import NotFoundENG from './Locales/NotFound/NotFoundENG.json';
import DonationHistoryVIE from './Locales/DonationHistory/DonationHistoryVIE.json';
import DonationHistoryENG from './Locales/DonationHistory/DonationHistoryENG.json';
import cartVIE from './Locales/Cart/CartVIE.json';
import cartENG from './Locales/Cart/CartENG.json';
import ShippingInfomationVIE from './Locales/ShippingInfomation/ShippingInfomationVIE.json';
import ShippingInfomationENG from './Locales/ShippingInfomation/ShippingInfomationENG.json';
import HomeVIE from './Locales/Home/HomeVIE.json';
import HomeENG from './Locales/Home/HomeENG.json';
export const locales = {
    ENG: EnglandIfomation,
    VIE: VietnameseInfomation,
};

const resources = {
    ENG: {
        header: HeaderENG,
        footer: FooterENG,
        GreezStaion: GreezStationENG,
        WorldRebirth: WorldRebirthENG,
        ContributeRanking: ContributeRankingENG,
        Map: MapVIE,
        profile: profileENG,
        updateProfile: updateProfileENG,
        CoinHistory: CoinHistoryENG,
        notFound: NotFoundENG,
        donationHistory: DonationHistoryENG,
        Cart: cartENG,
        shippingInfomation: ShippingInfomationENG,
        home: HomeENG,
    },
    VIE: {
        header: HeaderVIE,
        footer: FooterVIE,
        GreezStaion: GreezStationVIE,
        WorldRebirth: WorldRebirthVIE,
        ContributeRanking: ContributeRankingVIE,
        Map: MapENG,
        profile: profileVIE,
        updateProfile: updateProfileVIE,
        CoinHistory: CoinHistoryVIE,
        notFound: NotFoundVIE,
        donationHistory: DonationHistoryVIE,
        Cart: cartVIE,
        shippingInfomation: ShippingInfomationVIE,
        home: HomeVIE,
    },
};

i18n.use(initReactI18next).init({
    resources,
    lng: 'VIE',
    ns: [
        'header',
        'footer',
        'GreezStaion',
        'WorldRebirth',
        'ContributeRanking',
        'Map',
        'profile',
        'updateProfile',
        'CoinHistory',
        'notFound',
        'donationHistory',
        'Cart',
        'shippingInfomation',
        'home',
    ],
    interpolation: {
        escapeValue: false,
    },
});
