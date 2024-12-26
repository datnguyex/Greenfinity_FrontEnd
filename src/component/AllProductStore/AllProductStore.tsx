import { OreonProduct, CatChair, dumplingsProduct, Headerleft } from '~/Images';
import { useState } from 'react';
import { Cart, LeafPupple } from '../Icon';
import { Link } from 'react-router-dom';
function AllProductStore() {
    const products2 = [
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
    const [isOpen, setIsOpen] = useState<{ [key: string]: boolean }>({
        sort: false,
        collection: false,
        category: false,
        price: false,
        color: false,
    });
    const toggleDropdown = (key: string) => {
        setIsOpen((prevState) => ({
            ...prevState,
            [key]: !prevState[key], // Mở/đóng dropdown theo key của value
        }));
    };

    const [visibleProducts, setVisibleProducts] = useState(6);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const loadMore = () => {
        setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 6);
    };
    const loadLess = () => {
        setVisibleProducts(6);
    };
    return (
        <>
            <div className="max-w-[134rem] mx-auto px-[30px] mt-[100px]">
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
                            TẤT CẢ SẢN PHẨM
                        </h2>
                    </div>
                    <img className="mr-[-1px] h-[100%] w-[33.7396px] scale-x-[-1]" src={Headerleft} alt="" />
                </div>
            </div>
            <div className="flex justify-center items-start gap-[40px]">
                {/* //left */}
                <div className="w-[342px]  flex-col justify-start items-center inline-flex">
                    <div className="self-stretch min-h-[400px] px-[25px] py-10 bg-white rounded-2xl shadow-lg border border-[#009383] flex-col justify-start items-start gap-8 inline-flex overflow-hidden">
                        <div className="text-[#494949] text-[24px] font-bold font-['Roboto']">Lọc sản phẩm</div>

                        <div className="flex-col justify-start gap-4 flex">
                            {/* Input Tìm kiếm */}
                            <div className="self-stretch h-12 pl-3 pr-4 py-2.5 bg-white rounded-md border border-[#c2c2c2] justify-between items-center inline-flex overflow-hidden">
                                <input
                                    placeholder="Tìm kiếm"
                                    className="text-[#666666] text-[16px] font-normal font-['Roboto'] outline-none w-[100%] h-[100%]"
                                />
                                {/* Giả sử bạn đã tạo hoặc sử dụng một component <SearchGreen /> */}
                                <div className="w-5 h-5 relative"></div>
                            </div>

                            {/* Dropdown: Sắp xếp */}
                            <div className="flex-col justify-start items-center cursor-pointer gap-1.5 flex relative">
                                <div
                                    onClick={() => toggleDropdown('sort')}
                                    className="w-[292px] px-4 py-3 bg-[#f6f6f6] rounded-xl border justify-between items-center inline-flex"
                                >
                                    <div className="text-[#494949] text-[18px] font-semibold font-['Roboto']">
                                        Sắp xếp
                                    </div>
                                    <div className="w-6 h-6 relative mr-[10px] flex items-center">
                                        {/* Giả sử bạn đã tạo hoặc sử dụng một component <PlustGreen /> */}
                                        <div className="w-5 h-5"></div>
                                    </div>
                                </div>
                                {isOpen.sort && (
                                    <div className="mt-2 w-[292px] bg-white shadow-lg  z-[10] rounded-xl border p-3 transition duration-300 ease-in-out transform">
                                        <div
                                            className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                            onClick={() => console.log('Sắp xếp tăng dần')}
                                        >
                                            Sắp xếp tăng dần
                                        </div>
                                        <div
                                            className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                            onClick={() => console.log('Sắp xếp giảm dần')}
                                        >
                                            Sắp xếp giảm dần
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Dropdown: Bộ sưu tập */}
                            <div className="flex-col justify-start items-center cursor-pointer gap-1.5 flex relative">
                                <div
                                    onClick={() => toggleDropdown('collection')}
                                    className="w-[292px] px-4 py-3 bg-[#f6f6f6] rounded-xl border justify-between items-center inline-flex"
                                >
                                    <div className="text-[#494949] text-[18px] font-semibold font-['Roboto']">
                                        Bộ sưu tập
                                    </div>
                                    <div className="w-6 h-6 relative mr-[10px] flex items-center">
                                        {/* Giả sử bạn đã tạo hoặc sử dụng một component <PlustGreen /> */}
                                        <div className="w-5 h-5"></div>
                                    </div>
                                </div>
                                {isOpen.collection && (
                                    <div className="mt-2 w-[292px] bg-white shadow-lg  z-[10] rounded-xl border p-3 transition duration-300 ease-in-out transform">
                                        <div
                                            className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                            onClick={() => console.log('Sắp xếp tăng dần')}
                                        >
                                            Mô hình lắp ráp
                                        </div>
                                        <div
                                            className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                            onClick={() => console.log('Sắp xếp giảm dần')}
                                        >
                                            Mô hình trang trí
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Dropdown: Phân loại */}
                            <div className="flex-col justify-start items-center cursor-pointer gap-1.5 flex relative">
                                <div
                                    onClick={() => toggleDropdown('category')}
                                    className="w-[292px] px-4 py-3 bg-[#f6f6f6] rounded-xl border justify-between items-center inline-flex"
                                >
                                    <div className="text-[#494949] text-[18px] font-semibold font-['Roboto']">
                                        Phân loại
                                    </div>
                                    <div className="w-6 h-6 relative mr-[10px] flex items-center">
                                        {/* Giả sử bạn đã tạo hoặc sử dụng một component <PlustGreen /> */}
                                        <div className="w-5 h-5"></div>
                                    </div>
                                </div>
                                {isOpen.category && (
                                    <div className="mt-2 w-[292px] bg-white shadow-lg  z-[10] rounded-xl border p-3 transition duration-300 ease-in-out transform">
                                        <div
                                            className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                            onClick={() => console.log('Sắp xếp tăng dần')}
                                        >
                                            Mô hình tái chế
                                        </div>
                                        <div
                                            className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                            onClick={() => console.log('Sắp xếp giảm dần')}
                                        >
                                            Mô hình sản xuất
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Dropdown: Giá */}
                            <div className="flex-col justify-start items-center cursor-pointer gap-1.5 flex relative">
                                <div
                                    onClick={() => toggleDropdown('price')}
                                    className="w-[292px] px-4 py-3 bg-[#f6f6f6] rounded-xl border justify-between items-center inline-flex"
                                >
                                    <div className="text-[#494949] text-[18px] font-semibold font-['Roboto']">Giá</div>
                                    <div className="w-6 h-6 relative mr-[10px] flex items-center">
                                        {/* Giả sử bạn đã tạo hoặc sử dụng một component <PlustGreen /> */}
                                        <div className="w-5 h-5"></div>
                                    </div>
                                </div>
                                {isOpen.price && (
                                    <div className="mt-2 w-[292px] bg-white shadow-lg  z-[10] rounded-xl border p-3 transition duration-300 ease-in-out transform">
                                        <div
                                            className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                            onClick={() => console.log('Sắp xếp tăng dần')}
                                        >
                                            Thấp đến cao
                                        </div>
                                        <div
                                            className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                            onClick={() => console.log('Sắp xếp giảm dần')}
                                        >
                                            Cao đến thấp
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Dropdown: Màu sắc */}
                            <div className="flex-col justify-start items-center cursor-pointer gap-1.5 flex relative">
                                <div
                                    onClick={() => toggleDropdown('color')}
                                    className="w-[292px] px-4 py-3 bg-[#f6f6f6] rounded-xl border justify-between items-center inline-flex"
                                >
                                    <div className="text-[#494949] text-[18px] font-semibold font-['Roboto']">
                                        Màu sắc
                                    </div>
                                    <div className="w-6 h-6 relative mr-[10px] flex items-center">
                                        {/* Giả sử bạn đã tạo hoặc sử dụng một component <PlustGreen /> */}
                                        <div className="w-5 h-5"></div>
                                    </div>
                                </div>
                                {isOpen.color && (
                                    <div className="mt-2 w-[292px] bg-white shadow-lg  z-[10] rounded-xl border p-3 transition duration-300 ease-in-out transform">
                                        <div
                                            className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                            onClick={() => console.log('Sắp xếp tăng dần')}
                                        >
                                            Màu tối
                                        </div>
                                        <div
                                            className="text-[#494949] text-[16px] font-medium p-2 cursor-pointer hover:bg-[#e6e6e6] rounded-xl transition-all"
                                            onClick={() => console.log('Sắp xếp giảm dần')}
                                        >
                                            Màu sáng
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {/* //right */}
                <div className="w-full max-w-[1200px] mt-6 flex flex-wrap justify-start relative gap-6">
                    {products2.slice(0, visibleProducts).map((product, index) => (
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
                                <Link
                                    to={'/chi-tiet-san-pham'}
                                    className="cursor-pointer self-stretch h-12 px-6 py-7 bg-[#009383] rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] justify-center items-center gap-2 inline-flex overflow-hidden"
                                >
                                    <div className="text-white text-[17px] font-bold font-['Roboto']">Mua ngay</div>
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
        </>
    );
}

export default AllProductStore;
