import { useState } from 'react';
import { AvatarMan2, leafHomeLeft, leafHomeRight } from '~/Images';
import { ImageChoosen, ListCircleAndDash, MagnifyingGlass } from '~/component/Icon';
import Footer from '~/component/Layout/Footer/Footer';
import Header from '~/component/Layout/Header/Header';
import FunList from '~/component/Donation/FundList/FundList';
import Posts from '~/component/Posts/Posts';
function Forum() {
    const [images, setImages] = useState<string[]>([]);

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files; // Get the selected files
        if (files) {
            const newImages: string[] = [];
            // Loop through the files and convert them to base64
            Array.from(files).forEach((file) => {
                const reader: FileReader = new FileReader(); // Explicitly type as FileReader
                reader.onloadend = () => {
                    if (reader.result && typeof reader.result === 'string') {
                        newImages.push(reader.result); // Add image to the array
                        if (newImages.length === files.length) {
                            setImages((prevImages) => [...prevImages, ...newImages]); // Update state
                        }
                    }
                };
                reader.readAsDataURL(file); // Read file as DataURL (base64 string)
            });
        }
    };

    const [useFundList, setUseFundList] = useState(false);

    const disPlayFundList = (value: any) => {
        setUseFundList(value);
    };

    return (
        <>
            <Header />
            {useFundList ? <FunList disPlayFundList={disPlayFundList} /> : ''}

            <div
                className="bg-[#f2fffd] py-[56px] bg-no-repeat bg-[position:0_100%] bg-[size:10%_auto]"
                style={{
                    backgroundImage: `url(${leafHomeLeft}), url(${leafHomeRight})`,
                    backgroundPosition: '0 100%, 100% 100%',
                    backgroundSize: '10% auto, 10% auto',
                }}
            >
                <div className="my-[140px]">
                    {/* //item */}
                    <div className="px-[30px] mx-auto max-w-[132.7rem] w-[100%]">
                        <div className="text-center text-[#009383] text-[64px] font-bold uppercase leading-[76.80px]">
                            Diễn đàn
                        </div>
                        {/* //item */}
                        <div className="h-[58px] w-[100%] justify-center items-start gap-10 inline-flex mt-[50px] mb-[30px] ">
                            <div className="grow shrink basis-0 h-[58px] w-[100%] bg-white rounded-[100px] border border-[#b6b6b6] justify-start items-center gap-2.5 flex">
                                <div className="px-[18px] justify-start items-center gap-2.5 flex w-[100%]">
                                    <MagnifyingGlass />
                                    <input
                                        className="text-black text-[19px] font-normal outline-none w-[100%]"
                                        placeholder=" Tìm kiếm trên diễn đàn"
                                    ></input>
                                </div>
                            </div>
                            <div
                                className="px-4 h-[58px] py-1 bg-[#e3fbff] w-[16%] relative rounded-[100px] border border-[#15bdd6] justify-center items-center gap-5 flex cursor-pointer"
                                onClick={() => disPlayFundList(true)}
                            >
                                <div>
                                    <ListCircleAndDash />
                                </div>
                                <div className="text-center text-[#494949] text-[19px] font-bold ">Danh sách quỹ</div>
                            </div>
                        </div>
                        {/* //item */}
                        <div className="min-h-[160px] w-[100%] p-5 bg-white rounded-3xl shadow-[0px_2px_20px_0px_rgba(0,0,0,0.05)] flex-col justify-start items-start gap-5 inline-flex">
                            <div className="self-stretch justify-start items-start gap-3 inline-flex w-[100%]">
                                <img
                                    className="w-[58px] h-[58px] rounded-full border border-[#dbdbdb]"
                                    src={AvatarMan2}
                                />
                                <div className="grow shrink basis-0 w-[100%] h-[58px] px-[18px] bg-[#f9f9f9] rounded-[100px] justify-between items-center flex">
                                    <input
                                        className="text-[19px] font-normal outline-none bg-transparent w-[100%] text-black"
                                        placeholder="Anh ơi, bạn đang nghĩ gì thế?"
                                    ></input>
                                    <div className="cursor-pointer">
                                        <input
                                            type="file"
                                            id="fileInput"
                                            style={{ display: 'none' }} // Ẩn input file
                                            multiple // Thêm thuộc tính multiple để chọn nhiều ảnh
                                            onChange={handleImageChange}
                                        />
                                        <div onClick={() => document.getElementById('fileInput')?.click()}>
                                            <ImageChoosen />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {images.length > 0 && (
                                <div className="mt-4 flex justify-start items-start gap-2">
                                    {images.map((image, index) => (
                                        <img
                                            key={index}
                                            src={image}
                                            alt={`Selected ${index}`}
                                            className="w-[100px] h-[100px] object-cover rounded-lg"
                                        />
                                    ))}
                                </div>
                            )}
                            <div className="self-stretch h-11 px-6 py-8 cursor-pointer bg-[#009383] rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] justify-center items-center gap-2 inline-flex overflow-hidden">
                                <div className="text-white text-[20px] font-medium ">Đăng</div>
                            </div>
                        </div>
                        {/* //item */}
                        <Posts />
                        <Posts />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Forum;
