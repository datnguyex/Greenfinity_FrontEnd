import Header from '~/Layouts/Header/Header';
import Footer from '~/Layouts/Footer/Footer';
import { Pagination } from 'antd';
import './Item.css';
import { leafHomeLeft, leafHomeRight, MyItem } from '~/assets/Images/';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function Item() {
    const { t } = useTranslation(['CoinHistory']);
    const languageState = useSelector((state: any) => state.language.language);
    const { i18n } = useTranslation();

    const data = [
        { name: 'Jasmine', imageSrc: MyItem },
        { name: 'Lily', imageSrc: MyItem },
        { name: 'Rose', imageSrc: MyItem },
        { name: 'Tulip', imageSrc: MyItem },
        { name: 'Tulip', imageSrc: MyItem },
        { name: 'Tulip', imageSrc: MyItem },
        { name: 'Tulip', imageSrc: MyItem },
        { name: 'Tulip', imageSrc: MyItem },
        { name: 'Tulip', imageSrc: MyItem },
        { name: 'Tulip', imageSrc: MyItem },
        { name: 'Tulip', imageSrc: MyItem },
        { name: 'Tulip', imageSrc: MyItem },
    ];
    const CategoryList = ['Tất cả', 'Trang Phục', 'Pet', 'Tóc', 'Nail', 'Mi'];
    const handlePageChange = (page: any) => {
        console.log(`Current page: ${page}`);
    };
    useEffect(() => {
        i18n.changeLanguage(languageState);
    }, [languageState]);
    return (
        <>
            <Header />
            <div>
                <div
                    className="bg-[#f2fffd] py-[56px] bg-no-repeat bg-[position:0_100%] bg-[size:10%_auto]"
                    style={{
                        backgroundImage: `url(${leafHomeLeft}), url(${leafHomeRight})`,
                        backgroundPosition: '0 100%, 100% 100%',
                        backgroundSize: '10% auto, 10% auto',
                    }}
                >
                    <div className="my-[140px]">
                        <div className="px-[30px] mx-auto max-w-[132.7rem] w-[100%] ">
                            {/* //item */}
                            <div className="text-center text-[#009383] text-[64px] font-bold uppercase leading-[76.80px]">
                                {t('title')}
                            </div>
                            {/* //item */}
                            <div className="w-[1314px] mt-[70px] h-[1272px] relative rounded-[20px] shadow-[0px_2px_40px_0px_rgba(0,0,0,0.10)] border-2 border-[#009383] overflow-hidden">
                                <div className="w-[1006px] h-[70px] left-[154px] top-[24px] absolute justify-center items-center gap-3 inline-flex">
                                    <div className="w-[45.60px] h-[45.60px] relative origin-top-left rotate-90" />

                                    <Pagination
                                        defaultCurrent={1}
                                        total={50}
                                        className="flex mt-[20px] justify-center ant-paginate-category"
                                        itemRender={(current, type, originalElement) => {
                                            if (type === 'page') {
                                                // Repeat custom names when there are more pages than names
                                                const customName = CategoryList[(current - 1) % CategoryList.length];
                                                return <a>{customName}</a>;
                                            }
                                            return originalElement;
                                        }}
                                        onChange={handlePageChange}
                                    />
                                </div>
                                <div className="w-[1136px] left-[89px] top-[118px] absolute justify-center items-center gap-6 inline-flex flex-wrap">
                                    {data.map((item, index) => (
                                        <div
                                            key={index}
                                            className="w-[260px] h-[340px] relative bg-white rounded-xl shadow-[0px_0px_10.325122833251953px_0px_rgba(8,15,52,0.08)] overflow-hidden"
                                        >
                                            <div className="w-[260px] h-[279px] pl-[66px] pr-[66.23px] pt-[46px] pb-[45.21px] left-0 top-0 absolute border-b border-[#009383] flex-col justify-center items-center inline-flex overflow-hidden">
                                                <div className="self-stretch grow shrink basis-0 pt-[17.22px] pb-[5.04px] flex-col justify-end items-center inline-flex">
                                                    <img
                                                        className="w-[209.32px] h-[165.52px]"
                                                        src={item.imageSrc}
                                                        alt={item.name}
                                                    />
                                                </div>
                                            </div>
                                            <div className="left-[76px] top-[237px] absolute" />
                                            <div className="left-[85px] top-[300px] absolute text-center text-[#009383] text-xl font-bold font-['Inter'] uppercase leading-normal">
                                                {item.name}
                                            </div>
                                        </div>
                                    ))}
                                    {/* //item */}
                                    <Pagination
                                        defaultCurrent={1}
                                        total={30}
                                        className="flex mt-[20px] justify-center ant-paginate-contribute"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Item;
