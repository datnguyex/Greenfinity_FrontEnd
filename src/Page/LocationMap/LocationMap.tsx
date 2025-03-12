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
import { listRecycleDepot } from '~/assets/Arrays/Locations';
import { LanguageSwitcher } from '~/CustomHooks/LanguageSwitcher';
import getLocationSelectedHandler from '~/CustomHooks/GetLocationSelectedHandler';
import RecycleDepotList from '~/component/LocationMap/ListRecylingDepot';

function LocationMap() {
    // Map ref
    const mapRef = useRef<Map | null>(null);

    //market ref
    const markerRefs = useRef<{ [id: string]: L.Marker }>({});

    //coordinates default
    const centerLocation: [number, number] = [14.0583, 108.2772];

    //zoom default
    const zoomLevel = 5;

    //custome icon on map
    const customIcon = new Icon({
        iconUrl: MakerGreenMap,
        iconSize: [40, 60],
    });

    // Language
    const { t } = useTranslation(['Map']);
    LanguageSwitcher();

    //selected depot state
    const [selectedDepot, setSelectedDepot] = useState<string | null>(null);

    // Handle location selection

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
                                                        getLocationSelectedHandler({
                                                            id: depot.id,
                                                            coordinates: depot.coordinates,
                                                            mapRef,
                                                            markerRefs,
                                                            setSelectedDepot,
                                                        });
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
                                <RecycleDepotList
                                    listRecycleDepot={listRecycleDepot}
                                    t={t}
                                    getLocationSelectedHandler={getLocationSelectedHandler}
                                    selectedDepot={selectedDepot}
                                    setSelectedDepot={setSelectedDepot}
                                    mapRef={mapRef}
                                    markerRefs={markerRefs}
                                    IconLocationMap={IconLocationMap}
                                />
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
