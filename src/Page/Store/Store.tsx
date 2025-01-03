import Header from '~/component/Layout/Header/Header';
import Footer from '~/component/Layout/Footer/Footer';
import './Store.css';
import { SunflowerProduct, SharkProduct, OreonProduct, CatChair, Headerleft, dumplingsProduct } from '~/Images';
import StoreFlowerBanner from '~/component/Banner/StoreBanner/StoreFlowerBanner';
import Slider from 'react-slick';
import StoreBanner from '~/component/Banner/StoreBanner/StoreBanner';
import { ArrowLeft, ArrowRight, Cart, LeafBlue, LeafPupple } from '~/component/Icon';
import { useEffect, useRef, useState } from 'react';
import AllProductStore from '~/component/AllProductStore/AllProductStore';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import TitleBar from '~/component/TittleBar/TittleBar';

function Store() {
    const products = [
        {
            category: 'Household',
            title: 'S’MORE COASTER SET',
            price: '800.000đ',
            image: OreonProduct,
        },
        {
            category: 'Kitchen',
            title: 'SHARK COASTER SET',
            price: '500.000đ',
            image: dumplingsProduct,
        },
        {
            category: 'Living Room',
            title: 'OREON COASTER SET',
            price: '600.000đ',
            image: CatChair,
        },
        {
            category: 'Bedroom',
            title: 'CAT CHAIR SET',
            price: '700.000đ',
            image: CatChair,
        },
        {
            category: 'Outdoor',
            title: 'BEACH COASTER SET',
            price: '900.000đ',
            image: OreonProduct,
        },
        {
            category: 'Office',
            title: 'OFFICE COASTER SET',
            price: '750.000đ',
            image: dumplingsProduct,
        },
    ];

    const sliderRef = useRef<Slider | null>(null);
    const { t } = useTranslation(['Store']);
    const languageState = useSelector((state: any) => state.language.language);
    const { i18n } = useTranslation();

    // Custom Next Arrow
    const CustomArrowNext = (props: any) => {
        const { onClick } = props;
        return (
            <div
                style={{
                    background: '#FFFFFF',
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    right: '60px',
                    color: 'red',
                    width: '50px',
                    height: '50px',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    boxShadow: '2px 2px 10px 0px #006F6221',
                    border: '2px solid #009383',
                    zIndex: 10,
                }}
                onClick={onClick} // Use the onClick passed by the slider
            >
                <ArrowLeft /> {/* Ensure ArrowRight is a valid React component */}
            </div>
        );
    };

    // Custom Prev Arrow
    const CustomArrowPrev = (props: any) => {
        const { onClick } = props;
        return (
            <div
                style={{
                    background: '#FFFFFF',
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    left: '60px',
                    color: 'red',
                    width: '50px',
                    height: '50px',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    boxShadow: '2px 2px 10px 0px #006F6221',
                    border: '2px solid #009383',
                    zIndex: 10,
                }}
                onClick={onClick} // Use the onClick passed by the slider
            >
                <ArrowRight /> {/* Ensure ArrowLeft is a valid React component */}
            </div>
        );
    };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        nextArrow: <CustomArrowNext />,
        prevArrow: <CustomArrowPrev />,
    };
    const settingsBestseller = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 10,
        slidesToScroll: 1,
        autoplay: false,
        nextArrow: <CustomArrowNext />,
        prevArrow: <CustomArrowPrev />,
    };

    useEffect(() => {
        i18n.changeLanguage(languageState);
    }, [languageState]);
    return (
        <>
            <Header />
            <div className="max-w-[120vw] bg-[#f2fffd] pb-[120px]">
                <div className="store-banner-slider">
                    <Slider ref={sliderRef} {...settings}>
                        <StoreFlowerBanner
                            t={t}
                            image={SunflowerProduct}
                            title={'Coaster Set'}
                            subTitle={'SUNFLOWER'}
                        />
                        <StoreBanner t={t} image={SharkProduct} title={'Multipurpose container'} subTitle={'Shark'} />
                        <StoreBanner t={t} image={OreonProduct} title={'COOKIE COASTER'} subTitle={'Set'} />
                        <StoreBanner t={t} image={CatChair} title={'Multipurpose container'} subTitle={'Cat'} />
                    </Slider>
                </div>
                {/* //item */}
                <div className="max-w-[134rem] mx-auto px-[30px] mt-[100px]">
                    <TitleBar title={t('newProduct')} />
                </div>
                <div className="flex justify-end items-center gap-[15px]">
                    {/* itemLeft */}
                    <div className="w-[464px] h-[846px] relative bg-white rounded-3xl shadow-[0px_2px_19.700000762939453px_0px_rgba(0,0,0,0.07)] overflow-hidden">
                        <img
                            className="h-[85%] w-[100%] object-contain"
                            src={SunflowerProduct}
                            alt="Sunflower Coaster"
                        />
                        <div className="w-[416px] h-[174px] px-4 py-[19px] left-[24px] top-[655px] absolute bg-white rounded-xl border border-[#66beb5] flex-col justify-center items-start gap-4 inline-flex">
                            <div className="flex-col justify-start items-start gap-4 flex">
                                <div className="flex-col justify-start items-start gap-3.5 flex">
                                    <div className="h-[27.53px] px-2 py-1 bg-[#dde6ff] rounded-[20px] justify-start items-center gap-[3px] inline-flex">
                                        <div className="text-[#0084ff] flex justify-center items-center text-[15px] font-medium ">
                                            <LeafBlue />
                                            Art toy
                                        </div>
                                    </div>
                                    <div className="text-[#494949] text-[16px] font-semibold ">
                                        SUNFLOWER COASTER SET
                                    </div>
                                </div>
                                <div className="text-[#009383] text-[20px] font-extrabold ">800.000đ</div>
                            </div>
                            <Link
                                to={'/chi-tiet-san-pham'}
                                className="cursor-pointer self-stretch h-12 px-6 py-7 bg-[#009383] rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] justify-center items-center gap-2 inline-flex overflow-hidden"
                            >
                                <div className="text-white text-[18px] font-bold ">{t('buy')}</div>
                            </Link>
                        </div>
                        <div className="w-[42px] h-[42px] left-[406px] top-[16px] absolute justify-center items-center inline-flex overflow-hidden">
                            <div className="w-[42px] h-[42px] relative flex-col justify-start items-start flex" />
                        </div>
                    </div>

                    {/* itemRight */}
                    <div className="w-full max-w-[1200px] mt-6 flex flex-wrap justify-start relative gap-6">
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className="w-[301px] h-[411px] relative bg-white rounded-3xl shadow-[0px_2px_19.700000762939453px_0px_rgba(0,0,0,0.07)] overflow-hidden"
                            >
                                <img
                                    className="absolute top-[0px] h-[70%] w-[60%] flex left-[0px] translate-x-[25%] translate-y-[-20px]"
                                    src={product.image}
                                    alt=""
                                />
                                <div className="absolute right-7 top-7">
                                    <Cart />
                                </div>
                                <div className="w-[277px] h-[178.53px] px-4 pt-3 pb-5 left-[12px] top-[220.47px] absolute bg-white rounded-xl border border-[#66beb5] flex-col justify-center items-start gap-4 inline-flex">
                                    <div className="self-stretch h-[82.53px] flex-col justify-start items-start gap-4 flex">
                                        <div className="self-stretch h-[52.53px] flex-col justify-start items-start gap-3.5 flex">
                                            <div className="h-[27.53px] px-2 py-1 bg-[#f4ddff] rounded-[20px] justify-start items-center gap-[3px] inline-flex">
                                                <div className="flex items-center justify-center gap-[3px] text-[#9644ff] text-[16px] font-medium ">
                                                    <LeafPupple />
                                                    {product.category}
                                                </div>
                                            </div>
                                            <div className="self-stretch text-[#494949] text-[16px] font-semibold ">
                                                {product.title}
                                            </div>
                                        </div>
                                        <div className="text-[#009383] text-[20px] font-bold ">{product.price}</div>
                                    </div>
                                    <Link
                                        to={'/chi-tiet-san-pham'}
                                        className="cursor-pointer self-stretch h-12 px-6 py-7 bg-[#009383] rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] justify-center items-center gap-2 inline-flex overflow-hidden"
                                    >
                                        <div className="text-white text-[17px] font-bold ">{t('buy')}</div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <AllProductStore t={t} />
            </div>

            <Footer />
        </>
    );
}

export default Store;
