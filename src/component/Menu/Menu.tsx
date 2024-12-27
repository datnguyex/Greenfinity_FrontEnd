import {
    ArrowLeftBlack,
    ArrowLeftRed,
    ArrowLeftWhite,
    CartWhite,
    LogoutRed,
    ThreeDrawCabinet,
    UserGreen,
} from '../Icon';

function Menu() {
    return (
        <div className="w-[342px] h-[230px] p-4 bg-white rounded-xl shadow-[0px_2px_19.700000762939453px_0px_rgba(0,0,0,0.07)] border border-[#009383] flex-col justify-center items-start gap-3 inline-flex overflow-hidden">
            <div className="self-stretch cursor-pointer h-12 px-4 py-7 bg-[#f6f6f6] rounded-lg border justify-between items-center inline-flex">
                <div className="justify-start items-center gap-2 flex">
                    <div className="w-[35px]">
                        <UserGreen />
                    </div>
                    <div className="text-[#505050] text-[18px] font-semibold font-['Roboto']">Thông tin cá nhân</div>
                </div>
                <ArrowLeftBlack />
            </div>
            <div className="self-stretch cursor-pointer h-12 px-4 py-7 bg-[#009383] rounded-lg border justify-between items-center inline-flex">
                <div className="h-7 justify-start items-center gap-2 flex">
                    <div className="w-[35px]">
                        <CartWhite />
                    </div>

                    <div className="text-white text-[18px] font-semibold font-['Roboto']">Đơn hàng của tôi</div>
                </div>
                <ArrowLeftWhite />
            </div>
            <div className="self-stretch cursor-pointer h-12 px-4 py-7 bg-[#f6f6f6] rounded-lg border justify-between items-center inline-flex">
                <div className="justify-start items-center gap-2 flex">
                    <div className="w-[35px]">
                        <ThreeDrawCabinet />
                    </div>

                    <div className="text-[#505050] text-[18px] font-semibold font-['Roboto']">Sản phẩm của tôi</div>
                </div>
                <ArrowLeftBlack />
            </div>
            <div className="self-stretch cursor-pointer h-12 px-4 py-7 rounded-lg border border-[#ff4343] justify-between items-center inline-flex">
                <div className="justify-start items-center gap-2.5 flex">
                    <div className="w-[35px]">
                        <LogoutRed />
                    </div>

                    <div className="text-[#ff4343] text-[18px] font-semibold font-['Roboto']">Đăng xuất</div>
                </div>
                <ArrowLeftRed />
            </div>
        </div>
    );
}

export default Menu;
