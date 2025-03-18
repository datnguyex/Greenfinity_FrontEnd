import React, { useRef } from 'react';
import Slider from 'react-slick';
export const handleNextClick = (sliderRef: React.RefObject<Slider>): void => {
    console.log('sliderRef', sliderRef);
    if (sliderRef.current) {
        sliderRef.current.slickNext();
    }
};

export const handlePrevClick = (sliderRef: React.RefObject<Slider>): void => {
    if (sliderRef.current) {
        sliderRef.current.slickPrev();
    }
};
