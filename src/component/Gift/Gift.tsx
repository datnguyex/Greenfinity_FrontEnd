import { Headerleft, HomeVoucer } from '~/Images';

function Gift({ t }: { t: (key: string) => string }) {
    return (
        <>
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
                        {t('title')}
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
                        <h3 className="text-[#009383] text-[4.4rem] font-bold w-[90%]">{t('introduce')}</h3>
                        <div className="text-[#13250] text-[2.4rem] font-bold">{t('content')}</div>
                        <button
                            className="flex items-center bg-[#009383] border
                                                             border-[#fff] text-[#fff] text-[1.8rem] gap-[0.8rem] min-h-[5.2rem]
                                                                min-w-[20rem] justify-center whitespace-nowrap
                                                                p-[1rem] w-[16rem] rounded-[0.8rem]
                                                             "
                        >
                            {t('exchangeGifts')}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Gift;
