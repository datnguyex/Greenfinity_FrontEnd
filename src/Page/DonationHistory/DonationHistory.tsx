import { leafHomeLeft, leafHomeRight } from '~/Images';
import { GoldCoin } from '~/component/Icon';
import Header from '~/component/Layout/Header/Header';
import Footer from '~/component/Layout/Footer/Footer';
function DonationHistory() {
    const items = [1, 2, 3];
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
                            QUYÊN GÓP CỦA TÔI
                        </div>
                        {/* //ITEM */}
                        {items.map((item, index) => (
                            <div className="mt-[30px] w-[1071px] h-[459px] mx-auto  bg-white rounded-3xl shadow-[0px_0px_26.100000381469727px_6px_rgba(0,0,0,0.03)] flex-col justify-start items-center gap-6 inline-flex overflow-hidden">
                                <div className="self-stretch px-8 py-[19px] bg-[#009383] rounded-tl-3xl rounded-tr-3xl shadow-[0px_0px_26.100000381469727px_6px_rgba(0,0,0,0.03)] border border-[#009383] justify-between items-center inline-flex">
                                    <div className="text-white text-[24px] font-bold font-['Roboto']">
                                        THÁNG 11/2023
                                    </div>
                                    <div className="justify-start items-center gap-2 flex">
                                        <div className="text-white text-[20px] font-medium font-['Roboto']">+5000</div>
                                        <GoldCoin />
                                    </div>
                                </div>
                                <div className="w-[1023px] rounded-lg justify-start items-start inline-flex overflow-hidden">
                                    <div className="w-[170px] flex-col justify-start items-start gap-2 inline-flex overflow-hidden">
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#e6f5f3] rounded-bl-lg justify-start items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-[#009383] text-[17px] font-bold font-['Roboto']">
                                                Thời gian
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 rounded-tl-lg rounded-bl-lg justify-start items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-[#666666] text-[15px] font-normal font-['Roboto']">
                                                20:00 - 21/12/2023
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 rounded-tl-lg justify-start items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-[#666666] text-[15px] font-normal font-['Roboto']">
                                                20:00 - 21/12/2023
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 rounded-tl-lg justify-start items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-[#666666] text-[15px] font-normal font-['Roboto']">
                                                20:00 - 21/12/2023
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 rounded-tl-lg justify-start items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-[#666666] text-[15px] font-normal font-['Roboto']">
                                                20:00 - 21/12/2023
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 rounded-tl-lg justify-start items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-[#666666] text-[15px] font-normal font-['Roboto']">
                                                20:00 - 21/12/2023
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 rounded-tl-lg justify-start items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-[#666666] text-[15px] font-normal font-['Roboto']">
                                                20:00 - 21/12/2023
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[441px] flex-col justify-start items-start gap-2 inline-flex overflow-hidden">
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#e6f5f3] justify-start items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-[#009383] text-[17px] font-bold font-['Roboto']">
                                                Nội dung quyên góp
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 justify-start items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-[#666666] text-[15px] font-normal font-['Roboto']">
                                                Giải cứu thanh long ruột đỏ
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 justify-start items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-[#666666] text-[15px] font-normal font-['Roboto']">
                                                Quyên góp đầm sen
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 justify-start items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-[#666666] text-[15px] font-normal font-['Roboto']">
                                                Quyên góp đầm sen
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 justify-start items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-[#666666] text-[15px] font-normal font-['Roboto']">
                                                Quyên góp đầm sen
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 justify-start items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-[#666666] text-[15px] font-normal font-['Roboto']">
                                                Quyên góp đầm sen
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 justify-start items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-[#666666] text-[15px] font-normal font-['Roboto']">
                                                Quyên góp đầm sen
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[185px] flex-col justify-start items-center gap-2 inline-flex overflow-hidden">
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#e6f5f3] justify-center items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-[#009383] text-[17px] font-bold font-['Roboto']">
                                                Trạng thái
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 bg-[#f6f6f6]/50 justify-center items-center gap-2 inline-flex overflow-hidden">
                                            <div className="px-2  bg-[#e3ffe0] rounded-3xl border border-[#33cd26] justify-center items-center gap-2.5 flex">
                                                <div className="justify-center items-center gap-1 flex overflow-hidden">
                                                    <div className="w-[5px] h-[5px] bg-[#33cd26] rounded-full" />
                                                    <div className="flex-col justify-center items-start inline-flex">
                                                        <div className="text-[#33cd26] text-[15px] font-medium font-['Roboto']">
                                                            Thành công
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11  bg-[#f6f6f6]/50 justify-center items-center gap-2 inline-flex overflow-hidden">
                                            <div className="px-2 bg-[#fff4e0] rounded-3xl border border-[#fdb600] justify-center items-center gap-2.5 flex">
                                                <div className="justify-center items-center gap-1 flex overflow-hidden">
                                                    <div className="w-[5px] h-[5px] bg-[#fdb600] rounded-full" />
                                                    <div className="flex-col justify-center items-start inline-flex">
                                                        <div className="text-[#fdb600] text-[15px] font-medium font-['Roboto']">
                                                            Không thành công
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 bg-[#f6f6f6]/50 justify-center items-center gap-2 inline-flex overflow-hidden">
                                            <div className="px-2  bg-[#e3ffe0] rounded-3xl border border-[#33cd26] justify-center items-center gap-2.5 flex">
                                                <div className="justify-center items-center gap-1 flex overflow-hidden">
                                                    <div className="w-[5px] h-[5px] bg-[#33cd26] rounded-full" />
                                                    <div className="flex-col justify-center items-start inline-flex">
                                                        <div className="text-[#33cd26] text-[15px] font-medium font-['Roboto']">
                                                            Thành công
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 bg-[#f6f6f6]/50 justify-center items-center gap-2 inline-flex overflow-hidden">
                                            <div className="px-2  bg-[#e3ffe0] rounded-3xl border border-[#33cd26] justify-center items-center gap-2.5 flex">
                                                <div className="justify-center items-center gap-1 flex overflow-hidden">
                                                    <div className="w-[5px] h-[5px] bg-[#33cd26] rounded-full" />
                                                    <div className="flex-col justify-center items-start inline-flex">
                                                        <div className="text-[#33cd26] text-[15px] font-medium font-['Roboto']">
                                                            Thành công
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 bg-[#f6f6f6]/50 justify-center items-center gap-2 inline-flex overflow-hidden">
                                            <div className="px-2  bg-[#e3ffe0] rounded-3xl border border-[#33cd26] justify-center items-center gap-2.5 flex">
                                                <div className="justify-center items-center gap-1 flex overflow-hidden">
                                                    <div className="w-[5px] h-[5px] bg-[#33cd26] rounded-full" />
                                                    <div className="flex-col justify-center items-start inline-flex">
                                                        <div className="text-[#33cd26] text-[15px] font-medium font-['Roboto']">
                                                            Thành công
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11  bg-[#f6f6f6]/50 justify-center items-center gap-2 inline-flex overflow-hidden">
                                            <div className="px-2 bg-[#fff4e0] rounded-3xl border border-[#fdb600] justify-center items-center gap-2.5 flex">
                                                <div className="justify-center items-center gap-1 flex overflow-hidden">
                                                    <div className="w-[5px] h-[5px] bg-[#fdb600] rounded-full" />
                                                    <div className="flex-col justify-center items-start inline-flex">
                                                        <div className="text-[#fdb600] text-[15px] font-medium font-['Roboto']">
                                                            Không thành công
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex overflow-hidden">
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#e6f5f3] rounded-br-lg justify-end items-center gap-2 inline-flex overflow-hidden overflow-y-scroll">
                                            <div className="text-[#009383] text-[17px] font-bold font-['Roboto']">
                                                Số GreeCoin đã quyên góp
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 rounded-tr-lg rounded-br-lg justify-end items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-[#666666] text-[15px] font-normal font-['Roboto']">
                                                50
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 rounded-tr-lg rounded-br-lg justify-end items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-[#666666] text-[15px] font-normal font-['Roboto']">
                                                500
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 rounded-tr-lg rounded-br-lg justify-end items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-[#666666] text-[15px] font-normal font-['Roboto']">
                                                500
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 rounded-tr-lg rounded-br-lg justify-end items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-[#666666] text-[15px] font-normal font-['Roboto']">
                                                500
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 rounded-tr-lg rounded-br-lg justify-end items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-[#666666] text-[15px] font-normal font-['Roboto']">
                                                500
                                            </div>
                                        </div>
                                        <div className="self-stretch h-11 px-2 pt-3 pb-[11px] bg-[#f6f6f6]/50 rounded-tr-lg rounded-br-lg justify-end items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-[#666666] text-[15px] font-normal font-['Roboto']">
                                                500
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

export default DonationHistory;