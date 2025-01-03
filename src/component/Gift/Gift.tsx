import Title from 'antd/es/skeleton/Title';
import { Headerleft, HomeVoucer } from '~/Images';
import TitleBar from '../TittleBar/TittleBar';

function Gift({ t }: { t: (key: string) => string }) {
    return (
        <>
            <TitleBar title={t('title')} />
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
