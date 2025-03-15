import { getLocationSelectedHandlerProps } from '~/Types/CustomHook';

const getLocationSelectedHandler = ({
    id,
    coordinates,
    mapRef,
    markerRefs,
    setSelectedDepot,
}: getLocationSelectedHandlerProps) => {
    const handleSelectedDepot = () => {
        if (mapRef.current) {
            const map = mapRef.current;

            // Fly to the depot
            map.flyTo(coordinates, 14, {
                duration: 1.5,
                easeLinearity: 0.25,
            });

            // Open the popup of the selected marker
            const marker = markerRefs.current[id];
            if (marker) {
                marker.openPopup();
            }

            // Set the selected depot
            setSelectedDepot(id);
        }
    };

    return handleSelectedDepot; // Return the function
};

export default getLocationSelectedHandler;
