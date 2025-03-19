import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { PlustGreen, SearchGreen } from '~/assets/Icons';
import { LanguageSwitcher } from '~/CustomHooks/LanguageSwitcher';

function ProductMenu() {
    //use languages
    const { t } = useTranslation(['ProductMenu']);
    LanguageSwitcher();

    //open type item menu state
    const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({
        sort: false,
        collection: false,
        category: false,
        price: false,
        color: false,
        size: false,
    });

    //items in menu state
    const [items, setItems] = useState({
        Arrange: null,
        Classify: null,
        Price: null,
        Color: null,
        Size: null,
    });

    // OnClick functions for dropdowns
    const handleSetItems = (key: keyof typeof items, value: string) => {
        setItems((prevItems) => ({
            ...prevItems,
            [key]: value,
        }));
    };

    const handleArrangeClick = (value: string) => {
        handleSetItems('Arrange', value);
    };

    const handleClassifyClick = (value: string) => {
        handleSetItems('Classify', value);
    };

    const handlePriceClick = (value: string) => {
        handleSetItems('Price', value);
    };

    const handleColorClick = (value: string) => {
        handleSetItems('Color', value);
    };

    const handleSizeClick = (value: string) => {
        handleSetItems('Size', value);
    };

    // close/open dropdown
    const toggleDropdown = (key: string) => {
        setIsOpen((prevState) => ({
            ...prevState,
            [key]: !prevState[key],
        }));
    };

    console.log('items', items);

    return (
        <>
            <div className="w-[20%] flex-col justify-start items-center inline-flex">
                <div className="self-stretch px-[25px] py-10 bg-white rounded-2xl shadow-lg border border-[#009383] flex-col justify-start items-start gap-8 inline-flex overflow-hidden">
                    <div className="text-[#494949] text-[24px] font-bold ">{t('FilterProduct')}</div>
                    <div className="flex-col justify-start gap-4 flex w-full">
                        {/* Input search */}
                        <div className="self-stretch h-12 pl-3 pr-4 py-2.5 bg-white rounded-md border border-[#c2c2c2] justify-between items-center inline-flex overflow-hidden">
                            <input
                                placeholder={t('search')}
                                className="text-[#666666] text-[16px] font-normal outline-none w-[100%] h-[100%]"
                            />
                            <SearchGreen />
                        </div>

                        {/* Dropdown: arrange */}
                        <div className="flex-col justify-start items-center cursor-pointer gap-1.5 flex relative">
                            <div
                                onClick={() => toggleDropdown('sort')}
                                className="w-full px-4 py-3 bg-[#f6f6f6] rounded-xl border justify-between items-center inline-flex"
                            >
                                <div className="text-[#494949] text-[18px] font-semibold ">
                                    {items.Arrange ? items.Arrange : t('Arrange')}
                                </div>
                                <div className="w-6 h-6 relative mr-[10px] flex items-center">
                                    <PlustGreen />
                                </div>
                            </div>
                            {isOpen.sort && (
                                <div className="mt-2 w-full bg-white shadow-lg z-[10] rounded-xl border p-3 transition duration-300 ease-in-out transform">
                                    <div
                                        className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                        onClick={() => handleArrangeClick('Newest')} // Set value to 'Newest'
                                    >
                                        {t('Newest')}
                                    </div>
                                    <div
                                        className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                        onClick={() => handleArrangeClick('Oldest')} // Set value to 'Oldest'
                                    >
                                        {t('Oldest')}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Dropdown: classify */}
                        <div className="flex-col justify-start items-center cursor-pointer gap-1.5 flex relative">
                            <div
                                onClick={() => toggleDropdown('category')}
                                className="w-full px-4 py-3 bg-[#f6f6f6] rounded-xl border justify-between items-center inline-flex"
                            >
                                <div className="text-[#494949] text-[18px] font-semibold ">
                                    {items.Classify ? items.Classify : t('Classify')}
                                </div>
                                <div className="w-6 h-6 relative mr-[10px] flex items-center">
                                    <PlustGreen />
                                </div>
                            </div>
                            {isOpen.category && (
                                <div className="mt-2 w-full bg-white shadow-lg z-[10] rounded-xl border p-3 transition duration-300 ease-in-out transform">
                                    <div
                                        className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                        onClick={() => handleClassifyClick('All')} // Set value to 'All'
                                    >
                                        {t('All')}
                                    </div>
                                    <div
                                        className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                        onClick={() => handleClassifyClick('Art toy')} // Set value to 'Art toy'
                                    >
                                        Art toy
                                    </div>
                                    <div
                                        className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                        onClick={() => handleClassifyClick('House hold')} // Set value to 'House hold'
                                    >
                                        House hold
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Dropdown: price */}
                        <div className="flex-col justify-start items-center cursor-pointer gap-1.5 flex relative">
                            <div
                                onClick={() => toggleDropdown('price')}
                                className="w-full px-4 py-3 bg-[#f6f6f6] rounded-xl border justify-between items-center inline-flex"
                            >
                                <div className="text-[#494949] text-[18px] font-semibold ">
                                    {items.Price ? items.Price : t('Price')}
                                </div>
                                <div className="w-6 h-6 relative mr-[10px] flex items-center">
                                    <PlustGreen />
                                </div>
                            </div>
                            {isOpen.price && (
                                <div className="mt-2 w-full bg-white shadow-lg z-[10] rounded-xl border p-3 transition duration-300 ease-in-out transform">
                                    <div
                                        className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                        onClick={() => handlePriceClick('AscendingOrder')}
                                    >
                                        {t('AscendingOrder')}
                                    </div>
                                    <div
                                        className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                        onClick={() => handlePriceClick('DescendingOrder')}
                                    >
                                        {t('DescendingOrder')}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Dropdown: color */}
                        <div className="flex-col justify-start items-center cursor-pointer gap-1.5 flex relative">
                            <div
                                onClick={() => toggleDropdown('color')}
                                className="w-full px-4 py-3 bg-[#f6f6f6] rounded-xl border justify-between items-center inline-flex"
                            >
                                <div className="text-[#494949] text-[18px] font-semibold ">
                                    {' '}
                                    {items.Color ? items.Color : t('Color')}
                                </div>
                                <div className="w-6 h-6 relative mr-[10px] flex items-center">
                                    <PlustGreen />
                                </div>
                            </div>
                            {isOpen.color && (
                                <div className="mt-2 w-full bg-white shadow-lg z-[10] rounded-xl border p-3 transition duration-300 ease-in-out transform">
                                    <div
                                        className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                        onClick={() => handleColorClick('light')}
                                    >
                                        {t('light')}
                                    </div>
                                    <div
                                        className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                        onClick={() => handleColorClick('dark')}
                                    >
                                        {t('dark')}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Dropdown: size */}
                        <div className="flex-col justify-start items-center cursor-pointer gap-1.5 flex relative">
                            <div
                                onClick={() => toggleDropdown('size')}
                                className="w-full px-4 py-3 bg-[#f6f6f6] rounded-xl border justify-between items-center inline-flex"
                            >
                                <div className="text-[#494949] text-[18px] font-semibold ">
                                    {' '}
                                    {items.Size ? items.Size : t('Size')}
                                </div>
                                <div className="w-6 h-6 relative mr-[10px] flex items-center">
                                    <PlustGreen />
                                </div>
                            </div>
                            {isOpen.size && (
                                <div className="mt-2 w-full bg-white shadow-lg z-[10] rounded-xl border p-3 transition duration-300 ease-in-out transform">
                                    <div
                                        className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                        onClick={() => handleSizeClick('S')}
                                    >
                                        Size S
                                    </div>
                                    <div
                                        className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                        onClick={() => handleSizeClick('M')}
                                    >
                                        Size M
                                    </div>
                                    <div
                                        className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                        onClick={() => handleSizeClick('L')}
                                    >
                                        Size L
                                    </div>
                                    <div
                                        className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                        onClick={() => handleSizeClick('XL')}
                                    >
                                        Size XL
                                    </div>
                                    <div
                                        className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                        onClick={() => handleSizeClick('XXL')}
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
