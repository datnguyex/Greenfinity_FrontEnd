import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { ArrowTopWhite } from '~/assets/Icons/Icon';
import Footer from '~/Layouts/Footer/Footer';
import Header from '~/Layouts/Header/Header';
import ProductMenu from '~/component/Menu/ProductMenu/ProductMenu';
import TitleBarTypeWhite from '~/component/TittleBar/TitleBarTypeWhite/TitleBarTypeWhite';
import { Dragon1, Dragon2, Dragon3, Dragon4, Dragon5, Headerleft, leafHomeLeft, leafHomeRight } from '~/assets/Images/';

function Collection() {
    const images = [Dragon1, Dragon2, Dragon3, Dragon4, Dragon5];
    const groups = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const [visibleProducts, setVisibleProducts] = useState(3);
    const loadMore = () => {
        setVisibleProducts((prevVisibleProducts) => prevVisibleProducts + 3);
    };
    const loadLess = () => {
        setVisibleProducts(3);
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    const { t } = useTranslation(['Collection']);
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
                    <div className="px-[30px] mx-auto max-w-[150.7rem] w-[100%] relative">
                        <div className="flex flex-col">
                            <TitleBarTypeWhite title={t('newProduct')} />
                        </div>
                        <div className="flex justify-center items-start gap-[40px]">
                            {/* left menu */}
                            <ProductMenu />
                            {/* collection right */}

                            <div>
                                {groups.slice(0, visibleProducts).map((group, groupIndex) => (
                                    <div
                                        key={groupIndex} // key duy nhất cho mỗi nhóm
                                        className="w-[1074px] h-[369px] relative bg-white rounded-[20px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.15)] mb-6"
                                    >
                                        <div className="left-[434px] top-[30px] absolute text-[#009383] text-[32px] font-bold font-['Roboto'] capitalize leading-[41.60px]">
                                            Long Sinh Cửu Tử
                                        </div>
                                        <div className="left-[20px] top-[91px] absolute justify-start items-start gap-4 inline-flex">
                                            {images.map((image, index) => (
                                                <div
                                                    key={index} // key duy nhất cho mỗi phần tử
                                                    className="w-[194px] h-[258px] relative bg-white rounded-[20px] shadow-[0px_0px_5px_0px_rgba(0,0,0,0.15)] border-2 overflow-hidden"
                                                >
                                                    <img src={image} alt={`Dragon ${index + 1}`} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                                {visibleProducts < groups.length ? (
                                    <button
                                        onClick={loadMore}
                                        className="mx-auto justify-center flex items-center w-[190px] h-12 px-6 py-7 bg-white rounded-[10px] 
                    shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] border border-[#009383] text-[#009383] text-[16px] font-bold
                    my-[50px]"
                                    >
                                        {t('SeeMore')}
                                    </button>
                                ) : (
                                    <button
                                        onClick={loadLess}
                                        className="mx-auto justify-center flex items-center w-[190px] h-12 px-6 py-7 bg-white rounded-[10px] 
                    shadow-[0px_0px_6px_0px_rgba(231,233,242,1.00)] border border-[#009383] text-[#009383] text-[16px] font-bold
                    my-[50px]"
                                    >
                                        {t('Collapse')}
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                    <a
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToTop();
                        }}
                        className="w-[70px] h-[70px] absolute right-[70px] p-[6.25px] bg-white cursor-pointer rounded-[110px] shadow-[0px_0px_8px_0px_rgba(0,36,32,0.32)] justify-center items-center inline-flex"
                    >
                        <div className="w-[57.50px] h-[57.50px] relative bg-[#009383] rounded-[73px] shadow-[0px_0px_2px_0px_rgba(0,58,52,0.64)] flex-col justify-start items-start flex">
                            <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                <ArrowTopWhite />
                            </div>
                        </div>
                    </a>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Collection;
