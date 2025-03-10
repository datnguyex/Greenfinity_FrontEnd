import { Link } from 'react-router-dom';
import { ArrowDown, Cart, GoldCoin } from '~/assets/Icons';

function UserInfomation({ UserInfoState }: any) {
    return (
        <>
            <Link to="/gio-hang" className="relative cursor-pointer">
                <Cart />
                <div className="absolute right-[-4px] top-[-2px] text-[#FFFFFF] w-[12px] h-[12px] font-bold text-[11px] bg-[#FF0B00] rounded-full border-[1px] border-[#fff] flex justify-center items-center">
                    2
                </div>
            </Link>
            <div className="flex gap-[9px]">
                <Link
                    to="/trang-ca-nhan"
                    className="cursor-pointer relative bg-white border-[2px] w-[44px] h-[44px] border-[#33A99C] rounded-full"
                >
                    <img
                        className="absolute w-full h-full object-contain rounded-full"
                        src={UserInfoState.image}
                        alt="User"
                    />
                </Link>
                <div className="flex flex-col items-start justify-center">
                    <Link to="/trang-ca-nhan" className="gap-[11px] flex items-center">
                        <span className="cursor-pointer text-[20px] font-semibold text-[#009383]">
                            {UserInfoState.fullName}
                        </span>
                        <ArrowDown />
                    </Link>
                    <div className="gap-[8px] flex items-center mt-[5px]">
                        <span className="cursor-pointer text-[#494949] text-[16px] font-medium">0</span>
                        <GoldCoin />
                    </div>
                </div>
            </div>
        </>
    );
}

export default UserInfomation;
