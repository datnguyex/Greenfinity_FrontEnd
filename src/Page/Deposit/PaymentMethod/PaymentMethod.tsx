import { leafHomeLeft, leafHomeRight } from '~/Images';
import {
    DepositLineStep,
    CheckMethodPayment,
    ThreeCoinAndStarts,
    ApplePayLogo,
    MomoLogo,
    VNPaylogo,
    AmazonePay,
    DomesticCard,
    VisaMasterCardLogo,
    FrameMethodPaymentBottom,
    CheckWhite,
} from '~/component/Icon';
import Header from '~/component/Layout/Header/Header';
import Footer from '~/component/Layout/Footer/Footer';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
function PaymentMethod() {
    const [paymentMethod, setPaymentMethod] = useState();
    const { t } = useTranslation(['paymentMethod']);
    const languageState = useSelector((state: any) => state.language.language);
    const { i18n } = useTranslation();
    const [amountDeposited, setAmountDeposited] = useState();
    const handleAmountDeposited = (value: any) => {
        setAmountDeposited(value);
    };

    const handlePaymentMethod = (value: any) => {
        setPaymentMethod(value);
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
                        <div className="w-[677px] h-11 justify-start items-center inline-flex mx-auto">
                            <div className="pl-1 pr-4 bg-[#009383] rounded-[68px] shadow-[0px_0px_20px_2px_rgba(0,147,131,0.25)] justify-center items-center gap-2 flex overflow-hidden">
                                <div className="w-9 h-9  bg-white rounded-[58px] flex-col justify-center items-center  inline-flex ">
                                    <CheckMethodPayment />
                                </div>
                                <div className="text-white text-[18px] font-bold ">{t('deposit')}</div>
                            </div>
                            <DepositLineStep />
                            <div className="pl-1 pr-4 bg-[#f2fffd] rounded-[68px] shadow-[0px_0px_20px_2px_rgba(0,0,0,0.10)] justify-center items-center gap-2 flex overflow-hidden">
                                <div className="w-9 h-9 py-4 bg-[#009383] rounded-[58px] flex-col justify-center items-center gap-2.5 inline-flex overflow-hidden">
                                    <div className="text-white text-[18px] font-bold font-['Inter']">2</div>
                                </div>
                                <div className="text-[#009383] text-[18px] font-bold ">{t('pay')}</div>
                            </div>
                            <DepositLineStep />
                            <div className="pl-1 pr-4 bg-white rounded-[68px] shadow-[0px_0px_20px_2px_rgba(0,0,0,0.10)] justify-center items-center gap-2 flex overflow-hidden">
                                <div className="w-9 h-9 py-4 bg-[#cce9e6] rounded-[58px] flex-col justify-center items-center gap-2.5 inline-flex overflow-hidden">
                                    <div className="text-[#009383] text-[18px] font-bold font-['Inter']">3</div>
                                </div>
                                <div className="text-[#666666] text-[18px] font-bold ">{t('finish')}</div>
                            </div>
                        </div>
                        {/* //item */}
                        <div className="min-h-[200px] w-[80%] mx-auto py-[50px] mt-[50px] bg-white rounded-3xl shadow-[0px_0px_26.100000381469727px_6px_rgba(0,0,0,0.03)] flex-col justify-center items-center gap-7 inline-flex overflow-hidden">
                            <div className="h-20 px-5  bg-[#15bdd6] rounded-lg justify-center items-center gap-2.5 inline-flex">
                                <div className="text-center text-white text-[28px] font-bold uppercase leading-[33.60px]">
                                    {t('paymentMethod')}
                                </div>
                            </div>
                            {/* //item */}
                            <div
                                className={`w-[200px] cursor-pointer  h-[180px] relative bg-white rounded-xl border  overflow-hidden 
                                       border-[#009383]  `}
                            >
                                <ThreeCoinAndStarts />
                            </div>
                            {/* //item */}
                            <div className="flex flex-wrap justify-center items-center gap-[10px] w-[45%]">
                                {/* MoMo */}
                                <div
                                    onClick={() => handlePaymentMethod(1)}
                                    className={`h-[139px] cursor-pointer flex-col justify-start items-center gap-1 inline-flex w-[calc(33.333%_-_10px)]`}
                                >
                                    <div
                                        className={`p-[24.17px] relative bg-white rounded-[17.68px] border-2 flex-col justify-center items-center gap-[24.17px] flex overflow-hidden ${
                                            paymentMethod === 1 ? 'border-[#009383]' : 'border-[#c2c2c2]'
                                        }`}
                                    >
                                        <MomoLogo />
                                        {/* Show icons for MoMo if selected */}
                                        {paymentMethod === 1 && (
                                            <>
                                                <div className="absolute bottom-[-2px] right-[-2px]">
                                                    <FrameMethodPaymentBottom />
                                                </div>
                                                <div className="absolute bottom-[4px] right-[2px]">
                                                    <CheckWhite />
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    <div
                                        className={`text-[17px] font-semibold ${
                                            paymentMethod === 1 ? 'text-[#009383]' : 'text-[#666666]'
                                        }`}
                                    >
                                        MoMo
                                    </div>
                                </div>

                                {/* Apple Pay */}
                                <div
                                    onClick={() => handlePaymentMethod(2)}
                                    className={`h-[139px] cursor-pointer flex-col justify-start items-center gap-1 inline-flex w-[calc(33.333%_-_10px)]`}
                                >
                                    <div
                                        className={`p-[24.17px] relative bg-white rounded-[17.68px] border-2 flex-col justify-center items-center gap-[24.17px] flex overflow-hidden ${
                                            paymentMethod === 2 ? 'border-[#009383]' : 'border-[#c2c2c2]'
                                        }`}
                                    >
                                        <ApplePayLogo />
                                        {/* Show icons for Apple Pay if selected */}
                                        {paymentMethod === 2 && (
                                            <>
                                                <div className="absolute bottom-[-2px] right-[-2px]">
                                                    <FrameMethodPaymentBottom />
                                                </div>
                                                <div className="absolute bottom-[4px] right-[2px]">
                                                    <CheckWhite />
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    <div
                                        className={`text-[17px] font-semibold ${
                                            paymentMethod === 2 ? 'text-[#009383]' : 'text-[#666666]'
                                        }`}
                                    >
                                        Apple Pay
                                    </div>
                                </div>

                                {/* VNPAY */}
                                <div
                                    onClick={() => handlePaymentMethod(3)}
                                    className={`h-[139px] cursor-pointer flex-col justify-start items-center gap-1 inline-flex w-[calc(33.333%_-_10px)]`}
                                >
                                    <div
                                        className={`p-[24.17px] relative bg-white rounded-[17.68px] border-2 flex-col justify-center items-center gap-[24.17px] flex overflow-hidden ${
                                            paymentMethod === 3 ? 'border-[#009383]' : 'border-[#c2c2c2]'
                                        }`}
                                    >
                                        <VNPaylogo />
                                        {/* Show icons for VNPAY if selected */}
                                        {paymentMethod === 3 && (
                                            <>
                                                <div className="absolute bottom-[-2px] right-[-2px]">
                                                    <FrameMethodPaymentBottom />
                                                </div>
                                                <div className="absolute bottom-[4px] right-[2px]">
                                                    <CheckWhite />
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    <div
                                        className={`text-[17px] font-semibold ${
                                            paymentMethod === 3 ? 'text-[#009383]' : 'text-[#666666]'
                                        }`}
                                    >
                                        VNPAY
                                    </div>
                                </div>

                                {/* Amazon Pay */}
                                <div
                                    onClick={() => handlePaymentMethod(4)}
                                    className={`h-[139px] cursor-pointer flex-col justify-start items-center gap-1 inline-flex w-[calc(33.333%_-_10px)]`}
                                >
                                    <div
                                        className={`p-[24.17px] relative bg-white rounded-[17.68px] border-2 flex-col justify-center items-center gap-[24.17px] flex overflow-hidden ${
                                            paymentMethod === 4 ? 'border-[#009383]' : 'border-[#c2c2c2]'
                                        }`}
                                    >
                                        <AmazonePay />
                                        {/* Show icons for Amazon Pay if selected */}
                                        {paymentMethod === 4 && (
                                            <>
                                                <div className="absolute bottom-[-2px] right-[-2px]">
                                                    <FrameMethodPaymentBottom />
                                                </div>
                                                <div className="absolute bottom-[4px] right-[2px]">
                                                    <CheckWhite />
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    <div
                                        className={`text-[17px] font-semibold ${
                                            paymentMethod === 4 ? 'text-[#009383]' : 'text-[#666666]'
                                        }`}
                                    >
                                        Amazone Pay
                                    </div>
                                </div>

                                {/* Domestic Card */}
                                <div
                                    onClick={() => handlePaymentMethod(5)}
                                    className={`h-[139px] cursor-pointer flex-col justify-start items-center gap-1 inline-flex w-[calc(33.333%_-_10px)]`}
                                >
                                    <div
                                        className={`p-[24.17px] relative bg-white rounded-[17.68px] border-2 flex-col justify-center items-center gap-[24.17px] flex overflow-hidden ${
                                            paymentMethod === 5 ? 'border-[#009383]' : 'border-[#c2c2c2]'
                                        }`}
                                    >
                                        <DomesticCard />
                                        {/* Show icons for Domestic Card if selected */}
                                        {paymentMethod === 5 && (
                                            <>
                                                <div className="absolute bottom-[-2px] right-[-2px]">
                                                    <FrameMethodPaymentBottom />
                                                </div>
                                                <div className="absolute bottom-[4px] right-[2px]">
                                                    <CheckWhite />
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    <div
                                        className={`text-[17px] font-semibold ${
                                            paymentMethod === 5 ? 'text-[#009383]' : 'text-[#666666]'
                                        }`}
                                    >
                                        Thẻ nội địa
                                    </div>
                                </div>

                                {/* Visa/MasterCard */}
                                <div
                                    onClick={() => handlePaymentMethod(6)}
                                    className={`h-[139px] cursor-pointer flex-col justify-start items-center gap-1 inline-flex w-[calc(33.333%_-_10px)]`}
                                >
                                    <div
                                        className={`p-[24.17px] relative bg-white rounded-[17.68px] border-2 flex-col justify-center items-center gap-[24.17px] flex overflow-hidden ${
                                            paymentMethod === 6 ? 'border-[#009383]' : 'border-[#c2c2c2]'
                                        }`}
                                    >
                                        <VisaMasterCardLogo />
                                        {/* Show icons for Visa/MasterCard if selected */}
                                        {paymentMethod === 6 && (
                                            <>
                                                <div className="absolute bottom-[-2px] right-[-2px]">
                                                    <FrameMethodPaymentBottom />
                                                </div>
                                                <div className="absolute bottom-[4px] right-[2px]">
                                                    <CheckWhite />
                                                </div>
                                            </>
                                        )}
                                    </div>
                                    <div
                                        className={`text-[17px] font-semibold ${
                                            paymentMethod === 6 ? 'text-[#009383]' : 'text-[#666666]'
                                        }`}
                                    >
                                        Thẻ quốc tế
                                    </div>
                                </div>
                            </div>

                            {/* //item */}
                            <Link to={'/ket-qua-nap-tien'} className="flex-col justify-start items-end gap-7 flex">
                                <div className="w-[632px] justify-start items-start gap-6 inline-flex flex-wrap mx-auto"></div>

                                <div className="self-stretch cursor-pointer h-16 px-6 py-[5px]  bg-[#009383] rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] justify-center items-center gap-2 inline-flex overflow-hidden">
                                    <div className="text-white text-[20px]  font-medium "> {t('continue')}</div>
                                </div>
                            </Link>
                            {/* //item */}
                            <Link
                                to={'/nap-tien'}
                                className="w-[632px] h-11px-6 cursor-pointer py-[5px] rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] border border-[#009383] justify-center items-center gap-2 inline-flex overflow-hidden"
                            >
                                <div className="text-[#009383]  text-[20px] font-medium ">{t('back')}</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default PaymentMethod;
