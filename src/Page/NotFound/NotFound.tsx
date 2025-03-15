import { leafHomeLeft, leafHomeRight, Error404 } from '~/assets/Images/';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function NotFound() {
    const { t } = useTranslation(['notFound']);
    const languageState = useSelector((state: any) => state.language.language);
    const { i18n } = useTranslation();
    useEffect(() => {
        i18n.changeLanguage(languageState);
    }, [languageState]);

    return (
        <>
            <div
                className="bg-[#f2fffd] py-[56px] bg-no-repeat bg-[position:0_100%] bg-[size:10%_auto] h-[100vh]"
                style={{
                    backgroundImage: `url(${leafHomeLeft}), url(${leafHomeRight})`,
                    backgroundPosition: '0 100%, 100% 100%',
                    backgroundSize: '10% auto, 10% auto',
                }}
            >
                <div className="w-[100%] flex justify-center items-center gap-[4rem]">
                    {/* //item */}
                    <div className="flex items-start flex-col justify-center w-[30%]">
                        <h2 className="text-[64px] font-bold uppercase text-[#009383] mb-[15px]">404 ERROR</h2>
                        <div className="text-[#373737] text-[24px] font-medium">We couldn’t connect to this page.</div>
                        <div className="text-[#373737] text-[16px] font-normal text-start">
                            Looks like something is disconnected. The page you requested was not found, but there are
                            several ways to get you back on the right track. You can go back to the previous page , or
                            visit our home page.
                        </div>
                        <Link
                            to="/"
                            className="flex items-center bg-[#009383] border
                                     border-[#fff] text-[#fff] text-[1.8rem] gap-[0.8rem] min-h-[5.2rem]
                                        min-w-[20rem] justify-center whitespace-nowrap
                                        p-[1rem] w-[16rem] rounded-[0.8rem] mt-[20px]
                                     "
                        >
                            {t('backHome')}
                        </Link>
                    </div>
                    {/* //item */}
                    <div className="w-[40%]">
                        <img className="w-[100%] h-[100%] object-cover" src={Error404} alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default NotFound;
