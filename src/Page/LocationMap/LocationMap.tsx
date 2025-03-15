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
import MapComponent from '~/component/LocationMap/MapElement';

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
                className="bg-[#f2fffd]  py-[10vh] bg-no-repeat bg-[position:0_100%] bg-[size:10%_auto]"
                style={{
                    backgroundImage: `url(${leafHomeLeft}), url(${leafHomeRight})`,
                    backgroundPosition: '0 100%, 100% 100%',
                    backgroundSize: '10% auto, 10% auto',
                }}
            >
                <div className="my-[15vh]">
                    <div className="mx-auto max-w-[68%] px-[30px] w-[100%]">
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
                                <MapComponent
                                    listRecycleDepot={listRecycleDepot}
                                    centerLocation={centerLocation}
                                    zoomLevel={zoomLevel}
                                    customIcon={customIcon}
                                    mapRef={mapRef}
                                    markerRefs={markerRefs}
                                    getLocationSelectedHandler={getLocationSelectedHandler}
                                    setSelectedDepot={setSelectedDepot}
                                />

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
