import Slider from 'react-slick';
//for customArrow slider
export interface CustomArrowProps {
    elements: any;
    handleNextClick?: (sliderRef: React.RefObject<Slider>) => void;
    handlePrevClick?: (sliderRef: React.RefObject<Slider>) => void;
    sliderRef: React.RefObject<Slider>;
}
export interface Week {
    weekNumber: number;
    date: string;
}
//for sliderWeeksContribute component
export interface SliderWeeksContributeProps {
    sliderRef: any;
    weeks: Week[];
    timeActive: number;
    handleTimeActive: (weekNumber: number) => void;
    t: (key: string) => string;
    settings: object;
}
