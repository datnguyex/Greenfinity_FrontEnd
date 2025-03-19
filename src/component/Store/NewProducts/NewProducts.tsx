import { TFunction } from 'i18next';
import { Link } from 'react-router-dom';
import { Cart, LeafBlue, LeafPupple } from '~/assets/Icons';
import { OreonProduct } from '~/assets/Images';

// Define the Product type
type Product = {
    image: string;
    category: string;
    title: string;
    price: string;
};

// Define the props for the component
type NewProductsProps = {
    products: Product[];
    t: TFunction;
};

function NewProducts({ products, t }: NewProductsProps) {
    return (
        <div className="flex justify-end items-center gap-[15px] w-full h-[100vh]">
            {/* itemLeft */}
            <div className="w-[25%] relative bg-white rounded-3xl shadow-[0px_2px_19.700000762939453px_0px_rgba(0,0,0,0.07)] overflow-hidden">
                <img className="h-auto w-[100%] object-contain" src={OreonProduct} alt="Sunflower Coaster" />
                <div className="w-[85%] h-[20%] px-4 py-[19px] left-[50%] translate-x-[-50%] bottom-[2%] absolute bg-white rounded-xl border border-[#66beb5] flex-col justify-center items-start gap-4 inline-flex">
                    <div className="flex-col justify-start items-start gap-4 flex">
                        <div className="flex-col justify-start items-start gap-3.5 flex">
                            <div className="h-[27.53px] px-2 py-1 bg-[#dde6ff] rounded-[20px] justify-start items-center gap-[3px] inline-flex">
                                <div className="text-[#0084ff] flex justify-center items-center text-[15px] font-medium ">
                                    <LeafBlue />
                                    Art toy
                                </div>
                            </div>
                            <div className="text-[#494949] text-[16px] font-semibold ">SUNFLOWER COASTER SET</div>
                        </div>
                        <div className="text-[#009383] text-[20px] font-extrabold ">800.000đ</div>
                    </div>
                    <Link
                        to={'/chi-tiet-san-pham'}
                        className="cursor-pointer self-stretch h-12 px-6 py-7 bg-[#009383] rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] justify-center items-center gap-2 inline-flex overflow-hidden"
                    >
                        <div className="text-white text-[18px] font-bold ">{t('buy')}</div>
                    </Link>
                </div>
                <div className=" absolute justify-center items-center inline-flex overflow-hidden">
                    <div className="relative flex-col justify-start items-start flex" />
                </div>
            </div>

            {/* itemRight */}
            <div className="w-full max-w-[65vw] h-[100%] flex flex-wrap justify-start relative gap-6">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="w-[29%] h-[50%] relative bg-white rounded-3xl shadow-[0px_2px_19.700000762939453px_0px_rgba(0,0,0,0.07)] overflow-hidden"
                    >
                        <img
                            className="absolute top-[0px] h-[70%] w-[60%] flex left-[0px] translate-x-[25%] translate-y-[-20px]"
                            src={product.image}
                            alt=""
                        />
                        <div className="absolute right-7 top-7">
                            <Cart />
                        </div>
                        <div className="w-[85%] h-[35%] px-4 pt-3 pb-5 left-[50%] translate-x-[-50%] bottom-[2%] absolute bg-white rounded-xl border border-[#66beb5] flex-col justify-center items-start gap-4 inline-flex">
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
                                className="cursor-pointer self-stretch h-12 px-6 py-7 bg-[#009383] rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] justify-center items-center gap-2 inline-flex overflow-hidden"
                            >
                                <div className="text-white text-[17px] font-bold ">{t('buy')}</div>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default NewProducts;
