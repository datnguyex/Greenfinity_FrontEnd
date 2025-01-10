import { flowerDown, flowerUp, imgTitleWeb } from '~/Images';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Signin } from '~/services';
import { AuthValidate } from '~/Validator';

function Login() {
    // language
    const { t } = useTranslation(['signIn']);
    const languageState = useSelector((state: any) => state.language.language);
    const { i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(languageState);
    }, [languageState]);

    // signin
    const [phoneNumber, setPhoneNumber] = useState<string | undefined>();
    const [password, setPassword] = useState<string | undefined>();
    const [errorInfom, setErrorInfom] = useState({
        fullName: '',
        phoneNumber: '',
        password: '',
        checkedClause: false,
    });
    const enterPhoneNumber = (e: any) => {
        setPhoneNumber(e.target.value);
    };

    const enterPassword = (e: any) => {
        setPassword(e.target.value);
    };
    const handleSignin = async () => {
        if (!checkErrorInput()) {
            return;
        }
        Signin(phoneNumber, password, setErrorInfom);
    };
    useEffect(() => {
        setErrorInfom((prevState) => ({
            ...prevState,
            phoneNumber: '',
        }));
    }, [phoneNumber]);
    useEffect(() => {
        setErrorInfom((prevState) => ({
            ...prevState,
            password: '',
        }));
    }, [password]);
    //check error input
    const checkErrorInput = () => {
        const infoSignUp = {
            fullName: 'John Doe',
            phoneNumber: phoneNumber ?? '',
            password: password ?? '',
            checkedClause: true,
        };

        return AuthValidate(infoSignUp, setErrorInfom);
    };

    return (
        <>
            <div className="w-[100vw] h-[100vh] bg-[#CCE9E6] flex justify-center items-center">
                <div className="w-[605px] pb-[20px] min-h-[582px] rounded-3xl bg-white relative">
                    <img className="absolute rotate-[0deg] w-[130px] h-[130px] ml-[5px]" src={flowerDown} alt="" />
                    <img className="w-[454px] h-[71px] mx-auto mt-[68px] sticky" src={imgTitleWeb} alt="" />

                    <div className="flex justify-center gap-5 mt-20">
                        <span className="text-[#009383] underline decoration-solid decoration-[2px] decoration-[#009383] font-bold text-[20px] leading-6 text-underline-offset-4 cursor-pointer">
                            {t('Login')}
                        </span>
                        <Link to={'/signup'} className="font-bold text-[20px] leading-6 text-[#888888] cursor-pointer">
                            {' '}
                            {t('SignUp')}
                        </Link>
                    </div>
                    <div className="flex justify-center mt-20">
                        <div className="flex flex-col items-start justify-center gap-2">
                            <p className="text-[16px] leading-6 font-medium text-[#494949]"> {t('phoneNumber')}:</p>
                            <input
                                onChange={enterPhoneNumber}
                                className="rounded-lg border-[1px] border-[#BBBBBB] outline-[#BBBBBB] px-[18px] w-[489px] h-[48px] 
                            placeholder:font-normal leading-6 placeholder:text-[16px] focus:outline-none"
                                type="text"
                                placeholder={t('inputPhoneNumber')}
                            />
                            <p className="mb-1 text-[16px] leading-6 font-medium text-red-600">
                                {errorInfom.phoneNumber}
                            </p>
                            <p className="text-[16px] leading-6 font-medium text-[#494949] mt-[5px]">
                                {' '}
                                {t('password')}:
                            </p>
                            <input
                                onChange={enterPassword}
                                className="rounded-lg border-[1px] z-[10] border-[#BBBBBB] outline-[#BBBBBB] px-[18px] w-[489px] h-[48px] 
                            placeholder:font-normal leading-6 placeholder:text-[16px] focus:outline-none"
                                type="password" // Đổi từ "text" thành "password" để ẩn mật khẩu
                                placeholder={t('enterPass')}
                            />
                            <p className="mb-1 text-[16px] leading-6 font-medium text-red-600">{errorInfom.password}</p>
                        </div>
                    </div>
                    <img src={flowerUp} alt="" className="absolute w-[110.6px] h-[186.43px] right-0 bottom-[60px]" />
                    <div className="flex justify-center">
                        <button
                            onClick={handleSignin} // Thêm sự kiện click để thực hiện đăng nhập
                            className="mt-40 bg-[#009383] text-[#FFFFFF] text-[18px] leading-['21.78px'] font-semibold rounded-[8px] w-[505px] h-[48px]"
                        >
                            {t('Login')}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
