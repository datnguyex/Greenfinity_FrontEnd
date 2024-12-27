import { useTranslation } from 'react-i18next';
import { leafHomeLeft, leafHomeRight } from '~/Images';
import {
    CheckMethodPayment,
    DepositLineStep,
    CircleAnimaSussesTransac,
    CircleAnimafailTransac,
} from '~/component/Icon';
import Header from '~/component/Layout/Header/Header';
import Footer from '~/component/Layout/Footer/Footer';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function TransactionResult() {
    const { t } = useTranslation(['transactionResult']);

    const languageState = useSelector((state: any) => state.language.language);
    const { i18n } = useTranslation();
    const [resultTransact, setResultTransact] = useState(123);
    useEffect(() => {
        i18n.changeLanguage(languageState);
    }, [languageState]);
    return (
        <>
            <Header />
            <div
                className="bg-[#f2fffd] py-[56px] bg-no-repeat bg-[position:0_100%] bg-[size:10%_auto]"
                style={{
                    backgroundImage: `url(${leafHomeLeft}), url(${leafHomeRight})`,
                    backgroundPosition: '0 100%, 100% 100%',
                    backgroundSize: '10% auto, 10% auto',
                }}
            >
                <div className="my-[120px]">
                    <div className="px-[30px] mx-auto max-w-[132.7rem] w-[100%] flex flex-col justify-center">
                        {/* //item */}
                        <div className="w-[677px] px- h-11 justify-start items-center inline-flex mx-auto">
                            <div className="pl-1 pr-4 bg-[#009383] rounded-[68px] shadow-[0px_0px_20px_2px_rgba(0,147,131,0.25)] justify-center items-center gap-2 flex overflow-hidden">
                                <div className="w-9 h-9  bg-white rounded-[58px] flex-col justify-center items-center  inline-flex ">
                                    <CheckMethodPayment />
                                </div>
                                <div className="text-white text-[17px] font-bold font-['Roboto']">{t('deposit')}</div>
                            </div>
                            <DepositLineStep />
                            <div className="pl-1 pr-4 bg-[#009383] rounded-[68px] shadow-[0px_0px_20px_2px_rgba(0,147,131,0.25)] justify-center items-center gap-2 flex overflow-hidden">
                                <div className="w-9 h-9  bg-white rounded-[58px] flex-col justify-center items-center  inline-flex ">
                                    <CheckMethodPayment />
                                </div>
                                <div className="text-white text-[17px] font-bold font-['Roboto']">{t('pay')}</div>
                            </div>
                            <DepositLineStep />
                            <div className="pl-1 pr-4 bg-[#f2fffd] rounded-[68px] shadow-[0px_0px_20px_2px_rgba(0,0,0,0.10)] justify-center items-center gap-2 flex overflow-hidden">
                                <div className="w-9 h-9 py-4 bg-[#009383] rounded-[58px] flex-col justify-center items-center gap-2.5 inline-flex overflow-hidden">
                                    <div className="text-white text-[20px] font-bold font-['Inter']">3</div>
                                </div>
                                <div className="text-[#009383] text-[17px] font-bold font-['Roboto']">
                                    {t('finish')}
                                </div>
                            </div>
                        </div>
                        {/* //item */}
                        <div className="min-h-[200px] px-[100px] w-[67%] mx-auto py-[50px] mt-[50px] bg-white rounded-3xl shadow-[0px_0px_26.100000381469727px_6px_rgba(0,0,0,0.03)] flex-col justify-center items-center gap-7 inline-flex overflow-hidden">
                            <div className="h-20 px-5 bg-[#15bdd6] rounded-lg justify-center items-center gap-2.5 inline-flex">
                                <div className="text-center  text-white text-[28px] font-bold uppercase leading-[33.60px]">
                                    {t('resultTransact')}
                                </div>
                            </div>
                            {/* //item */}
                            {resultTransact ? <CircleAnimaSussesTransac /> : <CircleAnimafailTransac />}

                            {/* //item */}
                            <div
                                className={`text-[32px] font-bold font-['Inter'] ${
                                    resultTransact ? 'text-[#fabf00]' : 'text-[#FE532D]'
                                }`}
                            >
                                100.000đ
                            </div>
                            <div className="text-[#006e62] text-[20px] font-semibold font-['Roboto']">
                                {resultTransact ? t('textReultSuccess') : t('textReultFail')}
                            </div>

                            <div className="text-[#494949] text-[18px] font-normal font-['Roboto']">
                                {t('timeTrading')}: 14:05 - 28/11/2023
                            </div>

                            {resultTransact ? (
                                <div className="h-11 w-[50%] px-6 py-7 bg-[#009383]  cursor-pointer  rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] justify-center items-center gap-2 inline-flex overflow-hidden">
                                    <div className="text-white text-[20px] font-medium font-['Roboto']">
                                        {t('continueTrading')}
                                    </div>
                                </div>
                            ) : (
                                <div className="h-11 w-[50%] px-6 py-7 bg-[#009383]  cursor-pointer  rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] justify-center items-center gap-2 inline-flex overflow-hidden">
                                    <div className="text-white text-[20px] font-medium font-['Roboto']">
                                        {t('contact')}
                                    </div>
                                </div>
                            )}
                            <div className="h-11 w-[50%] px-6 py-7 rounded-lg  cursor-pointer  shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] border border-[#009383] justify-center items-center gap-2 inline-flex overflow-hidden">
                                <Link
                                    to={'/trang-ca-nhan'}
                                    className="text-[#009383] text-[20px] font-medium font-['Roboto']"
                                >
                                    {t('viewCurrentCoin')}
                                </Link>
                            </div>
                        </div>

                        {/* //item */}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default TransactionResult;
