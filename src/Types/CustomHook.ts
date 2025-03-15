import { LatLngTuple } from 'leaflet';

//for getLocationSelectedHandler customhook
export interface getLocationSelectedHandlerProps {
    id: any;
    coordinates: LatLngTuple;
    mapRef: React.RefObject<any>;
    markerRefs: React.RefObject<any>;
    setSelectedDepot: React.Dispatch<React.SetStateAction<any>>;
}
