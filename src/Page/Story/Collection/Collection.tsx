import { useState } from 'react';
import { ArrowTopWhite } from '~/component/Icon/Icon';
import Footer from '~/component/Layout/Footer/Footer';
import Header from '~/component/Layout/Header/Header';
import ProductMenu from '~/component/Menu/ProductMenu/ProductMenu';
import { Dragon1, Dragon2, Dragon3, Dragon4, Dragon5, Headerleft, leafHomeLeft, leafHomeRight } from '~/Images';

function Collection() {
    const [visibleProducts, setVisibleProducts] = useState(3);
    const loadMore = () => {
        setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 3);
    };
    const loadLess = () => {
        setVisibleProducts(3);
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    const images = [Dragon1, Dragon2, Dragon3, Dragon4, Dragon5];
    const groups = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
                        <div className="flex flex-col">
                            <div className="flex relative mx-auto mb-[40px] w-[65%] h-[74px] filter-home-title ">
                                <img className="w-[33.7396px] ml-[-1px] h-[100%]" src={Headerleft} alt="" />
                                <div
                                    className="bg-[#fff] flex items-center flex-1
                                                        border-b-solid border-b-[5px] 
                                                         border-[#e0e0e0] justify-center relative
                                                         h-[100%]
                                                         w-[100%]
                                                         "
                                >
                                    <h2 className="text-[3rem] text-[#009383] leading-[43.20px] font-extrabold pt-[3px] overflow-hidden uppercase text-center">
                                        Sản phẩm mới
                                    </h2>
                                </div>
                                <img
                                    className="mr-[-1px] h-[100%] w-[33.7396px] scale-x-[-1]"
                                    src={Headerleft}
                                    alt=""
                                />
                            </div>
                        </div>
                        <div className="flex justify-center items-start gap-[40px]">
                            {/* left menu */}
                            <ProductMenu />
                            {/* collection right */}

                            <div>
                                {groups.slice(0, visibleProducts).map((group, groupIndex) => (
                                    <div
                                        key={groupIndex} // key duy nhất cho mỗi nhóm
                                        className="w-[1074px] h-[369px] relative bg-white rounded-[20px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.15)] mb-6"
                                    >
                                        <div className="left-[434px] top-[30px] absolute text-[#009383] text-[32px] font-bold font-['Roboto'] capitalize leading-[41.60px]">
                                            Long Sinh Cửu Tử
                                        </div>
                                        <div className="left-[20px] top-[91px] absolute justify-start items-start gap-4 inline-flex">
                                            {images.map((image, index) => (
                                                <div
                                                    key={index} // key duy nhất cho mỗi phần tử
                                                    className="w-[194px] h-[258px] relative bg-white rounded-[20px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.15)] border-2 overflow-hidden"
                                                >
                                                    <img src={image} alt={`Dragon ${index + 1}`} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                                {visibleProducts < groups.length ? (
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
                        className="w-[70px] h-[70px] absolute right-[70px] p-[6.25px] bg-white cursor-pointer rounded-[110px] shadow-[0px_0px_8px_0px_rgba(0,36,32,0.32)] justify-center items-center inline-flex"
                    >
                        <div className="w-[57.50px] h-[57.50px] relative bg-[#009383] rounded-[73px] shadow-[0px_0px_2px_0px_rgba(0,58,52,0.64)] flex-col justify-start items-start flex">
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

export default Collection;
