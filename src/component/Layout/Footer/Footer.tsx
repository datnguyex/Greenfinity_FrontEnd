import { LogoFooterText, LogoFooterImages, Facebook, Messenger, Youtube } from '~/component/Icon'; // Đảm bảo import đúng tên component

function Footer() {
    return (
        <>
            <div className="w-[100%] bg-white h-[341px] fiter-footer">
                <div className="flex items-center justify-center gap-[140px] h-[78%]">
                    <div className="max-w-[342px] max-h-[170.55px] gap-[20px] flex flex-col">
                        <div className="cursor-pointer flex items-center">
                            <LogoFooterImages />
                            <LogoFooterText />
                        </div>
                        <div>
                            <p className="font-normal text-[16px] skew-x-[-3deg] text-[#494949]">
                                Xuất hiện vào năm 2023, chúng tôi mang đến một giải pháp bảo vệ môi trường tốt nhất.
                                Chúng tôi mong rằng Trái Đất trong tương lai sẽ trở nên xanh - sạch - đẹp.
                            </p>
                        </div>
                    </div>
                    <div className="text-[#494949] leading-[25.78px] text-[22px] font-bold flex flex-col justify-center items-center gap-[32px]">
                        <div className="flex gap-[32px]">
                            <h4 className="cursor-pointer">Trạm GreeZ</h4>
                            <h4 className="cursor-pointer">Thế giới tái sinh</h4>
                            <h4 className="cursor-pointer">Thang đóng góp</h4>
                            <h4 className="cursor-pointer">Bản Đồ</h4>
                            <h4 className="cursor-pointer">MINI GAME</h4>
                        </div>
                        <div className="flex gap-[32px]">
                            <h4 className="cursor-pointer">Cửa hàng</h4>
                            <h4 className="cursor-pointer">Câu chuyện</h4>
                        </div>
                    </div>
                </div>
                <div className=" border-t-[#DBDBDB] border-solid border-[1px] h-[22%] flex items-center justify-around">
                    <p className="font-normal text-[16px] leading-[18.75px] text-[#929292]">
                        Copyright © by Alta Plastics and Unigons Vietnam Limited. All rights reserved.
                    </p>
                    <div className="flex items-center gap-[20px]">
                        <span className="cursor-pointer">
                            <Facebook />
                        </span>
                        <span className="cursor-pointer">
                            <Messenger />
                        </span>
                        <span className="cursor-pointer">
                            <Youtube />
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
