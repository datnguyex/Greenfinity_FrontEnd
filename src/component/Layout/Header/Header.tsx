import { ArrowIntoHaftSquare, Cart, ArrowDown, GoldCoin, SubNavbar, ArrownDown } from '~/component/Icon';
import { EnglandLanguage, Headerleft, logoTitle, UserHeader, VietnameseLanguage } from '~/Images';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { locales } from '~/i18n/i18n';
import { StoreReducer } from '~/Redux/Store';
import { useSelector } from 'react-redux';
import { changeLanguageAction } from '~/Redux/Action';

function Header() {
    const { t, i18n } = useTranslation(['header']);
    const currentLanguage = locales[i18n.language as keyof typeof locales];
    const languageState = useSelector((state: any) => state.language.language);
    const UserInfoState = useSelector((state: any) => state.UserInfomation);

    const navigate = useNavigate();

    const [useLanguages, setUseLanguages] = useState(false);

    const handleLanguage = (name: string) => {
        StoreReducer.dispatch(changeLanguageAction(name));
    };

    const handleUseLanguage = () => {
        setUseLanguages((prev) => !prev);
    };

    useEffect(() => {
        i18n.changeLanguage(languageState);
    }, [languageState, i18n]);

    const navigateHome = () => {
        navigate('/');
    };

    return (
        <>
            <div className="flex flex-col z-[100] fixed translate-x-[-50%] left-[50%] items-center w-[95%]">
                {/* Header Section */}
                <div className="mt-10 z-50 rounded-xl w-[100%] h-[64px] flex bg-transparent">
                    <img src={Headerleft} alt="header-left" />
                    <div className="flex items-center justify-between w-[100%] bg-white h-full relative border-b-[0.45rem] border-solid border-[#e0e0e0]">
                        <img
                            onClick={navigateHome}
                            className="h-[118%] w-[auto] translate-y-[0%] cursor-pointer"
                            src={logoTitle}
                            alt="logo"
                        />
                        <div className="flex items-center justify-center w-[50%] h-full">
                            <ul className="flex flex-row justify-between list-none m-0 p-0">
                                <li>
                                    <Link
                                        to="/tram-greez"
                                        className="hover:text-[#009383] h-[100%] flex items-center text-[1.6rem] px-[1.6rem] py-[1.2rem] text-[#494949] font-bold transition duration-200"
                                    >
                                        {t('station')}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/the-gioi-tai-sinh"
                                        className="hover:text-[#009383] h-[100%] flex items-center text-[1.6rem] px-[1.6rem] py-[1.2rem] text-[#494949] font-bold transition duration-200"
                                    >
                                        {t('wordReborn')}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/thang-dong-gop"
                                        className="hover:text-[#009383] h-[100%] flex items-center text-[1.6rem] px-[1.6rem] py-[1.2rem] text-[#494949] font-bold transition duration-200"
                                    >
                                        {t('contributeLadder')}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/ban-do"
                                        className="hover:text-[#009383] h-[100%] flex items-center text-[1.6rem] px-[1.6rem] py-[1.2rem] text-[#494949] font-bold transition duration-200"
                                    >
                                        {t('map')}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/mini-game"
                                        className="hover:text-[#009383] h-[100%] flex items-center text-[1.6rem] px-[1.6rem] py-[1.2rem] text-[#494949] font-bold transition duration-200"
                                    >
                                        {t('miniGame')}
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {!UserInfoState.isAuthenticated && (
                            <Link to={'/login'} className="mr-[-100px]">
                                <button className="bg-[#009383] border border-solid flex justify-center items-center rounded-lg text-[#fff] px-[12px] py-[12px] text-[20px] font-semibold gap-1">
                                    <ArrowIntoHaftSquare />
                                    Đăng nhập
                                </button>
                            </Link>
                        )}

                        <div className="mr-5 flex gap-[16px] items-center relative">
                            <div className="flex flex-col justify-center items-center">
                                <button
                                    className="min-w-[11.4rem] justify-around rounded-[0.66rem] flex items-center gap-[0.8rem] bg-[#fff] min-h-[4.6rem] text-[18px] text-[#333333] px-[5px] border-[1px] border-[#009383]"
                                    onClick={handleUseLanguage}
                                >
                                    <div className="flex items-center gap-[0.8rem] justify-center">
                                        <img className="w-[2rem] h-[2rem]" src={currentLanguage.image} alt="language" />
                                        <span className="text-[#009383] font-bold">{currentLanguage.name}</span>
                                    </div>
                                    <ArrownDown />
                                </button>
                                {useLanguages && (
                                    <div className="min-w-[114px] py-[4px] absolute top-[50px] flex flex-col bg-[#fff] rounded-[8px] shadow-header-language-child overflow-hidden transition-all duration-300">
                                        <div
                                            className={`font-semibold px-[12px] py-[5px] min-h-[32px] text-[14px] cursor-pointer rounded-[4px] flex items-center ${currentLanguage.name === 'VIE' ? 'bg-[#6eb7ac] text-[#fff]' : 'text-[#6eb7ac] bg-[#fff]'}`}
                                            onClick={() => handleLanguage('VIE')}
                                        >
                                            <img className="w-[2rem] h-[2rem]" src={VietnameseLanguage} alt="VIE" />
                                            <span className="font-bold">VIE</span>
                                        </div>
                                        <div
                                            className={`font-semibold px-[12px] py-[5px] min-h-[32px] text-[14px] cursor-pointer rounded-[4px] flex items-center ${currentLanguage.name === 'ENG' ? 'bg-[#6eb7ac] text-[#fff]' : 'text-[#6eb7ac] bg-[#fff]'}`}
                                            onClick={() => handleLanguage('ENG')}
                                        >
                                            <img className="w-[2rem] h-[2rem]" src={EnglandLanguage} alt="ENG" />
                                            <span className="font-bold">ENG</span>
                                        </div>
                                    </div>
                                )}
                            </div>

                            {UserInfoState.isAuthenticated && (
                                <>
                                    <Link to="/gio-hang" className="relative cursor-pointer">
                                        <Cart />
                                        <div className="absolute right-[-4px] top-[-2px] text-[#FFFFFF] w-[12px] h-[12px] font-bold text-[11px] bg-[#FF0B00] rounded-full border-[1px] border-[#fff] flex justify-center items-center">
                                            2
                                        </div>
                                    </Link>
                                    <div className="flex gap-[9px]">
                                        <Link
                                            to="/trang-ca-nhan"
                                            className="cursor-pointer relative bg-white border-[2px] w-[44px] h-[44px] border-[#33A99C] rounded-full"
                                        >
                                            <img
                                                className="absolute w-full h-full object-contain rounded-full"
                                                src={UserHeader}
                                                alt="User"
                                            />
                                        </Link>
                                        <div className="flex flex-col items-start justify-center">
                                            <Link to="/trang-ca-nhan" className="gap-[11px] flex items-center">
                                                <span className="cursor-pointer text-[20px] font-semibold text-[#009383]">
                                                    {UserInfoState.fullName}
                                                </span>
                                                <ArrowDown />
                                            </Link>
                                            <div className="gap-[8px] flex items-center mt-[5px]">
                                                <span className="cursor-pointer text-[#494949] text-[16px] font-medium">
                                                    250
                                                </span>
                                                <GoldCoin />
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    <img className="scale-x-[-1]" src={Headerleft} alt="header-right" />
                </div>

                <div className="w-[97%] flex max-h-[72px] mt-[-10px] relative overflow-hidden">
                    <SubNavbar />
                    <div className="absolute inset-0 flex h-[100%] justify-center items-center gap-[32px] flex-nowrap">
                        <Link
                            to={'/cua-hang'}
                            className="hover:text-[#009383] cursor-pointer px-[4px] py-[14px] font-bold text-[16px] leading-[18.75px] text-[#494949]"
                        >
                            {t('store')}
                        </Link>
                        <Link
                            to={'/cau-chuyen'}
                            className="hover:text-[#009383] cursor-pointer px-[4px] py-[14px] font-bold text-[16px] leading-[18.75px] text-[#494949]"
                        >
                            {t('story')}
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
