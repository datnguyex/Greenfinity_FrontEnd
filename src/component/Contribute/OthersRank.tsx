import { FrameAvatarRank, ScoreRankHome } from '~/assets/Icons';
import { OthersRankProps } from '~/Types/Contribute';

function OthersRank({ list1, list2 }: OthersRankProps) {
    const halfLength = list1.length;

    return (
        <div className="flex gap-[3%]">
            {/* List 1 - first itemm */}
            <div className="flex flex-col gap-[2.4rem] w-[50%]">
                {list1.map((item, index) => (
                    <div
                        key={index}
                        className={`flex items-center bg-[#fff] text-[24px] font-[500] relative text-center leading-[120%] filter-rank-home
                    h-[20%] `}
                    >
                        <div className="w-[10%] text-[24px] leading-[120%] text-center font-semibold text-[#009383]">
                            {index + 1}
                        </div>
                        <div className="overflow-hidden relative">
                            <FrameAvatarRank />
                            <div
                                className="absolute z-[100] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-12 w-14"
                                style={{
                                    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                                }}
                            >
                                <img src={item.avatar} alt="Avatar" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="flex-1 text-left flex items-center mx-[15px]">{item.name}</div>
                        <div className="relative mr-[-28px]">
                            <ScoreRankHome />
                            <h3 className="text-[#fff] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                {item.score}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>

            {/* List 2 - others item*/}
            <div className="flex flex-col gap-[2.4rem] w-[50%]">
                {list2.map((item, index) => (
                    <div
                        key={index + halfLength}
                        className={`flex items-center bg-[#fff] text-[24px] font-[500] relative text-center leading-[120%] filter-rank-home
                            h-[20%] `}
                    >
                        <div className="w-[10%] text-[24px] leading-[120%] text-center font-semibold text-[#009383]">
                            {index + halfLength + 1}
                        </div>
                        <div className="overflow-hidden relative">
                            <FrameAvatarRank />
                            <div
                                className="absolute z-[100] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-12 w-14"
                                style={{
                                    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                                }}
                            >
                                <img src={item.avatar} alt="Avatar" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="flex-1 text-left flex items-center  mx-[15px]">{item.name}</div>
                        <div className="relative mr-[-28px]">
                            <ScoreRankHome />
                            <h3 className="text-[#fff] absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                                {item.score}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default OthersRank;
