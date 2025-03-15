import classNames from 'classnames/bind';
import style from './Home.module.scss';
import Header from '~/Layouts/Header/Header';
import Footer from '~/Layouts/Footer/Footer';
import React, { useRef } from 'react';
import './Home.css';
import Slider from 'react-slick';
import { ArrowLeft, ArrowRight } from '~/assets/Icons';
import { leafHomeRight, leafHomeLeft, Headerleft, plasticbottle, AluminumCan } from '~/assets/Images/';
import Banner1 from '~/component/Banner/HomeBanner/Banner1';
import Banner2 from '~/component/Banner/HomeBanner/Banner2';
import Banner3 from '~/component/Banner/HomeBanner/Banner3';
import Contribute from '~/Layouts/Contribute/Contribute';
import { useTranslation } from 'react-i18next';
import Gift from '~/Layouts/Gift/Gift';
import TitleBarTypeWhite from '~/component/TittleBar/TitleBarTypeWhite/TitleBarTypeWhite';

const cx = classNames.bind(style);

function HomePage() {
    const { t } = useTranslation(['home']);
    const sliderRef = useRef<Slider | null>(null);

    // Custom Arrow Next
    const CustomArrowNext = () => {
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
                    zIndex: 10, // Đảm bảo nó ở trên các phần tử khác
                }}
                onClick={handleNextClick}
            >
                <ArrowLeft />
            </div>
        );
    };

    // Custom Arrow Prev
    const CustomArrowPrev = () => {
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
                    zIndex: 1,
                }}
                onClick={handlePrevClick}
            >
                <ArrowRight />
            </div>
        );
    };

    // Slider settings
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

    // Xử lý sự kiện khi nhấn Next
    const handleNextClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    // Xử lý sự kiện khi nhấn Prev
    const handlePrevClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
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
                    className="bg-[#f2fffd] py-[56px] bg-no-repeat bg-[position:0_100%] bg-[size:10%_auto]"
                    style={{
                        backgroundImage: `url(${leafHomeLeft}), url(${leafHomeRight})`,
                        backgroundPosition: '0 100%, 100% 100%',
                        backgroundSize: '10% auto, 10% auto',
                    }}
                >
                    {/* //day la khung duoc padding */}
                    <div className="max-w-[134rem] mx-auto px-[30px]">
                        {/* //cac thanh phan */}
                        {/* thanh phan */}
                        <TitleBarTypeWhite title={t('titleTotalCollect')} />
                        {/* chai nhua ,lon nhom */}
                        {/* item1 */}
                        <div className="flex items-center justify-center gap-[80px] w-[100%] mb-[120px]">
                            <div className="relative w-[50%] pt-[36px] pb-[16px] pl-[32px] h-[100%]">
                                <div className="h-[100%] absolute rotate-[16deg] bottom-[-15px] left-[-1px] z-10">
                                    <img
                                        className="object-contain w-[100%] h-[100%] object-bottom"
                                        src={plasticbottle}
                                        alt=""
                                    />
                                </div>

                                <div
                                    className={cx(
                                        'text-center flex justify-center items-center bg-[#04b19f] border-[5px] border-solid border-[#fff] rounded-[26px] shadown-home-bottle flex-col overflow-hidden relative min-h-[180px]',
                                        style.customBefore,
                                        style.customAfter,
                                    )}
                                >
                                    <div className=" min-h-[24.5rem] items-center flex justify-center flex-col">
                                        <div className="text-[7rem] leading-[57.6px]  text-[#fff] font-bold overflow-hidden whitespace-nowrap">
                                            438.425
                                        </div>
                                        <div className="text-[3.5rem] leading-[57.6px] text-[#fff] font-bold overflow-hidden whitespace-nowrap">
                                            {t('plasticBottle')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* //item2 */}
                            <div className="relative w-[50%] pt-[36px] pb-[16px] pl-[32px] h-[100%]">
                                <div className="h-[100%] absolute rotate-[16deg] bottom-[-15px] left-[-1px] z-10">
                                    <img
                                        className="object-contain w-[100%] h-[100%] object-bottom"
                                        src={AluminumCan}
                                        alt=""
                                    />
                                </div>

                                <div
                                    className={cx(
                                        'text-center flex justify-center items-center bg-[#04b19f] border-[5px] border-solid border-[#fff] rounded-[26px] shadown-home-bottle flex-col overflow-hidden relative min-h-[180px]',
                                        style.customBefore,
                                        style.customAfter,
                                    )}
                                >
                                    <div className=" min-h-[24.5rem] items-center flex justify-center flex-col">
                                        <div className="text-[7rem] leading-[57.6px] text-[#fff] font-bold overflow-hidden whitespace-nowrap">
                                            47.332
                                        </div>
                                        <div className="text-[3.5rem] leading-[57.6px] text-[#fff] font-bold overflow-hidden whitespace-nowrap">
                                            {t('aluminumCan')}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* thanh phan */}
                        <TitleBarTypeWhite title={t('titleContribute')} />
                        {/* thanh phan */}

                        <div className="mb-[120px]">
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
