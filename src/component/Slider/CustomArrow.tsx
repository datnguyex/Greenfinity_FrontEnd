import React from 'react';
import { ArrowLeft, ArrowRight } from './../../assets/Icons/Icon';
import { CustomArrowProps } from '~/Types/Slider';

export const CustomArrowNext: React.FC<CustomArrowProps> = ({ elements, handleNextClick, sliderRef }) => {
    console.log('sliderRef', sliderRef);
    return (
        <div style={elements} onClick={() => handleNextClick?.(sliderRef)}>
            <ArrowLeft />
        </div>
    );
};

export const CustomArrowPrev: React.FC<CustomArrowProps> = ({ elements, handlePrevClick, sliderRef }) => {
    return (
        <div style={elements} onClick={() => handlePrevClick?.(sliderRef)}>
            <ArrowRight />
        </div>
    );
};
