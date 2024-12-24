import classNames from 'classnames/bind';
import style from './Signup.module.scss';
import { imgTitleWeb, flowerDown } from '~/Images';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
const cx = classNames.bind(style);

function Signup() {
    const { t } = useTranslation(['signUp']);
    const [optValid, setOptValid] = useState(false);
    const languageState = useSelector((state: any) => state.language.language);
    const { i18n } = useTranslation();
    useEffect(() => {
        i18n.changeLanguage(languageState);
    }, [languageState]);
    return (
        <>
            <div className="w-[100vw] h-[100vh] bg-[#CCE9E6] flex justify-center items-center">
                <div className="w-[605px] h-[582px] rounded-3xl bg-white relative">
                    <img className="absolute rotate-[0deg] w-[130px] h-[130px] ml-[5px]" src={flowerDown} alt="" />
                    <img className="w-[454px] h-[71px] mx-auto mt-[68px] sticky" src={imgTitleWeb} alt="" />
                    <div className="flex justify-center gap-5 mt-20">
                        <span className="font-bold text-[20px] leading-6 text-[#888888] cursor-pointer">
                            {' '}
                            {t('Login')}
                        </span>
                        <span className="text-[#009383] underline decoration-solid decoration-[2px] decoration-[#009383] font-bold text-[20px] leading-6 text-underline-offset-4 cursor-pointer">
                            {t('SignUp')}
                        </span>
                    </div>
                    <div className="flex mt-12 flex-col items-center">
                        <div className="flex flex-col items-start justify-center gap-2">
                            <p className="mb-1 text-[16px] leading-6 font-medium text-[#494949]">{t('fullName')}</p>
                            <input
                                className="rounded-lg border-[1px] border-[#BBBBBB] outline-[#BBBBBB] px-[18px] w-[489px] h-[48px] 
                            placeholder:font-normal leading-6 placeholder:text-[16px] focus:outline-none"
                                type="text"
                                name=""
                                id=""
                                placeholder={t('inputFullname')}
                            />
                        </div>
                        <div className="mt-6 flex flex-col items-start justify-center gap-2">
                            <p className="text-[16px] leading-6 font-medium text-[#494949]">{t('PhoneNumber')}:</p>
                            <input
                                className="rounded-lg border-[1px] border-[#BBBBBB] outline-[#BBBBBB] px-[18px] w-[489px] h-[48px] 
                            placeholder:font-normal leading-6 placeholder:text-[16px] focus:outline-none"
                                type="text"
                                name=""
                                id=""
                                placeholder={t('inputPhoneNumber')}
                            />
                        </div>
                    </div>
                    {/* appearance-none */}
                    <div className="flex max-w-[489px] mx-auto mt-8 ">
                        <input
                            type="checkbox"
                            className="appearance-none relative rounded w-[20px] h-[20px] border-[1px] border-solid border-[#009383] checked:bg-[#009383]"
                        />
                        <div className="ml-3 flex-1 item ">
                            <span className="text-center text-[14px] font-normal leading-[21px]">
                                {t('clause')}{' '}
                                <span className="text-[#009383] underline decoration-solid decoration-[1px] decoration-[#009383] text-underline-offset-3 cursor-pointer">
                                    {t('clause2')}
                                </span>
                                {t('clause3')}
                            </span>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <button className="mt-20 bg-[#009383] text-[#FFFFFF] text-[18px] leading-['21.78px'] font-semibold rounded-[8px] w-[505px] h-[48px]">
                            {t('SignUp')}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
