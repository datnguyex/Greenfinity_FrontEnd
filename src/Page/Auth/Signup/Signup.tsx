import { UnknowUSer } from '~/assets/Images/';
import { useTranslation } from 'react-i18next';

import { useEffect, useState } from 'react';

import { AuthValidate } from '~/Validator';
import { createTemporaryAccount } from '~/services';
import { LanguageSwitcher } from '~/CustomHooks/LanguageSwitcher';
import Swal from 'sweetalert2';
import AuthLayout from '~/Layouts/Auth/Auth';
import InputAuth from '~/component/Inputs/InputAuth';
import { Link } from 'react-router-dom';

function Signup() {
    //language
    const { t } = useTranslation(['signUp']);
    LanguageSwitcher();

    //info sign up state
    const [infoSignUp, setInfoSignUp] = useState({
        fullName: '',
        phoneNumber: '',
        password: '',
        image: UnknowUSer,
        checkedClause: false,
    });

    //error information state
    const [errorInfom, setErrorInfom] = useState({
        fullName: '',
        phoneNumber: '',
        password: '',
        checkedClause: false,
    });

    //set full name function
    const setFullnameSignUp = (e: any) => {
        setInfoSignUp({ ...infoSignUp, fullName: e.target.value });
    };

    //set phone number function
    const setPhoneNumberSignUp = (e: any) => {
        setInfoSignUp({ ...infoSignUp, phoneNumber: e.target.value });
    };

    //set password sign up function
    const setPasswordSignUp = (e: any) => {
        setInfoSignUp({ ...infoSignUp, password: e.target.value });
    };

    //check policy function
    const setCheckclauseSignup = () => {
        setErrorInfom((prevState) => ({
            ...prevState,
            checkedClause: !prevState.checkedClause,
        }));
    };

    //check error input function
    const checkErrorInput = () => {
        return AuthValidate(infoSignUp, setErrorInfom);
    };

    //sign up function
    const handleSubmitSignUp = async () => {
        if (!checkErrorInput()) {
            return;
        }

        const result = await createTemporaryAccount(infoSignUp, setErrorInfom);

        if (result.success) {
            sessionStorage.setItem('infoSignUp', JSON.stringify(result.data.user));
            window.location.href = 'http://localhost:3000/opt';
        } else {
            Swal.fire({
                title: t('errorTitle'),
                text: t('errorContent'),
                icon: 'error',
                confirmButtonText: t('errorClose'),
            });
        }
    };

    //reset error input full name
    useEffect(() => {
        setErrorInfom((prevErrorInfom) => ({
            ...prevErrorInfom,
            fullName: '',
        }));
    }, [infoSignUp.fullName]);

    //reset error input
    useEffect(() => {
        setErrorInfom((prevErrorInfom) => ({
            ...prevErrorInfom,
            phoneNumber: '',
        }));
    }, [infoSignUp.phoneNumber]);

    //reset error input password
    useEffect(() => {
        setErrorInfom((prevErrorInfom) => ({
            ...prevErrorInfom,
            password: '',
        }));
    }, [infoSignUp.password]);

    return (
        <>
            <AuthLayout>
                <div className="flex justify-center gap-5 mt-20">
                    <Link to="/login" className="font-bold text-[20px] leading-6 text-[#888888] cursor-pointer">
                        {t('Login')}
                    </Link>
                    <span className="text-[#009383] underline decoration-solid decoration-[2px] decoration-[#009383] font-bold text-[20px] leading-6 text-underline-offset-4 cursor-pointer">
                        {t('SignUp')}
                    </span>
                </div>
                <div className="flex mt-12 flex-col items-center max-w-[80] w-[80%] mx-auto">
                    <div className="flex flex-col items-start justify-center gap-2  w-[100%]">
                        <InputAuth
                            label={t('fullName')}
                            type="text"
                            placeholder={t('inputFullname')}
                            value={infoSignUp.fullName}
                            onChange={(e) => setFullnameSignUp(e)}
                            error={errorInfom.fullName}
                        />
                    </div>
                    <div className="mt-6 flex flex-col items-start justify-center gap-2 w-[100%]">
                        <InputAuth
                            label={t('PhoneNumber')}
                            type="text"
                            placeholder={t('inputPhoneNumber')}
                            value={infoSignUp.phoneNumber}
                            onChange={(e) => setPhoneNumberSignUp(e)}
                            error={errorInfom.phoneNumber}
                        />
                    </div>
                    <div className="mt-6 flex flex-col items-start justify-center gap-2 w-[100%] z-[20]">
                        <InputAuth
                            label={t('password')}
                            type="password"
                            placeholder={t('enterPass')}
                            value={infoSignUp.password}
                            onChange={(e) => setPasswordSignUp(e)}
                            error={errorInfom.password}
                        />
                    </div>
                </div>

                <div className="flex max-w-[80%] mx-auto mt-8 z-[20] relative">
                    <input
                        onChange={() => setCheckclauseSignup()}
                        type="checkbox"
                        className={`
                             relative rounded w-[20px] h-[20px] border-[1px] border-soli mt-2`}
                    />
                    <div className="ml-3 flex-1 item">
                        <span className="text-center text-[14px] font-normal leading-[21px]">
                            {t('clause')}{' '}
                            <span
                                className={`text-[#009383] underline decoration-solid decoration-[1px] decoration-[#009383] 
                                     text-underline-offset-3 cursor-pointer`}
                            >
                                {t('clause2')}
                            </span>
                            {t('clause3')}
                        </span>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button
                        onClick={() => handleSubmitSignUp()}
                        className="font-roboto-condensed  mt-10 bg-[#009383] text-[#FFFFFF] text-[18px] leading-['21.78px'] font-semibold rounded-[8px] w-[80%] h-20"
                    >
                        {t('SignUp')}
                    </button>
                </div>
            </AuthLayout>
        </>
    );
}

export default Signup;
