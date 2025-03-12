import { leafHomeLeft, leafHomeRight, RecycleWithGreez, AquafinaLogo } from '~/assets/Images/';
import Header from '~/Layouts/Header/Header';
import Footer from '~/Layouts/Footer/Footer';
import Gift from '~/component/Gift/Gift';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import TitleBar from '~/component/TittleBar/TittleBar';
import { SponsorlogosImg } from '~/assets/Arrays/ImagesArr';

function WorldRebirth() {
    const { t } = useTranslation(['WorldRebirth']);
    const languageState = useSelector((state: any) => state.language.language);
    const { i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(languageState);
    }, [languageState]);

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
                        <Gift t={t} />
                        {/* //item */}
                        <TitleBar title={t('titleRule')} />
                        <div className="mb-[120px] h-[50rem] mx-auto] max-w-[145.5rem relative]">
                            <div className="flex items-center  w-[100%] p-[100px] gap-[4.5rem] height-[50rem]">
                                <div className="w-[50%]">
                                    <img className="h-[100%] w-[100%] object-cover" src={RecycleWithGreez} alt="" />
                                </div>
                                <div className="flex flex-col w-[50%] gap-[2rem]">
                                    <h3 className="text-[#009383] text-[4.8rem] font-bold w-[90%]">
                                        {t('recycleWith')} <br /> {t('Comunity')}{' '}
                                        <span className="text-[#15bdd7]">{t('Greez')}</span>
                                    </h3>

                                    <button
                                        className="flex items-center bg-[#009383] border
                                                             border-[#fff] text-[#fff] text-[2rem] gap-[0.8rem] min-h-[5.2rem]
                                                                min-w-[20rem] justify-center whitespace-nowrap
                                                                p-[1rem] w-[16rem] rounded-[0.8rem]
                                                             "
                                    >
                                        {t('seeRules')}
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* //item */}
                        <TitleBar title={t('titleColab')} />
                        <div className="max-w-[86.5rem] mx-auto">
                            <img className="w-[75%] mx-auto" src={AquafinaLogo} alt="" />
                        </div>
                    </div>
                    <div className="mt-[2.4rem]">
                        <h3 className="text-[#009383] text-[4rem] font-bold uppercase text-center">
                            {t('counterPart')}
                        </h3>
                        <div className="flex items-center gap-[8rem] mx-auto justify-center mt-[4rem] pb-[12rem max-w-[142.5rem]">
                            {SponsorlogosImg.map((logo, index) => (
                                <img
                                    key={index}
                                    className="object-cover block w-[20%] h-auto max-w-[100%]"
                                    src={logo.src}
                                    alt={logo.alt}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default WorldRebirth;
