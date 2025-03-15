import { ManRankAvatar, RankNo1, RankNo2, RankNo3, WomenRankAvatar } from '~/assets/Images';

function ThreeHighestRank() {
    return (
        <div className="mb-[6rem] flex justify-center items-end relative mt-[5%]">
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
                    <h1 className="text-[25px] font-semibold mb-[6px] text-center break-words">Thạch Đỗ Khôi Nguyên</h1>
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
    );
}

export default ThreeHighestRank;
