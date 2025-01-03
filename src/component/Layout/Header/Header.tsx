import { ArrowIntoHaftSquare, Cart, ArrowDown, GoldCoin, SubNavbar, ArrownDown } from '~/component/Icon';
import { EnglandLanguage, Headerleft, logoTitle, UserHeader, VietnameseLanguage } from '~/Images';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { locales } from '~/i18n/i18n';
import { StoreReducer } from '~/Redux/Store';
import { useSelector } from 'react-redux';
import { changeLanguageAction } from '~/Redux/Action';

function Header() {
    const { t } = useTranslation(['header']);
    const { i18n } = useTranslation();
    const currentLanguage = locales[i18n.language as keyof typeof locales];

    const languageState = useSelector((state: any) => state.language.language);

    const navigate = useNavigate();
    const navigateHome = () => {
        navigate('/');
    };
    // console.log('home', t);

    const [useLanguages, setUseLanguages] = useState(true);
    const handleLanguage = (name: string) => {
        StoreReducer.dispatch(changeLanguageAction(name));
    };
    const handleUseLanguage = () => {
        setUseLanguages(!useLanguages);
    };
    useEffect(() => {
        i18n.changeLanguage(languageState);
        handleUseLanguage();
    }, [languageState]);

    return (
        <>
            <div className="flex flex-col z-[100] fixed translate-x-[-50%] left-[50%] items-center w-[95%]">
                {/* fiter-header */}
                <div className="mt-10 z-50 rounded-xl  w-[100%] h-[64px] flex bg-transparent ">
                    <img src={Headerleft} alt="" />
                    <div className="flex items-center justify-between w-[100%] bg-white h-full relative border-b-[0.45rem] border-solid border-[#e0e0e0]">
                        <img
                            onClick={navigateHome}
                            className="h-[118%] w-[auto] translate-y-[0%] cursor-pointer"
                            src={logoTitle}
                            alt=""
                        />
                        <div className="items-center flex  h-[100%] w-[50%] justify-center">
                            <ul className="flex flex-row justify-between list-none m-0 p-0">
                                <li className="">
                                    <Link
                                        to="/tram-greez"
                                        className="hover:text-[#009383] h-[100%] flex items-center cursor-pointer text-[1.6rem] px-[1.6rem] py-[1.2rem] text-[#494949] font-bold space: text-nowrap uppercase transition duration-200"
                                    >
                                        {t('station')}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/the-gioi-tai-sinh"
                                        className="hover:text-[#009383] h-[100%] flex items-center cursor-pointer text-[1.6rem] px-[1.6rem] py-[1.2rem] text-[#494949] font-bold space: text-nowrap uppercase transition duration-200"
                                    >
                                        {t('wordReborn')}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/thang-dong-gop"
                                        className="hover:text-[#009383] h-[100%] flex items-center cursor-pointer text-[1.6rem] px-[1.6rem] py-[1.2rem] text-[#494949] font-bold space: text-nowrap uppercase transition duration-200"
                                    >
                                        {t('contributeLadder')}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/ban-do"
                                        className="hover:text-[#009383] h-[100%] flex items-center cursor-pointer text-[1.6rem] px-[1.6rem] py-[1.2rem] text-[#494949] font-bold space: text-nowrap uppercase transition duration-200"
                                    >
                                        {t('map')}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/mini-game"
                                        className="hover:text-[#009383] h-[100%] flex items-center cursor-pointer text-[1.6rem] px-[1.6rem] py-[1.2rem] text-[#494949] font-bold space: text-nowrap uppercase transition duration-200"
                                    >
                                        {t('miniGame')}
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* <div className="mr-5">
                            <button className="bg-[#009383] border border-solid flex justify-center items-center aborder-white rounded-lg text-[#fff] px-[12px] py-[12px] text-[20px] font-semibold leading-6 gap-1">
                                <span>
                                    <ArrowIntoHaftSquare />
                                </span>
                                Đăng nhập
                            </button>
                        </div> */}

                        <div className=" mr-5 flex gap-[16px] items-center relative">
                            {/* item */}
                            <div className="flex flex-col justify-center items-center">
                                <button
                                    className="min-w-[11.4rem]  justify-around rounded-[0.66rem] shadown-header-language flex items-center gap-[0.8rem] 
                                 bg-[#fff] min-h-[4.6rem] text-[18px] text-[#333333] px-[5px] border-[1px] border-[#009383]
                                "
                                    onClick={() => handleUseLanguage()}
                                >
                                    <div className="flex items-center gap-[0.8rem] justify-center">
                                        <img className="w-[2rem] h-[2rem]" src={currentLanguage.image} alt="" />
                                        <span className="text-[#009383] font-bold">{currentLanguage.name}</span>
                                    </div>
                                    <div>
                                        <ArrownDown />
                                    </div>
                                </button>
                                {useLanguages == true ? (
                                    <div
                                        className="min-w-[114px] py-[4px] absolute top-[50px] flex flex-col bg-[#fff]
                             rounded-[8px] shadown-header-language-chil overflow-hidden transition-all duration-300
                             "
                                    >
                                        {/* //item */}

                                        <div
                                            className={`font-semibold px-[12px] py-[5px]
                                    min-h-[32px] text-[14px] cursor-pointer rounded-[4px] items-center flex justify-start ${
                                        currentLanguage.name == 'VIE'
                                            ? 'bg-[#6eb7ac] text-[#fff]'
                                            : 'text-[#6eb7ac] bg-[#fff]'
                                    }`}
                                            onClick={() => handleLanguage('VIE')}
                                        >
                                            <div className="flex items-center gap-[0.8rem] justify-center">
                                                <img className="w-[2rem] h-[2rem]" src={VietnameseLanguage} alt="" />
                                                <span className="font-bold">VIE</span>
                                            </div>
                                        </div>
                                        {/* //item */}
                                        <div
                                            className={`font-semibold px-[12px] py-[5px]
                                    min-h-[32px] text-[14px] cursor-pointer rounded-[4px] items-center flex justify-start ${
                                        currentLanguage.name == 'ENG'
                                            ? 'bg-[#6eb7ac] text-[#fff]'
                                            : 'text-[#6eb7ac] bg-[#fff]'
                                    }`}
                                            onClick={() => handleLanguage('ENG')}
                                        >
                                            <div className="flex items-center gap-[0.8rem] justify-center">
                                                <img className="w-[2rem] h-[2rem]" src={EnglandLanguage} alt="" />
                                                <span className="font-bold">ENG</span>
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <></>
                                )}
                            </div>
                            {/* item */}
                            <Link to="/gio-hang" className="relative cursor-pointer">
                                <span className="">
                                    <Cart />
                                </span>
                                <div
                                    className="absolute right-[-4px] top-[-2px] text-[#FFFFFF] w-[12px] h-[12px] font-bold text-[11px] object-cover 
                                leading-[14.06px] rounded-[100%] bg-[#FF0B00] border-[1px]
                                 border-[#ffff] flex justify-center items-center"
                                >
                                    2
                                </div>
                            </Link>
                            {/* item */}
                            <div className="flex gap-[9px]">
                                <Link
                                    to="/trang-ca-nhan"
                                    className="cursor-pointer relative bg-white border-[2px] w-[44px] h-[44px] border-[#33A99C] rounded-full"
                                >
                                    <img
                                        className="absolute  w-full h-full object-contain rounded-full"
                                        src={UserHeader}
                                        alt="User"
                                    />
                                </Link>
                                <div className="flex flex-col items-start justify-center">
                                    <Link to="/trang-ca-nhan" className="gap-[11px] flex items-center">
                                        <span className="cursor-pointer text-[20px] leading-6 font-semibold text-[#009383]">
                                            Tuyết Anh
                                        </span>
                                        <span className="cursor-pointer">
                                            <ArrowDown />
                                        </span>
                                    </Link>
                                    <div className="gap-[8px] flex items-center mt-[5px]">
                                        <span className="cursor-pointer text-[#494949] leading-[18.75px] text-[16px] font-medium">
                                            250
                                        </span>
                                        <span className="cursor-pointer">
                                            <GoldCoin />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="scale-x-[-1]" src={Headerleft} alt="" />
                </div>
                <div className="w-[97%] flex max-h-[72px] mt-[-10px] relative overflow-hidden">
                    <SubNavbar />
                    <div className="absolute inset-0 flex h-[100%] justify-center items-center gap-[32px] flex-nowrap">
                        <Link
                            to={'/cua-hang'}
                            className="hover:text-[#009383] cursor-pointer px-[4px] py-[14px] font-bold items-center text-[16px] leading-[18.75px] text-[#494949]"
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
