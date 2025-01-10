import classNames from 'classnames/bind';
import style from './Signup.module.scss';
import { imgTitleWeb, flowerDown } from '~/Images';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthValidate } from '~/Validator';
import { createTemporaryAccount } from '~/services';
const cx = classNames.bind(style);

function Signup() {
    //language
    const { t } = useTranslation(['signUp']);
    const [optValid, setOptValid] = useState(false);
    const languageState = useSelector((state: any) => state.language.language);
    const { i18n } = useTranslation();
    useEffect(() => {
        i18n.changeLanguage(languageState);
    }, [languageState]);
    //create contemporaryaccount and check error
    const [infoSignUp, setInfoSignUp] = useState({
        fullName: '',
        phoneNumber: '',
        password: '',
        checkedClause: false,
    });
    const [errorInfom, setErrorInfom] = useState({
        fullName: '',
        phoneNumber: '',
        password: '',
        checkedClause: false,
    });
    const setFullnameSignUp = (e: any) => {
        setInfoSignUp({ ...infoSignUp, fullName: e.target.value });
    };
    const setPhoneNumberSignUp = (e: any) => {
        setInfoSignUp({ ...infoSignUp, phoneNumber: e.target.value });
    };
    const setPasswordSignUp = (e: any) => {
        setInfoSignUp({ ...infoSignUp, password: e.target.value });
    };
    const setCheckclauseSignup = () => {
        setErrorInfom((prevState) => ({
            ...prevState,
            checkedClause: !prevState.checkedClause,
        }));
    };
    const checkErrorInput = () => {
        return AuthValidate(infoSignUp, setErrorInfom);
    };

    const handleSubmitSignUp = async () => {
        if (!checkErrorInput()) {
            return;
        }
        console.log('Dữ liệu gửi đi: ', infoSignUp);

        const result = await createTemporaryAccount(infoSignUp, setErrorInfom);

        if (result.success) {
            console.log('Đăng ký thành công:', result.data);
            sessionStorage.setItem('infoSignUp', JSON.stringify(result.data.user));
            window.location.href = 'http://localhost:3000/opt';
        } else {
            console.log('Gửi mã thất bại:', result.error);
        }
    };
    useEffect(() => {
        setErrorInfom((prevErrorInfom) => ({
            ...prevErrorInfom,
            fullName: '',
        }));
    }, [infoSignUp.fullName]);
    useEffect(() => {
        setErrorInfom((prevErrorInfom) => ({
            ...prevErrorInfom,
            phoneNumber: '',
        }));
    }, [infoSignUp.phoneNumber]);
    useEffect(() => {
        setErrorInfom((prevErrorInfom) => ({
            ...prevErrorInfom,
            password: '',
        }));
    }, [infoSignUp.password]);

    return (
        <>
            <div className="w-[100vw] h-[100vh] bg-[#CCE9E6] flex justify-center items-center">
                <div className="w-[605px] h-[672px] rounded-3xl bg-white relative">
                    <img className="absolute rotate-[0deg] w-[130px] h-[130px] ml-[5px]" src={flowerDown} alt="" />
                    <img className="w-[454px] h-[71px] mx-auto mt-[68px] sticky" src={imgTitleWeb} alt="" />
                    <div className="flex justify-center gap-5 mt-20">
                        <Link to="/login" className="font-bold text-[20px] leading-6 text-[#888888] cursor-pointer">
                            {t('Login')}
                        </Link>
                        <span className="text-[#009383] underline decoration-solid decoration-[2px] decoration-[#009383] font-bold text-[20px] leading-6 text-underline-offset-4 cursor-pointer">
                            {t('SignUp')}
                        </span>
                    </div>
                    <div className="flex mt-12 flex-col items-center">
                        <div className="flex flex-col items-start justify-center gap-2">
                            <p className="mb-1 text-[16px] leading-6 font-medium text-[#494949]">{t('fullName')}</p>
                            <input
                                onChange={(e) => setFullnameSignUp(e)}
                                className="rounded-lg border-[1px] border-[#BBBBBB] outline-[#BBBBBB] px-[18px] w-[489px] h-[48px] 
                              placeholder:font-normal leading-6 placeholder:text-[16px] focus:outline-none"
                                type="text"
                                name=""
                                id=""
                                placeholder={t('inputFullname')}
                            />
                            <p className="mb-1 text-[16px] leading-6 font-medium text-red-600">{errorInfom.fullName}</p>
                        </div>
                        <div className="mt-6 flex flex-col items-start justify-center gap-2">
                            <p className="text-[16px] leading-6 font-medium text-[#494949]">{t('PhoneNumber')}:</p>
                            <input
                                onChange={(e) => setPhoneNumberSignUp(e)}
                                className="rounded-lg border-[1px] border-[#BBBBBB] outline-[#BBBBBB] px-[18px] w-[489px] h-[48px] 
                                placeholder:font-normal leading-6 placeholder:text-[16px] focus:outline-none"
                                type="text"
                                name=""
                                id=""
                                placeholder={t('inputPhoneNumber')}
                            />
                            <p className="mb-1 text-[16px] leading-6 font-medium text-red-600">
                                {errorInfom.phoneNumber}
                            </p>
                        </div>
                        <div className="mt-6 flex flex-col items-start justify-center gap-2">
                            <p className="text-[16px] leading-6 font-medium text-[#494949]">{t('password')}:</p>
                            <input
                                onChange={(e) => setPasswordSignUp(e)}
                                className="rounded-lg border-[1px] border-[#BBBBBB] outline-[#BBBBBB] px-[18px] w-[489px] h-[48px] 
                                placeholder:font-normal leading-6 placeholder:text-[16px] focus:outline-none"
                                type="password"
                                name=""
                                id=""
                                placeholder={t('enterPass')}
                            />

                            <p className="mb-1 text-[16px] leading-6 font-medium text-red-600">{errorInfom.password}</p>
                        </div>
                    </div>
                    {/* appearance-none */}
                    <div className="flex max-w-[489px] mx-auto mt-8 ">
                        <input
                            onChange={() => setCheckclauseSignup()}
                            type="checkbox"
                            className={`
                            appearance-none relative rounded w-[20px] h-[20px] border-[1px] border-solid 
                             ${infoSignUp.checkedClause == true ? 'border-[#009383]' : 'border-[#009383]'}
                            checked:bg-[#009383]
                            `}
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
                            className="mt-20 bg-[#009383] text-[#FFFFFF] text-[18px] leading-['21.78px'] font-semibold rounded-[8px] w-[505px] h-[48px]"
                        >
                            {t('SignUp')}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
