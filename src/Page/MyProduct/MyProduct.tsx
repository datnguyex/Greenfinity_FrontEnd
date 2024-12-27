import { Pagination } from 'antd';
import { BarCode, LeafBlue } from '~/component/Icon';
import Footer from '~/component/Layout/Footer/Footer';
import Header from '~/component/Layout/Header/Header';
import Menu from '~/component/Menu/Menu';
import { leafHomeLeft, leafHomeRight, OreonProduct, SharkProduct } from '~/Images';

function MyProduct() {
    const products = [
        { id: 1, name: 'Multipurpose container Shark', category: 'Art toy', image: OreonProduct },
        { id: 2, name: 'Multipurpose container Shark', category: 'Art toy', image: OreonProduct },
        { id: 3, name: 'Multipurpose container Shark', category: 'Art toy', image: OreonProduct },
        { id: 4, name: 'Multipurpose container Shark', category: 'Art toy', image: OreonProduct },
        { id: 5, name: 'Multipurpose container Shark', category: 'Art toy', image: OreonProduct },
        { id: 6, name: 'Multipurpose container Shark', category: 'Art toy', image: OreonProduct },
        { id: 7, name: 'Multipurpose container Shark', category: 'Art toy', image: OreonProduct },
        { id: 8, name: 'Multipurpose container Shark', category: 'Art toy', image: OreonProduct },
        { id: 9, name: 'Multipurpose container Shark', category: 'Art toy', image: OreonProduct },
    ];

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
                    <div className="px-[30px] mx-auto max-w-[142.7rem] w-[100%]">
                        <div className="flex justify-start gap-[20px]">
                            {/* Left Menu */}
                            <Menu />
                            {/* Right content */}
                            <div className="flex flex-col">
                                <div className="h-[52px] cursor-pointer w-[220px] mb-[30px] px-4 py-[5px] bg-[#009383] rounded-[10px] flex-col justify-center items-center inline-flex">
                                    <div className="justify-start items-center gap-2 inline-flex">
                                        <BarCode />
                                        <div className="text-white text-[17px] font-semibold font-['Roboto'] leading-tight">
                                            Hướng dẫn định danh
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-3 gap-6">
                                    {products.map((product) => (
                                        <div
                                            key={product.id}
                                            className="w-[345px] h-[336px] p-3 bg-white rounded-2xl shadow-[0px_0px_20px_0px_rgba(113,113,113,0.15)] flex-col justify-between items-start inline-flex"
                                        >
                                            <div className="h-[168px] w-[100%] bg-[#eceef0] rounded-xl justify-center items-center inline-flex overflow-hidden">
                                                <img
                                                    className="w-[100%] h-auto object-cover"
                                                    src={product.image}
                                                    alt={product.name}
                                                />
                                            </div>
                                            <div className="self-stretch h-[132.53px] flex-col justify-start items-center gap-4 flex">
                                                <div className="self-stretch h-[76.53px] flex-col justify-start items-start gap-3 flex">
                                                    <div className="h-[27.53px] px-3 py-2 bg-[#dde6ff] rounded-[20px] justify-start items-center gap-[3px] inline-flex">
                                                        <div className="text-[#0084ff] text-[15px] font-medium font-['Roboto'] flex justify-center items-center gap-2">
                                                            <LeafBlue />
                                                            {product.category}
                                                        </div>
                                                    </div>
                                                    <div className="w-[230px] text-[#494949] text-[20px] font-semibold font-['Roboto'] uppercase">
                                                        {product.name}
                                                    </div>
                                                </div>
                                                <div className="self-stretch h-11 px-6 py-7 cursor-pointer bg-white rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] border border-[#009383] justify-center items-center gap-2 inline-flex overflow-hidden">
                                                    <div className="text-[#009383] text-[18px] font-bold font-['Roboto']">
                                                        Xem chi tiết
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="mx-auto text-center mt-[40px]">
                                    <Pagination
                                        defaultCurrent={1}
                                        total={30}
                                        className="flex justify-center ant-paginate-contribute"
                                    />
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

export default MyProduct;
