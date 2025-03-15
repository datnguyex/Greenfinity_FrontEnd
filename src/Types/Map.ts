import { Icon } from 'leaflet';
import { LatLngTuple, Marker } from 'leaflet';
type Depot = {
    id: any;
    name: string;
    location: string;
    coordinates: any;
};

export interface MapComponentProps {
    listRecycleDepot: Depot[];
    centerLocation: [number, number];
    zoomLevel: number;
    customIcon: Icon | undefined;
    mapRef: React.RefObject<any>;
    markerRefs: React.MutableRefObject<Record<number, any>>;
    getLocationSelectedHandler: (args: {
        id: number;
        coordinates: [number, number];
        mapRef: React.RefObject<any>;
        markerRefs: React.MutableRefObject<Record<number, any>>;
        setSelectedDepot: React.Dispatch<React.SetStateAction<any>>;
    }) => void;
    setSelectedDepot: React.Dispatch<React.SetStateAction<any>>;
}
export interface RecycleDepotListProps {
    listRecycleDepot: Depot[];
    t: (key: string) => string; // Hàm dịch, có thể thay đổi kiểu này tùy vào thư viện bạn đang sử dụng
    getLocationSelectedHandler: (args: {
        id: any;
        coordinates: LatLngTuple;
        mapRef: React.RefObject<any>;
        markerRefs: React.RefObject<any>;
        setSelectedDepot: React.Dispatch<React.SetStateAction<any>>;
    }) => () => void;
    selectedDepot: string | null;
    setSelectedDepot: React.Dispatch<React.SetStateAction<string | null>>;
    mapRef: React.RefObject<any>; // Thay thế any nếu bạn có kiểu cụ thể cho mapRef
    markerRefs: React.MutableRefObject<{ [id: string]: Marker<any> }>;
    IconLocationMap: string; // Đường dẫn hoặc URL của icon
}
