import { leafHomeLeft, leafHomeRight } from '~/assets/Images/';
import Header from '~/Layouts/Header/Header';
import Footer from '~/Layouts/Footer/Footer';
import Contribute from '~/component/Contribute/Contribute';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function ContributeRanking() {
    const { t } = useTranslation(['ContributeRanking']);
    const languageState = useSelector((state: any) => state.language.language);
    const { i18n } = useTranslation();
    useEffect(() => {
        i18n.changeLanguage(languageState);
    }, [languageState]);
    return (
        <>
            <Header />
            <div
                className="bg-[#f2fffd] pt-[56px] pb-[120px] bg-no-repeat bg-[position:0_100%] bg-[size:10%_auto]"
                style={{
                    backgroundImage: `url(${leafHomeLeft}), url(${leafHomeRight})`,
                    backgroundPosition: '0 100%, 100% 100%',
                    backgroundSize: '10% auto, 10% auto',
                }}
            >
                <div className="my-[140px]">
                    <div className="px-[30px] mx-auto max-w-[132.7rem] w-[100%]">
                        <Contribute t={t} />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ContributeRanking;
