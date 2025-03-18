import React, { useRef, useState } from 'react';
// import classNames from 'classnames/bind';
// import style from './Contribute.module.scss';
import './Contribute.css';
import Slider from 'react-slick';
import { ManRankAvatar } from '~/assets/Images/';
import { Pagination } from 'antd';
import { handleNextClick, handlePrevClick } from '../../component/Slider/HandleClick';
import { CustomArrowNext, CustomArrowPrev } from '../../component/Slider/CustomArrow';
import UseWeeksFromStart from '~/CustomHooks/UseWeeksFromStart';
import { ContributeArrowNext, ContributeArrowPrev } from '../../component/Slider/ArrowStyle/ContributeArrow';
import ThreeHighestRank from '~/component/Contribute/ThreeHighestRank';
import OthersRank from '~/component/Contribute/OthersRank';
import TitleBarTypeWhite from '~/component/TittleBar/TitleBarTypeWhite/TitleBarTypeWhite';
import TitleBarTypeGreen from '~/component/TittleBar/TitleBarTypeGreen/TitleBarTypeGreen';
import SliderWeeksContribute from '~/component/Slider/SliderCustom/SliderContribute/SliderWeekContribute';
// const cx = classNames.bind(style);

function Contribute({ t }: { t: (key: string) => string }) {
    //useRef slider
    const sliderRef = useRef<any>();

    //weeks from start
    const weeks = UseWeeksFromStart();

    //settings of slider
    const settings = {
        infinite: false,
        speed: 800,
        slidesToShow: 5,
        slidesToScroll: 5,
        nextArrow: (
            <CustomArrowNext elements={ContributeArrowNext} handleNextClick={handleNextClick} sliderRef={sliderRef} />
        ),
        prevArrow: (
            <CustomArrowPrev elements={ContributeArrowPrev} handlePrevClick={handlePrevClick} sliderRef={sliderRef} />
        ),
        initialSlide: weeks.length - 3,
    };

    //state of time active
    const [timeActive, setTimeActive] = useState(weeks.length);

    //handle time active function
    const handleTimeActive = (index: any) => {
        setTimeActive(index);
    };

    //array and handle ranking for testing
    const rankings = Array(10).fill({
        rank: 1,
        name: 'Lê Tuyết Anh',
        score: 350,
        avatar: ManRankAvatar,
    });
    const halfLength = Math.ceil(rankings.length / 2);
    const list1 = rankings.slice(0, halfLength);
    const list2 = rankings.slice(halfLength);

    return (
        <>
            <div className="items-center flex gap-[40px] mx-[30px] mb-[60px]">
                {/* //child1 */}
                <TitleBarTypeGreen t={t} />
                {/* //child2 */}
                <TitleBarTypeWhite title={t('weekContribute')} />
            </div>
            <div className="contribute-time-slider w-[95%] mx-auto">
                <SliderWeeksContribute
                    sliderRef={sliderRef}
                    handleTimeActive={handleTimeActive}
                    weeks={weeks}
                    timeActive={timeActive}
                    t={t}
                    settings={settings}
                />
                {/* //highest rank */}
                <ThreeHighestRank />
                {/* //others rank */}
                <OthersRank list1={list1} list2={list2} />
                {/* //login for watching the ranking */}
                {/* <RequireLogin t={t} cx={cx} /> */}
            </div>
            {/* //paginate */}
            <div className="mx-auto text-center mt-[7%]">
                <Pagination
                    defaultCurrent={1}
                    total={30}
                    className="flex justify-center ant-paginate-contribute font-roboto-condensed"
                />
            </div>
        </>
    );
}

export default Contribute;
