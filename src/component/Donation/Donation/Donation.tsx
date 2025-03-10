import { GoldCoin, TitleDonation, TitleFundList } from '~/assets/Icons/Icon';

type DonationProps = {
    disPlayDonation: (value: boolean) => void;
    t: (key: string) => string; // Thêm kiểu cho `t`
};

function Donation({ disPlayDonation, t }: DonationProps) {
    return (
        <>
            {/* Dark background overlay */}
            <div className="fixed inset-0 bg-black bg-opacity-50 z-[100]"></div>

            <div className="fixed left-[50%] top-[50%] translate-y-[-35%] translate-x-[-50%] z-[100]">
                <div className="w-[795px] h-[723px] relative">
                    <div className="z-[100] absolute left-[-13px] top-[30px]">
                        <TitleFundList />
                        <div className="absolute top-[14%] left-[50%] translate-x-[-50%]">
                            <div className="text-center text-white text-[48px] font-black font-['Roboto']">
                                {t('donate')}
                            </div>
                        </div>
                    </div>
                    <div className="px-[93px] pt-[170px] pb-11 left-[46px] top-0 absolute bg-white rounded-3xl shadow-[0px_0px_26.100000381469727px_6px_rgba(0,0,0,0.03)] flex-col justify-end items-start gap-8 inline-flex overflow-hidden">
                        <div className="flex-col justify-center items-center gap-5 flex mx-auto">
                            <div className="justify-start items-center gap-1 inline-flex">
                                <div className="text-[#494949] text-[20px] font-semibold font-['Inter']">
                                    {t('CurrentGreecoinAmount')}:
                                </div>
                                <div className="justify-start items-center gap-1 flex">
                                    <div className="text-[#009383] text-[20px] font-semibold font-['Inter']">100</div>
                                    <div className="w-6 h-6 relative">
                                        <div className="w-6 h-6 left-0 top-0 absolute">
                                            <GoldCoin />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="pb-6 flex-col justify-start items-start gap-6 flex w-[100%]">
                            <div className="h-[68px] flex-col justify-start items-start gap-2 flex w-[100%]">
                                <div className="text-[#494949] text-[17px] font-medium font-['Inter'] leading-normal">
                                    {t('receivingAccount')}:
                                </div>
                                <div className="self-stretch h-12 flex-col justify-start items-start gap-3 flex w-[100%]">
                                    <div className="self-stretch px-4 py-[18px] bg-[#ededed] rounded-lg border border-[#ededed] justify-start items-center w-[100%] gap-2.5 inline-flex overflow-hidden">
                                        <div className="text-[#6d6d6d] text-[17px] font-normal font-['Inter'] leading-normal outline-none bg-transparent w-[100%]">
                                            Quỹ từ thiện hoa hồng
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[68px] flex-col justify-start items-start gap-2 flex w-[100%]">
                                <div className="text-[#494949] text-[17px] font-medium font-['Inter'] leading-normal">
                                    {t('phoneNumber')}:
                                </div>
                                <div className="self-stretch h-12 flex-col justify-start items-start gap-3 flex w-[100%]">
                                    <div className="self-stretch px-4 py-[18px] bg-[#ededed] rounded-lg border border-[#ededed] justify-start items-center w-[100%] gap-2.5 inline-flex overflow-hidden">
                                        <div className="text-[#6d6d6d] text-[17px] font-normal font-['Inter'] leading-normal outline-none bg-transparent w-[100%]">
                                            0987765656
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[68px] flex-col justify-start items-start gap-2 flex w-[100%]">
                                <div className="text-[#494949] text-[17px] font-medium font-['Inter'] leading-normal">
                                    {t('greeCoinNumber')}:
                                </div>
                                <div className="self-stretch h-12 flex-col justify-start items-start gap-3 flex w-[100%]">
                                    <div className="self-stretch px-4 py-[18px] bg-white rounded-lg border border-[#bababa] justify-start items-center gap-2.5 inline-flex overflow-hidden">
                                        <input
                                            placeholder={t('enterGreecoin')}
                                            className="text-[#a4a4a4] text-[17px] font-normal font-['Inter'] leading-normal outline-none bg-transparent w-[100%]"
                                        ></input>
                                    </div>
                                </div>
                            </div>
                            <div className="h-[68px] flex-col justify-start items-start gap-2 flex w-[100%]">
                                <div className="text-[#494949] text-[17px] font-medium font-['Inter'] leading-normal">
                                    {t('content')}
                                </div>
                                <div className="self-stretch h-12 flex-col justify-start items-start gap-3 flex w-[100%]">
                                    <div className="self-stretch px-4 py-[18px] bg-white rounded-lg border border-[#bababa] justify-start items-center gap-2.5 inline-flex overflow-hidden">
                                        <input
                                            placeholder={t('enterContent')}
                                            className="text-[#a4a4a4] text-[17px] font-normal font-['Inter'] leading-normal outline-none bg-transparent w-[100%]"
                                        ></input>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-[520px] justify-center items-center gap-3 inline-flex">
                            <div
                                onClick={() => disPlayDonation(false)}
                                className="grow shrink basis-0 h-11 px-6 py-7 cursor-pointer rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] border border-[#009383] justify-center items-center gap-2 flex overflow-hidden"
                            >
                                <div className="text-[#009383] text-[20px] font-medium ">{t('Cancle')}</div>
                            </div>
                            <div className="grow shrink basis-0 h-11 px-6 py-7 cursor-pointer bg-[#009383] rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] justify-center items-center gap-2 flex overflow-hidden">
                                <div className="text-white text-[20px] font-medium ">{t('confirm')}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Donation;
