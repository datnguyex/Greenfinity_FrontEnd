import { leafHomeLeft, leafHomeRight } from '~/Images';
import Header from '~/component/Layout/Header/Header';
import Footer from '~/component/Layout/Footer/Footer';
import Contribute from '~/component/Contribute/Contribute';
import { useTranslation } from 'react-i18next';

function ContributeRanking() {
    const { t } = useTranslation(['ContributeRanking']);
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
