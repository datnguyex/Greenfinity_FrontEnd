import { banner1 } from '~/Images';
function Banner1() {
    return (
        <>
            <div className="h-[1080px] relative">
                <img className="w-[100%] h-[100%]" src={banner1} alt="" />
                <div className="absolute left-[50%] top-[50%] translate-x-[-12%] translate-y-[-50%] max-w-[795px] h-[306px] flex-col justify-start items-start gap-8 inline-flex">
                    <div className="flex-col justify-start items-start gap-6 flex">
                        <div className="justify-start items-center gap-5 inline-flex">
                            <div className="text-white text-[54px] font-extrabold  uppercase leading-[60px]">
                                Hãy hành động hôm nay,
                                <br />
                                kiến tạo trái đất mai sau
                            </div>
                        </div>
                        <p className="text-[19px] leading-[27px] text-[#fff] font-normal">
                            Rác thải trở thành nguồn tài nguyên tái chế nếu bạn biết cách sử dụng đúng cách. Để làm được
                            điều này, chúng ta cần phải có quy trình thu gom – vận chuyển – xử lý rác thải khoa học. Do
                            đó, bạn cần phân loại rác thành các loại: Rác hữu cơ, rác vô cơ và rác tái chế riêng biệt.
                        </p>
                    </div>
                    <button
                        className=" font-bold 
                                        text-[18px] min-w-[14.5rem] bg-[#009383] text-[#fff]
                                        leading-[21.09px]
                                        border-solid 
                                        border-[3px]
                                        rounded-[0.8rem] 
                                        cursor-pointer
                                         text-shadown-banner2
                                        flex justify-center items-center py-[12px] px-[15px]
                                        "
                    >
                        Tìm hiểu thêm
                    </button>
                </div>
            </div>
        </>
    );
}

export default Banner1;
