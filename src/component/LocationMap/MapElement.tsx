// MapComponent.tsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { PopupFrameMap } from '~/assets/Images';
import { MapComponentProps } from '~/Types/Map';

const MapComponent: React.FC<MapComponentProps> = ({
    listRecycleDepot,
    centerLocation,
    zoomLevel,
    customIcon,
    mapRef,
    markerRefs,
    getLocationSelectedHandler,
    setSelectedDepot,
}) => {
    return (
        <div className="rounded-[1.2rem] flex-[1] overflow-hidden relative min-h-[20%] z-[10] bg-gradient-to-t from-[#e8edf2] via-[rgba(0, 0, 0, .2)] to-[rgba(0, 0, 0, .2)]">
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
                                markerRefs.current[depot.id] = el;
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
                        <Popup>
                            <div className="mb-[20px] relative min-h-[170px] min-w-[300px]">
                                <img src={PopupFrameMap} alt="" />
                                <div className="absolute px-[23px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[100%]">
                                    <h2 className="font-bold font-roboto-condensed text-[20px] text-center uppercase text-[#009383]">
                                        {depot.name}
                                    </h2>
                                    <div className="text-center font-roboto-condensed text-[#6d6d6d] text-[16px] font-normal">
                                        {depot.location}
                                    </div>
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default MapComponent;
