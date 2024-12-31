type AddressFormProps = {
    handlelTypeDisplay: (value: string) => void;
};
function DeleteAdress({ handlelTypeDisplay }: AddressFormProps) {
    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-[100] "></div>
            <div
                className="w-[356px] h-[164px] pl-[49px] pr-12 pt-10 pb-[39px] bg-white rounded-xl
             justify-center items-center inline-flex overflow-hidden mx-auto fixed z-[100] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
            >
                <div className="self-stretch flex-col justify-center items-center gap-5 inline-flex">
                    <div className="flex-col justify-start items-center gap-2 flex">
                        <div className="text-center text-[#494949] text-[17px] font-normal font-['Roboto'] leading-tight">
                            Bạn có muốn xóa địa chỉ này không?
                        </div>
                    </div>
                    <div className="justify-center items-center gap-4 inline-flex">
                        <div className="w-[100px] h-11 px-6 py-7 bg-[#f0f0f0] rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] justify-center items-center gap-2 flex">
                            <div
                                onClick={() => handlelTypeDisplay('')}
                                className="text-[#494949] text-[18px] cursor-pointer font-medium font-['Roboto']"
                            >
                                Hủy
                            </div>
                        </div>
                        <div className="w-[100px] h-11 px-6 py-7 cursor-pointer bg-[#ff4343] rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] justify-center items-center gap-2 flex overflow-hidden">
                            <div className="text-white text-[18px] font-semibold font-['Roboto']">Xóa</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DeleteAdress;
