import { flowerDown, flowerUp, imgTitleWeb } from '~/assets/Images/';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Signin } from '~/services';
import { AuthValidate } from '~/Validator';
import { LanguageSwitcher } from '~/CustomHooks/LanguageSwitcher';
import AuthLayout from '~/Layouts/Auth/Auth';

function Login() {
    // language
    const { t } = useTranslation(['signIn']);
    LanguageSwitcher();

    // phone number state
    const [phoneNumber, setPhoneNumber] = useState<string | undefined>();

    //password state
    const [password, setPassword] = useState<string | undefined>();

    //error state
    const [errorInfom, setErrorInfom] = useState({
        fullName: '',
        phoneNumber: '',
        password: '',
        checkedClause: false,
    });

    //input phone number function
    const enterPhoneNumber = (e: any) => {
        setPhoneNumber(e.target.value);
    };

    //input password function
    const enterPassword = (e: any) => {
        setPassword(e.target.value);
    };

    //sign in function
    const handleSignin = async () => {
        if (!checkErrorInput()) {
            return;
        }
        Signin(phoneNumber, password, setErrorInfom);
    };

    //reset error input phone number
    useEffect(() => {
        setErrorInfom((prevState) => ({
            ...prevState,
            phoneNumber: '',
        }));
    }, [phoneNumber]);

    //reset error input password
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
            <AuthLayout>
                <div className="flex justify-center gap-5 mt-20">
                    <span className="font-roboto-condensed text-[#009383] underline decoration-solid decoration-[2px] decoration-[#009383] font-bold text-[20px] leading-6 text-underline-offset-4 cursor-pointer">
                        {t('Login')}
                    </span>
                    <Link
                        to={'/signup'}
                        className="font-roboto-condensed font-bold text-[20px] leading-6 text-[#888888] cursor-pointer"
                    >
                        {' '}
                        {t('SignUp')}
                    </Link>
                </div>
                <div className="flex justify-center mt-20">
                    <div className="flex flex-col items-start justify-center gap-2 max-w-[80] w-[80%]">
                        <p className="text-[16px] leading-6 font-medium text-[#494949]"> {t('phoneNumber')}:</p>
                        <input
                            onChange={enterPhoneNumber}
                            className="font-roboto-condensed rounded-lg border-[1px] border-[#BBBBBB] outline-[#BBBBBB] px-[18px] w-[100%] h-[48px] 
                            placeholder:font-normal leading-6 placeholder:text-[16px] focus:outline-none"
                            type="text"
                            placeholder={t('inputPhoneNumber')}
                        />
                        <p className="font-roboto-condensed mb-1 text-[16px] leading-6 font-medium text-red-600">
                            {errorInfom.phoneNumber}
                        </p>
                        <p className="font-roboto-condensed text-[16px] leading-6 font-medium text-[#494949] mt-[5px]">
                            {' '}
                            {t('password')}:
                        </p>
                        <input
                            onChange={enterPassword}
                            className="font-roboto-condensed rounded-lg border-[1px] z-[10] border-[#BBBBBB] outline-[#BBBBBB] px-[18px] w-[100%] h-[48px] 
                            placeholder:font-normal leading-6 placeholder:text-[16px] focus:outline-none"
                            type="password"
                            placeholder={t('enterPass')}
                        />
                        <p className="font-roboto-condensed mb-1 text-[16px] leading-6 font-medium text-red-600 h-1">
                            {errorInfom.password}
                        </p>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button
                        onClick={handleSignin}
                        className="font-roboto-condensed absolute bottom-[5%] bg-[#009383] text-[#FFFFFF] text-[18px] leading-['21.78px'] font-semibold rounded-[8px] w-[80%] h-20"
                    >
                        {t('Login')}
                    </button>
                </div>
            </AuthLayout>
        </>
    );
}

export default Login;
