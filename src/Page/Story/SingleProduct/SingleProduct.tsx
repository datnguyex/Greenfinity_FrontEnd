import { useState } from 'react';
import AllProductStore from '~/component/AllProductStore/AllProductStore';
import { ArrowTopWhite, LeafPupple } from '~/component/Icon/Icon';
import Footer from '~/component/Layout/Footer/Footer';
import Header from '~/component/Layout/Header/Header';
import ProductMenu from '~/component/Menu/ProductMenu/ProductMenu';
import { CatChair, dumplingsProduct, leafHomeLeft, leafHomeRight, OreonProduct, SharkProduct } from '~/Images';

function SingleProduct() {
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
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const [visibleProducts, setVisibleProducts] = useState(6);
    const loadMore = () => {
        setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 6);
    };
    const loadLess = () => {
        setVisibleProducts(6);
    };

    return (
        <>
            <Header />
            <div
                className="bg-[#f2fffd] py-[56px] bg-no-repeat bg-[position:0_100%] bg-[size:10%_auto]"
                style={{
                    backgroundImage: `url(${leafHomeLeft}), url(${leafHomeRight})`,
                    backgroundPosition: '0 100%, 100% 100%',
                    backgroundSize: '10% auto, 10% auto',
                }}
            >
                <div className="my-[140px]">
                    <div className="px-[30px] mx-auto max-w-[150.7rem] w-[100%] relative">
                        <div className="flex justify-center items-start gap-[40px]">
                            <ProductMenu />
                            <div className="w-full max-w-[1200px] mt-6 flex flex-wrap justify-start relative gap-6">
                                {products.slice(0, visibleProducts).map((product, index) => (
                                    <div
                                        key={index}
                                        className="h-[460px] w-[30%] px-[15px] relative bg-white rounded-[20px] border-2 border-[#99d4cd] overflow-hidden"
                                    >
                                        <div className="h-[80%] w-[100%]">
                                            <img
                                                className="w-[100%] h-[100%] object-cover"
                                                src={product.image}
                                                alt={product.title}
                                            />
                                        </div>
                                        <div className="cursor-pointer h-[58px] w-[100%] px-6 py-2.5  bg-[#009383] rounded-[10px] shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] justify-center items-center gap-2 inline-flex overflow-hidden">
                                            <div className="grow shrink basis-0 text-center text-white text-[20px] font-bold font-['Roboto']">
                                                {product.title}
                                            </div>
                                        </div>
                                        <div className="h-7 px-3 py-4 cursor-pointer left-[11px] top-[10px] absolute bg-[#f4ddff] rounded-[20px] justify-start items-center gap-[3px] inline-flex">
                                            <div className="text-[#9644ff] text-[15px] font-medium font-['Roboto'] flex justify-center items-center gap-2">
                                                <LeafPupple />
                                                {product.category}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {/* Hiển thị nút "Xem thêm" hoặc "Seeless" */}
                                {visibleProducts < products.length ? (
                                    <button
                                        onClick={loadMore}
                                        className="mx-auto justify-center flex items-center w-[190px] h-12 px-6 py-7 bg-white rounded-[10px] 
                    shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] border border-[#009383] text-[#009383] text-[16px] font-bold
                    my-[50px]"
                                    >
                                        Xem thêm
                                    </button>
                                ) : (
                                    <button
                                        onClick={loadLess}
                                        className="mx-auto justify-center flex items-center w-[190px] h-12 px-6 py-7 bg-white rounded-[10px] 
                    shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] border border-[#009383] text-[#009383] text-[16px] font-bold
                    my-[50px]"
                                    >
                                        Thu gọn
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                    <a
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToTop();
                        }}
                        className="w-[70px] h-[70px] absolute  right-[70px] p-[6.25px] bg-white cursor-pointer rounded-[110px] shadow-[0px_0px_8px_0px_rgba(0,36,32,0.32)] justify-center items-center inline-flex"
                    >
                        <div className="w-[57.50px]  h-[57.50px] relative bg-[#009383] rounded-[73px] shadow-[0px_0px_2px_0px_rgba(0,58,52,0.64)] flex-col justify-start items-start flex">
                            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                <ArrowTopWhite />
                            </div>
                        </div>
                    </a>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default SingleProduct;
