import { OreonProduct, CatChair, dumplingsProduct, Headerleft } from '~/assets/Images/';
import { useState } from 'react';
import { Cart, LeafPupple } from '~/assets/Icons';
import { Link } from 'react-router-dom';
import ProductMenu from '../Menu/ProductMenu/ProductMenu';
import { StoreProductArr } from '~/assets/Arrays/Products';
import TitleBarTypeWhite from '../TittleBar/TitleBarTypeWhite/TitleBarTypeWhite';
function AllProductStore({ t }: { t: (key: string) => string }) {
    // array products
    const products2 = StoreProductArr;

    const [visibleProducts, setVisibleProducts] = useState(6);
    // const [isCollapsed, setIsCollapsed] = useState(false);

    //display more product
    const loadMore = () => {
        setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 6);
    };

    //display first 6 products
    const loadLess = () => {
        setVisibleProducts(6);
    };
    return (
        <>
            <div className="max-w-[100vw] mx-auto px-[30px] mt-[10%">
                <div className="max-w-[65%] mx-auto px-[30px] mt-[10%]">
                    <TitleBarTypeWhite title={t('allProduct')} />
                </div>
            </div>
            <div className="flex justify-center items-start gap-[40px]">
                {/* //left */}
                <ProductMenu />
                {/* //right */}
                <div className="w-full max-w-[65%] flex flex-wrap justify-start relative gap-6">
                    {products2.slice(0, visibleProducts).map((product, index) => (
                        <div
                            key={index}
                            className="w-[25%] h-[42vh] relative bg-white rounded-3xl shadow-[0px_2px_19.700000762939453px_0px_rgba(0,0,0,0.07)] overflow-hidden"
                        >
                            <img
                                className="absolute top-[0px] h-[70%] w-[60%] flex left-[0px] translate-x-[25%] translate-y-[-20px]"
                                src={product.image}
                                alt=""
                            />
                            <div className="absolute right-7 top-7">
                                <Cart />
                            </div>
                            <div className="w-[90%] h-[40%] px-4 pt-3 pb-5 left-[50%] translate-x-[-50%] bottom-[2%] absolute bg-white rounded-xl border border-[#66beb5] flex-col justify-center items-start gap-4 inline-flex">
                                <div className="self-stretch flex-col justify-start items-start gap-4 flex">
                                    <div className="self-stretch flex-col justify-start items-start gap-3.5 flex">
                                        <div className="px-2 py-1 bg-[#f4ddff] rounded-[20px] justify-start items-center gap-[3px] inline-flex">
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
                                    className="cursor-pointer self-stretch h-[10%] px-6 py-7 bg-[#009383] rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] justify-center items-center gap-2 inline-flex overflow-hidden"
                                >
                                    <div className="text-white text-[17px] font-bold "> {t('buy')}</div>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Hiển thị nút "Xem thêm" hoặc "Seeless" */}
            {visibleProducts < products2.length ? (
                <button
                    onClick={loadMore}
                    className="mx-auto justify-center flex items-center w-[190px] h-12 px-6 py-7 bg-white rounded-[10px] 
                    shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] border border-[#009383] text-[#009383] text-[16px] font-bold
                    my-[50px]"
                >
                    {t('loadMore')}
                </button>
            ) : (
                <button
                    onClick={loadLess}
                    className="mx-auto justify-center flex items-center w-[190px] h-12 px-6 py-7 bg-white rounded-[10px] 
                    shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] border border-[#009383] text-[#009383] text-[16px] font-bold
                    my-[50px]"
                >
                    {t('collapse')}
                </button>
            )}
        </>
    );
}

export default AllProductStore;
