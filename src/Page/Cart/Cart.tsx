import { leafHomeLeft, leafHomeRight, SharkProduct } from '~/Images';
import Header from '~/component/Layout/Header/Header';
import Footer from '~/component/Layout/Footer/Footer';
import { Bin, Minus, Plus, CartSad } from '~/component/Icon';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
function Cart() {
    const { t } = useTranslation(['Cart']);
    const products = [
        {
            id: 1,
            name: 'Multipurpose container Shark',
            category: 'Household',
            price: '800.000đ',
            totalPrice: '1.600.000đ',
        },
        {
            id: 2,
            name: 'Multipurpose container Dolphin',
            category: 'Kitchen',
            price: '700.000đ',
            totalPrice: '1.400.000đ',
        },
        {
            id: 3,
            name: 'Multipurpose container Whale',
            category: 'Living Room',
            price: '750.000đ',
            totalPrice: '1.500.000đ',
        },
        {
            id: 4,
            name: 'Multipurpose container Whale',
            category: 'Living Room',
            price: '750.000đ',
            totalPrice: '1.500.000đ',
        },
    ];

    const [count, setCount] = useState(1);
    const handleCount = (e: any) => {
        const value = e.target.value;

        if (!isNaN(value) && value >= 0) {
            setCount(Number(value));
        }
    };
    const handleDecrease = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };
    const handleIncrease = () => {
        setCount(count + 1);
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
                    <div className="px-[30px] mx-auto max-w-[132.7rem] w-[100%]">
                        <div className="text-[#006e62] text-[32px] font-semibold font-['Roboto'] mb-[15px]">
                            {t('title')}
                        </div>
                        <div className="flex justify-center gap-[20px]">
                            {/* //chil */}

                            <div className="w-[70%] gap-[10px] flex flex-col">
                                {/* //item */}
                                <div className="max-w-[100%] h-[57px] relative bg-white rounded-xl shadow-[0px_0px_7px_0px_rgba(0,0,0,0.17)]">
                                    <div className="left-[16px] top-[19px] absolute justify-start items-center gap-2.5 inline-flex">
                                        <input
                                            type="checkbox"
                                            className="appearance-none relative rounded w-[20px] h-[20px] border-[1px] border-solid border-[#009383] checked:bg-[#009383]"
                                        />
                                        <div className="text-black text-[18px] font-normal font-['Roboto'] leading-normal">
                                            {t('allProducts')}
                                        </div>
                                    </div>
                                    <div className="left-[400px] top-[22.50px] absolute text-black text-[18px] font-normal font-['Roboto'] leading-normal">
                                        {t('price')}
                                    </div>
                                    <div className="left-[550px] top-[22.50px] absolute text-black text-[18px] font-normal font-['Roboto'] leading-normal">
                                        {t('quantity')}
                                    </div>
                                    <div className="left-[700px] top-[22.50px] absolute text-black text-[18px] font-normal font-['Roboto'] leading-normal">
                                        {t('totalPrice')}
                                    </div>
                                    <div className="left-[840px] top-[22.50px] absolute text-black text-[18px] font-normal font-['Roboto'] leading-normal">
                                        <Bin />
                                    </div>
                                </div>
                                {/* //item */}
                                {products.map((product) => (
                                    <div
                                        key={product.id}
                                        className="max-w-[100%] h-40 relative bg-white rounded-[13px] shadow-[0px_0px_7px_0px_rgba(0,0,0,0.17)] flex items-center"
                                    >
                                        <input
                                            type="checkbox"
                                            className="left-[16px] appearance-none relative rounded w-[20px] h-[20px] border-[1px] border-solid border-[#009383] checked:bg-[#009383]"
                                        />
                                        <div className="w-[8%] h-[90%] left-[52px] absolute bg-[#eceef0] rounded-xl flex-col justify-center items-center inline-flex overflow-hidden">
                                            <img className="w-[100%] h-[100%]" src={SharkProduct} alt={product.name} />
                                        </div>
                                        <div className="left-[165px] absolute flex-col justify-start items-start gap-4">
                                            <div className="max-w-[220px] text-[#373737] text-[18px] font-semibold font-['Roboto'] leading-normal">
                                                {product.name}
                                            </div>
                                            <div className="h-7 px-2 py-1 bg-[#f4ddff] rounded-[20px] justify-start items-center gap-[3px] inline-flex">
                                                <div className="text-[#9644ff] text-[15px] font-medium font-['Roboto']">
                                                    {product.category}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="left-[400px] absolute text-[#009383] text-[20px] font-semibold font-['Roboto'] leading-relaxed">
                                            {product.price}
                                        </div>
                                        <div className="h-10 px-3 left-[530px] w-[10%] absolute bg-white rounded-lg border border-[#929292] inline-flex gap-3.5 items-center">
                                            <div className="justify-between items-center inline-flex h-[100%]">
                                                <div
                                                    className="cursor-pointer w-5 h-5 relative flex items-center"
                                                    onClick={handleDecrease}
                                                >
                                                    <Minus />
                                                </div>
                                                <input
                                                    className="text-[#494949] text-[18px] font-medium font-['Roboto'] block w-[100%] outline-none text-center"
                                                    value={count}
                                                    onChange={handleCount}
                                                />
                                                <div
                                                    className="cursor-pointer w-5 h-5 relative flex items-center"
                                                    onClick={handleIncrease}
                                                >
                                                    <Plus />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="left-[700px] absolute text-[#009383] text-[20px] font-semibold font-['Roboto'] leading-relaxed">
                                            {product.totalPrice}
                                        </div>
                                        <div className="cursor-pointer left-[840px] absolute text-black text-[18px] font-normal font-['Roboto'] leading-normal">
                                            <Bin />
                                        </div>
                                    </div>
                                ))}
                                {/* {/* //item */}
                                {/* <div className="flex justify-center items-center flex-col gap-[15px] pt-[30px]">
                                    <CartSad />
                                    <div className="text-center text-[#66beb5] text-[18px] font-medium font-['Roboto']">
                                        Chưa có đơn hàng
                                    </div>
                                </div> */}
                            </div>
                            {/* //child */}
                            <div className="w-[30%] ">
                                <div className="w-[342px] h-[210px] flex-col justify-start items-start gap-6 inline-flex">
                                    <div className="h-[138px] bg-white rounded-xl shadow-[0px_0px_8px_0px_rgba(0,0,0,0.25)] flex-col justify-start items-start gap-6 flex">
                                        <div className="w-[342px] h-[138px] relative rounded-xl">
                                            <div className="left-[16px] top-[24px] absolute text-[#494949] text-[16px] font-['Roboto']">
                                                {t('provisional')}
                                            </div>
                                            <div className="left-[307px] top-[24px] absolute text-right text-[#494949] text-[16px] font-[16px] font-['Roboto']">
                                                0đ
                                            </div>
                                            <div className="w-[309px] h-[0px] left-[16px] top-[73px] absolute border border-[#b6b6b6]"></div>
                                            <div className="left-[16px] top-[91px] absolute text-right text-[#494949] text-[16px] font-semibold font-['Roboto']">
                                                {t('totalPricePre')}
                                            </div>
                                            <div className="left-[301px] top-[91px] absolute text-right text-[#009383] text-[16px] font-bold font-['Roboto']">
                                                0đ
                                            </div>
                                        </div>
                                    </div>
                                    <Link
                                        to="/thong-tin-van-chuyen"
                                        className="w-[342px] h-12 px-6 py-9 bg-[#009383] rounded-lg cursor-pointer justify-center items-center gap-2 inline-flex overflow-hidden"
                                    >
                                        <div className="text-white text-[16px] font-bold font-['Roboto']">Mua ngay</div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Cart;
