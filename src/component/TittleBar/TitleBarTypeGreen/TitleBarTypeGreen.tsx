import { cornerTitle, Headerleft } from '~/assets/Images';

function TitleBarTypeGreen({ t }: { t: (key: string) => string }) {
    return (
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
                    className="flex-1 items-center bg-[#33a99c] text-[#fff] font-roboto-condensed
                         flex h-[100%] justify-center text-4xl text-center uppercase"
                >
                    {t('weekContribute')}
                </h2>
                <img className="h-[100%] mr-[-1px] scale-x-[-1] w-auto" src={cornerTitle} alt="" />
            </div>

            <img className="mr-[-1px] h-[100%] w-[33.7396px] scale-x-[-1]" src={Headerleft} alt="" />
        </div>
    );
}

export default TitleBarTypeGreen;
