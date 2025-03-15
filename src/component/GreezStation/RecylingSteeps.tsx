import { TFunction } from 'i18next';
import { StepImg } from '~/assets/Arrays/RecyclingSteps';

function RecyclingSteps({ t }: any) {
    return (
        <>
            {/* //item */}
            <div className="w-[100%]">
                {StepImg.map((item) => (
                    <div
                        key={item.step}
                        className="flex justify-start w-[95rem] px-[20px] py-[40px] max-h-[24rem] mx-auto my-[32px] showdown-instruct-station rounded-[1.2rem] items-center bg-[#fff] gap-[1.5rem]"
                    >
                        <div className="w-[25%]">
                            <img className="object-cover w-[100%]" src={item.img} alt={`Step ${item.step}`} />
                        </div>
                        <div className="text-[#494949] flex items-start flex-col justify-center w-[70%] gap-[5px]">
                            <div className="text-[23px] font-bold">{t(item.textKey)}</div>
                            <div className="text-[22px] text-[#494949]">{t(item.descriptionKey)}</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default RecyclingSteps;
