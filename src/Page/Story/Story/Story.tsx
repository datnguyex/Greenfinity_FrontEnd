import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import StoreBanner from '~/component/Banner/StoreBanner/StoreBanner';
import StoreFlowerBanner from '~/component/Banner/StoreBanner/StoreFlowerBanner';
import { ArrowLeft, ArrowRight, BackgroundRipple } from '~/assets/Icons';
import Footer from '~/Layouts/Footer/Footer';
import Header from '~/Layouts/Header/Header';
import TitleBar from '~/component/TittleBar/TittleBar';
import {
    BeNgai,
    CatChair,
    dumplingsProduct,
    Headerleft,
    KyLan,
    NhaiXe,
    OreonProduct,
    SharkProduct,
    SunflowerProduct,
    thaoThiet,
} from '~/assets/Images/';

function Story() {
    const products = [
        {
            title: 'Multipurpose container SHARK',
            description:
                'Lorem ipsum dolor sit amet consectetur. Tempor viverra lacus proin orci risus turpis malesuada egestas ut. Ut ut tempus faucibus sed ut sem.',
            image: dumplingsProduct,
        },
        {
            title: 'Multipurpose container TIGER',
            description:
                'Lorem ipsum dolor sit amet consectetur. Tempor viverra lacus proin orci risus turpis malesuada egestas ut. Ut ut tempus faucibus sed ut sem.',
            image: SharkProduct,
        },
        {
            title: 'Multipurpose container LION',
            description:
                'Lorem ipsum dolor sit amet consectetur. Tempor viverra lacus proin orci risus turpis malesuada egestas ut. Ut ut tempus faucibus sed ut sem.',
            image: OreonProduct,
        },
        {
            title: 'Multipurpose container PANDA',
            description:
                'Lorem ipsum dolor sit amet consectetur. Tempor viverra lacus proin orci risus turpis malesuada egestas ut. Ut ut tempus faucibus sed ut sem.',
            image: CatChair,
        },
    ];

    const sliderRef = useRef<Slider | null>(null);
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
    const { t } = useTranslation(['Story']);
    const languageState = useSelector((state: any) => state.language.language);
    const { i18n } = useTranslation();
    useEffect(() => {
        i18n.changeLanguage(languageState);
    }, [languageState]);

    return (
        <>
            <Header />
            <div className="max-w-[120vw] bg-[#f2fffd]">
                {/* //slider */}
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
                <div className="max-w-[134rem] mx-auto px-[30px] mt-[100px] flex flex-col items-center">
                    {/* //item */}
                    <TitleBar title={t('buyNow')} />
                    <div className="flex flex-wrap gap-6  mt-[100px]">
                        {products.map((product, index) => (
                            <div
                                key={index}
                                className="w-[calc(50%-24px)] h-[350px] p-6 bg-white rounded-3xl shadow-[0px_2px_19.700000762939453px_0px_rgba(0,0,0,0.07)] justify-start items-center gap-2.5 inline-flex"
                            >
                                <div className="self-stretch  flex-col justify-between items-start inline-flex w-[60%]">
                                    <div className="h-[149px] flex-col justify-start items-start gap-4 flex">
                                        <div className="self-stretch text-[#006e62] text-[40px] font-extrabold font-['Roboto'] uppercase leading-[52px]">
                                            {product.title}
                                        </div>
                                        <div className="self-stretch text-[#494949] text-[16px] font-normal font-['Roboto'] leading-tight">
                                            {product.description}
                                        </div>
                                    </div>
                                    <div className="w-[50%] h-11 px-6 py-7 cursor-pointer bg-white rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] border border-[#009383] justify-center items-center gap-2 inline-flex overflow-hidden">
                                        <div className="text-[#009383] text-[20px] font-bold font-['Roboto']">
                                            {t('seeDetails')}
                                        </div>
                                    </div>
                                </div>
                                <div className="flex-1 flex items-end justify-end ">
                                    <img
                                        className="object-cover w-[100%] h-[100%] flex items-end justify-end mt-[70px]"
                                        src={product.image}
                                        alt={product.title}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                    <Link
                        to={'/san-pham-don'}
                        className="w-[400px] mb-[120px] mt-[50px] cursor-pointer h-12 px-6 py-7 bg-white rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] border border-[#009383] justify-center items-center gap-2 inline-flex overflow-hidden"
                    >
                        <div className="text-[#494949] text-[20px] font-medium font-['Roboto']">{t('SeeAll')}</div>
                    </Link>
                    {/* //item */}
                    <TitleBar title={t('Collection')} />
                </div>

                <div className="w-[100%] overflow-hidden relative">
                    <div className="">
                        <BackgroundRipple />
                    </div>

                    <div className="w-[1387px] h-[808px] absolute top-[0] left-[50%] translate-x-[-50%]">
                        <div className="pt-[13px] pb-2 left-0 top-[65px] absolute flex-col justify-end items-start gap-[35px] inline-flex">
                            <div className="text-[#006e62] text-[60px] font-extrabold font-['Roboto'] uppercase leading-[78px]">
                                LONG SINH CỬU TỬ
                            </div>
                            <div className="w-[713px] h-[180px] text-[#494949] text-[16px] font-normal font-['Roboto'] leading-tight">
                                Lorem ipsum dolor sit amet consectetur. Tempor viverra lacus proin orci risus turpis
                                malesuada egestas ut. Ut ut tempus faucibus sed ut sem. Etiam leo volutpat arcu massa.
                                Scelerisque vestibulum tellus rhoncus arcu blandit sem auctor donec. Vulputate quis dis
                                mauris a id. Blandit porta et libero at elit vitae. Tincidunt mi eget tristique
                                vestibulum dolor nulla nascetur tellus non. Elementum justo eget odio non ornare. Cursus
                                habitant nisi ac aliquam. Cras nibh dictumst consequat enim et sit et quam. A cras
                                varius non rhoncus congue. Varius amet id ultricies pellentesque morbi pharetra turpis.
                                Adipiscing pharetra mollis ornare sit nibh. Amet sagittis tellus ut scelerisque dolor
                                auctor. Libero justo pellentesque pulvinar dolor...{' '}
                            </div>
                            <Link
                                to={'/bo-suu-tap'}
                                className="w-[219px] cursor-pointer h-[54px] px-6 py-2.5 bg-[#009383] rounded-lg justify-center items-center gap-2 inline-flex overflow-hidden"
                            >
                                <div className="text-white text-[26px] font-bold font-['Roboto']">
                                    {t('seeDetails')}
                                </div>
                            </Link>
                        </div>
                        <div className="w-[251px] h-[335px]  left-[273px] top-[495px] absolute bg-white rounded-[20px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] border-2 border-[#006e62]  overflow-hidden">
                            <div className="left-[80px] top-[295px] absolute text-[#006e62] text-2xl font-extrabold font-['Roboto'] capitalize leading-[31.20px]">
                                Bệ ngạn
                            </div>
                            <img src={BeNgai} alt="" />
                        </div>
                        <div className="w-[252px] h-[335px] left-0 top-[495px] absolute bg-white rounded-[20px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] border-2 border-[#006e62]  overflow-hidden">
                            <div className="left-[84px] top-[295px] absolute text-[#006e62] text-2xl font-extrabold font-['Roboto'] capitalize leading-[31.20px]">
                                thao thiết
                            </div>
                            <img src={thaoThiet} alt="" />
                        </div>

                        <div className="w-[252px] h-[335px] left-[545px] top-[495px] absolute bg-white rounded-[20px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.25)] border-2 border-[#006e62]  overflow-hidden">
                            <div className="left-[84px] top-[295px] absolute text-[#006e62] text-2xl font-extrabold font-['Roboto'] capitalize leading-[31.20px]">
                                Nhai xế
                            </div>
                            <img src={NhaiXe} alt="" />
                        </div>

                        <img className="w-[922px] h-[888px] left-[713px] top-[-62px] absolute" src={KyLan} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Story;
