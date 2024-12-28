import { CloseXBlack } from '~/component/Icon';

function Logout() {
    return (
        <>
            {/* Background Overlay */}
            <div className="fixed inset-0 bg-black bg-opacity-50 z-[100]"></div>

            {/* Modal */}
            <div className="w-[400px] h-[226px] bg-white rounded-xl overflow-hidden fixed left-[50%] top-[50%] transform -translate-x-[50%] -translate-y-[50%] z-[101]">
                {/* Modal Content */}
                <div className="flex flex-col justify-center items-center gap-7 h-full px-[35px]">
                    {/* Modal Title and Message */}
                    <div className="flex flex-col justify-start items-center gap-5">
                        <div className="text-center text-[#ff4343] text-[24px] font-bold">Đăng xuất tài khoản</div>
                        <div className="text-center text-[#494949] text-[16px] font-normal leading-tight">
                            Bạn có muốn đăng xuất tài khoản này không?
                        </div>
                    </div>

                    {/* Modal Buttons */}
                    <div className="flex justify-center items-center gap-4">
                        {/* Cancel Button */}
                        <div className="px-6 py-2.5 min-w-[84px] cursor-pointer bg-[#f0f0f0] rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] flex justify-center items-center gap-2">
                            <div className="text-[#333] text-[18px] font-bold">Hủy</div>
                        </div>
                        {/* Logout Button */}
                        <div className="px-6 py-2.5 cursor-pointer bg-[#ff4343] rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] flex justify-center items-center gap-2">
                            <div className="text-white text-[18px] font-bold">Đăng xuất</div>
                        </div>
                    </div>
                </div>

                {/* Close Button (Optional) */}
                <div className="absolute top-2 right-2 cursor-pointer" role="button">
                    <CloseXBlack />
                </div>
            </div>
        </>
    );
}

export default Logout;
