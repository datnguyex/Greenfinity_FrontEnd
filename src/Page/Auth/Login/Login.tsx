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
import FlexibleBtn from '~/component/Buttons/FlexibleBtn';
import InputAuth from '~/component/Inputs/InputAuth';

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
        Signin({ phoneNumber, password, setErrorInfom });
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
                        <InputAuth
                            label={t('phoneNumber')}
                            type="text"
                            placeholder={t('inputPhoneNumber')}
                            value={phoneNumber}
                            onChange={enterPhoneNumber}
                            error={errorInfom.phoneNumber}
                        />
                        <InputAuth
                            label={t('password')}
                            type="password"
                            placeholder={t('enterPass')}
                            value={password}
                            onChange={enterPassword}
                            error={errorInfom.password}
                        />
                    </div>
                </div>

                <div className="flex justify-center absolute w-full bottom-[5%]">
                    <FlexibleBtn
                        onClick={handleSignin}
                        width="80%"
                        height="h-20"
                        bg="bg-[#009383]"
                        color="text-[#FFFFFF]"
                        title={t('Login')}
                    />
                </div>
            </AuthLayout>
        </>
    );
}

export default Login;
