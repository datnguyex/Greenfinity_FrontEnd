import { banner2 } from '~/Images';
function Banner2() {
    return (
        <>
            <div className="h-[1080px] relative">
                <img className="w-[100%] h-[100%]" src={banner2} alt="" />
                <div
                    className="absolute flex items-center flex-col justify-center text-center w-[45%]
    top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                    <h1 className="text-[5.4rem] mb-[1.6rem] font-extrabold uppercase leading-[120%] text-[#fff]">
                        Một thế giới sạch, vạn tâm hồn trong xanh
                    </h1>
                    <p className="text-[20px] text-[#fff] font-normal leading-[150%] mb-[3.2rem] text-shadown-banner2">
                        Hiện nay, môi trường đang bị ô nhiễm ngày càng nhiều là một trong những vấn đề quan trọng và cần
                        có những biện pháp xử lý kịp thời không chỉ ở Việt Nam mà còn ở trên toàn thế giới.
                    </p>
                    <button
                        className=" font-bold 
        text-[18px] min-w-[14.5rem] bg-[#009383] text-[#fff]
        leading-[21.09px]
        
     border-solid 
     rounded-[0.8rem] border-[1px]
     cursor-pointer
     flex justify-center items-center py-[12px] px-[1px]
     "
                    >
                        Tìm hiểu thêm
                    </button>
                </div>
            </div>
        </>
    );
}

export default Banner2;
