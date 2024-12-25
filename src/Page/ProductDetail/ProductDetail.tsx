import './ProductDetail.css';
import { leafHomeLeft, leafHomeRight, OreonProduct, SharkProduct, CatChair } from '~/Images';
import Slider from 'react-slick';
import { ArrowLeft, ArrowRight, LeafPupple, Minus, Plus } from '~/component/Icon';
import { useRef, useState } from 'react';
import Header from '~/component/Layout/Header/Header';
import CommentProduct from '~/component/CommentProduct/CommentProduct';
import RelatedProducts from '~/component/RelatedProducts/RelatedProducts';
import Footer from '~/component/Layout/Footer/Footer';

function ProductDetail() {
    const slides = [
        { image1: OreonProduct },
        { image1: SharkProduct },
        { image1: CatChair },
        { image1: OreonProduct },
        { image1: SharkProduct },
    ];

    const sliderRef = useRef<Slider | null>(null);
    const [currentImage, setCurrentImage] = useState(slides[0].image1); // Cập nhật ảnh ban đầu

    const CustomArrowNext = () => (
        <div
            style={{
                top: '-5%',
                position: 'absolute',
                transform: 'translateY(-50%) rotate(-90deg)',
                left: '60px',
                width: '20px',
                height: '20px',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                cursor: 'pointer',
                zIndex: 1,
            }}
            onClick={handleNextClick}
        >
            <ArrowLeft />
        </div>
    );

    // Custom Arrow Prev
    const CustomArrowPrev = () => (
        <div
            style={{
                bottom: '-10%',
                position: 'absolute',
                transform: 'translateY(-50%) rotate(-90deg)',
                left: '60px',
                width: '20px',
                height: '20px',
                textAlign: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                cursor: 'pointer',
                zIndex: 1,
            }}
            onClick={handlePrevClick}
        >
            <ArrowRight />
        </div>
    );

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

    // Cập nhật ảnh khi slider thay đổi
    const handleSliderChange = (currentSlide: number) => {
        setCurrentImage(slides[currentSlide].image1);
    };

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        vertical: true,
        verticalSwiping: true,
        arrows: true,
        nextArrow: <CustomArrowNext />,
        prevArrow: <CustomArrowPrev />,
        initialSlide: 2,
        afterChange: handleSliderChange, // Lắng nghe sự kiện thay đổi slide
    };

    return (
        <>
            <Header />
            <div
                className="py-[56px] bg-[#f2fffd] bg-no-repeat bg-[position:0_100%] bg-[size:10%_auto]"
                style={{
                    backgroundImage: `url(${leafHomeLeft}), url(${leafHomeRight})`,
                    backgroundPosition: '0 100%, 100% 100%',
                    backgroundSize: '10% auto, 10% auto',
                }}
            >
                <div className="mb-[140px] mt-[150px]">
                    <div className="px-[30px] mx-auto max-w-[160.7rem] w-[100%] flex flex-col items-center">
                        <div className="flex h-[500px] justify-center items-center gap-[40px]">
                            {/* Left part with Slider */}
                            <div className="flex justify-end w-[50%] gap-[20px]">
                                <div className="w-[20%] translate-y-[12%] slider-detail-product">
                                    <Slider ref={sliderRef} {...settings}>
                                        {slides.map((slide, index) => (
                                            <div
                                                key={index}
                                                className="w-[98px] h-[98px] item relative opacity-40 bg-white rounded-[9px] border border-[#009383] overflow-hidden"
                                            >
                                                <img
                                                    className="w-[80%] h-[100%] object-cover translate-x-[10%]"
                                                    src={slide.image1}
                                                    alt=""
                                                />
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                                <div className="h-[80%] relative">
                                    <div className="w-[464px] h-[550px] relative bg-white rounded-xl shadow-[0px_0px_14px_0px_rgba(0,0,0,0.25)] flex-col justify-start items-start inline-flex overflow-hidden">
                                        <img
                                            className="w-[100%] h-[100%] translate-x-[0] translate-y-[0%]"
                                            src={currentImage}
                                            alt="Current Product"
                                        />
                                    </div>
                                    <div className="absolute right-[5%] top-[5%] w-[132px] h-10 px-5 py-7 bg-[#ededed] rounded-[34px] justify-center items-center gap-2 inline-flex">
                                        <div className=" text-[#6d6d6d] text-[18px] font-medium font-['Roboto']">
                                            Hết hàng
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right side (Empty for now) */}
                            <div className="w-[500px]">
                                <div className="h-[526.53px] flex-col justify-start items-start gap-6 inline-flex w-[100%]">
                                    <div className="flex-col justify-start items-start gap-6 flex">
                                        <div className="flex-col justify-start items-start gap-4 flex">
                                            <div className="h-[27.53px] px-2 py-1 bg-[#f4ddff] rounded-[20px] justify-start items-center gap-[3px] inline-flex">
                                                <div className="text-[#9644ff] text-[18px] font-medium font-['Roboto'] flex justify-center items-center gap-[3px] px-2 py-2">
                                                    <LeafPupple />
                                                    Household
                                                </div>
                                            </div>
                                            <div className="text-[#373737] text-[32px] font-semibold font-['Roboto']">
                                                COOKIE COASTER SET
                                            </div>
                                        </div>
                                        <div className="flex-col justify-start items-start gap-5 flex">
                                            <div className="text-[#009383] text-[32px] font-bold font-['Roboto']">
                                                800.000đ
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-col justify-start items-start gap-3 flex w-[100%]">
                                        <div className="justify-start items-start gap-6 inline-flex w-[100%] h-[100%]">
                                            <div className="w-[100px] h-[100%] px-3 bg-white rounded-lg border border-[#929292] justify-start items-center gap-3.5 flex overflow-hidden">
                                                <div className="cursor-pointer w-7 h-10 p-1 rounded-lg justify-center items-center gap-2.5 flex">
                                                    <Minus />
                                                </div>
                                                <input
                                                    className="text-[#494949] text-[17px] font-semibold font-['Roboto'] outline-none w-[50%] flex justify-center items-center text-center"
                                                    placeholder="1"
                                                />
                                                <div className="cursor-pointer w-7 h-10 p-1 rounded-lg justify-center items-center gap-2.5 flex">
                                                    <Plus />
                                                </div>
                                            </div>
                                            <div className="flex-1 h-12 px-6 py-7 cursor-pointer bg-white rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] border border-neutral-400 justify-center items-center gap-2 flex overflow-hidden">
                                                <div className="text-neutral-400 text-[18px] font-bold font-['Roboto']">
                                                    Thêm vào giỏ hàng
                                                </div>
                                            </div>
                                        </div>
                                        <div className="self-stretch h-12 px-6 py-7 bg-neutral-400 rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] cursor-pointer justify-center items-center gap-2 inline-flex overflow-hidden">
                                            <div className="text-white text-[18px] font-bold font-['Roboto']">
                                                Mua ngay
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex-col justify-start items-start gap-[18px] flex">
                                        <div className="text-[#009383] text-[20px] font-bold font-['Roboto']">
                                            Chi tiết sản phẩm
                                        </div>
                                        <div className="h-[135px] px-[13px] w-[80%] py-3.5 bg-white rounded-[10px] border border-[#66beb5] flex-col justify-center items-center gap-2 flex">
                                            <div className="self-stretch">
                                                <span className="text-[#494949] text-[16px] font-semibold font-['Roboto'] leading-normal">
                                                    Kích thước:
                                                </span>
                                                <span className="text-[#494949] text-[16px] font-normal font-['Roboto'] leading-normal">
                                                    {' '}
                                                    100mmL x 100mmW x 30mmH
                                                    <br />
                                                </span>
                                                <span className="text-[#494949] text-[16px] font-semibold font-['Roboto'] leading-normal">
                                                    Khối lượng nhựa in:
                                                </span>
                                                <span className="text-[#494949] text-[16px] font-normal font-['Roboto'] leading-normal">
                                                    {' '}
                                                    59g
                                                    <br />
                                                </span>
                                                <span className="text-[#494949] text-[16px] font-semibold font-['Roboto'] leading-normal">
                                                    Lượng nhựa tái chế sử dụng:
                                                </span>
                                                <span className="text-[#494949] text-[16px] font-normal font-['Roboto'] leading-normal">
                                                    {' '}
                                                    Khoảng 30%
                                                    <br />
                                                </span>
                                                <span className="text-[#494949] text-[16px] font-semibold font-['Roboto'] leading-normal">
                                                    Số lượng tổng:
                                                </span>
                                                <span className="text-[#494949] text-[16px] font-normal font-['Roboto'] leading-normal">
                                                    {' '}
                                                    1000 (Bộ)
                                                    <br />
                                                </span>
                                                <span className="text-[#494949] text-[16px] font-semibold font-['Roboto'] leading-normal">
                                                    Loại nhựa:
                                                </span>
                                                <span className="text-[#494949] text-[16px] font-normal font-['Roboto'] leading-normal">
                                                    {' '}
                                                    RePETG
                                                </span>
                                            </div>
                                        </div>
                                        <div className=" w-[634px] h-12 rounded-lg justify-start items-center gap-2 inline-flex overflow-hidden">
                                            <div className="w-6 h-6 relative overflow-hidden" />
                                            <div className="text-[#009383] text-[20px] font-medium font-['Roboto'] cursor-pointer">
                                                Xem câu chuyện của sản phẩm
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* comment */}
                        <CommentProduct />
                    </div>
                    {/* related Product */}
                    <RelatedProducts />
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ProductDetail;
