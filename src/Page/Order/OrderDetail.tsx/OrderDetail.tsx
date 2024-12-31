import { ArrowLeftBlack } from '~/component/Icon';
import Header from '~/component/Layout/Header/Header';
import UserMenu from '~/component/Menu/UserMenu/UserMenu';
import { leafHomeLeft, leafHomeRight, SharkProduct } from '~/Images';

function OrderDetail() {
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
                    <div className="px-[30px] mx-auto max-w-[142.7rem] w-[100%]">
                        <div className="flex justify-start gap-[20px]">
                            {/* left */}
                            <UserMenu />
                            {/* right */}
                            <div className="flex flex-col items-start w-[1000px]">
                                {/* //item */}
                                <div className="w-[100%] h-[64px] px-3.5 py-5 bg-white rounded-xl justify-between items-center inline-flex overflow-hidden">
                                    <div className="justify-start items-center gap-3 cursor-pointer flex ml-[10px] ">
                                        <div className="rotate-180">
                                            <ArrowLeftBlack />
                                        </div>

                                        <div className="text-right text-[#494949] text-[16px] font-normal leading-tight">
                                            Quay lại đơn hàng
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <span className="text-[#494949] text-[18px] font-medium leading-snug">
                                            Mã đơn hàng #992659404 |{' '}
                                        </span>
                                        <span className="text-[#009383] text-[18px] font-medium leading-snug">
                                            Đơn hàng đang được giao
                                        </span>
                                    </div>
                                </div>
                                {/* //item */}
                                <div className="w-[100%] h-[167px]  mt-[16px] justify-start items-start gap-6 inline-flex">
                                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                                        <div className="text-[#494949] text-[17px] font-medium uppercase leading-tight">
                                            thông tin người nhận
                                        </div>
                                        <div className="pl-4 pr-5 pt-5 pb-[42px] bg-white rounded-xl border justify-start items-center inline-flex overflow-hidden">
                                            <div className="self-stretch flex-col justify-start items-start gap-3 inline-flex">
                                                <div className="text-[#373737] text-[15px] font-bold leading-[21px]">
                                                    KHẮC HUY
                                                </div>
                                                <div className="w-[306px] text-[#494949] text-[15px] font-normal leading-[21px]">
                                                    Địa chỉ: Alta Media 220/54 Âu Cơ, Phường 09, Quận Tân Bình, Hồ Chí
                                                    Minh, Việt Nam
                                                </div>
                                                <div className="text-[#494949] text-[15px] font-normal font-['Montserrat'] leading-[21px]">
                                                    Điện thoại: 0978603870
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex">
                                        <div className="text-[#494949] text-[17px] font-medium uppercase leading-tight">
                                            Hình thức giao hàng
                                        </div>
                                        <div className="pl-4 pr-16 pt-5 pb-6 bg-white rounded-xl border justify-start items-center inline-flex overflow-hidden">
                                            <div className="self-stretch flex-col justify-start items-start gap-3 inline-flex">
                                                <div className="justify-start items-center gap-1.5 inline-flex">
                                                    <div className="w-7 h-[27px] relative  overflow-hidden" />
                                                    <div className="text-[#373737] text-[16px] font-bold leading-[21px]">
                                                        Giao Siêu Tốc
                                                    </div>
                                                </div>
                                                <div className="text-[#494949] text-[16px] font-normal leading-[21px]">
                                                    Giao đúng chiều thứ 3, 14h - 18h, 12/09
                                                </div>
                                                <div className="text-[#494949] text-[16px] font-normal leading-[21px]">
                                                    Được giao bởi GHTK
                                                </div>
                                                <div className="text-[#494949] text-[16px] font-normal leading-[21px]">
                                                    Miễn phí vận chuyển
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="grow shrink basis-0 flex-col justify-start items-start gap-4 inline-flex w-[100%]">
                                        <div className="text-[#494949] text-[17px] font-medium uppercase leading-tight">
                                            Hình thức giao hàng
                                        </div>
                                        <div className="h-[140px] pl-4 pt-5 pb-[109px] text-[#494949] text-[16px] font-normal leading-[21px]  bg-white rounded-xl border justify-start items-center inline-flex overflow-hidden w-[100%]">
                                            Thanh toán khi nhận hàng
                                        </div>
                                    </div>
                                </div>
                                {/* //item */}
                                <div className="w-[100%] min-h-[630px] relative bg-white rounded-xl  overflow-hidden mt-[50px]">
                                    <div className="h-[60px] w-[100%] pl-6 pr-[58px] left-0 top-0 absolute bg-[#009383] rounded-xl justify-start items-center gap-[416px] inline-flex overflow-hidden">
                                        <div className="text-white text-[19px]  font-semibold leading-normal">
                                            Tên sản phẩm
                                        </div>
                                        <div className="self-stretch justify-end items-center gap-[43px] inline-flex">
                                            <div className="text-center text-white text-[19px] font-semibold leading-normal">
                                                Số lượng
                                            </div>
                                            <div className="text-center text-white text-[19px] font-semibold leading-normal">
                                                Giá
                                            </div>
                                            <div className="text-center text-white text-[19px] font-semibold leading-normal">
                                                Giảm giá
                                            </div>
                                            <div className="text-center text-white text-[19px] font-semibold leading-normal">
                                                Thành tiền
                                            </div>
                                        </div>
                                    </div>
                                    <div className="left-[24px] top-[84px] absolute justify-start items-center gap-4 inline-flex">
                                        <img className="w-[122px] h-[107px] object-cover" src={SharkProduct} />
                                        <div className="flex-col justify-start items-start gap-3 inline-flex">
                                            <div className="flex-col justify-start items-start gap-4 flex">
                                                <div className="w-[299px] text-[#373737] text-[18px] font-semibold leading-normal">
                                                    Multipurpose container Shark
                                                </div>
                                            </div>
                                            <div className="w-[180px] text-[#505050] text-[16px] font-normal leading-7">
                                                Phân loại: Trắng | S
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[497px] h-[13px] left-[559px] top-[131px] absolute">
                                        <div className="left-[20px] top-0 absolute text-center text-[#494949] text-[18px] font-normal font-['Montserrat'] leading-normal">
                                            1
                                        </div>
                                        <div className="left-[102px] top-0 absolute text-center text-[#494949] text-[18px] font-normal font-['Montserrat'] leading-normal">
                                            800.000đ
                                        </div>
                                        <div className="left-[220px] top-0 absolute text-center text-[#494949] text-[18px] font-normal font-['Montserrat'] leading-normal">
                                            0đ
                                        </div>
                                        <div className="left-[320px] top-0 absolute text-center text-[#494949] text-[18px] font-normal font-['Montserrat'] leading-normal">
                                            800.000đ
                                        </div>
                                    </div>
                                    <div className="w-[1053px] h-[0px] left-[24px] top-[215px] absolute border border-[#dbdbdb]"></div>
                                    <div className="left-[24px] top-[239px] absolute justify-start items-center gap-4 inline-flex">
                                        <img className="w-[122px] h-[107px] object-cover" src={SharkProduct} />
                                        <div className="flex-col justify-start items-start gap-3 inline-flex">
                                            <div className="flex-col justify-start items-start gap-4 flex">
                                                <div className="w-[299px] text-[#373737] text-[18px] font-semibold leading-normal">
                                                    Multipurpose container Shark
                                                </div>
                                            </div>
                                            <div className="w-[180px] text-[#505050] text-[16px] font-normal leading-7">
                                                Phân loại: Trắng | S
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-[497px] h-[13px] left-[559px] top-[280px] absolute">
                                        <div className="left-[20px] top-0 absolute text-center text-[#494949] text-[18px] font-normal font-['Montserrat'] leading-normal">
                                            1
                                        </div>
                                        <div className="left-[102px] top-0 absolute text-center text-[#494949] text-[18px] font-normal font-['Montserrat'] leading-normal">
                                            800.000đ
                                        </div>
                                        <div className="left-[220px] top-0 absolute text-center text-[#494949] text-[18px] font-normal font-['Montserrat'] leading-normal">
                                            0đ
                                        </div>
                                        <div className="left-[320px] top-0 absolute text-center text-[#494949] text-[18px] font-normal font-['Montserrat'] leading-normal">
                                            800.000đ
                                        </div>
                                    </div>

                                    <div className="h-[130p] w-[300px] left-[650px] top-[402px] absolute flex-col justify-start items-start gap-6 inline-flex">
                                        <div className="self-stretch justify-between items-start inline-flex">
                                            <div className="text-[#494949] text-[18px] font-normal leading-normal">
                                                Tạm tính
                                            </div>
                                            <div className="text-[#494949] text-[18px] font-normal leading-normal">
                                                1.600.000đ
                                            </div>
                                        </div>
                                        <div className="self-stretch justify-between items-start inline-flex">
                                            <div className="text-[#494949] text-[18px] font-normal leading-normal">
                                                Phí giao hàng
                                            </div>
                                            <div className="text-right text-[#494949] text-[18px] font-normal leading-normal">
                                                0đ
                                            </div>
                                        </div>
                                        <div className="self-stretch justify-between items-start inline-flex">
                                            <div className="text-[#494949] text-[18px] font-normal leading-normal">
                                                Khuyến mãi vận chuyển
                                            </div>
                                            <div className="text-right text-[#494949] text-[18px] font-normal leading-normal">
                                                0đ
                                            </div>
                                        </div>
                                        <div className="self-stretch justify-between items-start inline-flex">
                                            <div className="text-[#494949] text-[18px] font-normal leading-normal">
                                                Giảm giá
                                            </div>
                                            <div className="text-right text-[#494949] text-[18px] font-normal leading-normal">
                                                0đ
                                            </div>
                                        </div>
                                        <div className="self-stretch justify-between items-start inline-flex">
                                            <div className="text-[#009383] text-[18px] font-bold leading-normal">
                                                Tổng thanh toán
                                            </div>
                                            <div className="text-right text-[#009383] text-[18px] font-bold leading-normal">
                                                1.600.000đ
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OrderDetail;
