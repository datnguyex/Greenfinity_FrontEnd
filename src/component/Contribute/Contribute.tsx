import React, { useRef, useState, useMemo } from 'react';
import classNames from 'classnames/bind';
import style from './Contribute.module.scss';
import './Contribute.css';
import Slider from 'react-slick';
import { ArrowLeft, ArrowRight, FrameAvatarRank, ScoreRankHome } from '~/assets/Icons';
import moment from 'moment';
import { addWeeks, format, differenceInCalendarWeeks } from 'date-fns';
import { RankNo1, RankNo2, RankNo3, ManRankAvatar, WomenRankAvatar, Headerleft, cornerTitle } from '~/assets/Images/';
import { Pagination } from 'antd';
const cx = classNames.bind(style);

function Contribute({ t }: { t: (key: string) => string }) {
    const CustomArrowNext = () => {
        return (
            <div
                style={{
                    background: '#FFFFFF',
                    color: 'red',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    cursor: 'pointer',
                    boxShadow: '2px 2px 10px 0px #006F6221',
                    zIndex: 10,
                    width: '50px',
                    height: '50px',
                    padding: '10px',
                    transform: 'translateY(8px)',
                }}
                onClick={handleNextClick}
            >
                <ArrowLeft />
            </div>
        );
    };
    const CustomArrowPrev = () => {
        return (
            <div
                style={{
                    background: '#FFFFFF',
                    borderRadius: '50%',
                    boxShadow: '2px 2px 10px 0px #006F6221',
                    cursor: 'pointer',
                    width: '50px',
                    height: '50px',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1,
                    padding: '10px',
                    transform: 'translateY(8px)',
                }}
                onClick={handlePrevClick}
            >
                <ArrowRight />
            </div>
        );
    };
    // Xử lý sự kiện khi nhấn Next
    const handleNextClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    };

    const handlePrevClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    };

    const sliderRef = useRef<Slider | null>(null);
    const weeks = useMemo(() => {
        const weeksArray = [];
        const startDate = new Date(2024, 0, 1);
        const currentDate = new Date();
        const totalWeeksInYear = differenceInCalendarWeeks(currentDate, startDate) + 1;

        for (let i = 1; i <= totalWeeksInYear; i++) {
            const weekStartDate = addWeeks(startDate, i - 1);
            weeksArray.push({
                weekNumber: i,
                date: format(weekStartDate, 'MM/yyyy'),
            });
        }
        return weeksArray;
    }, []);
    const settings = {
        infinite: false,
        speed: 800,
        slidesToShow: 5,
        slidesToScroll: 5,

        nextArrow: <CustomArrowNext />,
        prevArrow: <CustomArrowPrev />,
        initialSlide: weeks.length - 3,
    };
    const [timeActive, setTimeActive] = useState(weeks.length);
    const handleTimeActive = (index: any) => {
        setTimeActive(index);
    };
    // console.log('sliderRef', sliderRef);

    return (
        <>
            <div className="items-center flex gap-[40px] mx-[30px] mb-[60px]">
                {/* //con */}
                <div className="flex relative mx-auto mb-[40px] w-[65%] h-[74px] filter-home-title ">
                    <img className="w-[33.7396px] ml-[-1px] h-[100%]" src={Headerleft} alt="" />
                    <div
                        className="bg-[#fff] flex items-center flex-1
                    border-b-solid border-b-[5px] 
                    border-[#e0e0e0] justify-center relative
                    h-[100%]
                    w-[100%]
                    "
                    >
                        {/* <h2 className="text-4xl text-[#009383] leading-[43.20px] font-extrabold pt-[3px] overflow-hidden uppercase text-center">
                    Thang đóng góp
                </h2> */}
                        <img className="h-[100%] ml-[-1px] w-auto" src={cornerTitle} alt="" />
                        <h2
                            className="flex-1 items-center bg-[#33a99c] text-[#fff] 
                flex h-[100%] justify-center text-4xl text-center uppercase"
                        >
                            {t('weekContribute')}
                        </h2>
                        <img className="h-[100%] mr-[-1px] scale-x-[-1] w-auto" src={cornerTitle} alt="" />
                    </div>

                    <img className="mr-[-1px] h-[100%] w-[33.7396px] scale-x-[-1]" src={Headerleft} alt="" />
                </div>
                {/* //con */}
                <div className="flex relative mx-auto mb-[40px] w-[65%]  h-[74px] filter-home-title ">
                    <img className="w-[33.7396px] ml-[-1px] h-[100%]" src={Headerleft} alt="" />
                    <div
                        className="bg-[#fff] flex items-center flex-1
                    border-b-solid border-b-[5px] 
                    border-[#e0e0e0] justify-center relative
                    h-[100%]
                    w-[100%]
                    "
                    >
                        <h2 className="text-[#009383] text-4xl leading-[43.20px] font-extrabold pt-[3px] overflow-hidden uppercase text-center">
                            {t('cumulativeContribution')}
                        </h2>
                    </div>
                    <img className="mr-[-1px] h-[100%] w-[33.7396px] scale-x-[-1]" src={Headerleft} alt="" />
                </div>
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

                <div className="mb-[6rem] flex justify-center items-end relative mt-[50px]">
                    {/* no2 */}
                    <div className="w-[27.4%] h-[100%] relative ">
                        <div className="mb-[1.2rem] px-[1.2rem] relative] w-[100%] h-[80%]">
                            <img className="z-[2] block w-[100%] h-[80%] relative" src={RankNo2} alt="" />
                            <img
                                className="h-[50%] top-[50%] left-[50%] z-[0] translate-x-[-53%] rounded-[999px] translate-y-[-70%] w-[52%] absolute object-cover "
                                src={ManRankAvatar}
                                alt=""
                            />
                        </div>
                        <div className="text-[#556ce7]">
                            <h1 className="text-[25px] font-semibold mb-[6px] text-center break-words">
                                Thạch Đỗ Khôi Nguyên
                            </h1>
                            <h2 className="text-[21px] font-semibold mb-[6px] text-center break-words">96</h2>
                        </div>
                    </div>
                    {/* no1 */}
                    <div className="w-[30%] h-[100%] relative mx-[50px]">
                        <div className="mb-[1.2rem] relative] w-[100%] h-[100%]">
                            <img className="z-[2] block w-[100%] h-[80%] relative" src={RankNo1} alt="" />
                            <img
                                className="h-[50%] top-[50%] z-[0] translate-x-[-50%] rounded-[999px] translate-y-[-61%] left-[50%] w-[59%] absolute object-cover "
                                src={ManRankAvatar}
                                alt=""
                            />
                        </div>
                        <div className="text-[#ffb800]">
                            <h1 className="text-[25px] font-semibold mb-[6px] text-center break-words">My</h1>
                            <h2 className="text-[21px] font-semibold mb-[6px] text-center break-words">440</h2>
                        </div>
                    </div>
                    {/* no3 */}
                    <div className="w-[27.4%] h-[100%] relative ">
                        <div className="mb-[1.2rem] px-[1.2rem] relative] w-[100%] h-[80%]">
                            <img className="z-[2] block w-[100%] h-[80%] relative" src={RankNo3} alt="" />
                            <img
                                className="h-[60%] top-[50%] left-[50%] z-[0] translate-x-[-53%] rounded-[999px] translate-y-[-75%] w-[52%] absolute object-cover "
                                src={WomenRankAvatar}
                                alt=""
                            />
                        </div>

                        <div className="text-[#556ce7]">
                            <h1 className="text-[25px] font-semibold mb-[6px] text-center break-words">Ngọc Hà</h1>
                            <h2 className="text-[21px] font-semibold mb-[6px] text-center break-words">96</h2>
                        </div>
                    </div>
                </div>
                <div className="mb-[78px] ">
                    <div className="flex gap-[48px]">
                        {/* //list1 */}
                        <div className="flex flex-col gap-[2.4rem] w-[50%]">
                            {/* item */}
                            <div
                                className={`flex items-center bg-[#fff] text-[24px] font-[500] relative text-center leading-[120%] filter-rank-home
                             h-[60px] mx-[28px] ${cx('ranking-item')}`}
                            >
                                <div className="w-[10%] text-[24px] leading-[120%] text-center font-semibold text-[#009383]">
                                    1
                                </div>
                                <div className="overflow-hidden relative">
                                    <FrameAvatarRank />
                                    <div
                                        className="absolute z-[100] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-12 w-14"
                                        style={{
                                            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                                        }}
                                    >
                                        <img src={ManRankAvatar} alt="" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div className="flex-1 text-left flex items-center h-[60px] mx-[15px]">
                                    Lê Tuyết Anh
                                </div>
                                <div className="relative mr-[-28px]">
                                    <ScoreRankHome />
                                    <h3 className="text-[#fff] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                        350
                                    </h3>
                                </div>
                            </div>
                            <div
                                className={`flex items-center bg-[#fff] text-[24px] font-[500] relative text-center leading-[120%] filter-rank-home
                             h-[60px] mx-[28px] ${cx('ranking-item')}`}
                            >
                                <div className="w-[10%] text-[24px] leading-[120%] text-center font-semibold text-[#009383]">
                                    1
                                </div>
                                <div className="overflow-hidden relative">
                                    <FrameAvatarRank />
                                    <div
                                        className="absolute z-[100] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-12 w-14"
                                        style={{
                                            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                                        }}
                                    >
                                        <img src={ManRankAvatar} alt="" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div className="flex-1 text-left flex items-center h-[60px] mx-[15px]">
                                    Lê Tuyết Anh
                                </div>
                                <div className="relative mr-[-28px]">
                                    <ScoreRankHome />
                                    <h3 className="text-[#fff] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                        350
                                    </h3>
                                </div>
                            </div>
                            <div
                                className={`flex items-center bg-[#fff] text-[24px] font-[500] relative text-center leading-[120%] filter-rank-home
                             h-[60px] mx-[28px] ${cx('ranking-item')}`}
                            >
                                <div className="w-[10%] text-[24px] leading-[120%] text-center font-semibold text-[#009383]">
                                    1
                                </div>
                                <div className="overflow-hidden relative">
                                    <FrameAvatarRank />
                                    <div
                                        className="absolute z-[100] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-12 w-14"
                                        style={{
                                            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                                        }}
                                    >
                                        <img src={ManRankAvatar} alt="" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div className="flex-1 text-left flex items-center h-[60px] mx-[15px]">
                                    Lê Tuyết Anh
                                </div>
                                <div className="relative mr-[-28px]">
                                    <ScoreRankHome />
                                    <h3 className="text-[#fff] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                        350
                                    </h3>
                                </div>
                            </div>
                            <div
                                className={`flex items-center bg-[#fff] text-[24px] font-[500] relative text-center leading-[120%] filter-rank-home
                             h-[60px] mx-[28px] ${cx('ranking-item')}`}
                            >
                                <div className="w-[10%] text-[24px] leading-[120%] text-center font-semibold text-[#009383]">
                                    1
                                </div>
                                <div className="overflow-hidden relative">
                                    <FrameAvatarRank />
                                    <div
                                        className="absolute z-[100] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-12 w-14"
                                        style={{
                                            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                                        }}
                                    >
                                        <img src={ManRankAvatar} alt="" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div className="flex-1 text-left flex items-center h-[60px] mx-[15px]">
                                    Lê Tuyết Anh
                                </div>
                                <div className="relative mr-[-28px]">
                                    <ScoreRankHome />
                                    <h3 className="text-[#fff] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                        350
                                    </h3>
                                </div>
                            </div>
                            <div
                                className={`flex items-center bg-[#fff] text-[24px] font-[500] relative text-center leading-[120%] filter-rank-home
                             h-[60px] mx-[28px] ${cx('ranking-item')}`}
                            >
                                <div className="w-[10%] text-[24px] leading-[120%] text-center font-semibold text-[#009383]">
                                    1
                                </div>
                                <div className="overflow-hidden relative">
                                    <FrameAvatarRank />
                                    <div
                                        className="absolute z-[100] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-12 w-14"
                                        style={{
                                            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                                        }}
                                    >
                                        <img src={ManRankAvatar} alt="" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div className="flex-1 text-left flex items-center h-[60px] mx-[15px]">
                                    Lê Tuyết Anh
                                </div>
                                <div className="relative mr-[-28px]">
                                    <ScoreRankHome />
                                    <h3 className="text-[#fff] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                        350
                                    </h3>
                                </div>
                            </div>
                        </div>
                        {/*
                         */}
                        <div className="flex flex-col gap-[2.4rem] w-[50%]">
                            {/* item */}
                            <div
                                className={`flex items-center bg-[#fff] text-[24px] font-[500] relative text-center leading-[120%] filter-rank-home
                             h-[60px] mx-[28px] ${cx('ranking-item')}`}
                            >
                                <div className="w-[10%] text-[24px] leading-[120%] text-center font-semibold text-[#009383]">
                                    1
                                </div>
                                <div className="overflow-hidden relative">
                                    <FrameAvatarRank />
                                    <div
                                        className="absolute z-[100] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-12 w-14"
                                        style={{
                                            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                                        }}
                                    >
                                        <img src={ManRankAvatar} alt="" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div className="flex-1 text-left flex items-center h-[60px] mx-[15px]">
                                    Lê Tuyết Anh
                                </div>
                                <div className="relative mr-[-28px]">
                                    <ScoreRankHome />
                                    <h3 className="text-[#fff] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                        350
                                    </h3>
                                </div>
                            </div>
                            <div
                                className={`flex items-center bg-[#fff] text-[24px] font-[500] relative text-center leading-[120%] filter-rank-home
                             h-[60px] mx-[28px] ${cx('ranking-item')}`}
                            >
                                <div className="w-[10%] text-[24px] leading-[120%] text-center font-semibold text-[#009383]">
                                    1
                                </div>
                                <div className="overflow-hidden relative">
                                    <FrameAvatarRank />
                                    <div
                                        className="absolute z-[100] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-12 w-14"
                                        style={{
                                            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                                        }}
                                    >
                                        <img src={ManRankAvatar} alt="" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div className="flex-1 text-left flex items-center h-[60px] mx-[15px]">
                                    Lê Tuyết Anh
                                </div>
                                <div className="relative mr-[-28px]">
                                    <ScoreRankHome />
                                    <h3 className="text-[#fff] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                        350
                                    </h3>
                                </div>
                            </div>
                            <div
                                className={`flex items-center bg-[#fff] text-[24px] font-[500] relative text-center leading-[120%] filter-rank-home
                             h-[60px] mx-[28px] ${cx('ranking-item')}`}
                            >
                                <div className="w-[10%] text-[24px] leading-[120%] text-center font-semibold text-[#009383]">
                                    1
                                </div>
                                <div className="overflow-hidden relative">
                                    <FrameAvatarRank />
                                    <div
                                        className="absolute z-[100] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-12 w-14"
                                        style={{
                                            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                                        }}
                                    >
                                        <img src={ManRankAvatar} alt="" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div className="flex-1 text-left flex items-center h-[60px] mx-[15px]">
                                    Lê Tuyết Anh
                                </div>
                                <div className="relative mr-[-28px]">
                                    <ScoreRankHome />
                                    <h3 className="text-[#fff] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                        350
                                    </h3>
                                </div>
                            </div>
                            <div
                                className={`flex items-center bg-[#fff] text-[24px] font-[500] relative text-center leading-[120%] filter-rank-home
                             h-[60px] mx-[28px] ${cx('ranking-item')}`}
                            >
                                <div className="w-[10%] text-[24px] leading-[120%] text-center font-semibold text-[#009383]">
                                    1
                                </div>
                                <div className="overflow-hidden relative">
                                    <FrameAvatarRank />
                                    <div
                                        className="absolute z-[100] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-12 w-14"
                                        style={{
                                            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                                        }}
                                    >
                                        <img src={ManRankAvatar} alt="" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div className="flex-1 text-left flex items-center h-[60px] mx-[15px]">
                                    Lê Tuyết Anh
                                </div>
                                <div className="relative mr-[-28px]">
                                    <ScoreRankHome />
                                    <h3 className="text-[#fff] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                        350
                                    </h3>
                                </div>
                            </div>
                            <div
                                className={`flex items-center bg-[#fff] text-[24px] font-[500] relative text-center leading-[120%] filter-rank-home
                             h-[60px] mx-[28px] ${cx('ranking-item')}`}
                            >
                                <div className="w-[10%] text-[24px] leading-[120%] text-center font-semibold text-[#009383]">
                                    1
                                </div>
                                <div className="overflow-hidden relative">
                                    <FrameAvatarRank />
                                    <div
                                        className="absolute z-[100] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-12 w-14"
                                        style={{
                                            clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                                        }}
                                    >
                                        <img src={ManRankAvatar} alt="" className="w-full h-full object-cover" />
                                    </div>
                                </div>
                                <div className="flex-1 text-left flex items-center h-[60px] mx-[15px]">
                                    Lê Tuyết Anh
                                </div>
                                <div className="relative mr-[-28px]">
                                    <ScoreRankHome />
                                    <h3 className="text-[#fff] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                        350
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {/* <h1 className="text-center text-[#15bdd7] text-[2.6rem] font-semibold">
                        {t('pleaseLogin')}
                    </h1>
                    <button className="text-[#fff] mb-[120px] bg-[#15bdd7] flex justify-center items-center mx-auto font-bold border p-[1rem] border-[#fff] size-[1.8rem] gap-[0.8rem] min-h-[5.2rem] w-[16rem] rounded-[0.8rem] ">
                       {t('login')}
                    </button> */}
                    <div
                        className={`text-[#009383] flex text-[1.6rem] font-bold justify-center items-center w-[40%]
                        mx-auto relative border-t-2 border-b-2 border-[#009383] h-[4.4rem] ${cx('scoreBar')}`}
                    >
                        {t('weekContribute')}
                    </div>
                </div>
            </div>
            {/* //paginate */}
            <div className="mx-auto text-center mt-[40px]">
                <Pagination defaultCurrent={1} total={30} className="flex justify-center ant-paginate-contribute" />
            </div>
        </>
    );
}

export default Contribute;
