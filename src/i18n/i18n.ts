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
import DepositENG from './Locales/Deposit/DepositENG.json';
import DepositVIE from './Locales/Deposit/DepositVIE.json';
import signUpVIE from './Locales/SignUp/SignUpVIE.json';
import signUpENG from './Locales/SignUp/SignUpENG.json';
import signInVIE from './Locales/Login/LoginVIE.json';
import signInENG from './Locales/Login/LoginENG.json';
import optSendingVIE from './Locales/OPTSending/OPTSendingVIE.json';
import optSendingENG from './Locales/OPTSending/OPTSendingENG.json';
import paymentMethodENG from './Locales/PaymentMethod/PaymentMethodENG.json';
import paymentMethodVIE from './Locales/PaymentMethod/PaymentMethodVIE.json';
import transactionResulttENG from './Locales/TransactionResult/TransactionResulttENG.json';
import transactionResultVIE from './Locales/TransactionResult/TransactionResultVIE.json';
import RuleENG from './Locales/Rules/RulesENG.json';
import RuleVIE from './Locales/Rules/RulesVIE.json';
import StoreENG from './Locales/Store/StoreENG.json';
import StoreVIE from './Locales/Store/StoreVIE.json';
import ProductDetailENG from './Locales/ProductDetail/ProductDetailENG.json';
import ProducDetaiVIE from './Locales/ProductDetail/ProductDetailVIE.json';
import ForumENG from './Locales/Forum/ForumENG.json';
import ForumViE from './Locales/Forum/ForumVIE.json';
import ForumProfileENG from './Locales/ForumProfile/ForumProfileENG.json';
import ForumProfileVIE from './Locales/ForumProfile/ForumProfileVIE.json';
import AllOrderVIE from './Locales/AllOrder/AllOrderVIE.json';
import AllOrderENG from './Locales/AllOrder/AllOrderENG.json';
import MyOrderVIE from './Locales/MyOrder/MyOrderVIE.json';
import MyOrderENG from './Locales/MyOrder/MyOrderENG.json';
import StoryVIE from './Locales/Story/StoryVIE.json';
import StoryENG from './Locales/Story/StoryENG.json';
import SingleProductVIE from './Locales/SingleProduct/SingleProductVIE.json';
import SingleProductENG from './Locales/SingleProduct/SingleProductENG.json';
import CollectionVIE from './Locales/Collection/CollectionVIE.json';
import CollectionENG from './Locales/Collection/CollectionENG.json';
import ProductMenuVIE from './Locales/ProductMenu/ProductMenuVIE.json';
import ProductMenuENG from './Locales/ProductMenu/ProductMenuENG.json';
import UserMenuENG from './Locales/UserMenu/UserMenuENG.json';
import UserMenuVIE from './Locales/UserMenu/UserMenuVIE.json';
import AlerNotificationENG from './Locales/AlertNotification/AlertNotificationENG.json';
import AlerNotificationVIE from './Locales/AlertNotification/AlertNotificationVIE.json';
import UserMenu from '~/component/Menu/UserMenu/UserMenu';
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
        Map: MapENG,
        profile: profileENG,
        updateProfile: updateProfileENG,
        CoinHistory: CoinHistoryENG,
        notFound: NotFoundENG,
        donationHistory: DonationHistoryENG,
        Cart: cartENG,
        shippingInfomation: ShippingInfomationENG,
        home: HomeENG,
        Deposit: DepositENG,
        signUp: signUpENG,
        signIn: signInENG,
        optSending: optSendingENG,
        paymentMethod: paymentMethodENG,
        transactionResult: transactionResulttENG,
        Rule: RuleENG,
        Store: StoreENG,
        productDetail: ProductDetailENG,
        Forum: ForumENG,
        ForumProfile: ForumProfileENG,
        AllOrder: AllOrderENG,
        MyOrder: MyOrderENG,
        Story: StoryENG,
        SingleProduct: SingleProductENG,
        Collection: CollectionENG,
        ProductMenu: ProductMenuENG,
        UserMenu: UserMenuENG,
        Alert: AlerNotificationENG,
    },
    VIE: {
        header: HeaderVIE,
        footer: FooterVIE,
        GreezStaion: GreezStationVIE,
        WorldRebirth: WorldRebirthVIE,
        ContributeRanking: ContributeRankingVIE,
        Map: MapVIE,
        profile: profileVIE,
        updateProfile: updateProfileVIE,
        CoinHistory: CoinHistoryVIE,
        notFound: NotFoundVIE,
        donationHistory: DonationHistoryVIE,
        Cart: cartVIE,
        shippingInfomation: ShippingInfomationVIE,
        home: HomeVIE,
        Deposit: DepositVIE,
        signUp: signUpVIE,
        signIn: signInVIE,
        optSending: optSendingVIE,
        paymentMethod: paymentMethodVIE,
        transactionResult: transactionResultVIE,
        Rule: RuleVIE,
        Store: StoreVIE,
        productDetail: ProducDetaiVIE,
        Forum: ForumViE,
        ForumProfile: ForumProfileVIE,
        AllOrder: AllOrderVIE,
        MyOrder: MyOrderVIE,
        Story: StoryVIE,
        SingleProduct: SingleProductVIE,
        Collection: CollectionVIE,
        ProductMenu: ProductMenuVIE,
        UserMenu: UserMenuVIE,
        Alert: AlerNotificationVIE,
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
        'Deposit',
        'signUp',
        'signIn',
        'optSending',
        'paymentMethod',
        'transactionResult',
        'Rule',
        'Store',
        'productDetail',
        'Forum',
        'ForumProfile',
        'AllOrder',
        'MyOrder',
        'Story',
        'SingleProduct',
        'Collection',
        'ProductMenu',
        'UserMenu',
        'Alert',
    ],
    interpolation: {
        escapeValue: false,
    },
});
