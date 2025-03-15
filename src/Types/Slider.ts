import Slider from 'react-slick';
//for customArrow slider
export interface CustomArrowProps {
    elements: any;
    handleNextClick?: (sliderRef: React.RefObject<Slider>) => void;
    handlePrevClick?: (sliderRef: React.RefObject<Slider>) => void;
    sliderRef: React.RefObject<Slider>;
}
