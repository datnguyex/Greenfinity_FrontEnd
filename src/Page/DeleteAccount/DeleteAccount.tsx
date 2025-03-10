import { RectangularWarm } from '~/assets/Icons';
import { BottomTornPaper, CoinCircle, DeliveryTruck, RestoreCircle } from '~/assets/Icons/Icon';
import Footer from '~/Layouts/Footer/Footer';
import Header from '~/Layouts/Header/Header';
import { leafHomeLeft, leafHomeRight } from '~/assets/Images/';

type AddressFormProps = {
    handlelTypeDisplay: (value: string) => void;
    t: (key: string) => string;
};
function DeleteAccount({ handlelTypeDisplay, t }: AddressFormProps) {
    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-[100]"></div>
            <div className="w-[952px] fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-42%] z-[100] h-[641px] px-20 py-8 bg-white rounded-3xl mx-auto shadow-[0px_0px_26.100000381469727px_6px_rgba(0,0,0,0.03)] flex-col justify-start items-center gap-6 flex overflow-hidden">
                <div className="self-stretch h-[509px] flex-col justify-center items-center gap-6 flex">
                    <div className="h-[242px] flex-col justify-start items-center gap-2 flex">
                        <div className="h-20 px-5  bg-[#ff4343] rounded-lg justify-center items-center gap-2.5 inline-flex">
                            <div className="text-center text-white text-[28px] font-bold   uppercase leading-[33.60px]">
                                {t('DeleteAccountPermanently')}
                            </div>
                        </div>
                        <RectangularWarm />
                        <div className="w-[546px] text-center text-[#494949] text-[20px] font-normal   leading-relaxed">
                            {t('titleWarming')}
                        </div>
                    </div>
                    <div className="self-stretch h-[243px] flex-col justify-start items-start flex">
                        <div className="self-stretch justify-start items-start inline-flex">
                            <div className="grow shrink basis-0 w-[50%] self-stretch p-6 border-r border-b border-[#99d4cd] justify-center items-start gap-4 flex">
                                <RestoreCircle />
                                <div className="grow shrink basis-0 w-[90%]">
                                    <span className="text-[#494949] text-[16px] font-normal   leading-tight">
                                        <div className="w-[546px] text-center text-[#494949] text-[20px] font-normal   leading-relaxed"></div>{' '}
                                    </span>

                                    <span className="text-[#494949] text-[16px] font-bold   leading-tight">
                                        {t('action')}
                                    </span>
                                    <span className="text-[#494949] text-[16px] font-bold   leading-tight">
                                        {t('cannotRestore')}
                                    </span>
                                    <span className="text-[#494949] text-[16px] font-normal   leading-tight">
                                        . {t('afterDelete')}{' '}
                                    </span>
                                    <span className="text-[#494949] text-[16px] font-bold   leading-tight">
                                        {t('cannotRestoreView')}
                                    </span>
                                    <span className="text-[#494949] text-[16px] font-normal   leading-tight">
                                        {' '}
                                        {t('beforeDelete')}
                                    </span>
                                </div>
                            </div>
                            <div className="grow shrink basis-0 self-stretch p-6 border-l border-b border-[#99d4cd] justify-center items-start gap-4 flex">
                                <DeliveryTruck />
                                <div className="grow shrink basis-0">
                                    <span className="text-[#494949] text-[16px] font-normal   leading-tight">
                                        {t('shouldCheck')}
                                    </span>
                                    <span className="text-[#494949] text-[16px] font-bold   leading-tight">
                                        {' '}
                                        {t('orderOrWait')}
                                    </span>
                                    <span className="text-[#494949] text-[16px] font-normal   leading-tight">
                                        . {t('deleteCan')}{' '}
                                    </span>
                                    <span className="text-[#494949] text-[16px] font-bold   leading-tight">
                                        {t('effect')}
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="self-stretch justify-start items-start inline-flex">
                            <div className="grow shrink basis-0 self-stretch p-6 border-r border-t border-[#99d4cd] justify-center items-start gap-4 flex">
                                <CoinCircle />

                                <div className="grow shrink basis-0">
                                    <span className="text-[#494949] text-[16px] font-bold   leading-tight">
                                        {t('allGreencoin')}
                                    </span>
                                    <span className="text-[#494949] text-[16px] font-normal   leading-tight">
                                        {' '}
                                        {t('notUse')}{' '}
                                    </span>
                                    <span className="text-[#494949] text-[16px] font-bold   leading-tight">
                                        {t('enable')}{' '}
                                    </span>
                                </div>
                            </div>
                            <div className="grow shrink basis-0 self-stretch p-6 border-l border-t border-[#99d4cd] justify-center items-start gap-4 flex">
                                <BottomTornPaper />
                                <div className="grow shrink basis-0">
                                    <span className="text-[#494949] text-[16px] font-normal   leading-tight">
                                        {t('afterDeleteSucces')}{' '}
                                    </span>
                                    <span className="text-[#494949] text-[16px] font-bold   leading-tight">
                                        {t('stillSave')}
                                    </span>
                                    <span className="text-[#494949] text-[16px] font-normal   leading-tight">
                                        {' '}
                                        {t('infodelevery')}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="self-stretch h-11 flex-col justify-start items-center gap-4 flex">
                    <div className="self-stretch justify-center items-center gap-4 inline-flex">
                        <div
                            onClick={() => handlelTypeDisplay('')}
                            className="grow cursor-pointer shrink basis-0 h-11 px-6 py-8 bg-[#f0f0f0] rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] justify-center items-center gap-2 flex"
                        >
                            <div className="text-[#494949] text-[18px] font-medium  ">{t('cancle')}</div>
                        </div>
                        <div
                            onClick={() => handlelTypeDisplay('nhap-lai-mat-khau')}
                            className="grow cursor-pointer shrink basis-0 h-11 px-6 py-8 bg-[#ff4343] rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] justify-center items-center gap-2 flex overflow-hidden"
                        >
                            <div className="text-white text-[18px] font-bold  ">{t('DeleteAccount')}</div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default DeleteAccount;
