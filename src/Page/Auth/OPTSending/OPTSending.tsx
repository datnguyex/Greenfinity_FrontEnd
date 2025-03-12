import classNames from 'classnames/bind';
// import style from './Login.module.scss';
import { flowerDown, flowerUp, imgTitleWeb } from '~/assets/Images/';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
// const cx = classNames.bind(style);

import { useEffect } from 'react';

import { CreateAccount, DeleteAuthCode, ResendAuthCode } from '~/services';
import { LanguageSwitcher } from '~/CustomHooks/LanguageSwitcher';
import AuthLayout from '~/Layouts/Auth/Auth';
import FlexibleBtn from '~/component/Buttons/FlexibleBtn';

function OPTSending() {
    //language
    const { t } = useTranslation(['optSending']);
    LanguageSwitcher();

    //opt state
    const [otp, setOtp] = useState<string>('');

    // opt valid state
    const [optValid, setOptValid] = useState(true);

    //limit input to 1 character and update opt state
    const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
        const value = e.target.value;
        if (value.length <= 1) {
            setOtp((prevOtp) => {
                const otpArray = prevOtp.split('');
                otpArray[index] = value;
                return otpArray.join('');
            });
        }
    };
    //resendAuth code
    const resendAuthCode = async () => {
        ResendAuthCode({ setMinutes, setSeconds });
    };

    //delete auth code
    const deleteAuthCode = async () => {
        const infoSignUp = sessionStorage.getItem('infoSignUp');
        DeleteAuthCode(infoSignUp);
    };
    //count down time
    const [minutes, setMinutes] = useState(5);
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const timer = setInterval(() => {
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(timer);
                    deleteAuthCode();
                } else {
                    setMinutes((prevMinutes) => prevMinutes - 1);
                    setSeconds(59);
                }
            } else {
                setSeconds((prevSeconds) => prevSeconds - 1);
            }
        }, 1000);

        return () => clearInterval(timer);
    }, [seconds, minutes]);

    //create account
    const handleCreateAccount = async () => {
        CreateAccount(otp);
    };

    return (
        <>
            <AuthLayout>
                <div className="flex justify-center items-center">
                    <div className="border-b-2 border-[#009383] inline-block pb-[10px]">
                        <h6 className="mt-[50px] text-[20px] leading-6 text-[#009383] font-bold uppercase">
                            {' '}
                            {t('inputOTP')}
                        </h6>
                    </div>
                </div>

                <p className="mt-[40px] text-center text-[16px] leading-6 font-medium text-[#494949]">
                    {t('optSent')}
                    {/* 0329169799 */}
                </p>
                <div className="mt-6 flex justify-center items-center">
                    <div className="flex flex-row gap-4">
                        {[...Array(6)].map((_, index) => (
                            <div
                                key={index}
                                className={`w-[45px] h-[47px] border rounded-s flex justify-center items-center ${
                                    optValid ? 'border-[#009383]' : 'border-[#FF0000]'
                                }`}
                            >
                                <input
                                    type="text"
                                    maxLength={1}
                                    value={otp[index] || ''}
                                    onChange={(e) => handleOtpChange(e, index)}
                                    className="outline-none w-[100%] h-[100%] text-center px-[5px] font-normal text-[18px] leading-[27px] text-[#494949]"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {optValid ? (
                    <></>
                ) : (
                    <div className="mt-6 flex justify-center">
                        <span className="text-[#FF0000] leading-[21px] text-[14px] font-normal">
                            {t('optNotValid')}
                        </span>
                    </div>
                )}

                <div className="mt-6 flex justify-center items-center font-normal text-[16px] leading-6">
                    <span className="text-gray-700">{t('timeRemain')}:</span>
                    <span className="opacity-0 pointer-events-none">a</span>
                    <span className="text-[#009383]">
                        {minutes} {t('minute')} {seconds < 10 ? `0${seconds}` : seconds} {t('second')}
                    </span>
                </div>

                <div
                    className={`font-medium text-[16px] leading-6 flex items-center justify-center gap-2 ${'mt-[20%]'}`}
                >
                    <span className="text-[#494949]">{t('notReciveOPT')}</span>
                    <span
                        onClick={() => resendAuthCode()}
                        className={
                            'text-underline-offset-4 cursor-pointer text-[#009383] underline decoration-solid decoration-[2px] decoration-[#009383'
                        }
                    >
                        {t('resend')}
                    </span>
                </div>

                <div className="mt-[5%] flex items-center justify-center ">
                    <FlexibleBtn
                        width="505px"
                        height="48px"
                        bg="bg-[#009383]"
                        color="text-white"
                        title={t('confirm')}
                        onClick={handleCreateAccount}
                    />
                </div>
            </AuthLayout>
        </>
    );
}

export default OPTSending;
