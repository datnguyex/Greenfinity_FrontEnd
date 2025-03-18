import { HomeVoucer } from '~/assets/Images/';
import TitleBarTypeWhite from '../../component/TittleBar/TitleBarTypeWhite/TitleBarTypeWhite';

function Gift({ t }: { t: (key: string) => string }) {
    return (
        <>
            <TitleBarTypeWhite title={t('title')} />
            <div className="mb-[10%]  mx-auto max-w-[95%] relative">
                <div className="flex items-center w-[100%] p-[100px] gap-[4.5rem]">
                    <div className="w-[50%]">
                        <img src={HomeVoucer} alt="" />
                    </div>
                    <div className="flex flex-col w-[50%] gap-[1.7rem]">
                        <h3 className="text-[#009383] font-roboto-condensed text-[4.4rem] font-bold w-[90%]">
                            {t('introduce')}
                        </h3>
                        <div className="text-[#13250] font-roboto-condensed text-[2.4rem] font-bold">
                            {t('content')}
                        </div>
                        <button
                            className="font-roboto-condensed flex items-center bg-[#009383] border
                                                             border-[#fff] text-[#fff] text-[1.8rem] gap-[0.8rem] min-h-[5.2rem]
                                                                justify-center whitespace-nowrap
                                                                p-[1rem] w-[50%] rounded-[0.8rem]
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
