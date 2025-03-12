import { leafHomeLeft, leafHomeRight, recycleGreezStaion } from '~/assets/Images/';
import Header from '~/Layouts/Header/Header';
import Footer from '~/Layouts/Footer/Footer';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import RecyclingSteps from '~/component/GreezStation/RecylingSteeps';

function GreezStation() {
    const { t } = useTranslation(['GreezStaion']);
    const languageState = useSelector((state: any) => state.language.language);
    const { i18n } = useTranslation();
    useEffect(() => {
        i18n.changeLanguage(languageState);
    }, [languageState]);
    return (
        <>
            <Header></Header>
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
                        <div className="flex flex-col my-[40px] justify-center items-center">
                            <div className="text-[#333] text-[3.6rem] font-bold text-center">{t('tile')}</div>
                            <h1 className="text-[#009383] text-[4.8rem] font-bold text-center">{t('introduce')}</h1>
                        </div>
                        {/* //item */}
                        <div className="mx-auto max-w-[86.5rem]">
                            <img src={recycleGreezStaion} alt="" />
                        </div>
                        {/* //item */}
                        <div className="flex items-center justify-center">
                            <span className="text-[4rem] font-bold text-[#009383]">{t('procedure')}</span>
                            <span className="bg-[#15bdd7] py-[9px] rounded-[0.6rem] font-bold ml-[1rem] px-[10px] uppercase border-[#e5e7eb] text-[#fff] text-[4.8rem] ">
                                RECYCLE DEPOT
                            </span>
                        </div>
                        {/* //item */}
                        <RecyclingSteps t={t} />
                        {/* items */}
                        <div className="mt-[12rem] items-center flex flex-col justify-center pb-[120px] gap-[15px]">
                            <div className="text-[#373737] text-[3.8rem] font-semibold">{t('itemSlogan1')}</div>
                            <div className="text-[5.4rem] uppercase font-extrabold text-[#009383]">
                                {t('itemSlogan2')}
                            </div>
                            <div className="text-[#373737] text-[4.8rem] font-semibold">
                                {t('itemSlogan3')}{' '}
                                <span className="uppercase font-[900] text-[5.5rem] text-[#009383]">
                                    {t('itemSlogan4')}
                                </span>{' '}
                                {t('itemSlogan5')}{' '}
                                <span className="uppercase font-[900] text-[5.5rem] text-[#009383]">
                                    {t('itemSlogan6')}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default GreezStation;
