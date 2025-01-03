import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

function ProductMenu() {
    const { t } = useTranslation(['ProductMenu']);
    const languageState = useSelector((state: any) => state.language.language);
    const { i18n } = useTranslation();

    const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({
        sort: false,
        collection: false,
        category: false,
        price: false,
        color: false,
        size: false,
    });
    const toggleDropdown = (key: string) => {
        setIsOpen((prevState) => ({
            ...prevState,
            [key]: !prevState[key], // Mở/đóng dropdown theo key của value
        }));
    };

    useEffect(() => {
        i18n.changeLanguage(languageState);
    }, [languageState]);
    return (
        <>
            <div className="w-[342px]  flex-col justify-start items-center inline-flex">
                <div className="self-stretch min-h-[400px] px-[25px] py-10 bg-white rounded-2xl shadow-lg border border-[#009383] flex-col justify-start items-start gap-8 inline-flex overflow-hidden">
                    <div className="text-[#494949] text-[24px] font-bold ">{t('FilterProduct')}</div>

                    <div className="flex-col justify-start gap-4 flex">
                        {/* Input Tìm kiếm */}
                        <div className="self-stretch h-12 pl-3 pr-4 py-2.5 bg-white rounded-md border border-[#c2c2c2] justify-between items-center inline-flex overflow-hidden">
                            <input
                                placeholder={t('search')}
                                className="text-[#666666] text-[16px] font-normal outline-none w-[100%] h-[100%]"
                            />
                            {/* Giả sử bạn đã tạo hoặc sử dụng một component <SearchGreen /> */}
                            <div className="w-5 h-5 relative"></div>
                        </div>

                        {/* Dropdown: Sắp xếp */}
                        <div className="flex-col justify-start items-center cursor-pointer gap-1.5 flex relative">
                            <div
                                onClick={() => toggleDropdown('sort')}
                                className="w-[292px] px-4 py-3 bg-[#f6f6f6] rounded-xl border justify-between items-center inline-flex"
                            >
                                <div className="text-[#494949] text-[18px] font-semibold ">{t('arrange')}</div>
                                <div className="w-6 h-6 relative mr-[10px] flex items-center">
                                    {/* Giả sử bạn đã tạo hoặc sử dụng một component <PlustGreen /> */}
                                    <div className="w-5 h-5"></div>
                                </div>
                            </div>
                            {isOpen.sort && (
                                <div className="mt-2 w-[292px] bg-white shadow-lg  z-[10] rounded-xl border p-3 transition duration-300 ease-in-out transform">
                                    <div
                                        className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                        onClick={() => console.log('Sắp xếp tăng dần')}
                                    >
                                        {t('Newest')}
                                    </div>
                                    <div
                                        className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                        onClick={() => console.log('Sắp xếp giảm dần')}
                                    >
                                        {t('Oldes')}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Dropdown: Phân loại */}
                        <div className="flex-col justify-start items-center cursor-pointer gap-1.5 flex relative">
                            <div
                                onClick={() => toggleDropdown('category')}
                                className="w-[292px] px-4 py-3 bg-[#f6f6f6] rounded-xl border justify-between items-center inline-flex"
                            >
                                <div className="text-[#494949] text-[18px] font-semibold ">{t('classify')}</div>
                                <div className="w-6 h-6 relative mr-[10px] flex items-center">
                                    {/* Giả sử bạn đã tạo hoặc sử dụng một component <PlustGreen /> */}
                                    <div className="w-5 h-5"></div>
                                </div>
                            </div>
                            {isOpen.category && (
                                <div className="mt-2 w-[292px] bg-white shadow-lg  z-[10] rounded-xl border p-3 transition duration-300 ease-in-out transform">
                                    <div
                                        className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                        onClick={() => console.log('Sắp xếp tăng dần')}
                                    >
                                        {t('All')}
                                    </div>
                                    <div
                                        className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                        onClick={() => console.log('Sắp xếp tăng dần')}
                                    >
                                        Art toy
                                    </div>
                                    <div
                                        className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                        onClick={() => console.log('Sắp xếp giảm dần')}
                                    >
                                        House hold
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Dropdown: Giá */}
                        <div className="flex-col justify-start items-center cursor-pointer gap-1.5 flex relative">
                            <div
                                onClick={() => toggleDropdown('price')}
                                className="w-[292px] px-4 py-3 bg-[#f6f6f6] rounded-xl border justify-between items-center inline-flex"
                            >
                                <div className="text-[#494949] text-[18px] font-semibold ">{t('Price')}</div>
                                <div className="w-6 h-6 relative mr-[10px] flex items-center">
                                    {/* Giả sử bạn đã tạo hoặc sử dụng một component <PlustGreen /> */}
                                    <div className="w-5 h-5"></div>
                                </div>
                            </div>
                            {isOpen.price && (
                                <div className="mt-2 w-[292px] bg-white shadow-lg  z-[10] rounded-xl border p-3 transition duration-300 ease-in-out transform">
                                    <div
                                        className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                        onClick={() => console.log('Sắp xếp tăng dần')}
                                    >
                                        {t('AscendingOrder')}
                                    </div>
                                    <div
                                        className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                        onClick={() => console.log('Sắp xếp giảm dần')}
                                    >
                                        {t('DescendingOrder')}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Dropdown: Màu sắc */}
                        <div className="flex-col justify-start items-center cursor-pointer gap-1.5 flex relative">
                            <div
                                onClick={() => toggleDropdown('color')}
                                className="w-[292px] px-4 py-3 bg-[#f6f6f6] rounded-xl border justify-between items-center inline-flex"
                            >
                                <div className="text-[#494949] text-[18px] font-semibold "> {t('Color')}</div>
                                <div className="w-6 h-6 relative mr-[10px] flex items-center">
                                    {/* Giả sử bạn đã tạo hoặc sử dụng một component <PlustGreen /> */}
                                    <div className="w-5 h-5"></div>
                                </div>
                            </div>
                            {isOpen.color && (
                                <div className="mt-2 w-[292px] bg-white shadow-lg  z-[10] rounded-xl border p-3 transition duration-300 ease-in-out transform">
                                    <div
                                        className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                        onClick={() => console.log('Sắp xếp tăng dần')}
                                    >
                                        {t('light')}
                                    </div>
                                    <div
                                        className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                        onClick={() => console.log('Sắp xếp giảm dần')}
                                    >
                                        {t('dark')}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="flex-col justify-start items-center cursor-pointer gap-1.5 flex relative">
                            <div
                                onClick={() => toggleDropdown('size')}
                                className="w-[292px] px-4 py-3 bg-[#f6f6f6] rounded-xl border justify-between items-center inline-flex"
                            >
                                <div className="text-[#494949] text-[18px] font-semibold "> {t('size')}</div>
                                <div className="w-6 h-6 relative mr-[10px] flex items-center">
                                    {/* Giả sử bạn đã tạo hoặc sử dụng một component <PlustGreen /> */}
                                    <div className="w-5 h-5"></div>
                                </div>
                            </div>
                            {isOpen.size && (
                                <div className="mt-2 w-[292px] bg-white shadow-lg  z-[10] rounded-xl border p-3 transition duration-300 ease-in-out transform">
                                    <div
                                        className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                        onClick={() => console.log('Sắp xếp tăng dần')}
                                    >
                                        Size S
                                    </div>
                                    <div
                                        className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                        onClick={() => console.log('Sắp xếp tăng dần')}
                                    >
                                        Size M
                                    </div>
                                    <div
                                        className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                        onClick={() => console.log('Sắp xếp tăng dần')}
                                    >
                                        Size L
                                    </div>
                                    <div
                                        className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                        onClick={() => console.log('Sắp xếp tăng dần')}
                                    >
                                        Size XL
                                    </div>
                                    <div
                                        className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                        onClick={() => console.log('Sắp xếp tăng dần')}
                                    >
                                        Size XXL
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductMenu;
