import { CloseXBlack, RectangularWarm } from '~/component/Icon';

type AddressFormProps = {
    handlelTypeDisplay: (value: string) => void;
    t: (key: string) => string;
};
function AccountDeleteInfo({ handlelTypeDisplay, t }: AddressFormProps) {
    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 z-[100] "></div>
            <div className="w-[588px] h-[520px] fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] bg-white rounded-xl  overflow-hidden z-[100]">
                <div className="h-[427px] left-[24px] top-[47px] absolute flex-col justify-center items-center gap-2 inline-flex">
                    <RectangularWarm />
                    <div className="self-stretch h-[293px] flex-col justify-center items-center gap-6 flex">
                        <div className="self-stretch h-[225px] flex-col justify-start items-center gap-2 flex">
                            <div className="text-center text-[#ff4343] text-[24px] font-bold font-['Roboto']">
                                {t('DeleteAccount')}
                            </div>
                            <div className="self-stretch">
                                <span className="text-[#494949] text-[17px] font-normal font-['Roboto'] leading-tight">
                                    - {t('action')}{' '}
                                </span>
                                <span className="text-[#494949] text-[17px] font-bold font-['Roboto'] leading-tight">
                                    {t('cannotRestore')}
                                </span>
                                <span className="text-[#494949] text-[17px] font-normal font-['Roboto'] leading-tight">
                                    .
                                    <br />-{' '}
                                </span>
                                <span className="text-[#494949] text-[17px] font-bold font-['Roboto'] leading-tight">
                                    {t('allGreencoin')}
                                </span>
                                <span className="text-[#494949] text-[17px] font-normal font-['Roboto'] leading-tight">
                                    {' '}
                                    {t('notUse')}{' '}
                                </span>
                                <span className="text-[#494949] text-[17px] font-bold font-['Roboto'] leading-tight">
                                    {t('enable')} <br />
                                </span>
                                <span className="text-[#494949] text-[17px] font-normal font-['Roboto'] leading-tight">
                                    - {t('shouldCheck')}{' '}
                                </span>
                                <span className="text-[#494949] text-[17px] font-bold font-['Roboto'] leading-tight">
                                    {t('orderOrWait')}
                                </span>
                                <span className="text-[#494949] text-[17px] font-normal font-['Roboto'] leading-tight">
                                    . {t('deleteCan')}{' '}
                                </span>
                                <span className="text-[#494949] text-[17px] font-bold font-['Roboto'] leading-tight">
                                    {t('effect')}.{' '}
                                </span>
                                <span className="text-[#494949] text-[17px] font-normal font-['Roboto'] leading-tight">
                                    <br />- {t('afterDeleteSucces')}{' '}
                                </span>
                                <span className="text-[#494949] text-[17px] font-bold font-['Roboto'] leading-tight">
                                    {t('stillSave')}
                                </span>
                                <span className="text-[#494949] text-[17px] font-normal font-['Roboto'] leading-tight">
                                    {' '}
                                    {t('infodelevery')}
                                    <br />- {t('afterDelete')}{' '}
                                </span>
                                <span className="text-[#494949] text-[17px] font-bold font-['Roboto'] leading-tight">
                                    {t('cannotRestoreView')}
                                </span>
                                <span className="text-[#494949] text-[17px] font-normal font-['Roboto'] leading-tight">
                                    {' '}
                                    {t('beforeDelete')}.
                                </span>
                            </div>
                        </div>
                        <div className="w-[260px] justify-center items-center gap-4 inline-flex">
                            <div
                                onClick={() => handlelTypeDisplay('')}
                                className="grow shrink basis-0 h-11 px-6 py-7 cursor-pointer mt-[10px] bg-[#f0f0f0] rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] justify-center items-center gap-2 flex"
                            >
                                <div className="text-[#494949] text-[18px] font-medium font-['Roboto']">
                                    {' '}
                                    {t('cancle')}.
                                </div>
                            </div>
                            <div className="grow shrink basis-0 h-11 px-6 py-7 cursor-pointer mt-[10px] bg-[#ff4343] rounded-lg shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] justify-center items-center gap-2 flex overflow-hidden">
                                <div className="text-white text-[18px] font-bold font-['Roboto']"> {t('confirm')}.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    onClick={() => handlelTypeDisplay('')}
                    className="cursor-pointer pl-[5px] pr-[4.99px] pt-[4.99px] pb-[5.01px] left-[552px] top-[12px] absolute justify-center items-center inline-flex"
                >
                    <CloseXBlack />
                </div>
            </div>
        </>
    );
}

export default AccountDeleteInfo;
