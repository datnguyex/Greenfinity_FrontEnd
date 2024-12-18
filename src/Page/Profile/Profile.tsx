import Header from '~/component/Layout/Header/Header';
import Footer from '~/component/Layout/Footer/Footer';
import { leafHomeLeft, leafHomeRight } from '~/Images';
import { ManRankAvatar } from '~/Images';
import {
    EditSign,
    GoldCoin,
    HandSaveMoney,
    Clockclockwise,
    Tote,
    ArrowIntoHaftSquare,
    RimVoucher,
} from '~/component/Icon';
import { FrameIntroduceGift } from '~/component/Icon/BigIcon';
import { Pagination } from 'antd';

function Profile() {
    const vouchers = Array(6).fill({
        title: 'Giải tư - Voucher Quà tặng thời trang Uniqlo',
        quantity: 5,
        method: 'Trao cho (05) người có Điểm Chi Tiêu cao tiếp theo Giải ba.',
        giftValue: '800.000 đồng/voucher',
        points: 50,
    });
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
                    <div className="px-[30px] mx-auto max-w-[132.7rem] w-[100%] ">
                        {/* //item */}
                        <div className="items-center flex justify-between gap-[5rem] mx-auto max-w-[104.8rem] w-[90%]">
                            {/* //child-item */}
                            <div className="items-end flex w-[50.7%]">
                                <img className="h-auto w-[100%]" src={ManRankAvatar} alt="" />
                            </div>
                            {/* child-item */}
                            <div className="w-[55%] gap-[20px] flex flex-col">
                                {/* // */}
                                <span className="inline-block max-w-[100%] text-[7.2rem] font-bold leading-[8.5rem] text-[#009383]">
                                    Tuyết Anh
                                </span>
                                {/* // */}
                                <div className="w-[260px] h-12 px-6 py-[23px] rounded-lg border border-[#009383] justify-center items-center gap-2 inline-flex">
                                    <div className="w-7 h-7 relative" />
                                    <button className="text-[#009383] text-[20px] font-medium font-['Roboto'] flex items-center justify-center">
                                        <span>
                                            <EditSign />
                                        </span>
                                        Chỉnh sửa thông tin
                                    </button>
                                </div>
                                {/* // */}
                                <div className="h-[53px] flex-col justify-center items-start inline-flex">
                                    <div className="text-[#373737] text-[18px] font-normal font-['Roboto'] leading-tight">
                                        Tôi là người ham đọc sách, thích học hỏi và hướng ngoại. Tôi thích làm việc
                                        trong môi trường nghiêm túc và có thể phát triển sự nghiệp.
                                    </div>
                                </div>
                                {/* // */}
                                <div className="h-[104px] flex-col justify-center items-start gap-4 inline-flex">
                                    <div>
                                        <span className="text-[#006e62] text-[20px] font-normal font-['Roboto'] leading-normal tracking-tight">
                                            Thứ hạng hiện tại:
                                        </span>
                                        <span className="text-[#006e62] text-xl font-semibold font-['Roboto'] leading-normal tracking-tight">
                                            {' '}
                                        </span>
                                        <span className="text-[#ff0000] text-[20px] font-semibold font-['Roboto'] leading-normal tracking-tight">
                                            26
                                        </span>
                                    </div>
                                    <div className="justify-start items-center gap-0.5 inline-flex">
                                        <div className="flex items-center justify-center gap-[5px]">
                                            <span className="text-[#006e62] text-[20px] font-normal font-['Roboto'] leading-normal tracking-tight">
                                                Gree coin hiện có:
                                            </span>

                                            <span className="text-[#ff0000] text-[20px] font-semibold font-['Roboto'] leading-normal tracking-tight">
                                                5000
                                            </span>
                                            <span>
                                                <GoldCoin />
                                            </span>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-[#006e62] text-[20px] font-normal font-['Roboto'] leading-normal tracking-tight">
                                            Điểm đã chi tiêu tuần này:
                                        </span>
                                        <span className="text-[#006e62] text-[20px] font-semibold font-['Roboto'] leading-normal tracking-tight">
                                            {' '}
                                        </span>
                                        <span className="text-[#ff0000] text-[20px] font-semibold font-['Roboto'] leading-normal tracking-tight">
                                            0
                                        </span>
                                    </div>
                                </div>
                                {/* // */}
                                <div className="">
                                    {/* // */}
                                    <div className="h-28 justify-start items-start gap-4 inline-flex w-full">
                                        <div className="cursor-pointer flex-1 h-12 px-6 py-[24px] bg-[#009383] rounded-md justify-center items-center gap-1 flex">
                                            <div className="text-white text-[16px] font-medium font-['Roboto'] flex justify-center items-center gap-[5px]">
                                                <HandSaveMoney />
                                                Lịch sử quyên góp
                                            </div>
                                        </div>
                                        {/* // */}
                                        <div className="cursor-pointer flex-1 h-12 px-6 py-[24px] bg-[#009383] rounded-md justify-center items-center gap-1 flex">
                                            <div className="text-white text-[16px] font-medium font-['Roboto'] flex justify-center items-center gap-[5px]">
                                                <Clockclockwise />
                                                Lịch sử quyên góp
                                            </div>
                                        </div>
                                    </div>
                                    {/* // */}
                                    <div className="cursor-pointer flex-1 h-12 px-6 py-[24px] bg-[#009383] rounded-md justify-center items-center gap-1 flex">
                                        <div className="text-white text-[16px] font-medium font-['Roboto'] flex justify-center items-center gap-[5px]">
                                            <Tote />
                                            Sản phẩm của bạn
                                        </div>
                                    </div>
                                    {/* // */}
                                    <div className="cursor-pointer flex-1 mt-[20px] h-12 px-6 py-[24px] bg-[#fff] border border-[#009383] rounded-md justify-center items-center gap-1 flex">
                                        <div className="text-[#009383] text-[16px] font-bold font-['Roboto'] flex justify-center items-center gap-[5px]">
                                            <ArrowIntoHaftSquare />
                                            Đăng xuất
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* item */}
                        <div className="mt-[15rem]">
                            <div className="cursor-pointer italic text-center text-[#15bdd6] text-[24px] font-normal font-['Roboto'] underline leading-[28.80px] tracking-tight">
                                Thể lệ chương trình
                            </div>
                            <div className="flex justify-between items-center mt-[36px]">
                                {/* // */}
                                <div className="relative inline-block">
                                    <FrameIntroduceGift />
                                    <div className="absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%]">
                                        <div className="w-[350px] h-[66px]">
                                            <div className="text-center text-white text-[30px] font-black font-['Roboto'] uppercase leading-[40.80px]">
                                                nhập hội nuôi rồng
                                            </div>
                                            <div className="text-center text-white text-2xl font-semibold font-['Roboto'] leading-[28.80px]">
                                                Nhận quà hấp dẫn
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* // */}
                                <div className="relative inline-block">
                                    <FrameIntroduceGift />
                                    <div className="absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%]">
                                        <div className="w-[350px] h-[66px]">
                                            <div className="text-center text-white text-[30px] font-black font-['Roboto'] uppercase leading-[40.80px]">
                                                nhập hội nuôi rồng
                                            </div>
                                            <div className="text-center text-white text-2xl font-semibold font-['Roboto'] leading-[28.80px]">
                                                Nhận quà hấp dẫn
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* /// */}
                        <div className="w-[1314px] h-[1454px] relative">
                            <div className="h-[1350px] p-6  left-0 top-[104px] absolute rounded-[20px] border-2 border-[#009383] flex-col justify-start items-end gap-6 inline-flex">
                                <div className="h-11 px-3 py-2.5 bg-[#009383] rounded-lg justify-center items-center gap-2.5 inline-flex">
                                    <div className="p-[3px] justify-center items-center gap-2.5 flex" />
                                </div>
                                <div className="flex-col justify-center items-center flex">
                                    <div className="w-full flex flex-wrap justify-center gap-7">
                                        {vouchers.map((voucher, index) => (
                                            <div
                                                key={index}
                                                className="w-[380px] h-[577px] relative bg-white rounded-2xl"
                                            >
                                                <div className="rounded-xl">
                                                    <div className="top-[0px] w-[300px] rounded-xl relative ">
                                                        <RimVoucher />
                                                    </div>
                                                </div>
                                                <div className="px-4 py-5 w-[90%] left-[50%] translate-x-[-50%] top-[337px] absolute bg-white rounded-xl border border-[#66beb5] flex-col justify-center items-start gap-2.5 inline-flex">
                                                    <div className=" flex-col over justify-start items-start gap-3 flex">
                                                        <div className="self-stretch text-[#006e62] text-[21px] font-semibold font-['Roboto'] leading-relaxed">
                                                            {voucher.title}
                                                        </div>
                                                        <div className="self-stretch">
                                                            <span className="text-[#3f3f3f] text-[15px] font-semibold font-['Roboto'] leading-snug">
                                                                Số lượng quà mỗi tuần:
                                                            </span>
                                                            <span className="text-[#3f3f3f] text-[15px] font-normal font-['Roboto'] leading-snug">
                                                                {voucher.quantity}
                                                                <br />
                                                            </span>
                                                            <span className="text-[#3f3f3f] text-[15px] font-semibold font-['Roboto'] leading-snug">
                                                                Cách thức đổi quà:
                                                            </span>
                                                            <span className="text-[#3f3f3f] text-[15px] font-normal font-['Roboto'] leading-snug">
                                                                {voucher.method}
                                                                <br />
                                                            </span>
                                                            <span className="text-[#3f3f3f] text-[15px] font-semibold font-['Roboto'] leading-snug">
                                                                Giá trị quà tặng(+VAT):
                                                            </span>
                                                            <span className="text-[#3f3f3f] text-[15px] font-normal font-['Roboto'] leading-snug">
                                                                {voucher.giftValue}
                                                            </span>
                                                            <div className="self-stretch w-[100%] h-10 px-8 py-6 bg-[#009383] rounded-lg justify-center items-center gap-2.5 inline-flex mt-[5px]">
                                                                <div className="text-center text-white text-[18px] font-semibold font-['Roboto'] leading-snug">
                                                                    Đổi Voucher
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="px-[10px] py-2.5 left-[296px] top-[18px] absolute bg-[#15bdd6] rounded-lg shadow border border-white flex justify-center items-center gap-1 ">
                                                    <div className="w-[20px] h-[20px] relative">
                                                        <div className="w-[20px] h-[20px] left-0 top-0 absolute">
                                                            <div className="flex items-center justify-center  rotate-[-13.41deg] ">
                                                                <GoldCoin />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className=" text-white text-[15px] font-semibold font-['Roboto'] leading-[18px] text-nowrap">
                                                        {voucher.points} điểm
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        {/* //comment cai map de dung */}
                                        {/* <div className="py-[10rem] w-[1314px]">
                                            <div className="text-[#99d4cd] text-[3.6rem] font-bold text-center">
                                                Tủ đồ của bạn hiện đang trống
                                            </div>
                                            <div className="text-[#99d4cd] text-[2.2rem] font-medium text-center">
                                                Tủ đồ của bạn hiện đang trống
                                            </div>
                                        </div> */}
                                        <Pagination
                                            defaultCurrent={1}
                                            total={30}
                                            className="flex justify-center items-center ant-paginate-contribute"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-[557px] h-[104px] left-[376px] top-0 absolute">
                                <div className="w-[562.40px] h-[74.10px] left-[-2px] top-[30.40px] absolute rounded-tl-[19px] rounded-tr-[19px] border-l-2 border-r-2 border-t-2 border-[#009383]" />
                                <div className="p-[3.80px] left-[89px] top-0 absolute bg-gradient-to-l from-[#009383] via-[#018273] to-[#008b7c] rounded-[95px] justify-center items-center inline-flex">
                                    <div className="w-[186.20px] h-[53.20px] px-[29.45px] py-[14.72px] bg-white rounded-[27px] justify-center items-center flex">
                                        <div className="text-center text-[#009383] text-[19px] font-bold font-['Inter']">
                                            Săn Voucher
                                        </div>
                                    </div>
                                    <div className="w-[186.20px] h-[53.20px] px-[29.45px] py-[14.72px] rounded-[27px] justify-center items-center flex">
                                        <div className="text-center text-white text-[19px] font-semibold font-['Inter']">
                                            Voucher của tôi
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Profile;
