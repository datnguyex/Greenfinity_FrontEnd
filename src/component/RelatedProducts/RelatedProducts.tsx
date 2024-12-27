import Slider from 'react-slick';
import { ArrowLeft, ArrowRight, Cart, LeafPupple } from '../Icon';
import { CatChair, dumplingsProduct, OreonProduct } from '~/Images';
import { useRef } from 'react';

function RelatedProducts() {
    const sliderRef = useRef<Slider | null>(null);

    // Xử lý sự kiện khi nhấn Prev
    const handlePrevClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };
    const CustomArrowNext = () => {
        return (
            <div
                style={{
                    background: '#FFFFFF',
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    right: '-70px',
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
                    left: '-70px',
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
    const handleNextClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

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
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        initialSlide: 2,
        nextArrow: <CustomArrowNext />,
        prevArrow: <CustomArrowPrev />,
    };

    return (
        <>
            <div className="text-[#009383] text-[36px] font-bold uppercase leading-[43.20px] text-center mt-[150px] mb-[40px]">
                SẢN PHẨM LIÊN QUAN
            </div>
            <div className="max-w-[145rem] mx-auto">
                <Slider ref={sliderRef} {...settings}>
                    {products.map((product, index) => (
                        <div key={index} className="flex justify-around mx-auto">
                            <div
                                key={index}
                                className="w-[355px]  h-[411px] relative bg-white rounded-3xl shadow-[0px_2px_19.700000762939453px_0px_rgba(0,0,0,0.07)] overflow-hidden"
                            >
                                <img
                                    className="absolute top-[0px] h-[70%] w-[60%] flex left-[0px] translate-x-[25%] translate-y-[-20px]"
                                    src={product.image}
                                    alt=""
                                />
                                <div className="absolute right-7 top-7">
                                    <Cart />
                                </div>
                                <div className="w-[335px] h-[178.53px] px-4 pt-3 pb-5 left-[12px] top-[220.47px] absolute bg-white rounded-xl border border-[#66beb5] flex-col justify-center items-start gap-4 inline-flex">
                                    <div className="self-stretch h-[82.53px] flex-col justify-start items-start gap-4 flex">
                                        <div className="self-stretch h-[52.53px] flex-col justify-start items-start gap-3.5 flex">
                                            <div className="h-[27.53px] px-2 py-1 bg-[#f4ddff] rounded-[20px] justify-start items-center gap-[3px] inline-flex">
                                                <div className="flex items-center justify-center gap-[3px] text-[#9644ff] text-[16px] font-medium font-['Roboto']">
                                                    <LeafPupple />
                                                    {product.category}
                                                </div>
                                            </div>
                                            <div className="self-stretch text-[#494949] text-[16px] font-semibold font-['Roboto']">
                                                {product.title}
                                            </div>
                                        </div>
                                        <div className="text-[#009383] text-[20px] font-bold font-['Roboto']">
                                            {product.price}
                                        </div>
                                    </div>
                                    <div className="cursor-pointer self-stretch h-12 px-6 py-7 bg-[#009383] rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] justify-center items-center gap-2 inline-flex overflow-hidden">
                                        <div className="text-white text-[17px] font-bold font-['Roboto']">Mua ngay</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default RelatedProducts;
