import { Link } from 'react-router-dom';
import {
    ArrowLeftBlack,
    ArrowLeftRed,
    ArrowLeftWhite,
    CartWhite,
    LogoutRed,
    ThreeDrawCabinet,
    UserGreen,
} from '../Icon';
import { CartGreen, UserWhite } from '../Icon/Icon';

function Menu(pathName: any) {
    return (
        <div className="w-[342px] h-[230px] p-4 bg-white rounded-xl shadow-[0px_2px_19.700000762939453px_0px_rgba(0,0,0,0.07)] border border-[#009383] flex-col justify-center items-start gap-3 inline-flex overflow-hidden">
            <Link
                to={'/trang-ca-nhan'}
                className={`self-stretch cursor-pointer h-12 px-4 py-7 rounded-lg border justify-between items-center inline-flex 
                 ${pathName.pathName === 'trang-ca-nhan' ? 'bg-[#009383]' : 'bg-[#f6f6f6]'}`}
            >
                <div className="justify-start items-center gap-2 flex">
                    <div className="w-[35px]">
                        {pathName.pathName == 'trang-ca-nhan' ? <UserWhite /> : <UserGreen />}
                    </div>
                    <div
                        className={`text-[18px] font-semibold font-['Roboto'] ${
                            pathName.pathName == 'trang-ca-nhan' ? 'text-white ' : 'text-[#505050]'
                        }`}
                    >
                        Thông tin cá nhân
                    </div>
                </div>
                {pathName.pathName == 'trang-ca-nhan' ? <ArrowLeftWhite /> : <ArrowLeftBlack />}
            </Link>
            <Link
                to={'/don-hang?type=1'}
                className={`self-stretch cursor-pointer h-12 px-4 py-7 rounded-lg border justify-between items-center inline-flex 
                 ${pathName.pathName === 'don-hang' ? 'bg-[#009383]' : 'bg-[#f6f6f6]'}`}
            >
                <div className="justify-start items-center gap-2 flex">
                    <div className="w-[35px]">{pathName.pathName == 'don-hang' ? <CartWhite /> : <CartGreen />}</div>
                    <div
                        className={`text-[18px] font-semibold font-['Roboto'] ${
                            pathName.pathName == 'don-hang' ? 'text-white ' : 'text-[#505050]'
                        }`}
                    >
                        Đơn hàng của tôi
                    </div>
                </div>
                {pathName.pathName == 'don-hang' ? <ArrowLeftWhite /> : <ArrowLeftBlack />}
            </Link>
            <Link
                to={'/san-pham-cua-ban'}
                className={`self-stretch cursor-pointer h-12 px-4 py-7 rounded-lg border justify-between items-center inline-flex 
                 ${pathName.pathName === 'san-pham-cua-ban' ? 'bg-[#009383]' : 'bg-[#f6f6f6]'}`}
            >
                <div className="justify-start items-center gap-2 flex">
                    <div className="w-[35px]">
                        {pathName.pathName == 'san-pham-cua-ban' ? <UserWhite /> : <UserGreen />}
                    </div>
                    <div
                        className={`text-[18px] font-semibold font-['Roboto'] ${
                            pathName.pathName == 'san-pham-cua-ban' ? 'text-white ' : 'text-[#505050]'
                        }`}
                    >
                        Sản phẩm của tôi
                    </div>
                </div>
                {pathName.pathName == 'san-pham-cua-ban' ? <ArrowLeftWhite /> : <ArrowLeftBlack />}
            </Link>
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
