import { Headerleft } from '~/assets/Images/';

// Định nghĩa kiểu cho props
interface TitleBarProps {
    title: string;
}

// Thêm kiểu cho props trong component
const TitleBar: React.FC<TitleBarProps> = ({ title }) => {
    return (
        <div className="flex relative mx-auto mb-[40px] w-[65%] h-[74px] filter-home-title">
            <img className="w-[33.7396px] ml-[-1px] h-[100%]" src={Headerleft} alt="Header left" />
            <div
                className="bg-[#fff] flex items-center flex-1
                        border-b-solid border-b-[5px] 
                        border-[#e0e0e0] justify-center relative
                        h-[100%]
                        w-[100%]"
            >
                <h2 className="text-[3rem] text-[#009383] leading-[43.20px] font-extrabold pt-[3px] overflow-hidden uppercase text-center">
                    {title}
                </h2>
            </div>
            <img className="mr-[-1px] h-[100%] w-[33.7396px] scale-x-[-1]" src={Headerleft} alt="Header right" />
        </div>
    );
};

export default TitleBar;
