import { CloseXBlack, CrossHatchedEyes } from '~/component/Icon/Icon';

type AddressFormProps = {
    handlelTypeDisplay: (value: string) => void;
};
function ChangePassword({ handlelTypeDisplay }: AddressFormProps) {
    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-[100]"></div>
            <div className="w-[586px] h-[491px] fixed bg-white rounded-xl  mx-auto left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[100]">
                <div
                    onClick={() => handlelTypeDisplay('')}
                    className="w-6 h-6 left-[546px] top-[16px] absolute cursor-pointer"
                >
                    <CloseXBlack />
                </div>
                <div className="left-[31px] top-[40px] absolute text-[#009383] text-[32px] font-semibold  leading-[38.40px]">
                    Đổi mật khẩu
                </div>
                <div className="left-[31px] top-[91px] absolute flex-col justify-start items-start gap-5 inline-flex">
                    <div className="h-[71px] flex-col justify-start items-start gap-3 flex">
                        <div className="justify-start items-start gap-0.5 inline-flex">
                            <div className="text-center text-[#4d4d4d] text-[17px] font-semibold ">Mật khẩu cũ</div>
                        </div>
                        <div className="w-[524px] h-12 px-4 py-7 bg-[#f9f8f8] rounded-lg border justify-between items-center inline-flex overflow-hidden">
                            <input
                                className="text-[#333] text-[17px] font-normal w-[100%] outline-none bg-transparent"
                                placeholder="Mật khẩu cũ"
                            ></input>
                            <CrossHatchedEyes />
                        </div>
                    </div>
                    <div className="h-[71px] flex-col justify-start items-start gap-3 flex">
                        <div className="justify-start items-start gap-0.5 inline-flex">
                            <div className="text-center text-[#4d4d4d] text-[17px] font-semibold ">Mật khẩu mới</div>
                        </div>
                        <div className="w-[524px] h-12 px-4 py-7 bg-[#f9f8f8] rounded-lg border justify-between items-center inline-flex overflow-hidden">
                            <input
                                className="text-[#333] text-[17px] font-normal w-[100%] outline-none bg-transparent"
                                placeholder="Mật khẩu mới"
                            ></input>
                            <CrossHatchedEyes />
                        </div>
                    </div>
                    <div className="h-[71px] flex-col justify-start items-start gap-3 flex">
                        <div className="justify-start items-start gap-0.5 inline-flex">
                            <div className="text-center text-[#4d4d4d] text-[17px] font-semibold ">
                                Xác nhận mật khẩu mới
                            </div>
                        </div>
                        <div className="w-[524px] h-12 px-4 py-7 bg-[#f9f8f8] rounded-lg border justify-between items-center inline-flex overflow-hidden">
                            <input
                                className="text-[#333] text-[17px] font-normal w-[100%] outline-none bg-transparent"
                                placeholder="Xác nhận mật khẩu mới"
                            ></input>
                            <CrossHatchedEyes />
                        </div>
                    </div>
                    <div className="text-right text-[#33a99c] text-[17px] font-normal cursor-pointer">
                        Quên mật khẩu?
                    </div>
                </div>
                <div className="w-[118px] h-[35px] cursor-pointer px-9 left-[234px] top-[407px] absolute bg-[#009383] rounded-lg justify-center items-center gap-2.5 inline-flex">
                    <div className="text-center text-white text-[20px] font-semibold  leading-normal">Lưu</div>
                </div>
                {/* <div className="w-6 h-6 left-[546px] top-[16px] absolute  overflow-hidden" /> */}
            </div>
        </>
    );
}

export default ChangePassword;
