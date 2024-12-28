import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '~/component/Layout/Header/Header';
import { MagnifyingGlassBlack, LeafBlue, CartSad } from '~/component/Icon';
import Menu from '~/component/Menu/Menu';
import { Link } from 'react-router-dom';
import { SharkProduct, leafHomeLeft, leafHomeRight } from '~/Images';
import Footer from '~/component/Layout/Footer/Footer';

const AllOrder = () => {
    const products = [
        {
            id: 1,
            name: 'Multipurpose container Shark',
            imgSrc: SharkProduct,
            category: 'Art toy',
            quantity: 1,
            status: 'Đơn hàng đang được giao',
            price: 800000,
        },
        {
            id: 2,
            name: 'Multipurpose container Whale',
            imgSrc: SharkProduct,
            category: 'Art toy',
            quantity: 2,
            status: 'Đơn hàng đã giao',
            price: 150000,
        },
        {
            id: 3,
            name: 'Multipurpose container Whale',
            imgSrc: SharkProduct,
            category: 'Art toy',
            quantity: 2,
            status: 'Chờ xác nhận',
            price: 150000,
        },
    ];
    const waitConfirmProduct = [
        {
            id: 1,
            name: 'Multipurpose container Shark',
            imgSrc: SharkProduct,
            category: 'Art toy',
            quantity: 1,
            status: 'Chờ xác nhận',
            price: 800000,
        },
        {
            id: 2,
            name: 'Multipurpose container Whale',
            imgSrc: SharkProduct,
            category: 'Art toy',
            quantity: 2,
            status: 'Chờ xác nhận',
            price: 150000,
        },
        {
            id: 3,
            name: 'Multipurpose container Whale',
            imgSrc: SharkProduct,
            category: 'Art toy',
            quantity: 2,
            status: 'Chờ xác nhận',
            price: 150000,
        },
    ];
    const deliveringProduct = [
        {
            id: 1,
            name: 'Multipurpose container Shark',
            imgSrc: SharkProduct,
            category: 'Art toy',
            quantity: 1,
            status: 'Đơn hàng đang dược giao',
            price: 800000,
        },
        {
            id: 2,
            name: 'Multipurpose container Whale',
            imgSrc: SharkProduct,
            category: 'Art toy',
            quantity: 2,
            status: 'Đơn hàng đang dược giao',
            price: 150000,
        },
        {
            id: 3,
            name: 'Multipurpose container Whale',
            imgSrc: SharkProduct,
            category: 'Art toy',
            quantity: 2,
            status: 'Đơn hàng đang dược giao',
            price: 150000,
        },
    ];
    const deliverdProduct = [
        {
            id: 1,
            name: 'Multipurpose container Shark',
            imgSrc: SharkProduct,
            category: 'Art toy',
            quantity: 1,
            status: 'Giao hàng thành công',
            price: 800000,
        },
        {
            id: 2,
            name: 'Multipurpose container Whale',
            imgSrc: SharkProduct,
            category: 'Art toy',
            quantity: 2,
            status: 'Giao hàng thành công',
            price: 150000,
        },
        {
            id: 3,
            name: 'Multipurpose container Whale',
            imgSrc: SharkProduct,
            category: 'Art toy',
            quantity: 2,
            status: 'Giao hàng thành công',
            price: 150000,
        },
    ];
    const CancleProduct = [
        {
            id: 1,
            name: 'Multipurpose container Shark',
            imgSrc: SharkProduct,
            category: 'Art toy',
            quantity: 1,
            status: 'Đã hủy',
            price: 800000,
        },
        {
            id: 2,
            name: 'Multipurpose container Whale',
            imgSrc: SharkProduct,
            category: 'Art toy',
            quantity: 2,
            status: 'Đã hủy',
            price: 150000,
        },
        {
            id: 3,
            name: 'Multipurpose container Whale',
            imgSrc: SharkProduct,
            category: 'Art toy',
            quantity: 2,
            status: 'Đã hủy',
            price: 150000,
        },
    ];

    const location = useLocation();
    const path = location.pathname;
    const pathName = path.split('/')[1];
    // console.log('pathName', pathName);
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get('type');
    const [productState, setProductState] = useState(products);
    useEffect(() => {
        if (type == '1') {
            setProductState(products);
        } else if (type == '2') {
            setProductState(waitConfirmProduct);
        } else if (type == '3') {
            setProductState(deliveringProduct);
        } else if (type == '4') {
            setProductState(deliverdProduct);
        } else if (type == '5') {
            setProductState(CancleProduct);
        }
    }, [type]);

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
                    /
                    <div className="px-[30px] mx-auto max-w-[142.7rem] w-[100%]">
                        <div className="flex justify-start gap-[20px]">
                            {/* Left Menu */}
                            <Menu pathName={pathName} />
                            {/* Right content */}
                            <div className="flex flex-col items-start w-[1000px]">
                                {/* Header */}
                                <div className="text-center text-[#009383] text-[32px] font-bold leading-[38.40px]">
                                    Đơn hàng của tôi
                                </div>

                                {/* Navigation links */}
                                <div className="w-[100%] h-[52px] mt-[16px] p-0.5 bg-white rounded-lg border border-[#006e62] justify-between items-center gap-1.5 inline-flex">
                                    <Link
                                        to={'/don-hang?type=1'}
                                        className={`h-[100%] w-[180px] cursor-pointer px-8 py-[13.50px] rounded-md justify-center items-center gap-1.5 flex overflow-hidden
                                             ${type === '1' ? 'bg-[#009383]' : 'bg-[#fff]'}`}
                                    >
                                        <div
                                            className={`text-[18px] font-semibold ${
                                                type === '1' ? 'text-white' : 'text-[#505050]'
                                            }`}
                                        >
                                            Tất cả đơn
                                        </div>
                                    </Link>

                                    <Link
                                        to={'/don-hang?type=2'}
                                        className={`h-[100%] w-[185px] cursor-pointer px-8 py-[13.50px] rounded-md justify-center items-center gap-1.5 flex overflow-hidden
                                             ${type === '2' ? 'bg-[#009383]' : 'bg-[#fff]'}`}
                                    >
                                        <div
                                            className={`text-[18px] font-semibold ${
                                                type === '2' ? 'text-white' : 'text-[#505050]'
                                            }`}
                                        >
                                            Đang xử lý
                                        </div>
                                    </Link>

                                    <Link
                                        to={'/don-hang?type=3'}
                                        className={`h-[100%] w-[185px] cursor-pointer px-8 py-[13.50px] rounded-md justify-center items-center gap-1.5 flex overflow-hidden
                                             ${type === '3' ? 'bg-[#009383]' : 'bg-[#fff]'}`}
                                    >
                                        <div
                                            className={`text-[18px] font-semibold ${
                                                type === '3' ? 'text-white' : 'text-[#505050]'
                                            }`}
                                        >
                                            Đang vận chuyển
                                        </div>
                                    </Link>

                                    <Link
                                        to={'/don-hang?type=4'}
                                        className={`h-[100%] w-[185px] cursor-pointer px-8 py-[13.50px] rounded-md justify-center items-center gap-1.5 flex overflow-hidden
                                             ${type === '4' ? 'bg-[#009383]' : 'bg-[#fff]'}`}
                                    >
                                        <div
                                            className={`text-[18px] font-semibold ${
                                                type === '4' ? 'text-white' : 'text-[#505050]'
                                            }`}
                                        >
                                            Đã giao
                                        </div>
                                    </Link>

                                    <Link
                                        to={'/don-hang?type=5'}
                                        className={`h-[100%] w-[185px] cursor-pointer px-8 py-[13.50px] rounded-md justify-center items-center gap-1.5 flex overflow-hidden
                                             ${type === '5' ? 'bg-[#009383]' : 'bg-[#fff]'}`}
                                    >
                                        <div
                                            className={`text-[18px] font-semibold ${
                                                type === '5' ? 'text-white' : 'text-[#505050]'
                                            }`}
                                        >
                                            Đã hủy
                                        </div>
                                    </Link>
                                </div>

                                {/* Search bar */}
                                <div className="h-[48px] px-4 mt-[16px] w-[100%] bg-white rounded-lg border border-[#b6b6b6] justify-start items-center gap-2.5 inline-flex overflow-hidden">
                                    <MagnifyingGlassBlack />
                                    <div className="text-[#505050] text-[17px] font-normal ">Tìm kiếm đơn hàng</div>
                                </div>

                                {/* Product List */}
                                {productState.length > 0 ? (
                                    productState.map((product) => (
                                        <div
                                            key={product.id}
                                            className="w-[1000px] mt-[16px] h-[222px] p-3 bg-white rounded-xl shadow-[0px_0px_20px_0px_rgba(113,113,113,0.15)] border flex-col justify-start items-end gap-3 inline-flex overflow-hidden"
                                        >
                                            <div className="self-stretch justify-between items-start inline-flex">
                                                <div className="w-[441px] h-[130px] relative">
                                                    <div className="w-[130px] h-[130px] left-0 top-0 absolute">
                                                        <div className="w-[130px] h-[130px] left-0 top-0 absolute bg-[#eceef0] rounded-lg" />
                                                        <img
                                                            className="w-[100%] object-cover h-[100%] left-0 top-0 absolute"
                                                            src={product.imgSrc}
                                                            alt={product.name}
                                                        />
                                                    </div>
                                                    <div className="left-[142px] top-[12px] absolute flex-col justify-start items-start gap-4 inline-flex">
                                                        <div className="w-[299px] text-[#373737] text-[18px] font-semibold leading-normal">
                                                            {product.name}
                                                        </div>
                                                        <div className="h-[27.53px] px-2 py-1 bg-[#dde6ff] rounded-[20px] justify-start items-center gap-[3px] inline-flex">
                                                            <LeafBlue />
                                                            <div className="text-[#0084ff] text-[15px] font-medium ">
                                                                {product.category}
                                                            </div>
                                                        </div>
                                                        <div className="w-[180px]">
                                                            <span className="text-[#494949] text-[17px] font-normal leading-7">
                                                                Số lượng:{' '}
                                                            </span>
                                                            <span className="text-[#006e62] text-[17px] font-semibold leading-7">
                                                                {product.quantity}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="justify-start items-center gap-1.5 flex">
                                                    <div className="w-6 h-6 relative overflow-hidden" />
                                                    <div className="text-[#009383] text-[17px] font-semibold leading-tight">
                                                        {product.status}
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="self-stretch h-14 flex-col justify-start items-end gap-3 flex ">
                                                <div className="w-[1000px] h-[0px] border border-[#dbdbdb]"></div>
                                                <div className="w-[1000px] justify-between items-center inline-flex">
                                                    <div className="justify-center items-center gap-4 flex ml-[20px]">
                                                        <Link
                                                            to={'/chi-tiet-don-hang'}
                                                            className="w-[140px] h-[40px] px-6 py-2.5 cursor-pointer rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] border border-[#66beb5] justify-center items-center gap-2 flex"
                                                        >
                                                            <div className="text-[#505050] text-[19px] font-semibold ">
                                                                Xem chi tiết
                                                            </div>
                                                        </Link>
                                                        <div className="w-[140px] h-[40px] px-6 py-2.5 cursor-pointer rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] border border-[#66beb5] justify-center items-center gap-2 flex">
                                                            <div className="text-[#505050] text-[19px] font-semibold ">
                                                                Đánh giá
                                                            </div>
                                                        </div>
                                                        <div className="w-[140px] h-[40px] px-6 py-2.5 cursor-pointer bg-[#009383] rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] justify-center items-center gap-2 flex overflow-hidden">
                                                            <div className="text-white text-[19px] font-semibold ">
                                                                Mua lại
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <span className="text-[#494949] text-[20px] font-medium leading-relaxed">
                                                            Tổng tiền:
                                                        </span>
                                                        <span className="text-[#009383] text-[20px] font-bold leading-relaxed">
                                                            {product.price.toLocaleString()}đ
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <div className="flex flex-col justify-center items-center mx-auto gap-5 mt-[100px]">
                                        <CartSad />
                                        <div className="text-center text-[#66beb5] text-[18px] font-medium ">
                                            Chưa có đơn hàng
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AllOrder;
