import { leafHomeLeft, leafHomeRight, IconLocationMap } from '~/Images';
import Header from '~/component/Layout/Header/Header';
import Footer from '~/component/Layout/Footer/Footer';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
function Map() {
    const languageState = useSelector((state: any) => state.language.language);
    const { i18n } = useTranslation();
    const { t } = useTranslation(['Map']);
    const [selectedDepot, setSelectedDepot] = useState(null);
    function truncateLocation(location: string) {
        let truncated = location.slice(0, 50);

        if (truncated.length < location.length) {
            const lastSpaceIndex = truncated.lastIndexOf(' ');
            truncated = truncated.slice(0, lastSpaceIndex);
        }

        return truncated;
    }
    console.log(selectedDepot);
    const handleSelectedDepot = (id: any) => {
        setSelectedDepot(id);
    };
    const listRecycleDepot = [
        {
            id: 1,
            name: 'Cao Ốc Ngô Gia Tự',
            location: 'Cao Ốc A - 301 Hoà Hảo, Phường 02, 10, Hồ Chí Minh',
        },
        {
            id: 2,
            name: 'HCM.lotte Quận 7',
            location: '469 Nguyễn Hữu Thọ, Tân Hưng, 7, Hồ Chí Minh',
        },
        {
            id: 3,
            name: 'AEon Bình Dương',
            location:
                ' Số 01 Đại lộ Bình Dương, Khu phố Bình Giao, Phường Thuận Giao, Thành phố Thuận An, Tỉnh Bình Dương, Thuận Giao, Thuận An, Bình Dương',
        },
        {
            id: 4,
            name: 'Lotte Tân Bình',
            location: '20 Đường Cộng Hòa, Phường 12, Tân Bình, Hồ Chí Minh',
        },

        {
            id: 5,
            name: 'Lotte Gò Vấp',
            location: '242 Nguyễn Văn Lượng, Phường 10, Gò Vấp, Hồ Chí Minh',
        },
        {
            id: 6,
            name: 'Sheraton Cần Thơ',
            location: '209 Đường 30/4, Xuân Khánh, Ninh Kiều, Cần Thơ',
        },
        {
            id: 7,
            name: 'CoopMart Sai Gon Tower',
            location: '131, Điện Biên Phủ, Phường 15, Bình Thạnh, Hồ Chí Minh',
        },
        {
            id: 8,
            name: 'Event ngày hội Xanh- CV Lê Thị Riêng',
            location: '542 Cách Mạng Tháng Tám, Phường 11, 3, Hồ Chí Minh',
        },
        {
            id: 9,
            name: 'Vincom Bắc Từ Liêm',
            location: '234 Phạm Văn Đồng, Cổ Nhuế 1, Bắc Từ Liêm, Hà Nội',
        },
        {
            id: 10,
            name: 'Vincom SmartCity',
            location: 'KĐT Vinhomes Smart City, Đại Mỗ, Nam Từ Liêm, Hà Nội',
        },
        {
            id: 11,
            name: 'MegaMarket Bình Phú',
            location: 'Bình Phú, Phường 11, 6, Hồ Chí Minh',
        },
    ];
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
                <div className="py-[140px]">
                    <div className="mx-auto max-w-[132.7rem] px-[30px] w-[100%]">
                        {/* //item */}
                        <div className="text-[1.6rem] gap-[15px] flex flex-col">
                            <div className="text-[6.4rem] font-bold text-center uppercase text-[#009383]">
                                {t('titleMap')}
                            </div>
                            <div
                                className="flex items-center mx-auto justify-center bg-[#15bdd7] rounded-[0.8rem] text-[#fff] font-bold
                                h-[6.8rem] text-center uppercase w-[70%] px-[24px] mb-[33px] text-[4rem]
                            "
                            >
                                {t('titleLocation')}
                            </div>
                        </div>
                        {/* //item */}
                        <div className="h-[56rem] min-h-[56rem] mb-[12rem] mx-auto">
                            <div
                                className="bg-[#fff] border-[2px] border-[#009383] rounded-[2.4rem] flex justify-between
                                pt-[24px] pb-[24px] pl-[24px] showdown-map
                            "
                            >
                                {/* childitem */}
                                <div
                                    className="rounded-[1.2rem] flex-[1] overflow-hidden relative min-h-[56rem] bg-gradient-to-t 
                                from-[#e8edf2] via-[rgba(0, 0, 0, .2)] to-[rgba(0, 0, 0, .2)]"
                                ></div>

                                {/* childitem */}
                                <div className="w-[33%] h-[56rem] overflow-hidden">
                                    <h2
                                        className="flex items-center text-[#494949] flex-wrap text-[2rem]
                                    font-bold text-center px-[24px] pb-[5px] justify-center"
                                    >
                                        {t('currentAvailable')}
                                        <span className="opacity-0">.</span>
                                        <div className="text-[#009383]">{listRecycleDepot.length} Recycle Depot</div>
                                    </h2>
                                    {/* childitem */}
                                    <div className="flex flex-col max-h-[56rem] overflow-y-scroll transition-all duration-300 px-[24px]">
                                        {listRecycleDepot.map((depot) => (
                                            <div
                                                key={depot.id}
                                                onClick={() => handleSelectedDepot(depot.id)}
                                                className={`bg-[#fff] border-[2px] rounded-[1.2rem] cursor-pointer mt-[16px] mb-[10px] p-[24px] relative showdown-location-map 
                                                 ${
                                                     selectedDepot === depot.id
                                                         ? 'border-[#009383] bg-[#f4f9ff]'
                                                         : 'border-transparent'
                                                 }`}
                                            >
                                                <img
                                                    className="absolute h-[3.2rem] right-[0.8rem] top-[0.8rem] w-[3.2rem]"
                                                    src={IconLocationMap} // Đảm bảo bạn đã import IconLocationMap
                                                    alt="location icon"
                                                />
                                                <div className="flex flex-col gap-[3px]">
                                                    <h4 className="text-[#373737] text-[1.7rem] font-extrabold">
                                                        {depot.name}
                                                    </h4>
                                                    <h3 className="text-[2.3rem] font-bold overflow-hidden text-[#009383]">
                                                        {depot.name}
                                                    </h3>
                                                    <div className="text-[#6d6d6d] text-[1.4rem] font-bold overflow-hidden">
                                                        {depot.location}
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Map;
