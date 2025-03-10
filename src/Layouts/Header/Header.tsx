import { ArrowIntoHaftSquare, SubNavbar, ArrownDown } from '~/assets/Icons';
import { EnglandLanguage, Headerleft, logoTitle, VietnameseLanguage } from '~/assets/Images/';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { locales } from '~/i18n/i18n';
import { StoreReducer } from '~/Redux/Store';
import { useSelector } from 'react-redux';
import { changeLanguageAction } from '~/Redux/Action';
import UserInfomation from '~/component/IsAuthenticated/InfomationUser';
import { bottomAddressArr, topAddressArr } from '~/assets/Arrays/LinkPage';
import LanguagesBtn from '~/component/Buttons/LanguagesBtn';
import FlexibleBtn from '~/component/Buttons/FlexibleBtn';

function Header() {
    //get language for header
    const { t, i18n } = useTranslation(['header']);

    //current language
    const currentLanguage = locales[i18n.language as keyof typeof locales];

    //saved language in redux
    const languageState = useSelector((state: any) => state.language.language);

    //get user infomation then login
    const UserInfoState = useSelector((state: any) => state.UserInfomation);

    //use language state
    const [useLanguages, setUseLanguages] = useState(false);

    //change language function
    const handleLanguage = (name: string) => {
        StoreReducer.dispatch(changeLanguageAction(name));
    };

    //use language function
    const handleUseLanguage = () => {
        setUseLanguages((prev) => !prev);
    };

    //get current language
    useEffect(() => {
        i18n.changeLanguage(languageState);
    }, [languageState, i18n]);

    //come to the home page
    const navigate = useNavigate();
    const navigateHome = () => {
        navigate('/');
    };

    //top address array in the top of navbar
    const topAddresses = topAddressArr(t);

    //bottom address array in the top of navbar
    const bottomAddresses = bottomAddressArr(t);

    return (
        <>
            <div className="flex flex-col z-[100] fixed translate-x-[-50%] left-[50%] items-center w-[95%]">
                {/* Header Section */}
                <div className="mt-10 z-50 rounded-xl w-[100%] h-[10vh] flex bg-transparent">
                    <img src={Headerleft} alt="header-left " />
                    <div className="flex items-center justify-between w-[100%] bg-white h-full relative border-b-[0.45rem] border-solid border-[#e0e0e0]">
                        <img
                            onClick={navigateHome}
                            className="h-[115%] w-[20%] cursor-pointer"
                            src={logoTitle}
                            alt="logo"
                        />
                        <div className="flex items-center justify-center h-full">
                            <ul className="flex flex-row justify-between list-none m-0 p-0">
                                {topAddresses.map((address, index) => (
                                    <li key={index}>
                                        <Link
                                            to={address.to}
                                            className="hover:text-[#009383] font-roboto-condensed h-[100%] flex items-center text-[1.6rem] px-[1.6rem] py-[1.2rem] text-[#494949] font-bold transition duration-200"
                                        >
                                            {address.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mr-5 flex gap-[16px] items-center relative flex-1">
                            <div className="flex justify-end  items-center w-full gap-5">
                                <button
                                    className="max-w-[20%] w-[25%] justify-around rounded-[0.66rem] flex items-center gap-[0.8rem] bg-[#fff] min-h-[4.6rem] text-[18px] text-[#333333] px-[5px] border-[1px] border-[#009383] overflow-hidden"
                                    onClick={handleUseLanguage}
                                >
                                    <div className="flex items-center gap-[0.8rem] justify-center">
                                        <img className="w-[2rem] h-[2rem]" src={currentLanguage.image} alt="language" />
                                        <span className="text-[#009383] font-bold">{currentLanguage.name}</span>
                                    </div>
                                    <ArrownDown />
                                    {/* // This is the language dropdown */}
                                    {useLanguages && (
                                        <div className="mx-3 absolute top-[100%] z-[10] w-[20%] h-[150%] flex flex-col bg-[#fff] rounded-[8px] shadow-header-language-child overflow-hidden transition-all duration-300">
                                            <LanguagesBtn
                                                language="VIE"
                                                currentLanguage={currentLanguage}
                                                imageSrc={VietnameseLanguage}
                                                onClick={handleLanguage}
                                            />
                                            <LanguagesBtn
                                                language="ENG"
                                                currentLanguage={currentLanguage}
                                                imageSrc={EnglandLanguage}
                                                onClick={handleLanguage}
                                            />
                                        </div>
                                    )}
                                </button>

                                {/* //this is btn login */}
                                {/* {!UserInfoState.isAuthenticated && (
                                    <Link to={'/login'} className="w-[27%] h-[35%]">
                                        <FlexibleBtn
                                            width="100%"
                                            height="100%"
                                            bg="bg-[#009383]"
                                            color="text-white"
                                            title="Đăng nhập"
                                            icon={<ArrowIntoHaftSquare />}
                                        />
                                    </Link>
                                )} */}
                                {/* // This is the user information */}
                                <UserInfomation UserInfoState={UserInfoState} />
                            </div>
                        </div>
                    </div>
                    <img className="scale-x-[-1]" src={Headerleft} alt="header-right" />
                </div>

                {/* //bottom part of navebar */}
                <div className="w-[97%] flex items-start max-h-[7vh] relative overflow-hidden ">
                    <SubNavbar />
                    <div className="absolute inset-0 flex h-[100%] justify-center items-center gap-[32px] flex-nowrap">
                        {bottomAddresses.map((address, index) => (
                            <Link
                                key={index}
                                to={address.to}
                                className="hover:text-[#009383] cursor-pointer px-[4px] py-[14px] font-bold text-[16px] leading-[18.75px] text-[#494949]"
                            >
                                {t(address.label)}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
