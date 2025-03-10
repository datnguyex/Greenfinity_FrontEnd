import { leafHomeLeft, leafHomeRight, IconLocationMap } from '~/assets/Images/';
import Header from '~/Layouts/Header/Header';
import Footer from '~/Layouts/Footer/Footer';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import * as React from 'react';
import { useState } from 'react';
import 'leaflet/dist/leaflet.css';
import './LocationMap.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { LatLngExpression, Icon, LatLngTuple, Map } from 'leaflet';
import { MakerGreenMap, PopupFrameMap } from '~/assets/Images/';
import { useRef } from 'react';

function LocationMap() {
    const listRecycleDepot = [
        {
            id: 1,
            name: 'Cao Ốc Ngô Gia Tự',
            location: 'Cao Ốc A - 301 Hoà Hảo, Phường 02, 10, Hồ Chí Minh',
            coordinates: [10.8231, 106.6297] as LatLngTuple, // ép kiểu rõ ràng
        },
        {
            id: 2,
            name: 'HCM.lotte Quận 7',
            location: '469 Nguyễn Hữu Thọ, Tân Hưng, 7, Hồ Chí Minh',
            coordinates: [10.7377, 106.7115] as LatLngTuple, // ép kiểu rõ ràng
        },
        {
            id: 3,
            name: 'AEon Bình Dương',
            location:
                ' Số 01 Đại lộ Bình Dương, Khu phố Bình Giao, Phường Thuận Giao, Thành phố Thuận An, Tỉnh Bình Dương, Thuận Giao, Thuận An, Bình Dương',
            coordinates: [10.9334, 106.5821] as LatLngTuple, // ép kiểu rõ ràng
        },
        {
            id: 4,
            name: 'Lotte Tân Bình',
            location: '20 Đường Cộng Hòa, Phường 12, Tân Bình, Hồ Chí Minh',
            coordinates: [10.8044, 106.6223] as LatLngTuple, // ép kiểu rõ ràng
        },
        {
            id: 5,
            name: 'Lotte Gò Vấp',
            location: '242 Nguyễn Văn Lượng, Phường 10, Gò Vấp, Hồ Chí Minh',
            coordinates: [10.8417, 106.6824] as LatLngTuple, // ép kiểu rõ ràng
        },
        {
            id: 6,
            name: 'Sheraton Cần Thơ',
            location: '209 Đường 30/4, Xuân Khánh, Ninh Kiều, Cần Thơ',
            coordinates: [10.0458, 105.7469] as LatLngTuple, // ép kiểu rõ ràng
        },
        {
            id: 7,
            name: 'CoopMart Sai Gon Tower',
            location: '131, Điện Biên Phủ, Phường 15, Bình Thạnh, Hồ Chí Minh',
            coordinates: [10.7747, 106.6946] as LatLngTuple, // ép kiểu rõ ràng
        },
        {
            id: 8,
            name: 'Event ngày hội Xanh- CV Lê Thị Riêng',
            location: '542 Cách Mạng Tháng Tám, Phường 11, 3, Hồ Chí Minh',
            coordinates: [10.7806, 106.6874] as LatLngTuple, // ép kiểu rõ ràng
        },
        {
            id: 9,
            name: 'Vincom Bắc Từ Liêm',
            location: '234 Phạm Văn Đồng, Cổ Nhuế 1, Bắc Từ Liêm, Hà Nội',
            coordinates: [21.0431, 105.7696] as LatLngTuple, // ép kiểu rõ ràng
        },
        {
            id: 10,
            name: 'Vincom SmartCity',
            location: 'KĐT Vinhomes Smart City, Đại Mỗ, Nam Từ Liêm, Hà Nội',
            coordinates: [21.0178, 105.7654] as LatLngTuple, // ép kiểu rõ ràng
        },
        {
            id: 11,
            name: 'MegaMarket Bình Phú',
            location: 'Bình Phú, Phường 11, 6, Hồ Chí Minh',
            coordinates: [10.7482, 106.6609] as LatLngTuple,
        },
    ];

    // Map State
    const mapRef = useRef<Map | null>(null);
    const markerRefs = useRef<{ [id: string]: L.Marker }>({});

    const centerLocation: [number, number] = [14.0583, 108.2772];
    const zoomLevel = 5;

    const customIcon = new Icon({
        iconUrl: MakerGreenMap,
        iconSize: [40, 60],
    });

    // Language
    const languageState = useSelector((state: any) => state.language.language);
    const { i18n } = useTranslation();
    const { t } = useTranslation(['Map']);
    const [selectedDepot, setSelectedDepot] = useState(null);

    // Handle location selection
    const handleSelectedDepot = (id: any, coordinates: LatLngTuple) => {
        if (mapRef.current) {
            const map = mapRef.current;

            map.flyTo(coordinates, 14, {
                duration: 1.5,
                easeLinearity: 0.25,
            });

            const marker = markerRefs.current[id];
            if (marker) {
                marker.openPopup();
            }

            setSelectedDepot(id);
        }
    };
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
                        <div className="text-[1.6rem] gap-[15px] flex flex-col">
                            <div className="text-[6.4rem] font-bold text-center uppercase text-[#009383]">
                                {t('titleMap')}
                            </div>
                            <div
                                className="flex items-center mx-auto justify-center bg-[#15bdd7] rounded-[0.8rem] text-[#fff] font-bold
                                h-[6.8rem] text-center uppercase w-[70%] px-[24px] mb-[33px] text-[4rem]"
                            >
                                {t('titleLocation')}
                            </div>
                        </div>
                        <div className="h-[56rem] min-h-[56rem] mb-[12rem] mx-auto">
                            <div className="bg-[#fff] border-[2px] border-[#009383] rounded-[2.4rem] flex justify-between pt-[24px] pb-[24px] pl-[24px] showdown-map">
                                <div className="rounded-[1.2rem]  flex-[1] overflow-hidden relative min-h-[56rem] z-[10] bg-gradient-to-t from-[#e8edf2] via-[rgba(0, 0, 0, .2)] to-[rgba(0, 0, 0, .2)]">
                                    <MapContainer
                                        ref={mapRef}
                                        center={centerLocation}
                                        zoom={zoomLevel}
                                        style={{ width: '100%', height: '100%' }}
                                    >
                                        <TileLayer
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        />
                                        {/* Thêm các Marker vào bản đồ */}
                                        {listRecycleDepot.map((depot) => (
                                            <Marker
                                                key={depot.id}
                                                position={depot.coordinates}
                                                icon={customIcon}
                                                ref={(el) => {
                                                    if (el) {
                                                        markerRefs.current[depot.id] = el; // Lưu Marker vào ref
                                                    }
                                                }}
                                                eventHandlers={{
                                                    click: (e) => {
                                                        handleSelectedDepot(depot.id, depot.coordinates); // Gọi hàm của bạn
                                                    },
                                                }}
                                            >
                                                {/* Popup vẫn có thể có mặt, nhưng không tự động bật lên khi click */}
                                                <Popup>
                                                    <div className="mb-[20px] relative min-h-[170px] min-w-[300px]">
                                                        <img src={PopupFrameMap} alt="" />
                                                        <div className="absolute px-[23px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100%]">
                                                            <h2 className="font-bold text-[20px] text-center uppercase text-[#009383]">
                                                                {depot.name}
                                                            </h2>
                                                            <div className="text-center text-[#6d6d6d] text-[16px] font-normal">
                                                                {depot.location}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Popup>
                                            </Marker>
                                        ))}
                                    </MapContainer>
                                </div>

                                {/* List of Depots */}
                                <div className="w-[33%] h-[56rem] overflow-hidden">
                                    <h2 className="flex items-center text-[#494949] flex-wrap text-[2rem] font-bold text-center px-[24px] pb-[5px] justify-center">
                                        {t('currentAvailable')}
                                        <div className="text-[#009383]">{listRecycleDepot.length} Recycle Depot</div>
                                    </h2>
                                    <div className="flex flex-col max-h-[56rem] overflow-y-scroll transition-all duration-300 px-[24px]">
                                        {listRecycleDepot.map((depot) => (
                                            <div
                                                key={depot.id}
                                                onClick={() => handleSelectedDepot(depot.id, depot.coordinates)}
                                                className={`bg-[#fff] border-[2px] rounded-[1.2rem] cursor-pointer mt-[16px] mb-[10px] p-[24px] relative showdown-location-map
                                                 ${
                                                     selectedDepot === depot.id
                                                         ? 'border-[#009383] bg-[#f4f9ff]'
                                                         : 'border-transparent'
                                                 }`}
                                            >
                                                <img
                                                    className="absolute h-[3.2rem] right-[0.8rem] top-[0.8rem] w-[3.2rem]"
                                                    src={IconLocationMap}
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

export default LocationMap;
