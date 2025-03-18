import { Headerleft } from '~/assets/Images/';
import { TitleBarTypeWhiteProps } from '~/Types/TitleBar';

const TitleBarTypeWhite: React.FC<TitleBarTypeWhiteProps> = ({ title, color = '#009383', bg = '#fff' }) => {
    return (
        <div className="flex relative mx-auto mb-[5vh] w-[65%] h-[74px]">
            <img className="w-[33.7396px] ml-[-1px] h-[100%]" src={Headerleft} alt="Header left" />

            <div
                className="flex items-center flex-1 border-b-solid border-b-[5px] border-[#e0e0e0] justify-center relative h-[100%]"
                style={{ backgroundColor: bg }}
            >
                <h2
                    className="font-roboto-condensed text-[3rem] leading-[43.20px] font-extrabold pt-[3px] overflow-hidden uppercase text-center"
                    style={{ color }}
                >
                    {title}
                </h2>
            </div>

            {/* Right header image */}
            <img className="mr-[-1px] h-[100%] w-[33.7396px] scale-x-[-1]" src={Headerleft} alt="Header right" />
        </div>
    );
};

export default TitleBarTypeWhite;
