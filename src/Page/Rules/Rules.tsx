import { RimVoucher, GoldCoin } from '~/assets/Icons';
import { leafHomeLeft, leafHomeRight } from '~/assets/Images/';
import Header from '~/Layouts/Header/Header';
import Footer from '~/Layouts/Footer/Footer';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
function Rules() {
    const { t } = useTranslation(['Rule']);
    const languageState = useSelector((state: any) => state.language.language);
    const { i18n } = useTranslation();

    const vouchers = Array(6).fill({
        title: 'Giải tư - Voucher Quà tặng thời trang Uniqlo',
        quantity: 5,
        method: 'Trao cho (05) người có Điểm Chi Tiêu cao tiếp theo Giải ba.',
        giftValue: '800.000 VND/voucher',
        points: 50,
    });
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
                    <div className="px-[30px] gap-[10px] mx-auto max-w-[132.7rem] w-[100%] flex flex-col items-center justify-center">
                        <div className="text-center text-[#009383] text-[64px] font-bold uppercase leading-[76.80px]">
                            {t('programRules')}
                        </div>
                        <div className="h-[68px] px-5 bg-[#15bdd6] rounded-lg justify-center items-center gap-2.5 inline-flex">
                            <div className="text-center text-white text-[40px] font-bold uppercase leading-[48px]">
                                {t('rebirthWith')}
                            </div>
                        </div>
                        <div className="text-[#494949] text- font-semibold ">
                            ( {t('freeFromdDate')} 30/07/2023 {t('untilTheDate')} 30/12/2023)
                        </div>
                        {/* //item */}
                        <div className="w-[1267px]">
                            <span className="text-[#3f3f3f] text-[18px] font-semibold leading-9">
                                {t('participant')}
                            </span>
                            <span className="text-[#3f3f3f] text-[15px] font-normal leading-[27px]">
                                {t('contentParticipant')}
                                <br />
                            </span>
                            <span className="text-[#3f3f3f] text-[18px] font-semibold leading-9">{t('howToJoim')}</span>
                            <span className="text-[#3f3f3f] text-[15px] font-normal leading-[27px]">
                                {t('contentHowtoJoin')}
                            </span>
                            <span className="text-[#3f3f3f] text-[15px] font-semibold leading-[27px]">
                                {t('Step1')}
                            </span>
                            <span className="text-[#3f3f3f] text-[15px] font-normal leading-[27px]">
                                {' '}
                                {t('contentStep1')}
                            </span>
                            <span className="text-[#3f3f3f] text-[15px] font-semibold leading-[27px]">
                                {t('Step2')}
                            </span>
                            <span className="text-[#3f3f3f] text-[15px] font-normal leading-[27px]">
                                {t('contentStep2')}
                                <br />
                                {t('contenChild1step2')}
                            </span>
                            <span className="text-[#3f3f3f] text-[15px] font-semibold leading-[27px]">
                                {t('linkAquafinaPepsi')}
                                <br />- {t('aquafinaBottle')}
                            </span>
                            <span className="text-[#3f3f3f] text-[15px] font-normal leading-[27px]">
                                {' '}
                                {t('TwoPoinAqua')}
                            </span>
                            <span className="text-[#3f3f3f] text-[15px] font-semibold leading-[27px]">
                                {t('notBottleAqua')}
                            </span>
                            <span className="text-[#3f3f3f] text-[15px] font-normal leading-[27px]">
                                {' '}
                                {t('OnePoinAqua')}
                                <br />
                            </span>
                            <span className="text-[#3f3f3f] text-[15px] font-semibold leading-[27px]">
                                {t('step3')}
                            </span>
                            <span className="text-[#3f3f3f] text-[15px] font-normal leading-[27px]">
                                {t('contentStep3')}
                                <br />
                            </span>
                            <span className="text-[#3f3f3f] text-[15px] font-semibold leading-[27px]">
                                {t('step4')}
                            </span>
                            <span className="text-[#3f3f3f] text-[15px] font-normal leading-[27px]">
                                {' '}
                                {t('contentStep4')}
                            </span>
                            <span className="text-[#3f3f3f] text-[15px] font-semibold leading-[27px]">
                                {t('form1')}
                            </span>
                            <span className="text-[#3f3f3f] text-[15px] font-normal leading-[27px]">
                                {' '}
                                {t('contentForm1')}
                            </span>
                            <span className="text-[#3f3f3f] text-[15px] font-semibold leading-[27px]">
                                {t('form2')}
                            </span>
                            <span className="text-[#3f3f3f] text-[15px] font-normal leading-[27px]">
                                {' '}
                                {t('contenForm2')}
                            </span>
                            <span className="text-[#3f3f3f] text-[15px] font-normal underline leading-[27px]">
                                {t('linkAquafinaPepsi')}
                            </span>
                            <span className="text-[#3f3f3f] text-[15px] font-normal leading-[27px]">
                                {' '}
                                và trên fanpage{' '}
                            </span>
                            <span className="text-[#3f3f3f] text-[15px] font-normal underline leading-[27px]">
                                {t('facebookAqua')}
                            </span>
                            <span className="text-[#3f3f3f] text-[15px] font-normal leading-[27px]">
                                {' '}
                                {t('timePublication')}
                                <br />
                            </span>
                            <span className="text-[#3f3f3f] text-[15px] font-semibold leading-[27px]">
                                {t('step5')}
                            </span>
                            <span className="text-[#3f3f3f] text-[15px] font-normal leading-[27px]">
                                {t('contentStep5')}
                                <br />
                            </span>
                            <span className="text-[#3f3f3f] text-[18px] font-semibold leading-9">
                                {t('step2.2')}
                                <br />
                            </span>
                            <span className="text-[#3f3f3f] text-[15px] font-normal leading-[27px]">
                                {t('contentStep2.2')}
                                <br />
                            </span>
                            <span className="text-[#3f3f3f] text-[18px] font-semibold leading-9">
                                {t('step2.3')}
                                <br />
                            </span>
                            <span className="text-[#3f3f3f] text-[15px] font-normal leading-[27px]">
                                {t('contentStep2.3')}
                            </span>
                            {/* //itemz */}
                            <div className="flex flex-wrap justify-start">
                                {vouchers.map((voucher, index) => (
                                    <div key={index} className="w-[380px] h-[577px] relative bg-white rounded-2xl mb-4">
                                        <div className="rounded-xl">
                                            <div className="top-[0px] w-[300px] rounded-xl relative">
                                                <RimVoucher />
                                            </div>
                                        </div>
                                        <div className="px-4 py-5 w-[90%] left-[50%] translate-x-[-50%] top-[337px] absolute bg-white rounded-xl border border-[#66beb5] flex-col justify-center items-start gap-2.5 inline-flex">
                                            <div className="flex-col justify-start items-start gap-3 flex">
                                                <div className="self-stretch text-[#006e62] text-[21px] font-semibold leading-relaxed">
                                                    {voucher.title}
                                                </div>
                                                <div className="self-stretch">
                                                    <span className="text-[#3f3f3f] text-[15px] font-semibold leading-snug">
                                                        {t('amountGiftPerWeek')}
                                                    </span>
                                                    <span className="text-[#3f3f3f] text-[15px] font-normal leading-snug">
                                                        {voucher.quantity}
                                                        <br />
                                                    </span>
                                                    <span className="text-[#3f3f3f] text-[15px] font-semibold leading-snug">
                                                        {t('howToReedem')}
                                                    </span>
                                                    <span className="text-[#3f3f3f] text-[15px] font-normal leading-snug">
                                                        {voucher.method}
                                                        <br />
                                                    </span>
                                                    <span className="text-[#3f3f3f] text-[15px] font-semibold leading-snug">
                                                        {t('valueOfGift')}
                                                    </span>
                                                    <span className="text-[#3f3f3f] text-[15px] font-normal leading-snug">
                                                        {voucher.giftValue}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            {/* //item */}
                            <div className="w-[1267px]">
                                <span className="text-[#3f3f3f] text-[18px] font-semibold leading-9">
                                    {t('step2.4')}
                                    <br />
                                </span>
                                <span className="text-[#3f3f3f] text-[15px] font-normal leading-[27px]">
                                    {t('contentStep2.4')}
                                </span>
                                <span className="text-[#3f3f3f] text-[15px] font-semibold leading-[27px]">
                                    {t('linkAquafinaPepsi')}
                                </span>

                                <span className="text-[#3f3f3f] text-[15px] font-normal leading-[27px]">
                                    {t('content2Step2.4')}
                                    <br />
                                </span>
                                <span className="text-[#3f3f3f] text-[18px] font-semibold leading-9">
                                    {t('step3Child')}
                                    <br />
                                </span>
                                <span className="text-[#3f3f3f] text-[15px] font-normal leading-[27px]">
                                    {t('contentStep3Child')}
                                </span>
                                <span className="text-[#3f3f3f] text-[15px] font-semibold leading-[27px]"> </span>
                                <span className="text-[#3f3f3f] text-[15px] font-semibold underline leading-[27px]">
                                    {t('facebookAqua')}
                                </span>
                                <span className="text-[#3f3f3f] text-[15px] font-normal leading-[27px]">
                                    {t('content2Step3Child')}
                                </span>
                                <span className="text-[#3f3f3f] text-[15px] font-semibold leading-[27px]"> </span>

                                <span className="text-[#3f3f3f] text-[15px] font-semibold underline leading-[27px]">
                                    {t('facebookAqua')}
                                </span>
                                <span className="text-[#3f3f3f] text-[15px] font-normal leading-[27px]">
                                    {' '}
                                    {t('content3Step3Child')}
                                    <br />
                                </span>

                                <span className="text-[#3f3f3f] text-[18px] font-semibold leading-9">
                                    {t('clauseSecurity')}
                                </span>
                                <span className="text-[#3f3f3f] text-[15px] font-normal leading-[27px]">
                                    {t('contentClause')}
                                    <br />
                                </span>

                                <span className="text-[#3f3f3f] text-[18px] font-semibold leading-9">
                                    {t('personalData')}
                                </span>

                                <span className="text-[#3f3f3f] text-[15px] font-normal leading-[27px]">
                                    {t('contentPersonalData')}
                                    <br />
                                </span>
                                <span className="text-[#3f3f3f] text-[18px] font-semibold leading-9">
                                    {t('howtoShareData')}
                                </span>
                                <span className="text-[#3f3f3f] text-[15px] font-normal leading-[27px]">
                                    {t('conyentHowtoShareData')}
                                    <br />
                                </span>
                                <span className="text-[#3f3f3f] text-[18px] font-semibold leading-9">
                                    {t('howtoShareData')}
                                    <br />
                                </span>
                                <span className="text-[#3f3f3f] text-[15px] font-normal leading-[27px]">
                                    {t('conyentHowtoShareData')}
                                    <br />
                                </span>
                                <span className="text-[#3f3f3f] text-[18px] font-semibold leading-9">
                                    {t('titleObligationParticipant')}
                                </span>
                                <span className="text-[#3f3f3f] text-[15px] font-normal leading-[27px]">
                                    {t('obligationOfParticipant')}
                                </span>
                                <span className="text-[#3f3f3f] text-[15px] font-semibold leading-[27px]">
                                    {t('emailPepsi')}
                                </span>
                            </div>
                        </div>
                        <button
                            className="flex items-center bg-[#009383] border mt-[30px]
                                     border-[#fff] text-[#fff] text-[1.8rem] gap-[0.8rem] min-h-[5.2rem]
                                        min-w-[20rem] justify-center whitespace-nowrap
                                        p-[1rem] w-[16rem] rounded-[0.8rem]
                                     "
                        >
                            {t('reDeemGift')}
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Rules;
