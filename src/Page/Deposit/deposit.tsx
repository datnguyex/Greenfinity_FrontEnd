import { Link } from 'react-router-dom';
import { leafHomeLeft, leafHomeRight } from '~/assets/Images/';
import {
    DepositLineStep,
    OneCoinAndStarts,
    TwoCoinAndStarts,
    ThreeCoinAndStarts,
    APilOfCoinAndStart,
    GoldCoin,
    CheckDeposit,
} from '~/assets/Icons';
import Header from '~/Layouts/Header/Header';
import Footer from '~/Layouts/Footer/Footer';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function Deposit() {
    const { t } = useTranslation(['Deposit']);
    const languageState = useSelector((state: any) => state.language.language);
    const { i18n } = useTranslation();
    const [amountDeposited, setAmountDeposited] = useState();
    const handleAmountDeposited = (value: any) => {
        setAmountDeposited(value);
    };
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
                        <div className="w-[677px] h-11 justify-center items-center inline-flex mx-auto">
                            <div className="pl-1 py-[7px] pr-4 bg-[#f2fffd] rounded-[68px] shadow-[0px_0px_20px_2px_rgba(0,0,0,0.10)] justify-center items-center gap-2 flex overflow-hidden">
                                <div className="w-9 h-9 py-4 bg-[#009383] rounded-[58px] flex-col justify-center items-center gap-2.5 inline-flex overflow-hidden">
                                    <div className="text-white text-xl font-bold font-['Inter']">1</div>
                                </div>
                                <div className="text-[#009383] text-[17px] font-bold "> {t('deposit')}</div>
                            </div>
                            <DepositLineStep />
                            <div className="pl-1 py-[7px] pr-4 bg-white rounded-[68px] shadow-[0px_0px_20px_2px_rgba(0,0,0,0.10)] justify-center items-center gap-2 flex overflow-hidden">
                                <div className="w-9 h-9 py-4 bg-[#cce9e6] rounded-[58px] flex-col justify-center items-center gap-2.5 inline-flex overflow-hidden">
                                    <div className="text-[#009383] text-xl font-bold font-['Inter']">2</div>
                                </div>
                                <div className="text-[#666666] text-[17px] font-bold "> {t('pay')}</div>
                            </div>
                            <DepositLineStep />
                            <div className="pl-1 py-[7px] pr-4 bg-white rounded-[68px] shadow-[0px_0px_20px_2px_rgba(0,0,0,0.10)] justify-center items-center gap-2 flex overflow-hidden">
                                <div className="w-9 h-9 py-4 bg-[#cce9e6] rounded-[58px] flex-col justify-center items-center gap-2.5 inline-flex overflow-hidden">
                                    <div className="text-[#009383] text-xl font-bold font-['Inter']">3</div>
                                </div>
                                <div className="text-[#666666] text-[17px] font-bold "> {t('finish')}</div>
                            </div>
                        </div>
                        {/* //item */}
                        <div className="min-h-[200px] w-[80%] mx-auto py-[50px] mt-[50px] bg-white rounded-3xl shadow-[0px_0px_26.100000381469727px_6px_rgba(0,0,0,0.03)] flex-col justify-center items-center gap-7 inline-flex overflow-hidden">
                            <div className="h-20 px-5 bg-[#15bdd6] rounded-lg justify-center items-center gap-2.5 inline-flex">
                                <div className="text-center text-white text-[28px] font-bold uppercase leading-[33.60px]">
                                    {t('deposit')}
                                </div>
                            </div>
                            <div className="flex-col justify-start items-end gap-7 flex">
                                <div className="self-stretch h-[58px] px-3.5 py-2.5 bg-[#f2fffd] rounded-xl border border-[#009383] justify-between items-center inline-flex overflow-hidden">
                                    <div className="text-[#494949] text-[20px] font-semibold ">
                                        {t('GreeezCoinCurrenly')}
                                    </div>
                                    <div className="justify-start items-center gap-1 flex">
                                        <div className="text-[#009383] text-[20px] font-semibold font-['Inter'] flex items-center justify-center gap-[5px]">
                                            100
                                            <GoldCoin />
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[632px] justify-start items-start gap-6 inline-flex flex-wrap mx-auto">
                                    <div
                                        onClick={() => handleAmountDeposited(1)}
                                        className={`w-[200px] cursor-pointer  h-[180px] relative bg-white rounded-xl border  overflow-hidden ${
                                            amountDeposited == 1 ? 'border-[#009383]  ' : 'border-[#b6b6b6]  '
                                        }`}
                                    >
                                        {amountDeposited == 1 ? (
                                            <OneCoinAndStarts colorBorder={'#009383'} />
                                        ) : (
                                            <OneCoinAndStarts />
                                        )}
                                        <div className="absolute right-0 top-0">
                                            {amountDeposited == 1 ? <CheckDeposit /> : <></>}
                                        </div>
                                    </div>

                                    <div
                                        onClick={() => handleAmountDeposited(2)}
                                        className={`w-[200px] cursor-pointer  h-[180px] relative bg-white rounded-xl border  overflow-hidden ${
                                            amountDeposited == 2 ? 'border-[#009383]  ' : 'border-[#b6b6b6]  '
                                        }`}
                                    >
                                        {amountDeposited == 2 ? (
                                            <TwoCoinAndStarts colorBorder={'#009383'} />
                                        ) : (
                                            <TwoCoinAndStarts />
                                        )}
                                        <div className="absolute right-0 top-0">
                                            {amountDeposited == 2 ? <CheckDeposit /> : <></>}
                                        </div>
                                    </div>
                                    <div
                                        onClick={() => handleAmountDeposited(3)}
                                        className={`w-[200px] cursor-pointer  h-[180px] relative bg-white rounded-xl border  overflow-hidden ${
                                            amountDeposited == 3 ? 'border-[#009383]  ' : 'border-[#b6b6b6]  '
                                        }`}
                                    >
                                        {amountDeposited == 3 ? (
                                            <ThreeCoinAndStarts colorBorder={'#009383'} />
                                        ) : (
                                            <ThreeCoinAndStarts />
                                        )}
                                        <div className="absolute right-0 top-0">
                                            {amountDeposited == 3 ? <CheckDeposit /> : <></>}
                                        </div>
                                    </div>
                                    <div
                                        onClick={() => handleAmountDeposited(4)}
                                        className={`w-[200px] cursor-pointer  h-[180px] relative bg-white rounded-xl border  overflow-hidden ${
                                            amountDeposited == 4 ? 'border-[#009383]  ' : 'border-[#b6b6b6]  '
                                        }`}
                                    >
                                        {amountDeposited == 4 ? (
                                            <APilOfCoinAndStart colorBorder={'#009383'} />
                                        ) : (
                                            <APilOfCoinAndStart />
                                        )}
                                        <div className="absolute right-0 top-0">
                                            {amountDeposited == 4 ? <CheckDeposit /> : <></>}
                                        </div>
                                    </div>
                                    <div
                                        onClick={() => handleAmountDeposited(5)}
                                        className={`w-[200px] cursor-pointer  h-[180px] relative bg-white rounded-xl border  overflow-hidden ${
                                            amountDeposited == 5 ? 'border-[#009383]  ' : 'border-[#b6b6b6]  '
                                        }`}
                                    >
                                        {amountDeposited == 5 ? (
                                            <TwoCoinAndStarts colorBorder={'#009383'} />
                                        ) : (
                                            <TwoCoinAndStarts />
                                        )}
                                        <div className="absolute right-0 top-0">
                                            {amountDeposited == 5 ? <CheckDeposit /> : <></>}
                                        </div>
                                    </div>
                                    <div
                                        onClick={() => handleAmountDeposited(6)}
                                        className={`w-[200px] cursor-pointer  h-[180px] relative bg-white rounded-xl border  overflow-hidden ${
                                            amountDeposited == 6 ? 'border-[#009383]  ' : 'border-[#b6b6b6]  '
                                        }`}
                                    >
                                        {amountDeposited == 6 ? (
                                            <ThreeCoinAndStarts colorBorder={'#009383'} />
                                        ) : (
                                            <ThreeCoinAndStarts />
                                        )}
                                        <div className="absolute right-0 top-0">
                                            {amountDeposited == 6 ? <CheckDeposit /> : <></>}
                                        </div>
                                    </div>
                                </div>

                                <Link
                                    to={'/phuong-thuc-thanh-toan'}
                                    className="self-stretch cursor-pointer h-16 px-6 py-[5px]  bg-[#009383] rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] justify-center items-center gap-2 inline-flex overflow-hidden"
                                >
                                    <div className="text-white text-[20px]  font-medium "> {t('continue')}</div>
                                </Link>
                            </div>
                        </div>
                        {/* //item  */}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Deposit;
