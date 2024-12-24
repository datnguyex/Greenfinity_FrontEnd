import { leafHomeLeft, leafHomeRight } from '~/Images';
import { GoldCoin } from '~/component/Icon';
import Header from '~/component/Layout/Header/Header';
import Footer from '~/component/Layout/Footer/Footer';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
function CoinHistory() {
    const { t } = useTranslation(['CoinHistory']);
    const languageState = useSelector((state: any) => state.language.language);
    const { i18n } = useTranslation();
    const items = [1, 2, 3];
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
                <div className="my-[140px]">
                    <div className="px-[30px] flex flex-col justify-center mx-auto max-w-[132.7rem] w-[100%] ">
                        {/* //ITEM */}
                        <div className="text-center text-[#009383] text-[64px] font-bold font-['Roboto'] uppercase leading-[76.80px]">
                            {t('title')}
                        </div>
                        {/* //ITEM */}
                        {items.map((item, index) => (
                            <div className="w-[1071px] mt-[30px] mx-auto h-[459px] bg-white rounded-3xl shadow-[0px_0px_26.100000381469727px_6px_rgba(0,0,0,0.03)] flex-col justify-start items-center gap-6 inline-flex overflow-hidden">
                                <div className="self-stretch h-[55px] px-8 py-[19px] bg-[#009383] rounded-tl-3xl rounded-tr-3xl shadow-[0px_0px_26.100000381469727px_6px_rgba(0,0,0,0.03)] border border-[#009383] justify-between items-center inline-flex">
                                    <div className="text-white text-[24px] font-bold font-['Roboto']">
                                        {t('month')} 11/2023
                                    </div>
                                    <div className="justify-start items-center gap-3 flex">
                                        <div className="text-white text-[20px] font-medium font-['Roboto']">+5000 </div>
                                        <div className="text-white text-[20px] font-medium font-['Roboto']">-300</div>
                                        <GoldCoin />
                                    </div>
                                </div>
                                <div className="w-[1023px] rounded-lg justify-start items-start inline-flex overflow-hidden">
                                    <div className="w-[237px] flex-col justify-start items-start gap-2 inline-flex overflow-hidden">
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#e6f5f3] rounded-bl-lg justify-start items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-[#009383] text-[17px] font-bold font-['Roboto']">
                                                {t('time')}
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 rounded-tl-lg rounded-bl-lg justify-start items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-[#666666]  text-[15px] font-['Roboto']">
                                                20:00 - 21/12/2023
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 rounded-tl-lg justify-start items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-[#666666]  text-[15px] font-['Roboto']">
                                                20:00 - 21/12/2023
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 rounded-tl-lg justify-start items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-[#666666]  text-[15px] font-['Roboto']">
                                                20:00 - 21/12/2023
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 rounded-tl-lg justify-start items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-[#666666]  text-[15px] font-['Roboto']">
                                                20:00 - 21/12/2023
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 rounded-tl-lg justify-start items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-[#666666]  text-[15px] font-['Roboto']">
                                                20:00 - 21/12/2023
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 rounded-tl-lg justify-start items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-[#666666]  text-[15px] font-['Roboto']">
                                                20:00 - 21/12/2023
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[377px] flex-col justify-start items-start gap-2 inline-flex overflow-hidden">
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#e6f5f3] justify-start items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-[#009383] text-[17px] font-bold font-['Roboto']">
                                                {t('transaction')}
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 justify-start items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-[#666666]  text-[15px] font-['Roboto']">Nạp tiền</div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 justify-start items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-[#666666]  text-[15px] font-['Roboto']">Quyên góp</div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 justify-start items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-[#666666]  text-[15px] font-['Roboto']">
                                                Nhận quyên góp
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 justify-start items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-[#666666]  text-[15px] font-['Roboto']">
                                                Bán sản phẩm
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 justify-start items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-[#666666]  text-[15px] font-['Roboto']">
                                                Quyên góp đầm sen
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 justify-start items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-[#666666]  text-[15px] font-['Roboto']">Đấu giá</div>
                                        </div>
                                    </div>
                                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex overflow-hidden">
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#e6f5f3] justify-end items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-[#009383] text-[17px] font-bold font-['Roboto']">
                                                {t('work')}
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 justify-end items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-right text-[#666666] flex justify-center items-center gap-[5px] text-[15px] font-['Roboto']">
                                                +500
                                                <GoldCoin />
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 justify-end items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-right text-[#666666] flex justify-center items-center gap-[5px] text-[15px] font-['Roboto']">
                                                +500
                                                <GoldCoin />
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 justify-end items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-right text-[#666666] flex justify-center items-center gap-[5px] text-[15px] font-['Roboto']">
                                                +500
                                                <GoldCoin />
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 justify-end items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-right text-[#666666] flex justify-center items-center gap-[5px] text-[15px] font-['Roboto']">
                                                -100
                                                <GoldCoin />
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 justify-end items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-right text-[#666666] flex justify-center items-center gap-[5px] text-[15px] font-['Roboto']">
                                                -100
                                                <GoldCoin />
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 justify-end items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-right text-[#666666] flex justify-center items-center gap-[5px] text-[15px] font-['Roboto']">
                                                -100
                                                <GoldCoin />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex overflow-hidden">
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#e6f5f3] rounded-br-lg justify-end items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-[#009383] text-[17px] font-bold font-['Roboto']">
                                                {t('balance')}
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 justify-end items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-right text-[#666666] flex justify-center items-center gap-[5px] text-[15px] font-['Roboto']">
                                                500
                                                <GoldCoin />
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 justify-end items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-right text-[#666666] flex justify-center items-center gap-[5px] text-[15px] font-['Roboto']">
                                                500
                                                <GoldCoin />
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 justify-end items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-right text-[#666666] flex justify-center items-center gap-[5px] text-[15px] font-['Roboto']">
                                                500
                                                <GoldCoin />
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 justify-end items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-right text-[#666666] flex justify-center items-center gap-[5px] text-[15px] font-['Roboto']">
                                                100
                                                <GoldCoin />
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 justify-end items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-right text-[#666666] flex justify-center items-center gap-[5px] text-[15px] font-['Roboto']">
                                                100
                                                <GoldCoin />
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 justify-end items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-right text-[#666666] flex justify-center items-center gap-[5px] text-[15px] font-['Roboto']">
                                                100
                                                <GoldCoin />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default CoinHistory;
