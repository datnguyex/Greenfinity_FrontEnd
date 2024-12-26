// FunList component
import { FundList } from '~/Images';
import { TitleFundList } from '~/component/Icon/Icon';

type FunListProps = {
    disPlayFundList: (value: boolean) => void;
};

function FunList({ disPlayFundList }: FunListProps) {
    const donationData = [
        {
            name: 'Quỹ từ thiện hoa hồng',
            phone: '0987764321',
            imageUrl: FundList,
        },
        {
            name: 'Quỹ từ thiện ánh sáng',
            phone: '0987764322',
            imageUrl: FundList,
        },
        {
            name: 'Quỹ từ thiện yêu thương',
            phone: '0987764323',
            imageUrl: FundList,
        },
        {
            name: 'Quỹ từ thiện hòa bình',
            phone: '0987764324',
            imageUrl: FundList,
        },
        {
            name: 'Quỹ từ thiện niềm tin',
            phone: '0987764325',
            imageUrl: FundList,
        },
    ];

    return (
        <>
            {/* Dark background overlay */}
            <div className="fixed inset-0 bg-black bg-opacity-50 z-[100]"></div>

            <div className="fixed left-[50%] top-[50%] translate-y-[-35%] translate-x-[-50%] z-[100]">
                <div className="w-[795px] h-[723px] relative">
                    <div className="z-[100] absolute left-[-13px] top-[30px]">
                        <TitleFundList />
                    </div>
                    <div className="px-[93px] pt-[170px] pb-11 left-[46px] top-0 absolute bg-white rounded-3xl shadow-[0px_0px_26.100000381469727px_6px_rgba(0,0,0,0.03)] flex-col justify-end items-start gap-8 inline-flex overflow-hidden">
                        <div className="flex flex-col items-start justify-start w-[100%]">
                            {donationData.map((donation, index) => (
                                <div
                                    key={index}
                                    className="h-[60px] px-3 py-2 bg-white rounded-xl w-[100%] shadow-[0px_2px_18px_0px_rgba(0,0,0,0.08)] justify-between items-center inline-flex mb-4"
                                >
                                    <div className="justify-start items-center gap-2.5 flex">
                                        <img
                                            className="w-11 h-11 rounded-full shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] border-2 border-white"
                                            src={donation.imageUrl}
                                            alt="fund"
                                        />
                                        <div className="flex-col justify-start items-start gap-3 inline-flex">
                                            <div className="text-[#009383] text-[24px] font-semibold font-['Roboto']">
                                                {donation.name}
                                            </div>
                                            <div className="text-[#929292] text-[16px] font-bold font-['Roboto']">
                                                {donation.phone}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[110px] cursor-pointer self-stretch px-6 py-2.5 bg-[#009383] rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] justify-center items-center gap-2 flex overflow-hidden">
                                        <div className="text-white text-[16px] font-semibold font-['Roboto']">
                                            Quyên góp
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="w-[520px]  h-11 justify-center items-center gap-3 inline-flex">
                            <button
                                onClick={() => disPlayFundList(false)}
                                className="grow shrink basis-0 h-11 px-6 py-7 bg-[#009383] rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] justify-center items-center gap-2 flex overflow-hidden"
                            >
                                <div className="text-white text-[20px] font-medium font-['Roboto']">Đóng</div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FunList;
