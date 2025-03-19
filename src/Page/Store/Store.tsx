import Header from '~/Layouts/Header/Header';
import Footer from '~/Layouts/Footer/Footer';
import './Store.css';
import { SunflowerProduct, SharkProduct, OreonProduct, CatChair } from '~/assets/Images/';
import StoreFlowerBanner from '~/component/Banner/StoreBanner/StoreFlowerBanner';
import Slider from 'react-slick';
import StoreBanner from '~/component/Banner/StoreBanner/StoreBanner';
import { ArrowLeft, ArrowRight, Cart, LeafBlue, LeafPupple } from '~/assets/Icons';
import { useEffect, useRef, useState } from 'react';
import AllProductStore from '~/component/AllProductStore/AllProductStore';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import TitleBarTypeWhite from '~/component/TittleBar/TitleBarTypeWhite/TitleBarTypeWhite';
import { StoreProductsArr } from '~/assets/Arrays/Products';
import { CustomArrowNext, CustomArrowPrev } from '~/component/Slider/CustomArrow';
import { StoreArrowNext, StoreArrowPrev } from '~/component/Slider/ArrowStyle/StoreArrow';
import { handleNextClick, handlePrevClick } from '~/component/Slider/HandleClick';
import { LanguageSwitcher } from '~/CustomHooks/LanguageSwitcher';
import NewProducts from '~/component/Store/NewProducts/NewProducts';

function Store() {
    //products
    const products = StoreProductsArr;

    //ref slider
    const sliderRef = useRef<Slider | null>(null);
    //use languages
    const { t } = useTranslation(['Store']);
    LanguageSwitcher();

    // setting slider
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        nextArrow: (
            <CustomArrowNext elements={StoreArrowNext} handleNextClick={handleNextClick} sliderRef={sliderRef} />
        ),
        prevArrow: (
            <CustomArrowPrev elements={StoreArrowPrev} handlePrevClick={handlePrevClick} sliderRef={sliderRef} />
        ),
    };

    return (
        <>
            <Header />
            <div className="max-w-[100vw] bg-[#f2fffd] pb-[5%]">
                <div className="store-banner-slider">
                    <Slider ref={sliderRef} {...settings}>
                        <StoreBanner t={t} image={SharkProduct} title={'Multipurpose container'} subTitle={'Shark'} />
                        <StoreBanner t={t} image={OreonProduct} title={'COOKIE COASTER'} subTitle={'Set'} />
                        <StoreBanner t={t} image={CatChair} title={'Multipurpose container'} subTitle={'Cat'} />
                    </Slider>
                </div>
                {/* //item */}
                <div className="max-w-[65%] mx-auto px-[30px] mt-[10%]">
                    <TitleBarTypeWhite title={t('newProduct')} />
                </div>
                <NewProducts t={t} products={products} />
                <AllProductStore t={t} />
            </div>

            <Footer />
        </>
    );
}

export default Store;
