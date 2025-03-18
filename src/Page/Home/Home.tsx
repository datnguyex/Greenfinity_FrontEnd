import classNames from 'classnames/bind';
import style from './Home.module.scss';
import Header from '~/Layouts/Header/Header';
import Footer from '~/Layouts/Footer/Footer';
import { useEffect, useRef } from 'react';
import './Home.css';
import Slider from 'react-slick';
import { leafHomeRight, leafHomeLeft, plasticbottle, AluminumCan } from '~/assets/Images/';
import Banner1 from '~/component/Banner/HomeBanner/Banner1';
import Banner2 from '~/component/Banner/HomeBanner/Banner2';
import Banner3 from '~/component/Banner/HomeBanner/Banner3';
import Contribute from '~/Layouts/Contribute/Contribute';
import { useTranslation } from 'react-i18next';
import Gift from '~/Layouts/Gift/Gift';
import TitleBarTypeWhite from '~/component/TittleBar/TitleBarTypeWhite/TitleBarTypeWhite';
import { CustomArrowNext, CustomArrowPrev } from '~/component/Slider/CustomArrow';
import { handleNextClick, handlePrevClick } from '~/component/Slider/HandleClick';
import { useSelector } from 'react-redux';
import BottleItem from '~/component/Home/BottleItem';
import { HomeArrowNext, HomeArrowPrev } from '~/component/Slider/ArrowStyle/HomeArrow';
import { LanguageSwitcher } from '~/CustomHooks/LanguageSwitcher';

const cx = classNames.bind(style);

function HomePage() {
    //use language of home page
    const { t } = useTranslation(['home']);

    //use languages
    const { i18n } = useTranslation();
    LanguageSwitcher();

    //ref of slider
    const sliderRef = useRef<Slider | null>(null);

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        nextArrow: <CustomArrowNext elements={HomeArrowNext} handleNextClick={handleNextClick} sliderRef={sliderRef} />,
        prevArrow: <CustomArrowPrev elements={HomeArrowPrev} handlePrevClick={handlePrevClick} sliderRef={sliderRef} />,
    };

    return (
        <>
            <Header />
            <div className="max-w-[100vw]">
                <div className="home-banner-slider">
                    <Slider ref={sliderRef} {...settings}>
                        <Banner3 t={t} />
                        <Banner2 t={t} />
                        <Banner1 t={t} />
                    </Slider>
                </div>
                <div
                    className="bg-[#f2fffd] py-[5%] bg-no-repeat bg-[position:0_100%] bg-[size:10%_auto]"
                    style={{
                        backgroundImage: `url(${leafHomeLeft}), url(${leafHomeRight})`,
                        backgroundPosition: '0 100%, 100% 100%',
                        backgroundSize: '10% auto, 10% auto',
                    }}
                >
                    <div className="max-w-[65%] mx-auto px-[30px] ">
                        <TitleBarTypeWhite title={t('titleTotalCollect')} />
                        {/* chai nhua ,lon nhom */}

                        <div className="flex items-center justify-center gap-[7%] w-[100%] mb-[10%]">
                            <BottleItem imageSrc={plasticbottle} value={438.425} label="plasticBottle" />

                            {/* Second item */}
                            <BottleItem imageSrc={AluminumCan} value={47.332} label="aluminumCan" />
                        </div>
                        {/* items */}
                        <TitleBarTypeWhite title={t('titleContribute')} />

                        <div className="mb-[10%]">
                            <Contribute t={t} />
                        </div>
                        <Gift t={t} />
                        {/* // */}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default HomePage;
