import { LatLngTuple } from 'leaflet';

interface getLocationSelectedHandlerProps {
    id: any;
    coordinates: LatLngTuple;
    mapRef: React.RefObject<any>;
    markerRefs: React.RefObject<any>;
    setSelectedDepot: React.Dispatch<React.SetStateAction<any>>;
}

// This is no longer a React component, it's just a regular function
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
