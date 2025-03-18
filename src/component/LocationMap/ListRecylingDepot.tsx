import React from 'react';
import { RecycleDepotListProps } from '~/Types/Map';

const RecycleDepotList: React.FC<RecycleDepotListProps> = ({
    listRecycleDepot,
    t,
    getLocationSelectedHandler,
    selectedDepot,
    setSelectedDepot,
    mapRef,
    markerRefs,
    IconLocationMap,
}) => {
    return (
        <div className="w-[33%] h-[20%] overflow-hidden">
            <h2 className="flex items-center font-roboto-condensed text-[#494949] flex-wrap text-[2rem] font-bold text-center pb-[5px] justify-center">
                {t('currentAvailable')}
                <div className="text-[#009383] font-roboto-condensed">{listRecycleDepot.length} Recycle Depot</div>
            </h2>
            <div className="flex flex-col max-h-[56rem] overflow-y-scroll transition-all duration-300 px-[24px]">
                {listRecycleDepot.map((depot) => (
                    <div
                        key={depot.id}
                        onClick={getLocationSelectedHandler({
                            id: depot.id,
                            coordinates: depot.coordinates,
                            mapRef,
                            markerRefs,
                            setSelectedDepot,
                        })}
                        className={`bg-[#fff] border-[2px] rounded-[1.2rem] cursor-pointer mt-[5%] mb-[4%] p-[10%] relative showdown-location-map
              ${selectedDepot === depot.id ? 'border-[#009383] bg-[#f4f9ff]' : 'border-transparent'}`}
                    >
                        <img
                            className="absolute h-[3.2rem] right-[0.8rem] top-[0.8rem] w-[3.2rem]"
                            src={IconLocationMap}
                            alt="location icon"
                        />
                        <div className="flex flex-col gap-[3px]">
                            <h4 className="text-[#373737] font-roboto-condensed text-[1.7rem] font-extrabold">
                                {depot.name}
                            </h4>
                            <h3 className="text-[2.3rem] font-roboto-condensed font-bold overflow-hidden text-[#009383]">
                                {depot.name}
                            </h3>
                            <div className="text-[#6d6d6d] font-roboto-condensed text-[1.4rem] font-bold overflow-hidden">
                                {depot.location}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecycleDepotList;
