import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { UserGreen, ArrowLeftBlack, ArrowLeftRed, ArrowLeftWhite, CartWhite, LogoutRed } from '~/component/Icon/Icon';

import { CartGreen, UserWhite } from '~/component/Icon/Icon';

function UserMenu(pathName: any) {
    const { t } = useTranslation(['UserMenu']);
    const languageState = useSelector((state: any) => state.language.language);
    const { i18n } = useTranslation();

    useEffect(() => {
        i18n.changeLanguage(languageState);
    }, [languageState]);
    return (
        <div className="w-[342px] h-[230px] p-4 bg-white rounded-xl shadow-[0px_2px_19.700000762939453px_0px_rgba(0,0,0,0.07)] border border-[#009383] flex-col justify-center items-start gap-3 inline-flex overflow-hidden">
            <Link
                to={'/trang-ca-nhan'}
                className={`self-stretch cursor-pointer h-12 px-4 py-7 rounded-lg border justify-between items-center inline-flex 
                 ${pathName.pathName === 'trang-ca-nhan' ? 'bg-[#009383]' : 'bg-[#f6f6f6]'}`}
            >
                <div className="justify-start items-center gap-2 flex">
                    <div className="w-[35px]">
                        {pathName.pathName == 'trang-ca-nhan' ? <UserWhite /> : <UserGreen />}
                    </div>
                    <div
                        className={`text-[18px] font-semibold ${
                            pathName.pathName == 'trang-ca-nhan' ? 'text-white ' : 'text-[#505050]'
                        }`}
                    >
                        {t('personalInformation')}
                    </div>
                </div>
                {pathName.pathName == 'trang-ca-nhan' ? <ArrowLeftWhite /> : <ArrowLeftBlack />}
            </Link>
            <Link
                to={'/don-hang?type=1'}
                className={`self-stretch cursor-pointer h-12 px-4 py-7 rounded-lg border justify-between items-center inline-flex 
                 ${pathName.pathName === 'don-hang' ? 'bg-[#009383]' : 'bg-[#f6f6f6]'}`}
            >
                <div className="justify-start items-center gap-2 flex">
                    <div className="w-[35px]">{pathName.pathName == 'don-hang' ? <CartWhite /> : <CartGreen />}</div>
                    <div
                        className={`text-[18px] font-semibold ${
                            pathName.pathName == 'don-hang' ? 'text-white ' : 'text-[#505050]'
                        }`}
                    >
                        {t('MyOrder')}
                    </div>
                </div>
                {pathName.pathName == 'don-hang' ? <ArrowLeftWhite /> : <ArrowLeftBlack />}
            </Link>
            <Link
                to={'/san-pham-cua-ban'}
                className={`self-stretch cursor-pointer h-12 px-4 py-7 rounded-lg border justify-between items-center inline-flex 
                 ${pathName.pathName === 'san-pham-cua-ban' ? 'bg-[#009383]' : 'bg-[#f6f6f6]'}`}
            >
                <div className="justify-start items-center gap-2 flex">
                    <div className="w-[35px]">
                        {pathName.pathName == 'san-pham-cua-ban' ? <UserWhite /> : <UserGreen />}
                    </div>
                    <div
                        className={`text-[18px] font-semibold ${
                            pathName.pathName == 'san-pham-cua-ban' ? 'text-white ' : 'text-[#505050]'
                        }`}
                    >
                        {t('MyProduct')}
                    </div>
                </div>
                {pathName.pathName == 'san-pham-cua-ban' ? <ArrowLeftWhite /> : <ArrowLeftBlack />}
            </Link>
            <div className="self-stretch cursor-pointer h-12 px-4 py-7 rounded-lg border border-[#ff4343] justify-between items-center inline-flex">
                <div className="justify-start items-center gap-2.5 flex">
                    <div className="w-[35px]">
                        <LogoutRed />
                    </div>

                    <div className="text-[#ff4343] text-[18px] font-semibold ">{t('Signout')}</div>
                </div>
                <ArrowLeftRed />
            </div>
        </div>
    );
}

export default UserMenu;
