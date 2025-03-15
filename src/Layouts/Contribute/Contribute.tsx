import React, { useRef, useState, useMemo } from 'react';
import classNames from 'classnames/bind';
import style from './Contribute.module.scss';
import './Contribute.css';
import Slider from 'react-slick';
import { ManRankAvatar, Headerleft, cornerTitle } from '~/assets/Images/';
import { Pagination } from 'antd';
import { handleNextClick, handlePrevClick } from '../../component/Slider/HandleClick';
import { CustomArrowNext, CustomArrowPrev } from '../../component/Slider/CustomArrow';
import UseWeeksFromStart from '~/CustomHooks/UseWeeksFromStart';
import { ContributeArrowNext, ContributeArrowPrev } from '../../component/Slider/ArrowStyle/ContributeArrow';
import ThreeHighestRank from '~/component/Contribute/ThreeHighestRank';
import OthersRank from '~/component/Contribute/OthersRank';
import RequireLogin from '~/component/RequireLogin/RequireLogin';
import TitleBarTypeWhite from '~/component/TittleBar/TitleBarTypeWhite/TitleBarTypeWhite';
import TitleBarTypeGreen from '~/component/TittleBar/TitleBarTypeGreen/TitleBarTypeGreen';

const cx = classNames.bind(style);

function Contribute({ t }: { t: (key: string) => string }) {
    //useRef slider
    const sliderRef = useRef<Slider | null>(null);

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
            <div className="contribute-time-slider">
                <Slider ref={sliderRef} {...settings} className="gap-[10px] w-full">
                    {weeks.map((week, index) => (
                        <div key={index} className="inline-block">
                            <div
                                onClick={() => handleTimeActive(week.weekNumber)}
                                className={`items-center flex justify-center border-solid border-[1px] border-[#009383]
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
                {/* //highest rank */}
                <ThreeHighestRank />
                {/* //others rank */}
                <OthersRank list1={list1} list2={list2} />
                {/* //login for watching the ranking */}
                {/* <RequireLogin t={t} cx={cx} /> */}
            </div>
            {/* //paginate */}
            <div className="mx-auto text-center mt-[40px]">
                <Pagination defaultCurrent={1} total={30} className="flex justify-center ant-paginate-contribute" />
            </div>
        </>
    );
}

export default Contribute;
