import {
    leafHomeLeft,
    leafHomeRight,
    Headerleft,
    HomeVoucer,
    RecycleWithGreez,
    AquafinaLogo,
    AltaPlasticLogo,
    AltaMediaLogo,
    AltaSoftwareLogo,
    uniGonLogo,
    DataSLogo,
} from '~/Images';
import Header from '~/component/Layout/Header/Header';
import Footer from '~/component/Layout/Footer/Footer';

function WorldRebirth() {
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
                    <div className="px-[30px] mx-auto max-w-[132.7rem] w-[100%] ">
                        {/* //item */}
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
                                    Quà tặng
                                </h2>
                            </div>
                            <img className="mr-[-1px] h-[100%] w-[33.7396px] scale-x-[-1]" src={Headerleft} alt="" />
                        </div>
                        <div className="mb-[120px] h-[50rem] mx-auto] max-w-[145.5rem relative]">
                            <div className="flex items-center w-[100%] p-[100px] gap-[4.5rem] height-[50rem]">
                                <div className="w-[50%]">
                                    <img src={HomeVoucer} alt="" />
                                </div>
                                <div className="flex flex-col w-[50%] gap-[1.7rem]">
                                    <h3 className="text-[#009383] text-[4.4rem] font-bold w-[90%]">
                                        Voucher quà tặng từ MOMO
                                    </h3>
                                    <div className="text-[#13250] text-[2.4rem] font-bold">
                                        Hãy cùng nhau thu gom những chai nhựa/lon nhôm để nhận nhiều voucher có giá trị
                                        cao.
                                    </div>
                                    <button
                                        className="flex items-center bg-[#009383] border
                                                             border-[#fff] text-[#fff] text-[1.8rem] gap-[0.8rem] min-h-[5.2rem]
                                                                min-w-[20rem] justify-center whitespace-nowrap
                                                                p-[1rem] w-[16rem] rounded-[0.8rem]
                                                             "
                                    >
                                        Đổi quà
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* //item */}
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
                                    Thể lệ chương trình
                                </h2>
                            </div>
                            <img className="mr-[-1px] h-[100%] w-[33.7396px] scale-x-[-1]" src={Headerleft} alt="" />
                        </div>
                        <div className="mb-[120px] h-[50rem] mx-auto] max-w-[145.5rem relative]">
                            <div className="flex items-center  w-[100%] p-[100px] gap-[4.5rem] height-[50rem]">
                                <div className="w-[50%]">
                                    <img className="h-[100%] w-[100%] object-cover" src={RecycleWithGreez} alt="" />
                                </div>
                                <div className="flex flex-col w-[50%] gap-[2rem]">
                                    <h3 className="text-[#009383] text-[4.8rem] font-bold w-[90%]">
                                        Tái chế cùng <br /> cộng đồng <span className="text-[#15bdd7]">GreeZ</span>
                                    </h3>

                                    <button
                                        className="flex items-center bg-[#009383] border
                                                             border-[#fff] text-[#fff] text-[2rem] gap-[0.8rem] min-h-[5.2rem]
                                                                min-w-[20rem] justify-center whitespace-nowrap
                                                                p-[1rem] w-[16rem] rounded-[0.8rem]
                                                             "
                                    >
                                        Xem thể lệ
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* //item */}
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
                                    THƯƠNG HIỆU KẾT HỢP
                                </h2>
                            </div>
                            <img className="mr-[-1px] h-[100%] w-[33.7396px] scale-x-[-1]" src={Headerleft} alt="" />
                        </div>
                        <div className="max-w-[86.5rem] mx-auto">
                            <img className="w-[75%] mx-auto" src={AquafinaLogo} alt="" />
                        </div>
                    </div>
                    <div className="mt-[2.4rem]">
                        <h3 className="text-[#009383] text-[4rem] font-bold uppercase text-center">Đối tác</h3>
                        <div className="flex items-center gap-[8rem] mx-auto justify-center mt-[4rem] pb-[12rem max-w-[142.5rem]">
                            <img
                                className="object-cover block w-[20%] h-auto max-w-[100%]"
                                src={AltaPlasticLogo}
                                alt=""
                            />
                            <img
                                className="object-cover block w-[20%] h-auto max-w-[100%]"
                                src={AltaMediaLogo}
                                alt=""
                            />
                            <img
                                className="object-cover block w-[20%] h-auto max-w-[100%]"
                                src={AltaSoftwareLogo}
                                alt=""
                            />
                            <img className="object-cover block w-[20%] h-auto max-w-[100%]" src={uniGonLogo} alt="" />

                            <img className="object-cover block w-[20%] h-auto max-w-[100%]" src={DataSLogo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default WorldRebirth;
