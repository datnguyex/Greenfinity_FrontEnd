import { ArrowIntoHaftSquare, Cart, ArrowDown, GoldCoin, SubNavbar } from '~/component/Icon';
import { Headerleft, logoTitle, UserHeader } from '~/Images';
function Header() {
    return (
        <>
            <div className="flex flex-col z-[100] fixed translate-x-[-50%] left-[50%] items-center w-[95%]">
                {/* fiter-header */}
                <div className="mt-10 z-50 rounded-xl  w-[100%] h-[64px] flex bg-transparent ">
                    <img className="" src={Headerleft} alt="" />
                    <div className="flex items-center justify-between w-[100%] bg-white h-full relative border-b-[0.45rem] border-solid border-[#e0e0e0]">
                        <img className="h-[118%] w-[auto] translate-y-[0%]" src={logoTitle} alt="" />
                        <div className="items-center flex  h-[100%] w-[50%] justify-center">
                            <ul className="flex flex-row justify-between list-none m-0 p-0">
                                <li className="">
                                    <a
                                        className="hover:text-[#009383] text-[1.6rem] px-[1.6rem] py-[1.2rem] text-[#494949] font-bold space: text-nowrap uppercase transition duration-200"
                                        href=""
                                    >
                                        TRANG CHỦ
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="hover:text-[#009383] text-[1.6rem] px-[1.6rem] py-[1.2rem] text-[#494949] font-bold space: text-nowrap uppercase transition duration-200"
                                        href=""
                                    >
                                        THẾ GIỚI TÁI SINH
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className=" hover:text-[#009383] text-[1.6rem] px-[1.6rem] py-[1.2rem] text-[#494949] font-bold space: text-nowrap uppercase transition duration-200"
                                        href=""
                                    >
                                        THANG ĐÓNG GÓP
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="hover:text-[#009383] text-[1.6rem] px-[1.6rem] py-[1.2rem] text-[#494949] font-bold space: text-nowrap uppercase transition duration-200"
                                        href=""
                                    >
                                        BẢN ĐỒ
                                    </a>
                                </li>
                                <li>
                                    <a
                                        className="hover:text-[#009383] text-[1.6rem] px-[1.6rem] py-[1.2rem] text-[#494949] font-bold space: text-nowrap uppercase transition duration-200"
                                        href=""
                                    >
                                        MINI GAME
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* <div className="mr-5">
                            <button className="bg-[#009383] border border-solid flex justify-center items-center aborder-white rounded-lg text-[#fff] px-[12px] py-[12px] text-[20px] font-semibold leading-6 gap-1">
                                <span>
                                    <ArrowIntoHaftSquare />
                                </span>
                                Đăng nhập
                            </button>
                        </div> */}

                        <div className=" mr-5 flex gap-[16px] items-center">
                            <div className="relative cursor-pointer">
                                <span className="">
                                    <Cart />
                                </span>
                                <div
                                    className="absolute right-[-4px] top-[-2px] text-[#FFFFFF] w-[12px] h-[12px] font-bold text-[11px] object-cover 
                                leading-[14.06px] rounded-[100%] bg-[#FF0B00] border-[1px]
                                 border-[#ffff] flex justify-center items-center"
                                >
                                    2
                                </div>
                            </div>
                            <div className="flex gap-[9px]">
                                <div className="cursor-pointer relative bg-white border-[2px] w-[44px] h-[44px] border-[#33A99C] rounded-full">
                                    <img
                                        className="absolute  w-full h-full object-contain rounded-full"
                                        src={UserHeader}
                                        alt="User"
                                    />
                                </div>
                                <div className="flex flex-col items-start justify-center">
                                    <div className="gap-[11px] flex items-center">
                                        <span className="cursor-pointer text-[20px] leading-6 font-semibold text-[#009383]">
                                            Tuyết Anh
                                        </span>
                                        <span className="cursor-pointer">
                                            <ArrowDown />
                                        </span>
                                    </div>
                                    <div className="gap-[8px] flex items-center mt-[5px]">
                                        <span className="cursor-pointer text-[#494949] leading-[18.75px] text-[16px] font-medium">
                                            250
                                        </span>
                                        <span className="cursor-pointer">
                                            <GoldCoin />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="scale-x-[-1]" src={Headerleft} alt="" />
                </div>
                <div className="w-[97%] flex max-h-[72px] mt-[-10px] relative overflow-hidden">
                    <SubNavbar />
                    <div className="absolute inset-0 flex h-[100%] justify-center items-center gap-[32px] flex-nowrap">
                        <p className="cursor-pointer px-[4px] py-[14px] font-bold items-center text-[16px] leading-[18.75px] text-[#494949]">
                            CỬA HÀNG
                        </p>
                        <p className="cursor-pointer px-[4px] py-[14px] font-bold text-[16px] leading-[18.75px] text-[#494949]">
                            CÂU CHUYỆN
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Header;
