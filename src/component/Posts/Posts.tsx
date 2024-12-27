import { AvatarMan2, AvatarWoman1, capybara } from '~/Images';
import { ImageChoosen, LineComment } from '../Icon';
import { useState } from 'react';
import Donation from '../Donation/Donation/Donation';

function Posts() {
    const [useDonation, setUseDonation] = useState(false);
    const [imagesAnswer, setImagesAnswer] = useState<string[]>([]);
    const disPlayDonation = (value: any) => {
        setUseDonation(value);
    };
    const handleImageAnswer = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files) {
            const newImages: string[] = [];
            // Đọc tất cả các file và chuyển chúng thành base64
            Array.from(files).forEach((file) => {
                const reader = new FileReader();
                reader.onloadend = () => {
                    if (reader.result && typeof reader.result === 'string') {
                        newImages.push(reader.result); // Thêm ảnh vào mảng
                        if (newImages.length === files.length) {
                            setImagesAnswer((prevImages) => [...prevImages, ...newImages]);
                        }
                    }
                };
                reader.readAsDataURL(file);
            });
        }
    };

    return (
        <>
            {useDonation ? <Donation disPlayDonation={disPlayDonation} /> : ''}
            <div className="min-h-[1328px] p-5 bg-white rounded-3xl shadow-[0px_2px_20px_0px_rgba(0,0,0,0.05)] flex-col justify-start items-center gap-5 inline-flex w-full mt-[30px]">
                {/* //bai viet */}
                <div className="self-stretch justify-start items-center gap-2 flex-col">
                    {/* //item */}
                    <div className="h-[58px] justify-start items-center gap-2 inline-flex">
                        <div className="w-[58px] h-[58px] rounded-full border-[1px]  border-solid border-[#dbdbdb]">
                            <img className="w-[100%] h-[100%] object-cover" src={AvatarWoman1} />
                        </div>
                        <div className="flex-col justify-center items-start gap-2.5 inline-flex">
                            <div className="text-[#373737] text-[25px] font-semibold leading-[28.80px] tracking-tight">
                                Tuyết Anh
                            </div>
                            <div className="text-[#929292] text-[17px] font-normal leading-tight tracking-tight">
                                1 ngày
                            </div>
                        </div>
                    </div>
                    {/* //item */}
                    <div className="text-[#494949] text-[18px] font-normal mt-[10px]">
                        Chương trình tháng 10 tiếp tục vận động xin 55 phần quà thăm các cụ gia đình bệnh tật neo đơn
                        hàng tháng. Cũng là hết thúc chương trình tháng 9 xin cảm ơn cô chú anh chị em quý mạnh thường
                        quân, các thành viên nhóm luôn ủng hộ - đồng hành.
                    </div>
                    {/* //item */}
                    <div className="w-full grid grid-cols-2 gap-2 mt-[20px]">
                        <img className="w-full h-auto object-contain" src={capybara} alt="" />
                        <img className="w-full h-auto object-contain" src={capybara} alt="" />
                        <img className="w-full h-auto object-contain" src={capybara} alt="" />
                        <div className="relative">
                            <img className="w-full h-auto object-contain" src={capybara} alt="" />
                            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                            <h1 className="absolute text-[#fff] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-100%] text-[50px]">
                                +4
                            </h1>
                        </div>
                    </div>
                    {/* //item */}
                    <div
                        onClick={() => disPlayDonation(true)}
                        className="h-11 px-6 py-8 cursor-pointer text-center mt-[20px] bg-[#009383] rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] justify-center items-center gap-2 flex overflow-hidden"
                    >
                        <div className="text-white text-[20px] font-medium font-['Roboto']">Quyên góp ngay</div>
                    </div>
                    {/* //item */}
                    <div className="bg-[#B6B6B6] w-[100%] h-[1px] my-[20px]"></div>
                    <div className="cursor-pointer h-3.5 px-5 justify-start items-start gap-2.5 inline-flex m">
                        <div className="text-[#494949] text-[20px] font-semibold leading-normal tracking-tight">
                            Xem thêm (56) bình luận
                        </div>
                    </div>
                    {/* //item */}
                    <div className="h-[207px] justify-start items-start gap-2.5 flex mt-[20px]">
                        <div className="flex flex-col justify-center items-center relative">
                            <img className="w-[38px] h-[38px] rounded-full border border-[#dbdbdb]" src={AvatarMan2} />
                            <div className="flex justify-center items-center ml-[20px]">
                                <LineComment />
                            </div>
                        </div>
                        <div className="flex-col justify-start items-start gap-4 inline-flex">
                            <div className="flex-col justify-start items-start gap-2 flex">
                                <div className="h-[87px] px-[18px] py-4 bg-[#f9f9f9] rounded-2xl flex-col justify-center items-start gap-3 flex">
                                    <div className="text-[#373737] text-[18px] font-semibold font-['Roboto']">
                                        Tuyết Anh
                                    </div>
                                    <div className="self-stretch text-[#494949] text-[16px] font-normal font-['Roboto']">
                                        Tôi đồng ý với tất cả điều khoản và thể lệ tham gia. Nền tảng và thương hiệu
                                        được phép sử dụng thông tin cá nhân tôi đã cung cấp.
                                    </div>
                                </div>
                                <div className="px-[18px] justify-start items-end gap-3 inline-flex">
                                    <div className="text-[#929292] text-[14px] font-normal font-['Roboto']">
                                        12 giờ trước
                                    </div>
                                    <div className="text-[#6d6d6d] text-[14px] font-semibold font-['Roboto']">
                                        Thích
                                    </div>
                                    <div className="text-[#6d6d6d] text-[14px] font-semibold font-['Roboto']">
                                        Phản hồi
                                    </div>
                                </div>
                            </div>
                            <div className="justify-start items-start gap-2.5 inline-flex">
                                <img
                                    className="w-[38px] h-[38px] rounded-full border border-[#dbdbdb]"
                                    src={AvatarMan2}
                                />
                                <div className="flex-col justify-start items-start gap-2 inline-flex">
                                    <div className="h-[68px] px-[18px] py-4 bg-[#f9f9f9] rounded-2xl flex-col justify-center items-start gap-3 flex">
                                        <div className="text-[#373737] text-[18px] font-semibold font-['Roboto']">
                                            Tuyết Anh
                                        </div>
                                        <div className="self-stretch text-[#494949] text-[16px] font-normal font-['Roboto']">
                                            Tôi đồng ý với tất cả điều khoản và thể lệ tham gia
                                        </div>
                                    </div>
                                    <div className="px-[18px] justify-start items-end gap-3 inline-flex">
                                        <div className="text-[#929292] text-[14px] font-normal font-['Roboto']">
                                            12 giờ trước
                                        </div>
                                        <div className="text-[#6d6d6d] text-[14px] font-semibold font-['Roboto']">
                                            Thích
                                        </div>
                                        <div className="text-[#6d6d6d] text-[14px] font-semibold font-['Roboto']">
                                            Phản hồi
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* //viet binh luan */}
                    <div className="h-[58px] justify-start items-start gap-3 inline-flex w-[100%]">
                        <img className="w-[58px] h-[58px] rounded-full border border-[#dbdbdb]" src={AvatarMan2} />
                        <div className="grow shrink basis-0 h-[58px] px-[18px] bg-[#f9f9f9] rounded-[100px] justify-between items-center flex">
                            <input
                                placeholder=" Viết bình luận..."
                                className="text-black text-[18px] font-normal outline-none bg-transparent w-[100%]"
                            ></input>

                            <div
                                className="cursor-pointer"
                                onClick={() => document.getElementById('fileAnswer')?.click()}
                            >
                                <ImageChoosen />
                            </div>
                        </div>

                        <input
                            type="file"
                            id="fileAnswer"
                            style={{ display: 'none' }}
                            multiple
                            onChange={handleImageAnswer}
                        />
                    </div>
                    {imagesAnswer.length > 0 && (
                        <div className="mt-4 flex justify-start items-start gap-2 ml-[70px]">
                            {imagesAnswer.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Selected ${index}`}
                                    className="w-[100px] h-[100px] object-cover rounded-lg"
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Posts;
