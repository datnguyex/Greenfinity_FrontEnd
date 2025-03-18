import React, { useRef } from 'react';
import Slider from 'react-slick';
import { SliderWeeksContributeProps } from '~/Types/Slider';

function SliderWeeksContribute({
    weeks,
    timeActive,
    handleTimeActive,
    t,
    settings,
    sliderRef,
}: SliderWeeksContributeProps) {
    return (
        <>
            <Slider ref={sliderRef} {...settings} className="gap-[10px] w-full">
                {weeks.map((week, index) => (
                    <div key={index} className="inline-block">
                        <div
                            onClick={() => handleTimeActive(week.weekNumber)}
                            className={`font-roboto-condensed items-center flex justify-center border-solid border-[1px] border-[#009383]
                            text-[#009383] cursor-pointer text-[20px] font-semibold overflow-hidden
                            py-[22px] mx-[12px] transition-all ease-out duration-200 gap-[10px] rounded-[12px] px-[11px] ${
                                timeActive === week.weekNumber ? 'text-[#fff] bg-[#009383]' : ''
                            }`}
                        >
                            {t('week')} {week.weekNumber} - {week.date}
                        </div>
                    </div>
                ))}
            </Slider>
        </>
    );
}

export default SliderWeeksContribute;
